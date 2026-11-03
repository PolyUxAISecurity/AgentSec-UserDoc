# Key Concepts Explained

## Three Usage Scenarios

| Scenario | What is checked | Where to view it |
| --- | --- | --- |
| **Script monitoring** | New and modified RPA scripts in monitored folders | Threat Center → Script threats |
| **Agent runtime protection** | Supported tool calls from connected Agents | Agent Monitor; Threat Center → Agent live events |
| **Dify workflow audit** | A retrieved or imported workflow snapshot | Rule Lab; Threat Center → Dify workflows |

Dify audits identify potential risks in a snapshot. They do not execute the workflow or directly stop Dify Cloud runs. DeepIntent Agent's built-in runtime connection records activity and audits completed tool calls. External Agent protection depends on its connector and supported coverage.

## Monitoring and Analysis

### Watch Directory

Folders containing scripts you want AgentSec to check. You can add several folders. With monitoring enabled, new or changed files trigger checks, subject to excluded folders, supported file types, and trust status.

### Rules Engine

Matches known risk patterns locally. It always runs and needs no AI model. Update rule packages from Console or import an offline package supplied by an administrator.

### AI Assessment

Optional analysis that interprets script or workflow intent and explains risks. Results show which engines ran and whether they completed. Rule scanning still works when AI is disabled or no model is configured.

### Risk Level and Score

Levels include **Critical**, **High**, **Medium**, and **Low**. Scores are generally shown on a 0–100 scale; higher values deserve earlier review. Read the specific findings, evidence, and coverage alongside the score. A score is not a guarantee of business safety.

### Findings and Actual Actions

A **block recommendation** is an analysis finding. **Quarantined** or a runtime **Blocked** action indicates an action actually taken. Review these separately.

The default script disposition automatically handles high-risk deterministic rule decisions, while AI-only block recommendations require human confirmation. When confirmation is pending, review the evidence before choosing whether to quarantine the file.

## Script Disposition

### Quarantine and Safe Stub

Quarantine stores the original script in a sibling `.agentsec_quarantine` directory and places a safe stub at its original path. The stub explains the quarantine and replaces the original business script. Manage quarantined files under **Threat Center → Security Sandbox**.

### Trust List

After confirming a script is safe, use the interface to trust or restore it. AgentSec identifies the trusted version by its content fingerprint; changed contents need another check.

### Remediation Area

Edit a copy of a quarantined file and check the updated contents. The user confirms restoration after review. See [Security Sandbox](06-sandbox.md).

### Content Vault

Stores script content snapshots for review and reanalysis. Reanalyzing a saved snapshot does not retrieve new contents from an external system. After remediating a Dify workflow, retrieve or import the new version.

## Run Modes and Models

| Mode | Meaning |
| --- | --- |
| **Community** | Connect to AgentSec cloud and use the model service provided by your organization |
| **On-Premise** | Connect to an enterprise AgentSec service as directed by its administrator |
| **Local** | No AgentSec sign-in; rules run on this computer and AI uses your own local or remote model |

Local mode means the client does not require AgentSec sign-in. It does not make a configured remote model local. OpenAI and other remote model services receive AI requests; inference runs on this computer when you use a local model such as Ollama.

## Agents and the Assistant

### DeepIntent Agent

The built-in AI security assistant can explain results, call tools, and work on script copies in its workspace. Text-only replies do not count as tool-call events.

### Workspace

A managed folder that the assistant's file tools can access. Import scripts under **Settings → Security → DeepIntent Agent workspace**. The assistant works on imported copies; monitored directories do not expand its file access.

### External Agent Connections

Deploy supported connectors under **Settings → Security → Agent directory detection**, then restart running external Agents. Protection records apply to supported calls from connected Agents.

### Tool Call

An assistant action such as querying status, checking configuration, or operating on a workspace file. Tool cards in the conversation show calls and their results so you can check what happened. Export logs manually from the client interface.

## Policies and Records

### Security Policies and Marketplace

Policies define checks, severity, and recommended actions. Use **AgentSec Engine™ → Engine** to view modules and configuration, and **Marketplace** to choose policies for your business. Organization-managed settings may be controlled by an administrator.

### Threat Center

Brings together the **Script threats, Agent live events, Dify workflows, History, Notifications, and Security Sandbox**. Each result type keeps its own checked object and disposition status.

### Agent ID and Sign-In Identity

An Agent ID identifies a device. Signing in joins the client to an organization. View account and organization information under **Settings → Account**.

### Log Export

Saves analysis records, runtime logs, and conversations in a ZIP for archiving or support. Analysis record exports remove the script source field. Dify audits have a separate redacted-report export action.
