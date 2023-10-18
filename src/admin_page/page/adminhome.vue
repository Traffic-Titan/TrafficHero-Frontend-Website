<script lang="ts">
import { RouterLink, RouterView, useRouter } from "vue-router";
import { QBtn, QToolbar, QLayout, QHeader, QFooter, QDrawer, QPage } from "quasar";
import { ref, onMounted } from "vue";
import { useCookie } from "vue-cookie-next";
import { get_Profile } from "../../url_manager";
import { apiget } from "../../shared_interface/function/api_function";

export default {
  components: {
    toolbar,
  },

  setup() {
    const textd = ref("");
    const api = process.env.VITE_API;
    const { setCookie, removeCookie, getCookie } = useCookie();
    const jwt = ','+getCookie('user').token
    const login_text = ref("登入");
    const loginout_show = ref(false);
    const router = useRouter();
    const drawerLeft = ref(false)
    const linnershow = ref(true)
    const url = ref('')
    const profile = ref()
    const menuList = [
      {
        icon: "send",
        label: "帳戶資訊",
        separator: true,
        path: "/admin/profile",
      },
      {
        icon: "message",
        label: "最新消息",
        separator: true,
        path: "/admin/new",
      },

      {
        icon: "send",
        label: "觀光資訊",
        separator: true,
        path: "/admin/tourism",
      },
      {
        icon: "send",
        label: "大眾運輸資訊",
        separator: true,
        path: "/admin/profile",
      },

      {
        icon: "send",
        label: "天氣資訊",
        separator: true,
        path: "/admin/weather",
      },

      {
        icon: "send",
        label: "即時訊息推播",
        separator: true,
        path: "/admin/cms",
      },

      //   {
      //     icon: "error",
      //     label: "Spam",
      //     separator: true,
      //     path: "/admin/new",
      //   },
      //   {
      //     icon: "settings",
      //     label: "設定",
      //     separator: false,
      //     path: "/admin/new",
      //   },
      //   {
      //     icon: "help",
      //     iconColor: "primary",
      //     label: "幫助",
      //     separator: false,
      //     path: "/admin/new",
      //   },
    ];

    const logout = async () => {
      setCookie("user", "");
      router.push({ path: "/login" });
    };

    const test = () => {
      console.log(api);
    };
    onMounted(async () => {
        url.value = get_Profile
        console.log(url.value)
        try{
          const res = await apiget(url.value,jwt) 
        profile.value = res.data
        setCookie('profile',profile.value)
        }catch(e){
          console.log(e)
        }
       
      const user = getCookie("user").role;
      if (user == "user") {
        login_text.value = user;
        loginout_show.value = true;
      } else if (user == "admin") {
        login_text.value = user;
        loginout_show.value = true;
      } else {
        loginout_show.value = false;
        console.log(user);
      }
    });
    return {
      textd,
      test,
      drawerLeft,
      login_text,
      menuList,
      loginout_show,
      logout,
      linnershow
    };
  },
};
</script>

<template>
  <div class="">
    <div class="q-pa-md test">
      <q-layout view="lhh LpR lff" container style="height: 100vh" class="shadow-2 rounded-borders"
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
        <q-header>
         
          <q-toolbar class="text-white test row">
            <p class="btn2"></p>
            <q-btn stretch flat round dense icon="menu" class="q-mr-sm btn" @click="drawerLeft = !drawerLeft" />
            <q-toolbar-title>
              Traffic Hero
            </q-toolbar-title>
            <q-space />
            <q-btn stretch flat class="btn" RouterLink to="/login" disable>{{
              login_text
            }}</q-btn>




            <q-btn-dropdown stretch flat label="帳戶">
              <q-list>
              
                <q-item clickable v-close-popup tabindex="0">
                  <q-item-section avatar>
                    <q-avatar icon="folder" color="secondary" text-color="white" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>帳戶資訊</q-item-label>
                
                  </q-item-section>
                  
                </q-item>
                <q-item clickable v-close-popup tabindex="0" @click="logout">
                 
                  <q-item-section >
                    <q-item-label >登出</q-item-label>
                
                  </q-item-section>
                  
                 
                </q-item>
               
              </q-list>
            </q-btn-dropdown>
         
          </q-toolbar>
        </q-header>
        <q-footer> </q-footer>
        <q-drawer v-model="drawerLeft"   show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
          <q-scroll-area class="fit">

            <q-list>
              <template v-for="(menuItem, index) in menuList" :key="index">
                <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple routerlink :to="menuItem.path">
                  <q-item-section avatar class="q-icon">
                    <q-icon :name="menuItem.icon" class="q-icon" />
                  </q-item-section>
                  <q-item-section class="q-menu-text">
                    {{ menuItem.label }}
                  </q-item-section>
                </q-item>
                <q-separator :key="'sep' + index" v-if="menuItem.separator" />
              </template>
            </q-list>
          </q-scroll-area>
        </q-drawer>
        <q-page-container>
          <q-page>
            <router-view></router-view>
          </q-page>
        </q-page-container>
      </q-layout>
    </div>
  </div>
</template>

<style scoped>
.test {
  top: 0%;
  padding: 0%;
}


.main {
  background-color: rgb(230, 240, 255);
}

.tool {
  padding: 10px;
  width: 200px;
}

.q-icon {
  width: 30%;
  padding: 0%;
}

.q-menu-text {
  width: 70%;
  padding: 0%;
}
</style>
