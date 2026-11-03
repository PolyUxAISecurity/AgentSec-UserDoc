import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// AgentSec Desktop User Manual site config.
// Content organized by language: CN/ (Simplified Chinese), EN/ (English), TW/ (Traditional Chinese).
// All content is md files — edit with Obsidian or any editor.
export default withMermaid(
  defineConfig({
    title: 'AgentSec User Manual',
    description: 'AgentSec Desktop — AI-Powered RPA Script Security Monitoring · User Manual',
    lang: 'en-US',
    cleanUrls: true,

    base: process.env.DOCS_BASE || '/',

    ignoreDeadLinks: true,

    // Rewrite README.md as index.md for each language.
    rewrites: {
      'CN/README.md': 'CN/index.md',
      'EN/README.md': 'EN/index.md',
      'TW/README.md': 'TW/index.md',
    },

    themeConfig: {
      nav: [
        { text: '简体中文', link: '/CN/' },
        { text: 'English', link: '/EN/' },
        { text: '繁體中文', link: '/TW/' },
      ],

      sidebar: {
        '/CN/': [
          { text: '手册首页', link: '/CN/' },
          {
            text: '开始使用',
            collapsed: false,
            items: [
              { text: '01 · 快速入门（跟我做）', link: '/CN/01-quickstart' },
              { text: '02 · 仪表盘（概览）', link: '/CN/02-dashboard' },
              { text: '03 · 第一次安全分析', link: '/CN/03-first-analysis' },
            ],
          },
          {
            text: '功能详解',
            collapsed: false,
            items: [
              { text: '04 · 监控与目录配置', link: '/CN/04-monitoring' },
              { text: '05 · 威胁中心（威胁列表 · 历史 · 通知 · 沙箱）', link: '/CN/05-security-log' },
              { text: '06 · AgentSec Engine™（策略 · 实验室 · AI 模型 · 市场）', link: '/CN/07-security-policy' },
              { text: '07 · AI 安全助手', link: '/CN/08-ai-assistant' },
              { text: '08 · AI 助手使用场景', link: '/CN/09-ai-assistant-use-cases' },
              { text: '09 · 设置详解', link: '/CN/10-settings' },
            ],
          },
          {
            text: '参考',
            collapsed: false,
            items: [
              { text: '10 · 关键概念', link: '/CN/11-concepts' },
              { text: '11 · 常见问题', link: '/CN/12-faq' },
            ],
          },
          {
            text: '集成',
            items: [
              { text: 'Dify 工作流审计', link: '/CN/dify' },
              { text: 'Agent 运行时防护', link: '/CN/agent-runtime' },
            ],
          },
        ],
        '/EN/': [
          { text: 'Home', link: '/EN/' },
          {
            text: 'Getting Started',
            collapsed: false,
            items: [
              { text: '01 · Quick Start (Hands-on)', link: '/EN/01-quickstart' },
              { text: '02 · Dashboard (Overview)', link: '/EN/02-dashboard' },
              { text: '03 · First Security Analysis', link: '/EN/03-first-analysis' },
            ],
          },
          {
            text: 'Features',
            collapsed: false,
            items: [
              { text: '04 · Monitoring & Directory Setup', link: '/EN/04-monitoring' },
              { text: '05 · Threat Center (List · History · Notifications · Sandbox)', link: '/EN/05-security-log' },
              { text: '06 · AgentSec Engine™ (Policy · Lab · AI Model · Marketplace)', link: '/EN/07-security-policy' },
              { text: '07 · AI Security Assistant', link: '/EN/08-ai-assistant' },
              { text: '08 · AI Assistant Use Cases', link: '/EN/09-ai-assistant-use-cases' },
              { text: '09 · Settings Details', link: '/EN/10-settings' },
            ],
          },
          {
            text: 'Reference',
            collapsed: false,
            items: [
              { text: '10 · Key Concepts', link: '/EN/11-concepts' },
              { text: '11 · FAQ', link: '/EN/12-faq' },
            ],
          },
          {
            text: 'Integrations',
            items: [
              { text: 'Dify Workflow Audit', link: '/EN/dify' },
              { text: 'Agent Runtime Protection', link: '/EN/agent-runtime' },
            ],
          },
        ],
        '/TW/': [
          { text: '手冊首頁', link: '/TW/' },
          {
            text: '開始使用',
            collapsed: false,
            items: [
              { text: '01 · 快速入門（跟我做）', link: '/TW/01-quickstart' },
              { text: '02 · 儀表盤（概覽）', link: '/TW/02-dashboard' },
              { text: '03 · 第一次安全分析', link: '/TW/03-first-analysis' },
            ],
          },
          {
            text: '功能詳解',
            collapsed: false,
            items: [
              { text: '04 · 監控與目錄配置', link: '/TW/04-monitoring' },
              { text: '05 · 威脅中心（威脅列表 · 歷史 · 通知 · 沙箱）', link: '/TW/05-security-log' },
              { text: '06 · AgentSec Engine™（策略 · 實驗室 · AI 模型 · 市場）', link: '/TW/07-security-policy' },
              { text: '07 · AI 安全助手', link: '/TW/08-ai-assistant' },
              { text: '08 · AI 助手使用場景', link: '/TW/09-ai-assistant-use-cases' },
              { text: '09 · 設置詳解', link: '/TW/10-settings' },
            ],
          },
          {
            text: '參考',
            collapsed: false,
            items: [
              { text: '10 · 關鍵概念', link: '/TW/11-concepts' },
              { text: '11 · 常見問題', link: '/TW/12-faq' },
            ],
          },
          {
            text: '集成',
            items: [
              { text: 'Dify 工作流審計', link: '/TW/dify' },
              { text: 'Agent 運行時防護', link: '/TW/agent-runtime' },
            ],
          },
        ],
      },

      search: { provider: 'local' },
      outline: { level: [2, 3], label: 'On this page' },
      docFooter: { prev: 'Previous', next: 'Next' },
    },
  })
)
