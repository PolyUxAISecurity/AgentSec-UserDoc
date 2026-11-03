# AI Security Assistant: Use Cases

> This chapter uses several common tasks to show how the AI Assistant can support everyday RPA script security work.

---

## Before You Begin

To make the answers more relevant to your situation, first:

1. Select monitoring directories and start monitoring;
2. Wait for at least one script to finish analysis;
3. When needed, select the relevant script from the Dashboard or Threat Center before opening the AI Assistant.

The AI Assistant answers questions using the current page, selected script, and analysis results as context. Treat its suggestions as supporting information for security investigation. Before performing an action that affects files or monitoring status, confirm that the expected result is correct.

---

## Use Case 1: Quickly Understand Current Risks

**When to use it**: You have just opened AgentSec and want to determine whether any issues need immediate attention today.

**Try asking:**

> Summarize the security status of all current scripts and tell me what I should address first, grouped by risk level.

The AI Assistant summarizes the analyzed scripts, risk levels, and main issue types, then highlights high-risk scripts that should be reviewed first.

> ![The AI Assistant summarizes current scripts by risk level and recommends what to address first](./screenshots/09-ai-assistant-use-cases/use-case-01-risk-overview.png)

**Follow-up examples:**

- Which script has the highest risk, and why?
- Which issues should be fixed today?

---

## Use Case 2: Explain a Script's Analysis Result

**When to use it**: You found a risky script in the Threat Center but do not understand what one of the findings means.

1. Open the target script's details in the Threat Center;
2. Select the script or click **“Ask AI About This”**;
3. Click a suggested question above the chat box, or enter a question manually, such as:

> Please explain the analysis result for `Main.xaml`.

Using the script's analysis result, the AI Assistant explains the reason for the risk in easier-to-understand language.

> ![The AI Assistant explains the analysis result in the context of the selected Main.xaml script](./screenshots/09-ai-assistant-use-cases/use-case-02-explain-script-analysis.png)

**Continue with:**

> List the steps for fixing this script in priority order, and explain what I need to verify at each step.

---

## Use Case 3: Get Actionable Remediation Guidance

**When to use it**: You already understand the issue type and want specific remediation instructions.

**Example question:**

> Based on this script's analysis result, guide me step by step through fixing the issue in UiPath.

The AI Assistant provides specific remediation instructions based on the analysis result.

> ![The AI Assistant provides actionable remediation guidance based on the script analysis result](./screenshots/09-ai-assistant-use-cases/use-case-03-remediation-guidance.png)

After making changes, reanalyze the updated script and review the result. For a quarantined script, follow the remediation and restore workflow in Threat Center.

To let the assistant edit a copy, import the script under **Settings → Security → DeepIntent Agent workspace**, then ask it to read and repair that copy. Review the workspace file and arrange its use yourself; the original is not replaced automatically.

---

## Use Case 4: Review, Understand, and Adjust the Current Policy

**When to use it**: You want to understand which security policies are enabled, why a certain type of risk triggers a warning, or how to adjust the policy to match an acceptable risk level.

**Example question:**

> Which rules in the current policy warn about this type of risk? Explain their purpose in plain language and describe the possible impact of changing them.

For example, if a particular risk is not relevant to you and you want to stop receiving warnings about it, continue with:

> I am not concerned about the “missing version tag” risk. How can I adjust the current policy so AgentSec no longer warns about this issue?

The assistant explains the relevant rules and the impact of changing them, then gives instructions. Save the change yourself on the Engine page; contact the administrator for a read-only self-hosted deployment. Reanalyze the affected scripts and review the result.

> ![The AI Assistant explains the impact of a security policy and guides the user through adjusting a rule](./screenshots/09-ai-assistant-use-cases/use-case-04-policy-adjustment.png)

---

## Use Case 5: Perform Operations Automatically

**When to use it**: You want help checking configuration, viewing monitoring state, querying analysis progress, or operating monitoring within the AgentSec workspace.

For example, to start monitoring, enter:

> Start monitoring for me.

The assistant checks configuration first. Its directory selection and monitoring start operations are limited to the AgentSec workspace and its subdirectories. Use the interface monitoring switch for external directories, and the client's **Export logs** button for log export.

For more operations that can be performed automatically and their descriptions, see [08 — AI Security Assistant](08-ai-assistant.md#2-auto-execute-operations).

## Use Case 6: Continue an Earlier Investigation

Select **History** in the assistant title bar, search for and open a saved conversation, then continue asking questions. Select **New chat** to start another task while keeping the previous conversation in history.

> Last time we discussed credentials in Main.xaml. What else should I verify?

![Continue an investigation from chat history](./screenshots/09-ai-assistant-use-cases/pasted-20261104060828.png)

---

## Tips for Asking Better Questions

- **Identify the subject**: Use a script name, risk level, or issue type, such as “Explain the blocking risk for `Process.py`.”
- **State your goal**: Say whether you want to understand the cause, find a remediation method, or check runtime status.
- **Ask step by step**: Ask the AI to summarize first, then follow up about one script or one issue in greater depth.

For details about how to open the AI Assistant, use its panel, and access all its capabilities, see [08 — AI Security Assistant](08-ai-assistant.md).
