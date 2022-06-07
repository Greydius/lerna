import { defineNuxtConfig } from 'nuxt'

const lifecycle = process.env.npm_lifecycle_event

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['ant-design-vue/dist/antd.less', '~/assets/variables.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            'primary-color': '#c91515',
          },
          javascriptEnabled: true,
        }
      }
    }
  },
  build: {
    transpile: 
      lifecycle === 'build' || lifecycle === 'generate' ? ['ant-design-vue'] : [],
  }
})
