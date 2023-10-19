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
        <q-item-section class="q-menu-text" >
          {{ profile.name }}
        </q-item-section>
      </q-item>

      <q-item clickable class="item" routerLink to="/admin/changeEmail">
        <q-item-section class="title" >
          <p>電子郵件</p>
        </q-item-section>
        <q-item-section class="q-menu-text  title-sub" >
          {{ profile.email }}
        </q-item-section>
      </q-item>

      <q-item clickable class="item" routerLink to="/admin/changeGender">
        <q-item-section class="title" >
          <p>性別：</p>
        </q-item-section>
        <q-item-section class="q-menu-text  title-sub" >
          {{ profile.gender }}
        </q-item-section>
      </q-item>

      <q-item clickable class="item" routerLink to="/admin/changeBirthday">
        <q-item-section class="title" >
        <p>生日：</p>
        </q-item-section>
        <q-item-section class="q-menu-text  title-sub" >
          {{ profile.birthday }}
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

    onMounted(async() => {
        url.value = get_Profile
        const res = await apiget(url.value,jwt) 
        profile.value = res.data
        setCookie('profile',profile.value)
    });
    return {
      profile
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
  align-items: center;
}

.title-sub{
  width: 80%;
  display: flex;
  justify-content: end;
}

.titleText{
  font-size:300%;
}
</style>
