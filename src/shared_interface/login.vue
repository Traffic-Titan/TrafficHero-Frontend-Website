<template>
  <div class="q-pa-md page main">
    <q-layout>
      <q-page-container class="">
        <q-page>
          <div class="sticky-right ">
            <QCard class="QCard ">
              <div class="">
                <div class="textinput">
                  <QInput v-model="email" label="電子郵件" class="textinput" type="email"></QInput>
                  <QInput v-model="password" label="密碼" class="textinput" type="password"></QInput>
                </div>
                <div>
                  <QBtn class="button" @click="loginClick">登入</QBtn>
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
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { apipost } from '../function/api_function'
import VueCookies from "vue-cookies";
export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const res = ref()
    const loginurl = import.meta.env.VITE_login

    const onMounted = () => {

    }

    const loginClick = async () => {
      try{
        res.value = await apipost(email.value, password.value, loginurl,'');
        VueCookies.VueCookies.set('usertoken',res.value.data)
      }catch( e){
        console.log(e)
      };
      
     



    };
    return {
      email,
      password,
      loginClick

    }
  }
}
</script>

<style >
.textinput {
  width: 200px;
  padding: 10px;
}

.page {
  padding: 0%;
  display: flex;
  align-items: center;
}


.main {
  background-color: rgb(62, 111, 179);
  display: flex;
  align-items: center;
}

.button {
  color: white;
  background-color: rgb(67, 150, 200);
  display: flex;

}

.QCard {
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;


}
</style>