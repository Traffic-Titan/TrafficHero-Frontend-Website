/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_API: string
    readonly VITE_login: string
    readonly VITE_websiteToken: string
  
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  
  declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  
