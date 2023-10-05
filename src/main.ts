// FILE: main.js

import { createApp } from 'vue'
import { Quasar, QBtn,QToolbar,QLayout,QHeader,QFooter,QDrawer,QPage,QPageContainer,QScrollArea, QPageSticky, QPageScroller, QInput, QBtnDropdown, QList, QItemLabel, QIntersection, QSeparator  } from 'quasar'; 
import quasarLang from 'quasar/lang/zh-TW'


// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'
import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css'
import '@quasar/extras/material-symbols-sharp/material-symbols-sharp.css'
import '@quasar/extras/mdi-v7/mdi-v7.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import '@quasar/extras/ionicons-v4/ionicons-v4.css'
import '@quasar/extras/eva-icons/eva-icons.css'
import '@quasar/extras/themify/themify.css'
import '@quasar/extras/line-awesome/line-awesome.css'
import '@quasar/extras/bootstrap-icons/bootstrap-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import { VueCookieNext } from 'vue-cookie-next'
// import dotenv from 'dotenv';
// dotenv.config();

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
  /*
  config: {
    brand: {
      // primary: '#e46262',
      // ... or all other brand colors
    },
    notify: {...}, // default set of options for Notify Quasar plugin
    loading: {...}, // default set of options for Loading Quasar plugin
    loadingBar: { ... }, // settings for LoadingBar Quasar plugin
    // ..and many more (check Installation card on each Quasar component/directive/plugin)
  }
  */
},)
myApp.use(router);
myApp.use(VueCookieNext);
VueCookieNext.config({ expire: '7d' })




myApp.component('q-btn', QBtn);
myApp.component('q-toolbar', QToolbar);
myApp.component('q-layout', QLayout);
myApp.component('q-page', QPage);
myApp.component('q-page-container', QPageContainer);
myApp.component('q-drawer', QDrawer);
myApp.component('q-footer', QFooter);
myApp.component('q-header', QHeader);
myApp.component('q-scroll-area', QScrollArea);
myApp.component('q-page-sticky', QPageSticky);
myApp.component('q-page-scroller', QPageScroller);
myApp.component('q-input', QInput);
myApp.component('q-btn-dropdown', QBtnDropdown);
myApp.component('q-list', QList);
myApp.component('q-item-label', QItemLabel);
myApp.component('q-item-section', QIntersection);
myApp.component('q-separator', QSeparator);



// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
