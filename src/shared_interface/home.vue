<script lang="ts">
import { RouterLink, RouterView, useRouter } from "vue-router";
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
        icon: "error",
        label: "Spam",
        separator: true,
      },

      {
        icon: "help",
        iconColor: "primary",
        label: "幫助",
        separator: false,
      },
    ];

    const logout = async () => {
      setCookie("user", "");
      router.push({ path: "/login" });
    };

    const test = () => {
      console.log(api);
    };
    onMounted(async () => {

      const user = getCookie("user").role;
      setCookie('user','')
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
            <q-toolbar-title>
              Traffic Hero
            </q-toolbar-title>
            <q-space/>
            <q-btn stretch flat class="btn" RouterLink to="/login">登入</q-btn>
          </q-toolbar>
        </q-header>
        <q-footer> </q-footer>
      
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
