import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import envCompatible from 'vite-plugin-env-compatible';

// 使用类型断言告诉 TypeScript 环境变量对象的类型
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
    envCompatible(envVars) // 将环境变量对象传递给插件
  ],
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: true // 启用inline选项
      }
    }
  }
})
