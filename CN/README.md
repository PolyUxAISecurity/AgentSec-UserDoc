# AgentSec Desktop — 用户手册

欢迎使用 AgentSec Desktop！本手册将帮助您快速上手，全面了解如何使用 AgentSec 保护您的 RPA 脚本安全。

---

## 什么是 AgentSec？

AgentSec 是一款 **AI 驱动的 RPA 脚本安全监控工具**。它可以：

- 🔍 **自动扫描**：实时监测您电脑上的 RPA 脚本（UiPath、Python、PowerShell 等）
- 🛡️ **智能分析**：利用 AI 自动发现脚本中的安全隐患（数据外泄、硬编码密码、恶意命令等）
- 🚫 **主动拦截**：对高危脚本自动隔离，阻止其运行，保护您的数据安全
- 💬 **AI 助手**：内置安全助手，您可以像聊天一样询问安全问题和修复建议

**简单来说**：把 AgentSec 安装到 RPA 工作站上，它就像一个永不休息的「安全巡检员」，帮您盯着所有脚本，发现风险自动处理。

---

## 📖 阅读顺序（推荐）

| # | 章节 | 内容 | 用时 |
|---|------|------|------|
| 01 | [快速入门（跟我做）](01-quickstart.md) | 安装 → 配置 → 第一次监控 → 看懂结果 | 10 分钟 |
| 02 | [仪表盘（概览）](02-dashboard.md) | 主界面每个数字的含义 | 5 分钟 |
| 03 | [第一次安全分析](03-first-analysis.md) | 完整案例：三个脚本从发现到处理的全过程 | 10 分钟 |
| 04 | [监控与目录配置](04-monitoring.md) | 监控目录、三关检查、大目录优化 | 5 分钟 |
| 05 | [威胁中心](05-security-log.md) | 威胁列表、历史记录、通知、安全沙箱 | 10 分钟 |
| 06 | [AgentSec Engine™](07-security-policy.md) | 安全策略、规则实验室、AI 模型、策略市场 | 10 分钟 |
| 07 | [AI 安全助手](08-ai-assistant.md) | 与 AI 对话、让它帮您操作 | 5 分钟 |
| 08 | [AI 助手使用场景](09-ai-assistant-use-cases.md) | 通过示例完成风险排查、修复和配置检查 | 5 分钟 |
| 09 | [设置详解](10-settings.md) | 常规、账户、更新、外观等 | 按需查阅 |
| 10 | [关键概念](11-concepts.md) | 术语解释：什么是隔离？什么是风险等级？ | 按需查阅 |
| 11 | [常见问题](12-faq.md) | 遇到问题怎么办 | 按需查阅 |
| 12 | [Demo 示例文件](13-demo.md) | 下载 UiPath 示例项目，复现文档案例 | 按需下载 |

> 💡 **新手路径**：01 → 02 → 03 三篇看完，就完全上手了。其余按需查阅。

---

## 应用界面导航

AgentSec 桌面端采用单页应用设计：

| 导航位置 | 入口 |
|---------|------|
| **概览** | 侧边栏「概览」— 仪表盘总览、风险概况、分析流水线 |
| **威胁中心** | 侧边栏「威胁中心」— 威胁列表、历史记录、通知、安全沙箱（4 个 Tab） |
| **AgentSec Engine™** | 侧边栏「AgentSec Engine™」— 当前策略、规则实验室、AI 模型、策略市场 |
| **AI 助手** | 右下角悬浮按钮（或 `Ctrl+K` / `Cmd+K`） |
| **设置** | 侧边栏底部齿轮按钮 — 常规、账户、更新、外观、版本 |

## 三种使用模式

AgentSec 支持三种运行模式，您可以根据实际情况选择：

```mermaid
graph TD
    A[首次打开 AgentSec] --> B{选择使用方式}
    B -->|"推荐 👍"| C[登录 AgentSec 云端]
    B -->|内网环境| D[登录内网服务器]
    B -->|完全离线| E[本地模式]
    
    C --> F["AI 分析由云端处理<br/>无需配置 AI 模型<br/>组织统一管理配额"]
    D --> G["AI 分析由内网服务器处理<br/>需填写服务器地址<br/>企业自托管"]
    E --> H["AI 分析在本机完成<br/>需自行配置 AI 模型<br/>数据完全不出本机"]
```

| 模式 | 适用场景 | 需要什么 |
|------|---------|---------|
| **登录 AgentSec**（推荐） | 大多数用户 | 一个 AgentSec 账号（浏览器登录即可） |
| **内网部署** | 企业自建了 AgentSec 服务器 | 公司提供的服务器地址 + 账号 |
| **本地模式** | 完全离线、数据不能出本机 | 自备 OpenAI / Ollama 等 AI 接口 |

> 💡 **不确定选哪个？** 选「登录 AgentSec」即可，这是最简单的方式。

---

## 快速了解界面

![interface-overview](./screenshots/interface-overview.png)

---

## 典型工作流程

```mermaid
sequenceDiagram
    participant 用户
    participant AgentSec
    participant AI引擎
    participant 脚本文件
    
    用户->>AgentSec: 1. 选择监控目录
    用户->>AgentSec: 2. 点击「启动监控」
    
    loop 持续监控
        AgentSec->>脚本文件: 3. 检测新增/修改的脚本
        脚本文件-->>AgentSec: 发现脚本文件
        
        AgentSec->>AgentSec: 4. 正则快速扫描（毫秒级）
        alt 命中高危模式
            AgentSec->>脚本文件: 5a. 直接拦截 + 隔离
            AgentSec-->>用户: 通知：发现高危脚本已拦截
        else 需要AI判断
            AgentSec->>AI引擎: 5b. 提交AI深度分析
            AI引擎-->>AgentSec: 返回分析结果
            alt 风险等级：拦截
                AgentSec->>脚本文件: 终止进程 + 隔离文件
            else 风险等级：警告
                AgentSec-->>用户: 通知：建议修复
            else 风险等级：放行
                AgentSec-->>用户: 记录日志（无告警）
            end
        end
    end
    
    用户->>AgentSec: 6. 在防护日志中查看详情
    用户->>AgentSec: 7. 对误拦文件执行还原
```

---

## 支持检测的脚本类型

| 扩展名 | 脚本类型 | 常见来源 |
|--------|---------|---------|
| `.xaml` `.xmal` | UiPath 工作流 | UiPath Studio |
| `.py` | Python 脚本 | Python 自动化 |
| `.robot` | Robot Framework | 测试自动化 |
| `.bpmn` | BPMN 流程 | 流程建模工具 |
| `.ps1` | PowerShell 脚本 | Windows 系统管理 |
| `.vb` | VBScript 脚本 | 传统 Windows 自动化 |

---

## 需要帮助？

- 📖 按左侧目录浏览详细手册
- 💬 使用应用内的 AI 安全助手（按 `Ctrl+K` 或 `Cmd+K` 唤起）
- ❓ 查看 [常见问题](faq.md)

---

> 📄 文档版本：v2.0.6 | 更新日期：2026年7月
