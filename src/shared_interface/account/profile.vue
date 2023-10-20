<template>
  <div class="main">

  <p class="titleText">
   基本資料
    </p>
  
    <q-card class="q-card">
   
      <q-item clickable class="item" routerLink to="/admin/changeName">
        <q-item-section class="title">
          <p>姓名： </p> 
        </q-item-section>
        <q-space />
        <q-item-section class="q-menu-text title-sub" >
      {{ name }}
        </q-item-section>
      </q-item>

      <q-item clickable class="item" routerLink to="/admin/changeEmail">
        <q-item-section class="title" >
          <p>電子郵件</p>
        </q-item-section>
        <q-item-section class="q-menu-text  title-sub" >
         {{ email  }}
        </q-item-section>
      </q-item>

      <q-item clickable class="item" routerLink to="/admin/changeGender">
        <q-item-section class="title" >
          <p>性別：</p>
        </q-item-section>
        <q-item-section class="q-menu-text  title-sub" >
        {{ gender }}
        </q-item-section>
      </q-item>

      <q-item clickable class="item" routerLink to="/admin/changeBirthday">
        <q-item-section class="title" >
        <p>生日：</p>
        </q-item-section>
        <q-item-section class="q-menu-text  title-sub" >
        {{ birthday }}
        </q-item-section>
      </q-item>
    </q-card>
  </div>
</template>

<script lang="ts">
import { useCookie } from "vue-cookie-next";
import { ref, onMounted } from "vue";
import { apiget } from "../function/api_function";
import {get_Profile} from '../../url_manager'
export default {
  setup() {
    const {getCookie,setCookie} = useCookie();
    const url = ref('');
    const jwt: string = ','+getCookie('user').token
    const profile = ref()
    const name = ref('')
    const email = ref('')
    const gender = ref('')
    const birthday = ref('')
    onMounted(async() => {
        url.value = get_Profile
        try{
        const res = await apiget(url.value,jwt) 
        profile.value = res.data
        name.value = profile.value.name
        email.value = profile.value.email
        gender.value = profile.value.gender
        birthday.value = profile.value.birthday
        setCookie('profile',profile.value)
        }catch(e){
          console.log(e)
        }
       
    });
    return {
      profile,
      name,
      email,
      gender,
      birthday
    };
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 30px;
}

.q-card {
  width: 80%;
  border-radius: 10px;
  padding: 10px;
  
}

.item{
  display: flex;
  flex-direction: row;
}

.title{
  width: 20%;
  display: flex;
  align-items: start;
}

.title-sub{
  width: 80%;
  display: flex;
  align-items: end;
  justify-content: center;
  height: 10px;
}

.titleText{
  font-size:300%;
}
</style>
