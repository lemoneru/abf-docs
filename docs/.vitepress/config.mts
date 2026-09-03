import { defineConfig } from 'vitepress'

const jaNav = [
  { text: 'VCC / ALCOM に追加', link: '/add' },
  { text: '無料版と有料版', link: '/guide/editions' },
  { text: '導入', link: '/guide/install' },
  { text: '使い方', link: '/guide/workflow' },
  { text: 'FAQ', link: '/faq' },
  { text: '更新履歴', link: '/changelog' },
  { text: 'BOOTH', link: 'https://lemoneru.booth.pm/items/7074770' },
]

const jaSidebar = [
  {
    text: 'はじめに',
    items: [
      { text: 'Avatar Blink Fix とは', link: '/' },
      { text: 'VCC / ALCOM に追加', link: '/add' },
      { text: '無料版と有料版の違い', link: '/guide/editions' },
      { text: '導入方法', link: '/guide/install' },
      { text: 'コンプリート版へのアップグレード', link: '/guide/unlock-key' },
      { text: '2.x をお使いの方へ', link: '/guide/from-2x' },
    ],
  },
  {
    text: '使い方',
    items: [
      { text: '実際の修正の流れ', link: '/guide/workflow' },
      { text: '修正モードの選び方', link: '/guide/bake-vs-normal' },
      { text: '自動修正（推奨）', link: '/guide/auto-fix' },
      { text: '自動修正（ベイクモード）', link: '/guide/bake' },
      { text: '手動修正（プリセットが無いとき）', link: '/guide/manual-fix' },
      { text: 'フェイストラッキング', link: '/guide/face-tracking' },
      { text: 'BlendShapeを追加したとき', link: '/guide/added-blendshapes' },
      { text: 'メッシュ入れ替え式（従来方式）', link: '/guide/meshswap' },
      { text: 'アニメーションの合成（おまけ）', link: '/guide/animation' },
    ],
  },
  {
    text: 'サポート',
    items: [
      { text: 'よくある質問（FAQ）', link: '/faq' },
      { text: '更新履歴', link: '/changelog' },
      { text: '利用規約', link: '/terms' },
    ],
  },
]

const enNav = [
  { text: 'Add to VCC / ALCOM', link: '/en/add' },
  { text: 'Free vs Complete', link: '/en/guide/editions' },
  { text: 'Install', link: '/en/guide/install' },
  { text: 'How to Use', link: '/en/guide/workflow' },
  { text: 'FAQ', link: '/en/faq' },
  { text: 'Changelog', link: '/en/changelog' },
  { text: 'BOOTH', link: 'https://lemoneru.booth.pm/items/7074770' },
]

const enSidebar = [
  {
    text: 'Getting Started',
    items: [
      { text: 'What is Avatar Blink Fix', link: '/en/' },
      { text: 'Add to VCC / ALCOM', link: '/en/add' },
      { text: 'Free vs Complete Edition', link: '/en/guide/editions' },
      { text: 'Installation', link: '/en/guide/install' },
      { text: 'Upgrade to the Complete Edition', link: '/en/guide/unlock-key' },
      { text: 'Coming from 2.x', link: '/en/guide/from-2x' },
    ],
  },
  {
    text: 'How to Use',
    items: [
      { text: 'The Full Workflow', link: '/en/guide/workflow' },
      { text: 'How to Choose a Fix Mode', link: '/en/guide/bake-vs-normal' },
      { text: 'Auto Fix (Recommended)', link: '/en/guide/auto-fix' },
      { text: 'Auto Fix (Bake Mode)', link: '/en/guide/bake' },
      { text: 'Manual Fix (No Preset)', link: '/en/guide/manual-fix' },
      { text: 'Face Tracking', link: '/en/guide/face-tracking' },
      { text: 'Added BlendShapes', link: '/en/guide/added-blendshapes' },
      { text: 'Mesh Swap (Legacy)', link: '/en/guide/meshswap' },
      { text: 'Animation Merging (Extra)', link: '/en/guide/animation' },
    ],
  },
  {
    text: 'Support',
    items: [
      { text: 'FAQ', link: '/en/faq' },
      { text: 'Changelog', link: '/en/changelog' },
      { text: 'Terms of Use', link: '/en/terms' },
    ],
  },
]

export default defineConfig({
  title: 'Avatar Blink Fix',
  base: '/abf-docs/',
  head: [
    ['meta', { name: 'theme-color', content: '#f5c518' }],
  ],
  locales: {
    root: {
      label: '日本語',
      lang: 'ja-JP',
      description: '表情改変で壊れたまばたきを自動で修正する VRChat アバター向け Unity ツールの使い方ドキュメント',
      themeConfig: {
        nav: jaNav,
        sidebar: jaSidebar,
        outline: { label: 'このページの内容' },
        docFooter: { prev: '前のページ', next: '次のページ' },
        lastUpdated: { text: '最終更新' },
        returnToTopLabel: 'ページの先頭へ',
        sidebarMenuLabel: 'メニュー',
        darkModeSwitchLabel: 'ダークモード',
        langMenuLabel: '言語を変更',
        footer: {
          message: '<a href="/abf-docs/terms">利用規約</a>　|　お問い合わせは <a href="https://lemoneru.booth.pm/items/7074770">BOOTH</a> のメッセージからお願いします。',
          copyright: '© LEMONERU',
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      description: 'How to use Avatar Blink Fix, a Unity editor tool for VRChat avatars that automatically repairs blink BlendShapes broken by facial expression editing',
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar,
        outline: { label: 'On this page' },
        docFooter: { prev: 'Previous', next: 'Next' },
        lastUpdated: { text: 'Last updated' },
        footer: {
          message: '<a href="/abf-docs/en/terms">Terms of Use</a>　|　For support, please message us on <a href="https://lemoneru.booth.pm/items/7074770">BOOTH</a>.',
          copyright: '© LEMONERU',
        },
      },
    },
  },
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '検索', buttonAriaLabel: '検索' },
              modal: {
                displayDetails: '詳細を表示',
                resetButtonTitle: 'リセット',
                backButtonTitle: '戻る',
                noResultsText: '見つかりませんでした:',
                footer: {
                  selectText: '選択',
                  navigateText: '移動',
                  closeText: '閉じる',
                },
              },
            },
          },
        },
      },
    },
  },
})
