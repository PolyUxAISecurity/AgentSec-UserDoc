# Frequently Asked Questions

## Getting Started

### Must I sign in or configure a model before scanning?

No. Local mode requires neither sign-in nor a model for rule scanning. To use AI assessment or the AI Assistant, sign in to use your organization's model service, or configure your own model under **Settings → General → Run Mode**.

### How do I reopen initial setup?

Go to **Settings → General** and select **Run setup wizard**. To replay the interface introduction, use **Tutorial** on the same page.

### Is local mode always offline?

Rules run locally. AI connectivity depends on the model: a local Ollama model can run on this computer, while remote services such as OpenAI require a network connection and receive AI requests.

## Script Monitoring

### Where do I see results after starting monitoring?

Open **Threat Center → Script threats** for files and their details. **Security Dashboard → Security Overview** also summarizes script results. The monitored folders must contain supported scripts outside automatically excluded directories.

### Can I monitor several folders?

Yes. Add them under **Settings → Security → Watch Directory**. Detected RPA directories are included only after you confirm them.

### Why do rules finish while AI is still running?

Rules and AI have separate progress indicators. Rule checks are usually faster. AI duration depends on the script, model, and service response. Read the engine status in the report to see what completed. With AI disabled, results contain rule checks only.

### Does high risk mean a file is quarantined?

Not always. Risk is an analysis finding; quarantine is an actual action. By default, AI-only block recommendations need human confirmation. Review the evidence and pending-confirmation message before deciding whether to quarantine.

### How do I restore a file I have confirmed is safe?

Select it in **Threat Center → Security Sandbox**, review it, then use the trust or restore action. If it needs changes first, check the edited contents in the remediation area before confirming restoration. See [Security Sandbox](06-sandbox.md).

### Does Allow or No Findings mean a script is absolutely safe?

It means this check did not produce a conclusion requiring a block or warning. Review the rule coverage, AI completion status, and business context as well.

## Dify

### Should I put a Dify workflow in a monitored folder?

No. Retrieve or import it under **AgentSec Engine™ → Rule Lab → Dify workflows**. Choose **Direct connection, Organization connections, or Files and demos**. Reports are archived under **Threat Center → Dify workflows**. See the [Dify guide](dify.md).

### Is Reanalyze Snapshot enough after remediating Dify?

That action checks the saved contents. To check a new draft or published version, retrieve it again. For files, import the updated DSL, then review the remediation comparison.

## Agents and the Assistant

### Why are there no Agent monitoring events yet?

Enable runtime protection under **Settings → Security**. External Agents also need a connector deployed under **Agent directory detection** and a restart. Records appear after supported tool calls. Text-only replies do not count as tool events.

### Can the assistant directly edit my monitored folders?

Its file tools access only the managed workspace. Select **Import scripts for repair** under **Settings → Security → DeepIntent Agent workspace** to work on copies. Monitoring a folder does not give the assistant file access to it.

### Where do I configure or test my local model?

Open **Settings → General → Run Mode**, choose local mode, fill in the model settings, and select **Test LLM**. Signed-in mode uses your organization's model service.

## Settings and Updates

### How do I change the interface size?

Use **Settings → Appearance → Interface Size**, or `Ctrl` / `⌘` with `+`, `−`, and `0`.

### How do I update the client?

Open **Settings → Updates** and select **Check for Updates Now**. Follow **Download and Install** or **Open Download** when a new version is found. On macOS, open the DMG and drag the app into Applications to replace it.

### Do exported logs include script source?

Analysis record exports remove the script source field. The ZIP also contains selected runtime logs and conversations. Use a Dify report's own redacted export action for Dify findings.

### How do I reset the app's data?

Select **Settings → General → Danger Zone → Reset All Data**. After confirmation, the app clears configuration, identity, analysis history, conversations, trust records, and other local data, then exits. This cannot be undone. Setup is required when you reopen it.
