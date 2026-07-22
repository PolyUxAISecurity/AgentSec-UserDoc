# Monitoring Configuration & Usage Guide

> Monitoring is AgentSec's core feature. Once started, AgentSec continuously watches your specified directories, auto-detecting new or modified scripts and triggering security analysis.

---

## What is "Monitoring"?

AgentSec's monitoring includes these automatic operations:

1. **Discover scripts**: Scan all RPA scripts in specified directories
2. **Real-time watch**: Auto-trigger analysis when files are created or modified
3. **Security check**: Each script goes through "Regex fast scan" → "AI deep analysis"
4. **Auto-response**: Automatically block, warn, or allow based on analysis results

---

## How to Choose Monitoring Directories

### Set from Dashboard

1. Click the monitoring directory card at the top of the dashboard
2. Auto-jumps to "Settings → General" page
3. Click "Select Directory" button
4. **Multiple directories can be monitored simultaneously** — add multiple folder paths

### Use Auto-Detection

AgentSec auto-detects installed RPA tools on your computer and shows suggestions:

| Possible Detected Tools | Default Directory |
|------------------------|-------------------|
| UiPath | `Documents\UiPath` |
| Power Automate Desktop | `Documents\Power Automate Desktop` |
| Automation Anywhere | `Documents\Automation Anywhere Files` |

> 💡 Click a suggested directory to auto-fill — no need to manually navigate.

### Directory Selection Principles

| ✅ Recommended | ❌ Not Recommended |
|---------------|-------------------|
| RPA project-specific directories | C: drive root |
| Folders with centralized scripts | System directories (Windows / Program Files) |
| A specific project's subdirectory | Directories with many non-script files |

---

## The Two-Stage Analysis Process

### Stage 1: Regex Prefilter (AgentSec Engine™)

Before AI analysis, a set of high-confidence regex rules rapidly scans the script (milliseconds per file, up to 32 concurrent). High-risk patterns (known malicious commands) are blocked immediately — no AI needed.

**What gets caught**: ransomware-like deletes, forced recursive system deletes, credential dumping, encoded PowerShell execution, drive-by downloads, etc.

### Stage 2: AI Deep Analysis

Scripts not caught by the prefilter are sent for AI analysis (up to 8 concurrent). The AI reads the code like a security expert, checking against your enabled policy rules based on OWASP Citizen Developer Top 10.

**Large directories** (30+ scripts): AgentSec first batch-processes all files through the prefilter (32 concurrent), then feeds only the ones needing AI into the analysis queue (8 concurrent). This avoids blocking the UI with progress updates.

---

## Analysis Result: Three Dispositions

Based on analysis results, AgentSec takes one of three actions:

| Action | Trigger | What Happens |
|--------|---------|-------------|
| **Block** | `exfiltration=true` or `critical` issues | Quarantine file + kill process + safe stub |
| **Warn** | `high` issues or risk_score ≥ 70 | Set file read-only + detailed report |
| **Allow** | Everything else | Log only, no action |

---

## Next Steps

- [How to view and interpret analysis results?](05-security-log.md)
- [How to manage quarantined files?](05-security-log.md) — safety sandbox tab in Threat Center
