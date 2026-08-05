# Demo Files

This page provides the UiPath Demo project used by the "First Security Analysis" chapter. Download it and place it in a local monitoring directory to reproduce the three workflow analysis scenarios shown in the manual.

---

## Download

[Download the UiPath Demo package](../demo/agentsec-uipath-demo.zip)

The package contains reusable UiPath project files. It does not include machine-generated cache files, local runtime settings, quarantine data, or AgentSec local databases.

---

## Contents

```text
Demo/
├─ .project/
│  ├─ PackageBindingsMetadata.json
│  └─ design.json
├─ Call_LLM/
│  ├─ Call_LLM_API.xaml
│  └─ Call_LLM_Secure.xaml
├─ Cleanup_TempFiles/
│  └─ Cleanup_TempFiles.xaml
├─ Call_LLM_API.xaml
├─ Cleanup_TempFiles.xaml
├─ entry-points.json
├─ project.json
└─ project.uiproj
```

---

## Sample Workflows

| File | Purpose | Expected Analysis Result |
| --- | --- | --- |
| `Call_LLM_API.xaml` | Calls an LLM endpoint and posts back to Slack | High, hardcoded credential demo |
| `Call_LLM_Secure.xaml` | Uses Orchestrator Assets to manage credentials | Safe, secure rewrite demo |
| `Cleanup_TempFiles.xaml` | Calls PowerShell to clean up files | Critical, risky recursive deletion demo |

> The keys, tokens, API endpoints, and channel IDs in these examples are demonstration values, not real credentials.

---

## How to Use

1. Download and unzip `agentsec-uipath-demo.zip`.
2. Put the extracted `Demo` folder in a suitable test directory.
3. In AgentSec, set the monitoring directory to the `Demo` folder or its parent folder.
4. Start monitoring, then check the Dashboard and Threat Center analysis results.
5. Compare the results with the [First Security Analysis](03-first-analysis.md) chapter to understand scanning, AI analysis, and quarantine behavior.

---

## Excluded Files

The following machine-generated runtime artifacts and quarantine data are excluded from the web Demo package:

```text
Demo/.local/
Demo/.agentsec_quarantine/
Demo/.settings/
Demo/.tmh/
Demo/.entities/
Demo/.objects/
Demo/.templates/
```
