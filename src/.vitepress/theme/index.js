import DefaultTheme from 'vitepress/theme'

import Comments from '../components/Comments.vue'
import SimpleNewsletter from '../components/SimpleNewsletter.vue'
import ZapierLogo from '../components/ZapierLogo.vue'
import Popup from '../components/Popup.vue'

import VueCookieAcceptDecline from 'vue-cookie-accept-decline'
import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css'

import { useNewsletterStore } from './store/NewsletterStore'

import MyLayout from './MyLayout.vue'
import { createPinia } from 'pinia'

import './custom.css'

const pinia = createPinia()

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.use(pinia)

    app.component('VueCookieAcceptDecline', VueCookieAcceptDecline)
    app.component('Comments', Comments)
    app.component('SimpleNewsletter', SimpleNewsletter)
    app.component('Popup', Popup)
    app.component('ZapierLogo', ZapierLogo)

    const store = useNewsletterStore()
  },
}
