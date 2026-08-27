import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ja-JP',
  title: 'Avatar Blink Fix',
  description: '表情改変で壊れたまばたきを自動で修正する VRChat アバター向け Unity ツールの使い方ドキュメント',
  base: '/abf-docs/',
  head: [
    ['meta', { name: 'theme-color', content: '#f5c518' }],
  ],
  themeConfig: {
    nav: [
      { text: '導入', link: '/guide/install' },
      { text: '使い方', link: '/guide/auto-fix' },
      { text: 'FAQ', link: '/faq' },
      { text: '更新履歴', link: '/changelog' },
      { text: 'BOOTH', link: 'https://lemoneru.booth.pm/items/7074770' },
    ],
    sidebar: [
      {
        text: 'はじめに',
        items: [
          { text: 'Avatar Blink Fix とは', link: '/' },
          { text: '導入方法', link: '/guide/install' },
          { text: '2.x をお使いの方へ', link: '/guide/from-2x' },
        ],
      },
      {
        text: '使い方',
        items: [
          { text: '自動修正（推奨）', link: '/guide/auto-fix' },
          { text: 'ベイクモード', link: '/guide/bake' },
          { text: 'メッシュ入れ替え式（従来方式）', link: '/guide/meshswap' },
        ],
      },
      {
        text: 'サポート',
        items: [
          { text: 'よくある質問（FAQ）', link: '/faq' },
          { text: '更新履歴', link: '/changelog' },
        ],
      },
    ],
    search: {
      provider: 'local',
      options: {
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
    outline: { label: 'このページの内容' },
    docFooter: { prev: '前のページ', next: '次のページ' },
    lastUpdated: { text: '最終更新' },
    returnToTopLabel: 'ページの先頭へ',
    sidebarMenuLabel: 'メニュー',
    darkModeSwitchLabel: 'ダークモード',
    footer: {
      message: 'お問い合わせは <a href="https://lemoneru.booth.pm/items/7074770">BOOTH</a> のメッセージからお願いします。',
      copyright: '© LEMONERU',
    },
  },
})
