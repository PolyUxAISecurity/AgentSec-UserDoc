# AgentSec Desktop — User Manual

Welcome to AgentSec Desktop! This manual covers script monitoring, Agent runtime protection, and Dify workflow audits. For Dify, start with [Dify Workflow Audit](dify.md).

To follow the Quick Start and First Security Analysis hands-on, download the companion [UiPath sample package](https://github.com/PolyUxAISecurity/AgentSec-UserDoc/raw/main/Demo/agentsec-uipath-demo.zip).

---

## What is AgentSec?

AgentSec combines local rule checks with optional AI assessment for these tasks:

- 🔍 **Auto-scan**: Real-time monitoring of RPA scripts (UiPath, Python, PowerShell, etc.) on your computer
- 🛡️ **Agent protection**: View connected Agent activity and inspect and enforce supported external tool calls
- 🔎 **Dify audits**: Retrieve or import workflows, locate credential and data-egress risks, and review remediation
- 🚫 **Script disposition**: Quarantine, warn, or request human review according to findings and disposition settings
- 💬 **DeepIntent Agent**: Explain risks, call tools, and work on script copies in the workspace

Choose the scenario you need, then follow its configuration and results guide.

---

## 📖 Recommended Reading Order

| # | Chapter | Content | Time |
|---|---------|---------|------|
| 01 | [Quick Start (Hands-on)](01-quickstart.md) | Install → Configure → First scan → Understand results | 10 min |
| 02 | [Security Dashboard](02-dashboard.md) | Security Overview, risk trends, and Agent Monitor | 5 min |
| 03 | [First Security Analysis](03-first-analysis.md) | Full case study: three scripts from discovery to remediation | 10 min |
| 04 | [Monitoring & Directory Setup](04-monitoring.md) | Watch directories, three-stage checks, large directory optimization | 5 min |
| 05 | [Threat Center](05-security-log.md) | Script, Agent, and Dify findings; Security Sandbox | 10 min |
| 06 | [AgentSec Engine™](07-security-policy.md) | Engine modules, Rule Lab, and Marketplace | 10 min |
| 07 | [AI Security Assistant](08-ai-assistant.md) | Chat with AI, let it help you operate | 5 min |
| 08 | [AI Assistant Use Cases](09-ai-assistant-use-cases.md) | Use examples to investigate risks, remediate issues, and check configuration | 5 min |
| 09 | [Settings Details](10-settings.md) | General, account, updates, appearance, version | As needed |
| 10 | [Key Concepts](11-concepts.md) | Terminology: What is quarantine? What is risk level? | As needed |
| 11 | [FAQ](12-faq.md) | Common issues and solutions | As needed |

Separate guides cover [Dify Workflow Audit](dify.md) and [Agent Runtime Protection and Monitoring](agent-runtime.md). The Dify guide includes the client's built-in hands-on demo.

> 💡 **New user path**: 01 → 02 → 03 — three chapters and you're fully onboard. The rest is reference.

---

## App Navigation

AgentSec Desktop uses a single-page application design:

| Location | Entry Point |
|----------|-------------|
| **Security Dashboard** | Security Overview and Agent Monitor |
| **Threat Center** | Script threats, Agent live events, Dify workflows, History, Notifications, and Security Sandbox |
| **AgentSec Engine™** | Engine, Rule Lab, and Marketplace; advanced mode can show DSL Rules |
| **AI Assistant** | Bottom-right floating button (or `Ctrl+K` / `Cmd+K`) |
| **Settings** | Sidebar gear button — General, Security, Account, Updates, Appearance, and Version Notes |

---

## Three Run Modes

AgentSec supports three running modes — choose what fits your environment:

| Mode | Use Case | Requirements |
|------|----------|-------------|
| **Login to AgentSec** (Recommended) | Most users | An AgentSec account (sign up via browser) |
| **Self-Hosted** | Enterprise with own AgentSec server | Company server address + account |
| **Local Mode** | Local rule scanning without AgentSec sign-in | No model required; optionally configure a local or remote model for AI |

> 💡 **Not sure?** Choose "Login to AgentSec" — it's the simplest option.

---

## Quick Interface Overview

![Screenshot pending: Updated client interface and navigation](./screenshots/pending.svg)

_Screenshot pending: Security Overview, sidebar, and account entry._

---

## Supported Script Types

| Extension | Script Type | Common Source |
|-----------|-------------|---------------|
| `.xaml` `.xmal` | UiPath Workflow | UiPath Studio |
| `.py` | Python Script | Python automation |
| `.robot` | Robot Framework | Test automation |
| `.bpmn` | BPMN Process | Process modeling tools |
| `.ps1` | PowerShell Script | Windows system administration |
| `.vb` | VBScript | Legacy Windows automation |

---

## Need Help?

- 📖 Browse the detailed manual via the left sidebar
- 💬 Use the built-in AI Security Assistant (press `Ctrl+K` or `Cmd+K`)
- ❓ Check the [FAQ](12-faq.md)

---

> 📄 Client version covered: v2.3.7 | Updated: November 2026
