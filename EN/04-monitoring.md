# Monitoring Configuration and Usage Guide

> Monitoring is a core AgentSec feature. Once started, AgentSec continuously watches the directories you specify, automatically detects new or modified scripts, and triggers security analysis.

---

## What Is “Monitoring”?

AgentSec monitoring includes the following automated operations:

1. **Discover scripts**: Scan all RPA scripts in the specified directories
2. **Watch in real time**: Automatically trigger analysis when a file is created or modified in a monitored directory
3. **Perform security checks**: Run rules first, then AI review according to your configuration
4. **Handle risks**: Isolate according to the rule and enforcement policy, or display findings for your review

---

## How to Choose Monitoring Directories

### Add Directories in Settings

1. Select **Settings** at the bottom of the sidebar
2. Select **Security** on the Settings page
3. Click **“Select Directory”**
4. **Multiple directories can be monitored simultaneously**: Add more than one folder path

> ![Pending: Watch Directory in current Security settings](./screenshots/pending.svg)

### Use Auto-Detection

AgentSec automatically detects RPA tools installed on your computer and lists their default project directories in the suggestions area:

> ![Pending: currently detected RPA directory suggestions](./screenshots/pending.svg)

| Tool That May Be Detected | Default Directory |
| --- | --- |
| UiPath | `Documents\UiPath` |
| Power Automate Desktop | `Documents\Power Automate Desktop` |
| Automation Anywhere | `Documents\Automation Anywhere Files` |

> 💡 Click a suggested directory to fill it in automatically, without browsing for it manually.

### Directory Selection Guidelines

| ✅ Recommended | ❌ Not Recommended |
| --- | --- |
| A directory dedicated to RPA projects | The root of the C: drive |
| A folder where scripts are stored together | System directories such as Windows or Program Files |
| A subdirectory for a specific project | A directory containing many non-script files |

---

## Start or Stop Monitoring

### Start Monitoring

1. Confirm that the **“Monitoring Directories”** are configured correctly
2. Turn on the **“Monitoring”** switch

> ![Pending: current sidebar monitoring switch off and on](./screenshots/pending.svg)

After monitoring starts, AgentSec scans existing files, watches new or modified scripts, and updates results in real time. With the default enforcement policy, blocking rule matches are quarantined automatically. AI recommendations to block require you to select **Quarantine** in Threat Center.

### Stop Monitoring

- Turn off the **“Monitoring”** switch
- After monitoring stops:
  - New files are no longer watched
  - Analyses already in progress continue to completion
  - Existing analysis results remain visible in the interface

---

## What Happens During Monitoring?

AgentSec performs basic filtering and rule scanning first. Rule matches show findings and recommended actions. Scripts without a match continue to AI review when enabled. To add model review to an existing rule result, select **Deep AI review** in the script details.

### Check 1: Basic Filtering

Before analysis, AgentSec excludes the following files:

- Temporary files (names beginning with `~$` or `.`, or with the `.tmp` / `.swp` extension)
- Unsupported script types
- Files that have been added to the allowlist (trusted list) and whose contents have not changed

### Check 2: Regex Pre-Scan (Milliseconds)

AgentSec scans with the active ruleset. Its rule count changes with policy and ruleset updates. Typical checks include:

| Category | Example |
| --- | --- |
| System destruction | `rm -rf /`, formatting the C: drive |
| Ransomware | Deleting shadow copies, disabling system recovery |
| Malicious code execution | Downloading and immediately executing code from the network, encoded PowerShell bypasses |
| Credential theft | Mimikatz, dumping the lsass process |
| Hardcoded secrets | AWS keys, GitHub tokens, SSH private keys |

> Rule matches may recommend blocking or only a warning. For example, hardcoded credentials can produce a warning. Check the rule action and actual disposition to see whether a file was quarantined.

### Check 3: In-Depth AI Analysis

Scripts without rule matches use the effective model configuration when AI review is enabled. Signed-in mode uses the organization's model service; local mode uses your configured model endpoint. Duration depends on the model, script, and network.

When AI is disabled, the client shows a rules-only result. Incomplete AI review is marked as incomplete or degraded. Check which engines actually participated; a clean rule scan does not mean AI review completed.

---

## Monitoring Scope

AgentSec recursively monitors the directories you select, up to 10 subdirectory levels, but automatically skips the following directories:

- `node_modules`, `__pycache__`, `.venv` — Dependency and cache directories
- `.git`, `.svn` — Version-control directories
- `.idea`, `.vscode` — IDE configuration directories
- `$RECYCLE.BIN`, `System Volume Information` — System directories
- `.agentsec_quarantine` — AgentSec's own quarantine directory

---

## How Large Directories Are Handled

When scanning starts, AgentSec uses a two-stage process:

| Stage | Processing |
| --- | --- |
| Rule scanning | Quickly checks scripts and handles matches according to the rule action and enforcement policy |
| AI review | When enabled, reviews scripts that need further analysis and updates results as they finish |

Rule scanning and AI review have separate progress indicators. AI may still be running after rule progress finishes; check both the file entries and AI progress.

---

## File Status Reference

After analysis, a script file has one of the following states according to the result:

| Status | Label | Meaning | File Permissions |
| --- | --- | --- | --- |
| Quarantined | `Quarantined` (red label) | Determined to require blocking and moved to quarantine | Original path replaced with a safe stub |
| Under remediation | `Remediating` | A quarantined copy is being edited and checked | The original path still contains a safe stub |
| Awaiting review | Risk level and **Quarantine** action | AI recommends isolation, awaiting your confirmation | File remains unchanged |
| Not quarantined | No quarantine label | Isolation has not been performed; review risk and engine status | Warnings do not make the file read-only |

> A file can have risks without being quarantined. Review its risk level, detection source, and actual disposition separately.

---

## Change Monitoring Directories

To change the monitoring directories:

1. If monitoring is running, **stop monitoring first**
2. Change directories under **Settings → Security → Watch Directory**; you can also select the status ball at the top of the sidebar to open directory settings
3. Turn the **“Monitoring”** switch on again
4. AgentSec performs a new full scan of the new directories

---

## FAQ

**Q: Why are some scripts analyzed quickly while others take longer?**  
A: Rule scanning is usually fast. AI review also waits for a model response; duration varies with script size, model, and network.

**Q: Does monitoring affect system performance?**  
A: File watching uses operating-system events. Batch scanning and AI review use some resources; performance depends on directory size, model, and hardware.

**Q: Does monitoring continue after I close the application?**  
A: No. AgentSec must remain running to monitor files. It is recommended that you configure AgentSec to start automatically when the computer starts.
