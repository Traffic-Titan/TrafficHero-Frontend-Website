import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import envCompatible from 'vite-plugin-env-compatible';


const envVars = {
  VITE_API: process.env.VITE_API,
  VITE_websiteToken: process.env.VITE_websiteToken
} as { [key: string]: string };

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      autoImportComponentCase: 'pascal',
      sassVariables: 'src/quasar-variables.sass'
    }),
    envCompatible(envVars)
  ],
  define: {

    'import.meta.env.VITE_API': JSON.stringify(process.env.VITE_API),
    'import.meta.env.VITE_websiteToken': JSON.stringify(process.env.VITE_websiteToken),
  },
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  }
})
