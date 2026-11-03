# 03 — First Security Analysis: Three UiPath Workflow Cases

> This page uses three UiPath XAML workflows to demonstrate the complete process, from starting monitoring and viewing analysis results to handling risky files.

---

## Scenario Setup

Assume that your monitoring directory, `C:\Users\Documents\UiPath`, contains three scripts:

| File | Purpose | Main Security Characteristics |
| --- | --- | --- |
| `Call_LLM_API.xaml` | Calls an LLM to generate a ticket summary, then posts the result to Slack | Stores an API key and Slack token directly in the workflow |
| `Call_LLM_Secure.xaml` | A secure rewrite of `Call_LLM_API.xaml` | Reads credentials from Orchestrator Assets and includes exception handling and secure logging |
| `Cleanup_TempFiles.xaml` | Calls PowerShell to clean up files | Executes a forced recursive deletion command against the root of the system drive |

> The keys, tokens, API endpoints, and channel IDs in these examples are demonstration values, not real credentials.

To follow this chapter hands-on, download the companion [UiPath sample package](https://github.com/PolyUxAISecurity/AgentSec-UserDoc/raw/main/Demo/agentsec-uipath-demo.zip). After unzipping it, place the `Demo` folder in a test directory and set that directory as the monitored directory in AgentSec.

The package contains three workflows: `Call_LLM_API.xaml`, `Call_LLM_Secure.xaml`, and `Cleanup_TempFiles.xaml`. The following phases explain their analysis results and handling flow step by step.

After configuring directories, enable the **Monitoring** switch at the top of the sidebar, or open **Settings → Security → Monitoring**.

---

## Phase 1: Scan and Discovery

After monitoring starts, AgentSec scans `C:\Users\Documents\UiPath`, discovers the three `.xaml` files, and creates analysis tasks for them one by one. Once scanning finishes, the dashboard updates the script count and initial analysis results.

**What you see:**
> ![Screenshot pending: rule and AI progress after the first scan](./screenshots/pending.svg)

---

## Phase 2: Security Checks

Each script starts with a rule scan. Matches show their rule source and recommended action. Scripts without a match continue to AI review when enabled, or receive a rules-only result. Rule scanning and AI review have separate progress indicators.

### Check 1: Fast Regex Scan

Use these three scripts to inspect the risks below. Matched rules, issue counts, and severity depend on your active policy and the current client result:

| Script | Regex Result | Action |
| --- | --- | --- |
| `Call_LLM_API.xaml` | Check hardcoded credentials and external requests | Read findings and recommended actions |
| `Call_LLM_Secure.xaml` | Check credential retrieval and request handling | Review any remaining findings |
| `Cleanup_TempFiles.xaml` | Check recursive deletion of a system directory | A blocking rule follows the enforcement policy |

With the default enforcement policy, blocking rule matches are quarantined automatically. An AI recommendation to block requires you to select **Quarantine** in Threat Center. Review risk level and quarantine status separately.

After `Cleanup_TempFiles.xaml` is quarantined:

- Original file → `.agentsec_quarantine\Cleanup_TempFiles_20260609T093000Z.xaml`
- Original path → A safe stub replaces the original script logic

### Check 2: In-Depth AI Analysis

Scripts without rule matches call the configured model when AI review is enabled. To request model review for a script that already has a rule result, select **Deep AI review** in its details.

**Analysis process for Call_LLM_API.xaml** (signed-in mode):

```
AgentSec rule scan → Call the AI model according to your configuration
  ↓
Checks (based on your enabled security policy rules):
  · Does it send data externally? (network request check)
  · Does it contain hardcoded passwords? (credential check)
  · Does it use plaintext HTTP? (transport security check)
  · Does it include exception handling? (code quality check)
  · Is there a risk of SQL injection? (injection check)
  ... (coverage depends on the current policy and enabled analysis engines)
  ↓
Return analysis results
```

---

## Phase 3: View Results

After analysis is complete, click **“Threat Center”** in the left navigation bar, then select a file from the script list to view its details.
> ![Screenshot pending: detection source, risk, and disposition for the three scripts](./screenshots/pending.svg)

| File | What to check |
| --- | --- |
| `Call_LLM_API.xaml` | Credential and external-request findings, detection source, recommended action, and disposition |
| `Call_LLM_Secure.xaml` | Remaining findings and whether AI review completed |
| `Cleanup_TempFiles.xaml` | Rule evidence for the deletion command and quarantine status |

These represent three typical outcomes:

- **Safe**: No security issues were found, and the file can continue to be used;
- **High**: High-risk issues require remediation or manual review;
- **Critical**: An operation may cause severe damage and should be handled first.

The counts and levels in screenshots are examples. Use your current result and check **Detected by** together with disposition labels such as **Quarantined** or **Remediating**.

> The analysis details page also provides actions such as **Trust**, **Re-analyze**, and **Ask AI**. Use **Trust** only after confirming that the file is safe.

---

## Phase 4: Interpret Each Result

### Script 1: `Call_LLM_API.xaml` — Inspect Credential Risks

#### What the Workflow Does

This workflow first builds a ticket-summary request and calls an LLM through an HTTP endpoint. It then builds a Slack message and posts the response through another HTTP request.

#### AgentSec's Assessment

Inspect the plaintext API key, Slack token, and password-like fields in the XAML, and how they enter external requests. A hardcoded-credential finding does not by itself mean the file is quarantined. Follow the report's recommendation and disposition.

**Recommended action:** Remove plaintext credentials, rotate the exposed keys, and use UiPath Orchestrator Assets or another secrets-management service instead.

> ![Screenshot pending: current findings for Call_LLM_API.xaml](./screenshots/pending.svg)

---

### Script 2: `Call_LLM_Secure.xaml` — Review the Remediation

#### How It Differs from the High-Risk Version

The secure version still performs the same business process—calling an LLM to generate a summary and posting it to Slack—but uses a safer implementation:

| Improvement | XAML Implementation |
| --- | --- |
| Does not store plaintext credentials | Uses `GetRobotAsset` to retrieve `LLM_Gateway_ApiKey` and `Slack_Bot_Token` |
| Supplies tokens at runtime | HTTP requests use the `OAuthToken` variable instead of hardcoding the token in request headers |
| Restricts request behavior | Enables TLS, sets timeouts, and configures a limited number of retries |
| Checks response status | Explicitly throws an exception for non-2xx HTTP status codes |
| Handles runtime exceptions | Wraps the LLM and Slack calls in `TryCatch` |
| Reduces sensitive data in logs | Records only metadata such as success status, HTTP status, elapsed time, and response length |

#### AgentSec's Assessment

This workflow performs the same LLM and Slack calls, but retrieves credentials from Orchestrator Assets and includes exception handling, HTTP status checks, and secure logging. Review the current report to check whether those changes resolve the findings. A rules-only result does not mean AI review completed.

> ![Screenshot pending: current findings and participating engines for Call_LLM_Secure.xaml](./screenshots/pending.svg)

---

### Script 3: `Cleanup_TempFiles.xaml` — Inspect the Dangerous Deletion

This workflow is nominally intended to clean up temporary files, but its PowerShell activity actually executes:

```powershell
Remove-Item -Recurse -Force -Path C:\
```

This command attempts forced recursive deletion from the system-drive root. Check the matched rule and disposition; with the default enforcement policy, a blocking rule match is quarantined automatically.

**Recommended action:** Do not trust or restore the file directly. Change the deletion target to an explicit, controlled temporary directory, validate the path before execution, and use `-WhatIf` for a dry run.

> ![Screenshot pending: rule evidence and quarantine state for Cleanup_TempFiles.xaml](./screenshots/pending.svg)

---

## Phase 5: Handle and Remediate

| File | Primary Action |
| --- | --- |
| `Call_LLM_API.xaml` | Rotate the exposed credentials, remove plaintext keys, and follow the secure version by using Orchestrator Assets |
| `Call_LLM_Secure.xaml` | Review the report, then test API permissions and business logic through the normal workflow |
| `Cleanup_TempFiles.xaml` | Remove the recursive system-drive deletion command and use a validated, explicit target directory |

For a quarantined file, open **Threat Center → Security Sandbox**, select **Remediate**, then **Edit** to modify its quarantined copy. Save your changes and select **Recheck**. When the check no longer recommends isolation, review the result and select **Trust and move to safe zone** to restore the original location. For a file that is not quarantined, save changes and select **Re-analyze**.

> Edit quarantined copies through the Sandbox's **Edit** action. Do not modify the safe stub at the original location or quarantine metadata.

---

## Summary: What You Learned from the First Analysis

| Lesson | Description |
| --- | --- |
| AgentSec scanning is **automatic** | After monitoring starts, the entire process is automatic and requires no manual trigger |
| Checks run in stages | Rules run first, with AI enabled according to your configuration; check the participating engines in the result |
| Quarantined copies can be remediated and restored | Recheck the retained copy, then trust and restore it after confirming it is safe |
| Review three things in the details | Risk level, code snippet, and remediation suggestions |
| Review risk and disposition separately | Check rule or AI findings, recommended actions, and actual quarantine status together |

---

## Next Steps

- [Configure and manage monitoring directories](04-monitoring.md)
- [View complete analysis details in the Threat Center](05-security-log.md)
- [Manage the quarantine and security zones](06-sandbox.md)
- [Configure security policies](07-security-policy.md)
- [Use the AI Assistant to explain and remediate issues](08-ai-assistant.md)
