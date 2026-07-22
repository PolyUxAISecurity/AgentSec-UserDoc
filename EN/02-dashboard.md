# Dashboard Guide

> The dashboard is the first page you see when opening AgentSec. It centralizes monitoring status, risk overview, and statistics.

---

## Dashboard Layout

The dashboard is divided into several areas:

```
┌─────────────────────────────────────────────┐
│  ┌──────────────────────────────────────┐   │
│  │  Status Area                          │   │
│  │  ● Monitoring | AI analyzing...       │   │
│  │  Risk Overview: HIGH  |  [Start]      │   │
│  │  📁 Watch Dir: C:\Users\...\UiPath    │   │
│  └──────────────────────────────────────┘   │
│                                             │
│  ┌─ Today ───────────────────────────────┐  │
│  │  Blocked: 2  │
│  └───────────────────────────────────────┘  │
│                                             │
│  ┌─ AI Pipeline ─────────────────────────┐  │
│  │  5 scripts → 1 analyzing → 3 done     │  │
│  │  → 0 failed → 2 whitelisted           │  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

---

## I. Status Area

The status area shows AgentSec's current working state:

| Status | Appearance | Meaning |
|--------|-----------|---------|
| Monitoring | Green dot + pulse animation | Actively watching for script changes |
| Connected | Green dot (static) | Logged into server, monitoring not started |
| Disconnected | Gray dot | Not logged in or server unreachable |

**Status text meanings:**

| Display | Situation |
|---------|-----------|
| "AI analyzing..." | Signed-in mode or local mode running |
| "Local mode ready" | Local mode, LLM configured |
| "LLM not configured" | Local mode, AI model not yet set up |
| "Waiting for AgentSec server..." | Signed-in mode, not logged in or server unreachable |

### Risk Overview

Shows the **highest risk level** and **total issue count** across all analyzed scripts:

| Risk Level | Color | Meaning |
|-----------|-------|---------|
| `CRITICAL` | Red | Severe security issue found (data exfiltration, hardcoded credentials) |
| `HIGH` | Orange | High-risk issue found (plaintext HTTP, disabled cert validation) |
| `MEDIUM` | Yellow | Medium-risk issue (missing error handling, unvalidated input) |
| `LOW` | Gray | Low-risk suggestions or no issues found |

> 💡 **The Risk Overview is clickable**. Click it to jump to the Threat Center for details.

### Watch Directory Card

- **Configured**: Shows current monitoring directory paths (supports multiple directories)
- **Not configured**: Yellow warning "Not configured · Click to set up"
- **Click**: Jumps to Settings → General with the directory selector highlighted

---

## II. Today — Blocked Count

**Blocked Count** = Number of scripts marked as "needs blocking" among all analyzed.

- Red number = scripts have been blocked
- **Click this card** → Jumps to the Threat Center's "Security Sandbox" tab

---

## III. AI Analysis Pipeline

The pipeline uses arrows to show the flow from discovery to completion:

```
Scripts  ──→  Analyzing  ──→  Analyzed  ──→  Failed  ──→  Whitelist
  (5)          (1)            (3)           (0)          (2)
```

| Metric | Meaning |
|--------|---------|
| **Scripts** | Total script files found in watch directories |
| **Analyzing** | Scripts currently being analyzed by AI |
| **Analyzed** | Scripts with completed AI analysis |
| **Failed** | Scripts where analysis errored (file corruption or model timeout) |
| **Whitelist** | Scripts restored from quarantine and added to the trust list |

> 💡 Each number is clickable — jump to the relevant page.

---

## IV. Sidebar Status

The sidebar top has a status indicator showing connection state:

- **Monitoring**: Green pulsing dot — everything is normal
- **Connected**: Green dot — logged in but monitoring not started
- **Disconnected**: Red dot — not logged in or network issue
- **Banned**: Red dot + "Banned" text — organization banned by admin

After logging in, the sidebar bottom also shows:
- **Org Usage**: Organization AI quota usage (progress bar + percentage)
- **User Info**: Login email + avatar

---

## V. AI Copilot Quick Access

The bottom-right corner has an **AI Assistant floating button** (FAB) labeled "AI Assistant" with a shortcut hint.

- **Click FAB**: Opens the AI Security Assistant panel
- **Shortcut `Ctrl+K`** (Windows) / `Cmd+K` (macOS): Toggle AI Assistant panel

See [AI Security Assistant Guide](08-ai-assistant.md) for details.

---

## VI. Top Update Banner

When a new version is detected, an update banner appears at the top of the dashboard:

- Shows the latest version number
- "Download & Install" button (Windows supports one-click install)
- "Go to Download" button (opens GitHub Release page)
- ✕ to dismiss the banner

---

## Next Steps

- [How to configure monitoring directories and start monitoring?](04-monitoring.md)
- [How to view analysis results?](05-security-log.md)
- [How to configure security policy?](07-security-policy.md)
- [How to use the AI Security Assistant?](08-ai-assistant.md)
