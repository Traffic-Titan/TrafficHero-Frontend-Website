import { loadEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'


export default defineConfig(({ mode }) => {
  const url = loadEnv(mode, process.cwd()).VITE_PROXY_API;
  return {
    plugins: [
      vue({
        template: { transformAssetUrls }
      }),
      quasar({
        sassVariables: 'src/quasar-variables.sass'
      })
    ],
    server: {
  
      proxy: {
        '/api/': {
          target: url,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace('/api', '')
        }
      }
    }
  }
});
