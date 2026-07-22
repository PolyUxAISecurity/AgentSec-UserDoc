# Threat Center

> The Threat Center is the unified security hub in v2.0 — combining Threat List, History, Notifications, and Security Sandbox into a single page with tab navigation.
> This is where you view per-script analysis results — what the AI found, how risky it is, and how to fix it.

---

## Opening the Threat Center

Click **"Threat Center"** in the sidebar.

---

## Interface Layout

The Threat Center uses a **split-pane** layout:

```
┌──────────────────────┬──────────────────────────┐
│  Left: Script List    │  Right: Detail Panel      │
│                      │                          │
│  📁 Current Dir (5)  │  ┌────────────────────┐  │
│  ├─ Main.xaml       │  │ Filename            │  │
│  │  HIGH · Quarant'd│  │ HIGH · Quarantined  │  │
│  ├─ Process.py      │  ├────────────────────┤  │
│  │  LOW · Allowed   │  │ Analyzed · AI       │  │
│  └─ ...             │  │ Risk Score 72/100   │  │
│                      │  ├────────────────────┤  │
│  📁 SubDirA (3)     │  │ Issues:             │  │
│  ├─ ...             │  │  CRITICAL Hardcoded │  │
│                      │  │  HIGH    HTTP plain  │  │
│                      │  │  MEDIUM  No handling│  │
│                      │  └────────────────────┘  │
└──────────────────────┴──────────────────────────┘
```

- **Left**: All analyzed scripts listed by subdirectory (splitter is draggable to resize)
- **Right**: Click a script to see its detailed analysis results

---

## Tabs

The Threat Center has four data set tabs at the top:

| Tab | Content |
|-----|---------|
| **Threat List** | Current analysis results for all monitored scripts |
| **History** | Archived analysis records beyond the current session |
| **Notifications** | System notifications and alerts |
| **Security Sandbox** | Quarantine zone ↔ Safe zone management |

---

## Left Panel: Script List

### Grouped Display

If your monitoring directory has subdirectories, scripts are grouped by folder.

### Risk Level Colors

| Level | Color | Meaning |
|-------|-------|---------|
| `CRITICAL` | Red background | Severe security threat — blocked immediately |
| `HIGH` | Orange background | High risk — needs attention |
| `MEDIUM` | Yellow background | Medium severity — recommended to fix |
| `LOW` | Gray background | Low risk — optional improvements |

### Action Labels

| Label | Meaning |
|-------|---------|
| **Quarantined** | File has been isolated, execution blocked |
| **Allow** | No high-risk issues, file is writable |

### Filters & Search

The toolbar above the list provides:
- Risk level filter chips (Critical / High / Medium / Low)
- File name search with instant filtering
- Export logs and open quarantine folder from the "..." menu

---

## Right Panel: Detail View

After clicking a script in the left panel, the right panel shows:

### Header

- Script filename
- Risk level badge (color-coded)
- Disposition status chip (Quarantined / Writable)
- Issue count
- Action buttons: Trust / Quarantine / Re-analyze / Ask AI

### Issue Cards

Each detected issue is displayed as a card with:

| Section | Content |
|---------|---------|
| Title | Short risk description |
| Severity | CRITICAL / HIGH / MEDIUM / LOW |
| Location | Line number, XML path, or function name |
| Code Snippet | Verbatim code from the original script (1-10 lines) |
| Description | Detailed explanation of the risk |
| Recommendation | Specific fix instructions |
| CWE ID | CWE reference if applicable |

---

## Common Operations

### Re-analyze a Script

Click **"Re-analyze"** in the detail panel header to trigger a fresh AI analysis.

### Ask AI About a Script

Click **"Ask AI"** button to open the AI Assistant with context set to this script's analysis.

### Export Logs

Click the "..." menu at top-right → **"Export Logs"** to download a ZIP archive of analysis records.

---

## Data Persistence

Analysis records are stored in a local SQLite database and persist across app restarts. The Threat Center auto-loads the most recent 200 records on startup.
