<template>
  <div class="q-pa-md page">
    <q-layout>
      <q-page-container>
        <q-page>
          <div class="main">
            <QCard class="QCard">
              <div class="">
                <div class="login-text-con">
                  <p class="login-text">登入</p>
                </div>

                <div class="textinput-contaner">
                  <q-input
                    rounded
                    outlined
                    v-model="email_text"
                    label="電子郵件"
                    type="email"
                  />
                  <q-input
                    rounded
                    outlined
                    v-model="password_text"
                    label="密碼"
                    type="password"
                  />

                  {{ message }}
                </div>

                <div class="button-contaner">
                  <QBtn class="button" @click="loginClick" label="登入" />
                  <QBtn class="button" RouterLink to="/register" label="註冊" />
                </div>
                </div>
            </QCard>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { apipost } from "../function/api_function";
import { useCookie } from 'vue-cookie-next'
import { url_login } from "../url_manager";
import { text } from "stream/consumers";
import { Cookies } from "quasar";

export default {
  setup() {
    const email_text = ref("");
    const password_text = ref("");
    const res = ref();
    const loginurl = url_login;
    const message = ref('')
    const {setCookie, removeCookie,getCookie} = useCookie()
    const onMounted = () => {
      
    };

    const loginClick = async () => {

      const body ={
        email : email_text.value,
        password : password_text.value
      }
      try {
        res.value = await apipost(body, loginurl, "");
        console.log(res.value)
      } catch (e:any) {
        console.log(e);
        message.value = e.response.data.detail
      }

      if(res.value.status == 200){
      setCookie('user',res.value.data.token)
      message.value = res.value.data.detail
      }
    };

    const test = async () =>{
      console.log(  getCookie('user'))
    
    }
    return {
      email_text,
      password_text,
      loginClick,
      message,
      test
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

.textinput-contaner {
  display: grid;

  gap: 10px;
}

.textinput-contaner q-input {
  text-align: center; /* 输入框居中对齐 */
  margin: 0%;
  padding: 0%;
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

.QCard {
  width: 30%;
  height: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 30px;
}
</style>
