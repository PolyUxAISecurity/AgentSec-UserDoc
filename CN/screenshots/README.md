# 截图清单

以下是用户手册中需要的全部截图位置。截图后请将文件放在此目录下，文件名与下方一致。

---

## 快速入门 (quickstart.md)

| 文件名 | 内容 | 说明 |
|--------|------|------|
| `install-windows-unzip.png` | Windows 解压后的文件夹 | 圈出 `AgentSec Desktop.exe` |
| `install-macos-drag.png` | macOS DMG 拖入 Applications | 标准 macOS 安装界面 |
| `onboarding-step0.png` | 配置向导首页 | 两个大卡片：登录/本地 |
| `onboarding-login-browser.png` | 浏览器中的登录页面 | AgentSec 登录页 |
| `onboarding-login-browser-verified.png` | 浏览器登录验证成功页 | 显示「已成功验证登录」提示 |
| `onboarding-login-success.png` | 登录成功后的界面 | 侧边栏显示账号信息 |
| `onboarding-select-dir.png` | 选择监控目录 | 文件选择器 |
| `onboarding-rpa-suggestions.png` | RPA 工具目录检测 | 建议列表 |
| `onboarding-llm-config.png` | 配置 AI 模型 | 本地模式 LLM 配置步骤 |
| `dashboard-start-monitoring.png` | 启动监控按钮 | 圈出蓝色按钮 |
| `dashboard-monitoring-active.png` | 监控运行中 | 按钮变红+状态变化 |
| `security-log-first-result.png` | 第一次看到分析结果 | 防护日志首次有数据 |

## 仪表盘 (dashboard.md)

| 文件名 | 内容 | 说明 |
|--------|------|------|
| `dashboard-full.png` | 仪表盘全景 | 所有区域可见 |
| `dashboard-status-area.png` | 状态区特写 | 状态文字+监控按钮+风险概览 |
| `dashboard-risk-overview.png` | 风险概览卡片 | 风险等级 pill 特写 |
| `dashboard-watchdir-card.png` | 监控目录卡片 | 已配置/未配置两种状态 |
| `dashboard-blocked-count.png` | 拦截数卡片 | 红色数字 |
| `dashboard-pipeline.png` | 分析流水线 | 5个箭头连接的chip |
| `sidebar-status.png` | 侧边栏状态 | 在线/离线/监控中三种dot |
| `sidebar-banned.png` | 被封禁时的侧边栏 | 红色+已封禁文字 |
| `fab-button.png` | AI助手FAB按钮 | 右下角浮动按钮 |
| `update-banner.png` | 更新横幅 | 顶部横幅 |

## 监控 (monitoring.md)

| 文件名 | 内容 | 说明 |
|--------|------|------|
| `monitoring-overview.png` | 监控工作流程 | 可用Mermaid图代替 |
| `settings-watchdir-select.png` | 设置页选择目录 | 目录输入框+按钮 |
| `settings-rpa-suggestions.png` | RPA建议目录 | 自动检测的目录列表 |
| `dashboard-start-btn.png` | 启动监控按钮（蓝色） | 特写 |
| `dashboard-stop-btn.png` | 停止监控按钮（红色） | 特写 |

## 防护日志 (security-log.md)

| 文件名 | 内容 | 说明 |
|--------|------|------|
| `security-log-overview.png` | 防护日志全景 | 全页面 |
| `security-log-dual-pane.png` | 左右双栏 | 选中脚本后的双栏布局 |
| `security-log-folders.png` | 文件夹分组 | 展开/折叠的文件夹视图 |
| `security-log-script-card.png` | 脚本条目卡片 | 单个条目的信息标注 |
| `security-log-detail-panel.png` | 详情面板 | 右侧分析结果详情 |
| `security-log-issue-card.png` | 问题详情卡片（展开） | 含代码片段 |
| `security-log-restore-btn.png` | 还原按钮 | 详情面板中的还原按钮 |
| `security-log-export.png` | 导出日志按钮 | 右上角导出按钮+对话框 |

## 安全沙箱 (sandbox.md)

| 文件名 | 内容 | 说明 |
|--------|------|------|
| `sandbox-overview.png` | 沙箱全景 | 双区布局 |
| `sandbox-nav.png` | 侧边栏导航 | 安全沙箱高亮 |
| `sandbox-quarantine-item.png` | 隔离区文件条目 | 单项详情 |
| `sandbox-restore.png` | 还原文件操作 | 选中→移到安全区 |
| `sandbox-quarantine-from-safe.png` | 移回隔离区 | 安全区→隔离区 |

## 安全策略 (security-policy.md)

| 文件名 | 内容 | 说明 |
|--------|------|------|
| `rules-overview.png` | 策略页全景 | 当前策略Tab |
| `rules-simple-mode.png` | 简单模式 | 大白话卡片 |
| `rules-advanced-mode.png` | 高级模式 | 逐条开关+技术名称 |
| `rules-preset-buttons.png` | 预设档位按钮 | 严格/推荐/宽松 |
| `rules-savebar.png` | 保存条 | 底部出现的保存条 |
| `rules-marketplace.png` | 策略市场 | 策略卡片列表 |
| `rules-marketplace-detail.png` | 策略详情抽屉 | 详情+安装按钮 |

## AI 助手 (ai-assistant.md)

| 文件名 | 内容 | 说明 |
|--------|------|------|
| `chat-fab.png` | AI助手FAB | 右下角按钮 |
| `chat-panel-full.png` | AI助手面板全景 | dock模式完整面板 |
| `chat-context-chip.png` | 上下文指示器 | "当前：防护日志" |
| `chat-tool-executing.png` | 工具执行中 | 工具卡 executing 状态 |
| `chat-suggested-actions.png` | 快捷操作按钮 | AI回复末尾的按钮 |
| `chat-model-pill.png` | 模型标签 | 输入框左下角模型名 |

## 设置 (settings.md)

| 文件名 | 内容 | 说明 |
|--------|------|------|
| `settings-overview.png` | 设置页全景 | 分类导航+右侧面板 |
| `settings-general.png` | 常规设置 | 配置向导+模式+目录 |
| `settings-mode-selector.png` | 运行模式下拉 | 三种模式 |
| `settings-account.png` | 账户设置 | 已登录状态 |
| `settings-test-server.png` | 服务端连接测试 | 测试结果 |
| `settings-ai-model.png` | AI模型设置 | 本地模式配置 |
| `settings-ai-managed.png` | AI模型(登录模式) | 提示由服务端管理 |
| `settings-test-llm.png` | LLM测试结果 | 两步测试面板 |
| `settings-updates.png` | 更新设置 | 版本+检查更新 |
| `settings-advanced.png` | 高级设置 | Debug+危险区域 |
| `settings-appearance.png` | 外观设置 | 主题+语言 |
| `settings-language.png` | 语言选择 | 三种语言按钮 |
| `settings-version.png` | 版本说明 | Changelog |

## 常见问题 (faq.md)

| 文件名 | 内容 | 说明 |
|--------|------|------|
| `faq-smartscreen.png` | Windows SmartScreen 警告 | 点击更多信息 |
| `faq-macos-gatekeeper.png` | macOS Gatekeeper 提示 | 系统设置中的仍要打开 |

---

## 截图要求

- **格式**：PNG
- **分辨率**：建议 2x（Retina）
- **语言**：使用简体中文界面
- **标注**：如需圈出特定按钮/区域，用红色或绿色边框标注
- **隐私**：截图前请隐藏/替换任何敏感信息（邮箱、路径中包含的用户名等）
