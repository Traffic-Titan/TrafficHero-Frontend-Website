<script lang="ts">
import { RouterLink, RouterView,useRouter } from "vue-router";
import { QBtn, QToolbar, QLayout, QHeader, QFooter, QDrawer, QPage } from "quasar";
import { ref, onMounted } from "vue";
import { useCookie } from "vue-cookie-next";

export default {
  components: {
    toolbar,
  },

  setup() {
    const textd = ref("");
    const api = process.env.VITE_API;
    const { setCookie, removeCookie, getCookie } = useCookie();
    const login_text = ref("登入");
    const loginout_show = ref(false);
    const router = useRouter();
    const menuList = [
      {
        icon: "message",
        label: "最新消息",
        separator: true,
        path: "/admin/new"
      },
      {
        icon: "send",
        label: "帳戶資訊",
        separator: true,
        path: "/admin/profile"
      },
    
      {
        icon: "error",
        label: "Spam",
        separator: true,
        path: "/admin/new"
      },
      {
        icon: "settings",
        label: "設定",
        separator: false,
        path: "/admin/new"
      },
      {
        icon: "help",
        iconColor: "primary",
        label: "幫助",
        separator: false,
        path: "/admin/new"
      },
    ];

    const logout = async () => {
      setCookie('user','')
      router.push({ path: '/login' });
    };

    const test = () => {
      console.log(api);
    };
    onMounted(async () => {
      const user = getCookie("user").role;
      if (user == "user") {
        login_text.value = user;
        loginout_show.value = true;
      } else if (user == "admin") {
        login_text.value = user;
        loginout_show.value = true;
      }else{
        loginout_show.value = false;
        console.log(user)
      }
    });
    return {
      textd,
      test,
      drawerLeft: ref(false),
      login_text,
      menuList,
      loginout_show,
      logout,
    };
  },
};
</script>

<template>
  <div class="">
    <div class="q-pa-md test">
      <q-layout
        view="lhh LpR lff"
        container
        style="height: 100vh"
        class="shadow-2 rounded-borders"
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
        <q-header>
          <q-toolbar class="text-white test row">
            <p class="btn2"></p>
            <q-btn
              stretch
              flat
              round
              dense
              icon="menu"
              class="q-mr-sm btn"
              @click="drawerLeft = !drawerLeft"
            />
            <q-btn stretch flat class="btn" RouterLink to="/login">{{
              login_text
            }}</q-btn>

            <q-btn stretch flat label="Link" class="btn" />
            <q-btn stretch flat label="登出" class="btn" v-if="loginout_show" @click="logout"/>
          </q-toolbar>
        </q-header>
        <q-footer> </q-footer>
        <q-drawer
          v-model="drawerLeft"
          show-if-above
          :width="200"
          :breakpoint="500"
          bordered
          :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
        >
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

.btn {
  color: white;
  /* background-color: white; */
  width: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.btn2 {
  color: white;
  /* background-color: white; */
  width: 0px;

  display: flex;
  align-items: center;
  justify-content: center;
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
