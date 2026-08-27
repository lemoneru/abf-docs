import DefaultTheme from 'vitepress/theme'
import './custom.css'
import AgreeInstall from './components/AgreeInstall.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: any }) {
    app.component('AgreeInstall', AgreeInstall)
  },
}
