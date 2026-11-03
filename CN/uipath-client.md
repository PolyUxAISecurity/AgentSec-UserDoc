# UiPath Studio 插件：检查工作流

`Demo Wizard` 是 UiPath Studio 中的手动检查入口。打开项目后点击按钮，即可在弹窗中查看当前目录的 XAML 文件和安全分析结果。它与 AgentSec Desktop 的目录监控是两种不同的使用方式。

## 1. 安装插件

准备 Windows 版 UiPath Studio 和项目维护者提供的 `demo_activities.Activities` 安装包（`.nupkg`）。手册首页的 [UiPath 示例 ZIP](https://github.com/PolyUxAISecurity/AgentSec-UserDoc/raw/main/Demo/agentsec-uipath-demo.zip) 是供 Desktop 监控练习的工作流素材，**不是** Studio 插件安装包。

1. 在 Studio 的 **管理包 (Manage Packages)** 中添加本地包源，指向存放 `.nupkg` 的文件夹。
2. 从该源安装 `demo_activities.Activities`，然后重新打开项目；必要时重启 Studio。
3. 在功能区找到 **Demo Wizard**。按钮位置可能因 Studio 版本而异。

![待替换：UiPath 管理包及 Demo Wizard 按钮](./screenshots/pending.svg)

_截图待补：本地包源、已安装包及功能区按钮。_

## 2. 检查工作流

1. 在 Studio 中打开含有 XAML 工作流的项目，点击 **Demo Wizard**。
2. 在弹窗中核对**当前工作目录**和文件列表；`.xaml` 文件带 `*` 标记。插件只搜索该目录的第一层，优先选择 `Main.xaml`，没有则选择第一个 `.xaml`。
3. 保持弹窗打开，在“RPA Guard 脚本上传与分析”区域查看上传编号和分析进度。
4. 分析完成后，查看风险等级、风险分数、建议操作和问题摘要。

![待替换：上传及分析结果弹窗](./screenshots/pending.svg)

_截图待补：当前目录、所选 XAML、上传编号、最终状态和风险摘要；分享前遮挡敏感文件名和路径。_

此向导只显示分析结果，不会修改当前工作流。
