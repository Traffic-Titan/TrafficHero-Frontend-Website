<template>
  <div class="q-pa-md page">
    <q-layout>
      <q-page-container>
        <q-page>
          <div class="main">
            <q-card class="q-card">
              <div class="login-text-con">
                <p class="login-text">登入</p>
              </div>
              <div class="textinput_container">
                <q-input rounded outlined v-model="email_text" label="電子郵件"  type="email"/>
                <q-input rounded outlined v-model="password_text" label="密碼" type="password"/>
                {{ message }}
              </div>
              <div class="button-contaner">
                <q-btn class="button" @click="loginClick" label="登入" :loading="buttondisable"/>
                <q-btn class="button" RouterLink to="/register" label="註冊" />
              </div>
            </q-card>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { apipost } from "../shared_interface/function/api_function";
import { useCookie } from "vue-cookie-next";
import { url_login } from "../url_manager";
import { encryptPassword } from "./function/SHA256";

export default {
  components: {},
  setup() {
    const email_text = ref("");
    const password_text = ref("");
    const res = ref();
    const loginurl = url_login;
    const message = ref("");
    const router = useRouter();
    const buttondisable = ref(false)
    const { setCookie, getCookie } = useCookie();

    const loginClick = async () => {
      buttondisable.value = true
      const body = {
        email: email_text.value,
        password: encryptPassword(password_text.value),
      };
      try {
        res.value = await apipost(body, loginurl, "");

        console.log(res.value);
      } catch (e: any) {
        console.log(e);
        buttondisable.value = false
        message.value = e.response.data.detail;
      }
      if (res.value.status == 200) {
        setCookie("user", res.value.data);
        message.value = res.value.data.message;
        const user = getCookie("user").role;
        buttondisable.value = false
        if (user == "user") {
          router.push({ path: "/" });
        } else if (user == "admin") {
          router.push({ path: "/admin" });
        } else {
        }
      }
    };

    const test = async () => {
      console.log(getCookie("user"));

    };
    return {
      email_text,
      password_text,
      loginClick,
      message,
      test,
      buttondisable
    };
  },
};
</script>

<style scoped>
.textinput {
  width: 160%;
}

.login-text {
  font-size: 300%;
}

.login-text-con {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.textinput_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.textinput_container > .row {
  --bs-gutter-x : 0;
}

.page {
  padding: 0%;
  display: flex;
  align-items: center;
}

.main {
  background-color: rgb(62, 111, 179);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.button {
  color: white;
  background-color: rgb(67, 150, 200);
}

.button-contaner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 10px;
}

.q-card {
  width: 30%;
  min-height: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 30px;
}
</style>
./function/api_function
