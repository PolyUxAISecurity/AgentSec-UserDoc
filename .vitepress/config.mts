import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// AgentSec Desktop 用户手册站点配置。
// 内容按语言分目录：CN/（简体中文，现有）、后续 EN/、zh-TW/。
// 正文全部是 md 文件，用 Obsidian 编辑即可；本文件只管导航/侧边栏/插件。
export default withMermaid(
  defineConfig({
    title: 'AgentSec 用户手册',
    description: 'AgentSec Desktop —— AI 驱动的 RPA 脚本安全监控工具 · 用户手册',
    lang: 'zh-CN',
    cleanUrls: true,

    // 文档仍在撰写中：占位图、尚未补全的链接很正常，先不让它们阻断构建。
    // 等内容定稿后可改回 false，用 build 当死链检查器。
    ignoreDeadLinks: true,

    // 让 /CN/ 直接展示这一语言的手册首页（其 README.md 当作首页用，不改文件名）。
    rewrites: {
      'CN/README.md': 'CN/index.md',
    },

    themeConfig: {
      // 语言入口（现仅简体中文；加 EN/繁体时在这里和 sidebar 各加一组即可）
      nav: [
        { text: '简体中文', link: '/CN/' },
        // { text: 'English', link: '/EN/' },
        // { text: '繁體中文', link: '/zh-TW/' },
      ],

      sidebar: {
        '/CN/': [
          { text: '手册首页', link: '/CN/' },
          {
            text: '开始使用',
            collapsed: false,
            items: [
              { text: '01 · 快速入门（跟我做）', link: '/CN/01-quickstart' },
              { text: '02 · 仪表盘详解', link: '/CN/02-dashboard' },
              { text: '03 · 第一次安全分析', link: '/CN/03-first-analysis' },
            ],
          },
          {
            text: '功能详解',
            collapsed: false,
            items: [
              { text: '04 · 监控配置详解', link: '/CN/04-monitoring' },
              { text: '05 · 安全防护日志', link: '/CN/05-security-log' },
              { text: '06 · 安全沙箱', link: '/CN/06-sandbox' },
              { text: '07 · 安全策略', link: '/CN/07-security-policy' },
              { text: '08 · AI 安全助手', link: '/CN/08-ai-assistant' },
              { text: '09 · 设置详解', link: '/CN/09-settings' },
            ],
          },
          {
            text: '参考',
            collapsed: false,
            items: [
              { text: '10 · 关键概念', link: '/CN/10-concepts' },
              { text: '11 · 常见问题', link: '/CN/11-faq' },
            ],
          },
        ],
      },

      search: { provider: 'local' },
      outline: { level: [2, 3], label: '本页目录' },
      docFooter: { prev: '上一页', next: '下一页' },
    },
  })
)
