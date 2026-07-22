# 09 — Key Concepts Explained

> Plain-language explanations of AgentSec terminology and concepts. No programming background needed.

---

## Monitoring Concepts

### Watch Directory

You tell AgentSec "keep an eye on this folder." AgentSec continuously checks this folder (including subfolders) for RPA scripts. New files or modified files auto-trigger security analysis. **Multiple directories can be monitored at once.**

**Simple analogy**: Like assigning a security guard to a building entrance — everyone coming in or going out gets checked.

### Real-Time Monitoring

AgentSec doesn't scan every few minutes (too slow). Instead it uses the OS event notification system: the moment a file is created or modified, the OS immediately tells AgentSec, which starts checking right away.

**Simple analogy**: Not periodic patrols — the guard stands at the door, checking every person as they arrive.

---

## Analysis Concepts

### Regex Prefilter (AgentSec Engine™)

Before AI analysis, a set of high-confidence "known malicious behavior" rules does a millisecond-level fast scan (AgentSec Engine™). The ruleset includes built-in fallback rules (offline mode) and auto-fetches the latest from the server when signed in. If a script contains obvious malicious commands (like `rm -rf /`, deleting system restore points, ransomware behavior), it's blocked immediately — no AI needed.

**Simple analogy**: The guard has a "wanted list." Anyone on the list is stopped immediately — no need for a slow background check.

### AI Deep Analysis

Scripts not caught by the prefilter enter AI deep analysis. The AI reads the code like a security expert, checking:
- Is data being silently sent to external servers?
- Are passwords hardcoded in the code?
- Is insecure communication being used?
- Is there injection vulnerability risk?
- ...

**Simple analogy**: Not on the wanted list? The guard calls in a security expert to thoroughly review the person's credentials.

### Concurrent Analysis

AgentSec can analyze up to 8 scripts simultaneously (AI analysis) and up to 32 in parallel for prefilter scanning. If you have 50 scripts, it doesn't make the 50th wait for all previous ones — they're processed in parallel batches.

**Simple analogy**: 8 guards can check 8 people at the same time.

---

## Risk Concepts

### Risk Level

After AI analysis, each script gets a risk level:

| Level | Color | Plain Meaning |
|-------|-------|---------------|
| **CRITICAL** | 🔴 Red | Very dangerous! May steal data, leak passwords, damage system |
| **HIGH** | 🟠 Orange | Clear security issue, easily exploitable |
| **MEDIUM** | 🟡 Yellow | Not secure enough, but severe consequences are unlikely |
| **LOW** | ⚪ Gray | Room for improvement but no real threat |

### Risk Score

A 0-100 value from the AI's comprehensive assessment. Higher = more risk.

- 0-30: Basically safe
- 31-60: Room for improvement
- 61-80: Fix soon recommended
- 81-100: Needs immediate attention

---

## Disposition Concepts

### Block

When AI judges a script as very dangerous, AgentSec automatically:
1. Finds and terminates any running process executing the script
2. Moves the script file into quarantine (`.agentsec_quarantine`)
3. Places a "safe stub" at the original path (explains why it was quarantined), set read-only

**Simple analogy**: The guard confiscates dangerous items, seals the scene, and posts a notice.

### Warn

The script has risks but not bad enough to block. AgentSec:
- Sets the file to read-only (prevents accidental execution)
- Lists issues and fixes in detail in the Threat Center

**Simple analogy**: The guard says "This person is suspicious — I've suspended their pass, you decide what to do."

### Allow

AI finds no high-risk issues that need blocking. File stays as-is.

> ⚠️ "Allow" doesn't mean "absolutely safe." The AI checks known risk patterns — it doesn't guarantee the script has zero issues or business logic risks.

---

## Quarantine Concepts

### Quarantine Zone

Blocked scripts are moved to a `.agentsec_quarantine` directory (in the same folder as the original script). AgentSec auto-skips quarantine directories — no re-scanning locked-up items.

### Safe Stub

The placeholder left at the original path after the file is moved. It looks like the original script but actually contains an explanation + auto-exit code. Even if someone tries to execute it, no harm occurs.

### Whitelist / Trust List

Files restored from quarantine are auto-added to the trust list. AgentSec records the file's "fingerprint" (SHA-256 hash). Future scans skip files with matching hashes. If the file is modified, the fingerprint changes — AgentSec detects it, removes it from the trust list, and re-analyzes.

---

## Operating Mode Concepts

### Community (Cloud Mode)

Your AgentSec client connects to AgentSec cloud. AI analysis runs in the cloud — no AI model config needed. All features auto-activate after login.

### On-Premise (Self-Hosted)

Your AgentSec client connects to your company's own AgentSec server. For organizations with data compliance requirements that can't use public cloud.

### Local Mode

Fully offline. You provide your own AI endpoint (OpenAI API key or local Ollama model). All analysis runs on your machine — data never leaves your computer.

---

## AI Assistant Concepts

### Tool Call

The AI Assistant doesn't just chat — it can **execute operations**: check config, start monitoring, export logs, etc. When the AI decides to act, it triggers a "tool call." You'll see a progress card in the conversation showing what the AI is doing.

### Agent Token

After logging into AgentSec, the client receives an **identity credential**. All subsequent communication with the AgentSec server carries this token, allowing the server to identify "who you are, which organization." The token is encrypted on disk — never stored in plaintext.

---

## Policy Concepts

### Security Policy

A set of detection rules telling the AI "what to check, what to do when found." Each rule has:
- **Severity**: How serious (critical / high / medium / low)
- **Action**: What to do on hit (block = quarantine / warn = alert)

Adjust rules in the **AgentSec Engine™ → Current Policy** page.

### Policy Marketplace

AgentSec's official preset policy library. Pick a policy suited to your industry (e.g. finance, government) and one-click replace your current detection rules.

### OWASP

An international security standards organization. AgentSec's default policy is built on the **OWASP Citizen Developer Top 10** risks — meaning our detection standards align with international security best practices.

---

## Other Concepts

### Content Vault

AgentSec internally maintains a versioned content store (git-based). Every analyzed script gets a complete snapshot saved in the vault. This means even if a script is quarantined (file moved away), you can always retrieve the original content from the vault for re-analysis.

**Simple analogy**: Like document version history — AgentSec remembers every version of every script for audit and re-analysis.

### Threat Center

v2.0 unifies "Threat List", "History", "Notifications", and "Security Sandbox" into a single **Threat Center** page with tab navigation. The split-pane divider is draggable to resize.

### Agent ID

Every machine with AgentSec has a unique ID (based on network MAC address). The server uses it to distinguish machines. The ID is stored in the `~/.agentsec_agent_id` file.

### Heartbeat

Every 60 seconds, AgentSec sends a signal to the server: "I'm alive and working." If the server receives no heartbeat for 3 consecutive minutes, it marks the machine as "offline."

### Log Export

Pack analysis records, runtime logs, and AI conversation records into a ZIP file. Useful for support tickets or troubleshooting. To protect privacy, exported analysis records **do not include script source code**.
