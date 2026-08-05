# Demo 示例文件

本页提供与「第一次安全分析」章节配套的 UiPath Demo 示例项目。您可以下载后放到本机监控目录中，用 AgentSec 复现文档里的三个工作流分析场景。

---

## 下载

[下载 UiPath Demo 示例包](../demo/agentsec-uipath-demo.zip)

示例包包含可复用的 UiPath 项目文件，不包含本机缓存、运行配置、隔离区和 AgentSec 本地数据库等机器生成内容。

---

## 包含内容

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

## 三个示例脚本

| 文件 | 作用 | 预期分析结果 |
| --- | --- | --- |
| `Call_LLM_API.xaml` | 调用大模型接口并回帖到 Slack | High，高风险凭据硬编码示例 |
| `Call_LLM_Secure.xaml` | 使用 Orchestrator Assets 管理凭据 | Safe，安全改写示例 |
| `Cleanup_TempFiles.xaml` | 调用 PowerShell 清理文件 | Critical，高危递归删除示例 |

> 示例中的密钥、Token、接口地址和频道编号均为演示值，不是真实凭据。

---

## 使用方式

1. 下载并解压 `agentsec-uipath-demo.zip`。
2. 将解压后的 `Demo` 文件夹放到一个适合测试的目录中。
3. 在 AgentSec 中把监控目录设置为该 `Demo` 文件夹或其父目录。
4. 启动监控后，查看仪表盘和威胁中心中的分析结果。
5. 对照 [第一次安全分析](03-first-analysis.md) 章节理解扫描、AI 分析和隔离流程。

---

## 未打包内容

以下内容属于本机运行产物或隔离区数据，已从网页 Demo 包中排除：

```text
Demo/.local/
Demo/.agentsec_quarantine/
Demo/.settings/
Demo/.tmh/
Demo/.entities/
Demo/.objects/
Demo/.templates/
```
