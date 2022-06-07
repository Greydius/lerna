import Antd from 'ant-design-vue/lib'
import Icon from '@ant-design/icons-vue/lib'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Antd)
  nuxtApp.vueApp.component('a-icon', Icon)
})