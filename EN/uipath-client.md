# UiPath Studio Plugin: Check a Workflow

`Demo Wizard` provides a manual check inside UiPath Studio. Open a project and click the button to see XAML files in the current directory and their security analysis in a dialog. This is a separate workflow from AgentSec Desktop directory monitoring.

## 1. Install the plugin

Prepare UiPath Studio on Windows and a `demo_activities.Activities` package (`.nupkg`) provided by the project maintainer. The [UiPath sample ZIP](https://github.com/PolyUxAISecurity/AgentSec-UserDoc/raw/main/Demo/agentsec-uipath-demo.zip) linked from this manual's home page contains workflows for Desktop monitoring practice; it is **not** the Studio plugin package.

1. In **Manage Packages**, add a local package source pointing to the folder containing the `.nupkg`.
2. Install `demo_activities.Activities` from that source, then reopen the project. Restart Studio if needed.
3. Find **Demo Wizard** in the ribbon. Its position depends on the Studio version.

![Replace with Manage Packages and Demo Wizard screenshots](./screenshots/pending.svg)

_Screenshot pending: local source, installed package, and ribbon button._

## 2. Check a workflow

1. Open a Studio project with a XAML workflow and click **Demo Wizard**.
2. In the dialog, check the **current working directory** and file list; `.xaml` files are marked with `*`. The plugin searches only that directory's top level. It chooses `Main.xaml` first, otherwise the first `.xaml` file.
3. Leave the dialog open and view the upload ID and analysis progress in the RPA Guard upload and analysis section.
4. When analysis completes, inspect the risk level, risk score, recommended action, and issue summaries.

![Replace with upload and analysis result screenshot](./screenshots/pending.svg)

_Screenshot pending: working directory, selected XAML, upload ID, final status, and risk summary. Redact sensitive names and paths before sharing._

The wizard only displays results; it does not change the current workflow.
