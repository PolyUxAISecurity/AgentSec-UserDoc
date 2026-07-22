# FAQ & Troubleshooting

---

## Installation & Launch

### Q: Windows shows "Windows protected your PC" (SmartScreen)

This is normal — AgentSec doesn't have a Microsoft code signing certificate yet.

**Fix**: Click "More info" → "Run anyway".

### Q: macOS says "Cannot verify developer"

**Fix**:
1. Open **System Settings → Privacy & Security**
2. Find the blocked AgentSec Desktop near the bottom
3. Click "Open Anyway"

### Q: App launches with a blank window

**Possible causes**:
- First launch rendering is slow (normal, wait 3-5 seconds)
- Corrupted config file

**Fix**:
1. Wait 10 seconds
2. If still blank, delete the config file and retry:
   - Windows: delete `%APPDATA%\AgentSec\config.json`
   - macOS: delete `~/Library/Application Support/AgentSec/config.json`

### Q: Config lost after update?

Since v1.6.3, config files are stored in the OS standard user data directory — they survive uninstall/upgrade. If indeed lost:
- Old versions (≤ v1.6.2) stored config in the install directory's `resources\config\`
- New versions auto-detect and migrate old config on first launch

---

## Monitoring & Scanning

### Q: Nothing happens after starting monitoring

**Checklist**:

1. ✅ Are there `.xaml`, `.py`, `.robot`, `.bpmn`, `.ps1`, or `.vb` files in the watch directories?
2. ✅ Is the monitoring toggle switch turned on (sidebar system status block)?
3. ✅ In signed-in mode, check server connection
4. ✅ In local mode, check LLM configuration

### Q: Analysis always seems stuck "Analyzing"?

Three-layer fix (since v2.0.5):
1. **Hard timeout**: Local LLM calls have a 120s timeout; cloud upload/status queries have 60s/30s network timeouts
2. **Zombie cleanup**: On startup, stale "analyzing" records from the previous session are auto-finalized as "Failed"; every 10 minutes, zombie records older than 15 minutes are cleaned up
3. **Cancel button**: The detail panel has a "Cancel Analysis" button to abort in-flight tasks

### Q: Script blocked — is it a false positive?

1. In the Threat Center, check detailed analysis results to see which rule was triggered
2. In the Threat Center's "Security Sandbox" tab, restore the file (auto-whitelisted)
3. If frequent false positives, adjust rules in AgentSec Engine™ → Current Policy

### Q: Does "Allow" status mean the script is absolutely safe?

**No.** "Allow" only means the AI found no issues requiring blocking or warning. The script may still have low-risk issues or risks not covered by current rules. Regular review is recommended.

---

## AI Analysis

### Q: Analysis fails — what to do?

Common causes:
- **Local mode**: LLM API key expired or model unavailable — check in Settings → Account
- **Signed-in mode**: Organization AI quota exhausted — ask your admin to top up in the console
- **Network issue**: Cannot reach the server — check connection in Settings → Account

### Q: Why does analysis take a long time?

- AI deep analysis takes 10-30 seconds per script
- Large scripts (>4000 chars) are auto-split into chunks for parallel analysis
- Large directories (30+ scripts) first batch-prefilter at 32x concurrency, then AI-analyze at 8x concurrency
- The Threat Center shows "Analyzing" progress in real time

### Q: Can I analyze scripts without an internet connection?

Yes — use **Local Mode** with Ollama (free, local model). No internet needed.

---

## Quarantine & Restore

### Q: Where do quarantined files go?

Into a `.agentsec_quarantine` subdirectory in the same folder as the original script. Each file gets a timestamped name and a `.meta.json` companion file.

### Q: How do I manually check quarantined files?

Open the `.agentsec_quarantine` folder in your file explorer. But **don't manually move files** — use the AgentSec interface to keep the database and whitelist consistent.

### Q: Restore failed — file already exists?

The safe stub (placeholder) at the original path prevents direct overwrite. AgentSec automatically handles this when restoring — it deletes the stub, then moves the original back. If you manually deleted the stub, restore should still work.

---

## Account & Login

### Q: Login fails — browser doesn't open

AgentSec uses the `agentsec://` protocol to redirect from the browser back to the app. If it fails:
1. Check that AgentSec is not blocked by firewall
2. Try re-running the setup wizard (Settings → General → Run Setup Wizard)

### Q: "Organization is banned" message

Your organization has been banned by the platform admin. All features requiring server access (AI analysis, AI assistant) are unavailable. Contact your platform admin for details.

### Q: How to switch organizations?

Click your avatar/email at the bottom of the sidebar → **Sign Out** → re-run setup wizard to choose a different organization or mode.

---

## Configuration

### Q: Where is the config file stored?

| OS | Path |
|----|------|
| Windows | `%APPDATA%\AgentSec\config.json` |
| macOS | `~/Library/Application Support/AgentSec/config.json` |
| Linux | `~/.config/AgentSec/config.json` |

### Q: How to completely reset AgentSec?

Settings → General → Danger Zone → **Reset All Data**. This clears everything and exits the app. Re-opening acts like first install.

---

## Updates

### Q: How to update to the latest version?

AgentSec auto-checks every 6 hours. Manual check: Settings → Updates → **Check for Updates Now**.

When a new version is found:
- Windows: Click "Download & Install" for one-click update
- macOS: Opens the DMG download page

### Q: What if auto-update fails?

Download the latest release manually from the GitHub Release page and install over the existing version. Config and data are preserved.

---

## AI Assistant

### Q: The AI assistant doesn't respond

Check:
- Signed-in mode: Is the server connection working? (Settings → Account → Test Connection)
- Local mode: Is the LLM configured and reachable? (Settings → Account → Test LLM)
- Organization quota: Check sidebar bottom for usage bar

### Q: Can the AI see my scripts' source code?

The AI receives script content for analysis — this is how security analysis works. In signed-in mode, the content is processed via the server's LLM relay. In local mode, it's processed locally. Analysis exports do NOT include script source.
