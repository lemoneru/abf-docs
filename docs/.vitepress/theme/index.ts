import DefaultTheme from 'vitepress/theme'
import './custom.css'
import AgreeInstall from './components/AgreeInstall.vue'

/**
 * FAQ は質問を <details> で畳んでいるため、`/faq#anchor` で来たときに
 * 該当の質問を開いた状態にしてからスクロールする。
 */
function openTargetDetails() {
  if (typeof document === 'undefined') return
  const hash = decodeURIComponent(location.hash.replace('#', ''))
  if (!hash) return
  const el = document.getElementById(hash)
  if (!el) return
  const details = el instanceof HTMLDetailsElement ? el : el.closest('details')
  if (details) details.open = true
  requestAnimationFrame(() => el.scrollIntoView())
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }: { app: any; router: any }) {
    app.component('AgreeInstall', AgreeInstall)

    if (typeof window !== 'undefined') {
      window.addEventListener('hashchange', openTargetDetails)
      router.onAfterRouteChanged = () => setTimeout(openTargetDetails, 0)
      setTimeout(openTargetDetails, 0)
    }
  },
}
