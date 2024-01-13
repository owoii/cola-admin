import { fileURLToPath, URL } from 'node:url'
// import VueDevTools from 'vite-plugin-vue-devtools'
// import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineApplicationConfig } from '@cola/vite-config'
export default defineApplicationConfig({
  overrides: {
    server: {
      port: 5180
    },
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
// https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     port: 5180
//   },
//   plugins: [
//     vue(),
//     vueJsx(),
//     VueDevTools()
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })
