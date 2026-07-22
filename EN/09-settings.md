# Settings & Account Guide

> The Settings page manages all AgentSec configuration: general, account, AI model, updates, and appearance.

---

## Opening Settings

Click the **⚙ gear icon** at the bottom of the sidebar.

---

## Settings Page Layout

The Settings page uses left-right category navigation:

```
┌────────┬──────────────────────────────┐
│ General │                              │
│ Account │   Selected category content   │
│ Updates │                              │
│ Appear. │   (right panel)               │
│ Version │                              │
├────────┴──────────────────────────────┤
│         [Save button for all]          │
└───────────────────────────────────────┘
```

### ⚡ Auto-Save

AgentSec supports auto-save. Changes are written to the config file within 1-2 seconds. The bottom save bar shows status:

| Status | Text |
|--------|------|
| No changes | "One save button for all config" |
| Unsaved | "Unsaved changes" |
| Saving | "Saving..." |
| Saved | "Saved" |
| Error | "Save error: ..." |

---

## I. General

### Setup Wizard

Click **"Run Setup Wizard"** to re-run the first-time configuration. Useful for changing modes or watch directories.

### Operating Mode

| Mode | Description |
|------|-------------|
| Local (Offline) | No server connection, AI analysis entirely local |
| Community (Cloud SaaS) | Connects to AgentSec cloud, AI handled server-side |
| On-Premise (Self-hosted) | Connects to your company's own AgentSec server |

### Watch Directories

Supports **multiple directories monitored simultaneously**. Add multiple folder paths — AgentSec watches all of them.

### Developer Options

- **Enable Debug View**: Adds a "Debug" entry in the sidebar showing real-time analysis log stream
- Only enable when troubleshooting

### Danger Zone

The **"Reset All Data"** button:
- Clears config, Agent ID, analysis history, chat history, whitelist
- App auto-exits after completion
- Re-opening behaves like first install

> ⚠️ This action cannot be undone!

---

## II. Account

### Login Status

#### Signed In

Displays:

| Field | Description |
|-------|-------------|
| Avatar | Auto-generated identifier from email |
| Email | Login email |
| Organization | Your AgentSec organization (tenant) |
| Agent ID | This machine's unique identifier |
| Model Usage | Organization AI quota usage |

Click **"Sign Out"** to disconnect from the server.

#### Not Signed In

- Shows "Connect Console (Login)" button
- For onpremise mode, fill in the server address first

### Connection Test

Click **"Test Connection"** to verify server reachability and credential validity.

### Server Address

Only shown in **On-Premise** mode. Enter your company's AgentSec server address (e.g. `https://agentsec.intra.acme.com`).

### AI Model Config (Local Mode Only)

**Signed-in mode (community / onpremise):**
AI model is managed by the server — no client config needed. You can also view the current model via sidebar **AgentSec Engine™ → AI Model**.

**Local mode** requires manual configuration:

| Setting | Description | Example |
|---------|-------------|---------|
| Model Provider | Choose AI provider | OpenAI / Anthropic / Ollama / OpenAI-compatible |
| Model | Model name | `gpt-4o-mini` / `claude-sonnet-4-20250514` |
| API Key | Provider API key | `sk-xxxx...` (Ollama can leave blank) |
| Base URL | Custom endpoint (Ollama / OpenAI compat) | `http://localhost:11434/v1` |

### Test LLM Connection

Click **"Test LLM"** to verify model availability. Two-step test: connectivity check (no token cost) and invoke test (~1 token).

---

## III. Updates

### Auto-Check Updates

- **Toggle**: Enable/disable startup and periodic update checks
- **Default**: Enabled, checks every 6 hours

### Current Version Info

| Info | Description |
|------|-------------|
| Current Version | Your AgentSec version |
| Latest Version | Latest version on GitHub Release |
| Last Check | When updates were last checked |

### Manual Check

Click **"Check for Updates Now"** to query the latest version in real time.

When a new version is detected:
- Settings page shows version details + release notes
- Dashboard shows an update banner at the top
- Click "Download & Install" for auto-download (Windows) / open DMG (macOS)

---

## IV. Appearance

### Theme

- **Dark Mode**: Toggle switch
- Default follows system preference (`prefers-color-scheme`)

### Interface Language

Supports three languages:
- 简体中文 (default)
- 繁體中文
- English

Switching takes effect immediately across the entire interface. The AI assistant auto-switches reply language as well.

---

## V. Version Notes

Displays the changelog from v1.0.0 to current, in reverse chronological order.

Each entry is labeled:
- `feat` (green) — New feature
- `fix` (red) — Bug fix
- `improve` (green) — Improvement
- `ui` (yellow) — UI adjustment
