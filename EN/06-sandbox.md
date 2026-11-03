# Security Sandbox — Quarantine, Remediation, and Restore

> The Security Sandbox is used to manage scripts blocked by AgentSec. It lets you restore files that were blocked incorrectly or move trusted files back into quarantine.

---

## What is the Security Sandbox?

Security Sandbox manages quarantined and trusted files, with a separate area for remediation:

| Zone | Purpose |
| --- | --- |
| Quarantine Zone | Stores scripts blocked by AgentSec and waiting for review |
| Safe Zone | Stores scripts confirmed as trusted and restored from quarantine |
| Remediation Zone | Edit and recheck quarantined copies; files remain isolated |

> ![Screenshot pending: Quarantine, Safe, and Remediation zones](./screenshots/pending.svg)

_Screenshot pending: Quarantine, Safe, and the Remediation zone below them._

---

## Open the Security Sandbox

The Security Sandbox is integrated into the **Threat Center**. Click **“Threat Center”** in the left navigation bar, then click the **“Security Sandbox”** tab at the top.

> ![Screenshot pending: open Security Sandbox from the current Threat Center](./screenshots/pending.svg)

---

## Quarantine Zone — Blocked Files

### When Does a Script Enter Quarantine?

- A blocking rule matches under the default enforcement policy
- You review an AI recommendation to block and select **Quarantine**
- A user manually moves a file from the Safe Zone back into quarantine

### What Happens During Quarantine?

When a script must be quarantined, AgentSec attempts to stop the related running process, moves the original file into quarantine, creates a safe stub at the original path, and records quarantine metadata.

### Quarantine Entry Information

Each entry in the Quarantine Zone displays:

| Information | Description |
| --- | --- |
| Filename | Name of the quarantined script file |
| Risk level | `CRITICAL` / `HIGH` label |
| Original path | Full path of the file before it was quarantined |
| Quarantine time | When the file was quarantined |

> ![Screenshot pending: quarantine reason, Trust, and Remediate actions](./screenshots/pending.svg)

---

## Safe Zone — Trusted Files

### When Does a File Enter the Safe Zone?

- It is **automatically added** to the Safe Zone after being restored from quarantine
- Its SHA-256 hash is calculated when it is added

### Safe Zone “File Exists” Indicator

| Indicator | Meaning |
| --- | --- |
| ✅ `File exists` (green) | A file exists at the recorded original path |
| ❌ `File missing` (red) | The file has been deleted or moved |

### Content Change Detection

The Safe Zone records not only the file path but also its **SHA-256 hash**. If the file's contents are later modified:

- AgentSec **automatically removes it from the Safe Zone**
- Analysis is triggered again
- This prevents a trusted file from becoming a security vulnerability after being tampered with

---

## Operations Guide

### Restore a File from Quarantine (Quarantine → Safe)

If a script was blocked incorrectly, you can restore it:

**Option 1: Restore Selected Files**

1. Select the files to restore in the Quarantine Zone
2. Click **“Trust Selected”**
3. Confirm the operation

> ![Pending: select quarantined files and trust them in the current Sandbox](./screenshots/pending.svg)
>
> ![Pending: current confirmation dialog for trusting selected files](./screenshots/pending.svg)

**Option 2: Restore by Dragging**

1. Select files in the Quarantine Zone
2. Drag the files to the **Safe Zone** on the right

**Option 3: Restore from Protection Logs**

1. Find the quarantined script under **Threat Center → Script threats**
2. Expand its detail panel
3. Click **“Trust”**

> ![Screenshot pending: Trust in the current threat details](./screenshots/pending.svg)

During restore, AgentSec deletes the safe stub, moves the quarantined file back to its original path, calculates the file hash, and adds it to the trusted list. As long as the file contents remain unchanged, future scans will not analyze it again.

### Quarantine a File Again (Safe → Isolate)

If a previously restored file is found to be risky after review, or you want to revoke trust:

1. Select the files to quarantine again in the Safe Zone
2. Select **Quarantine selected** at the top

The files are removed from the Safe Zone and processed through the quarantine workflow again.

> ![Pending: quarantine selected files from the current Safe Zone](./screenshots/pending.svg)

### Edit and Recheck in the Remediation Zone

1. Find the script in Quarantine and select **Remediate**.
2. Select **Edit** in the Remediation zone to open the quarantined copy with the system default program. Save your changes. To use another editor, open the quarantine folder through Threat Center's **⋯** menu.
3. Select **Recheck** to analyze the saved content and view the updated result.
4. If isolation is still recommended, continue editing. After a passing check, review the result and select **Trust and move to safe zone** to restore the original location.
5. To stop remediation, select **Back to quarantine**.

Moving into or out of Remediation changes the management view; the original location still contains a safe stub. Remediation works one file at a time and does not support bulk trust or dragging.

![Screenshot pending: Edit, Recheck, and passing remediation result](./screenshots/pending.svg)

_Screenshot pending: Remediate, Edit, Recheck, the latest result, and Trust and move to safe zone._

### Select Multiple Files

- Select an individual file using its checkbox
- Click **“Select All”** to select every file in the current zone
- After selecting files, use a batch action or drag them together

### Copy Details or Permanently Delete

In a quarantined script's details, select **Copy details** to save its isolation information. If the original file is no longer needed, select **Delete permanently** and confirm. This deletes the quarantined original and its metadata while leaving the safe stub at the original location. That copy can no longer be restored from Quarantine.

---

## Physical File Location

Quarantined files are stored in a `.agentsec_quarantine` subdirectory **under the original script's directory**:

```
Original script directory/
├── Main.xaml              ← Safe stub replaces original script logic
├── Process.py             ← Safe stub replaces original script logic
├── .agentsec_quarantine/  ← Quarantine directory (AgentSec does not rescan it)
│   ├── Main_20260101T120000Z.xaml           ← Quarantined original file
│   ├── Main_20260101T120000Z.xaml.meta.json ← Quarantine metadata
│   ├── Process_20260102T093000Z.py
│   └── Process_20260102T093000Z.py.meta.json
└── ...
```

> Use **Edit** in the Remediation zone to modify a quarantined copy. Do not change safe stubs or `.meta.json` metadata. Restore and trust files through AgentSec.

---

## Safe Stub Files

After a file is quarantined, a **safe stub** remains at the original path to explain what happened:

- **Python script stub**: Prints a warning and exits with an error code
- **UiPath script stub**: An empty Sequence containing a `Terminate` activity
- **Other script stubs**: A plain-text warning

These stubs do not execute the original script logic.

---

## FAQ

**Q: Is a restored file analyzed again?**  
A: No. When restored, the file is automatically added to the allowlist and its SHA-256 hash is recorded. Future scans skip it as long as its contents remain unchanged.

**Q: What happens if I modify the file after restoring it?**  
A: During the next scan, AgentSec detects the hash change, automatically removes the file from the allowlist, and analyzes it again. This is intentional—changed code should be checked again.

**Q: Can I add a file to the Safe Zone manually?**  
A: The current version does not support adding files manually. Files enter the Safe Zone after being restored from quarantine.

**Q: What happens if a file in the Safe Zone is deleted?**  
A: The Safe Zone shows **File missing**. Check the original path to confirm whether the file was moved or deleted.
