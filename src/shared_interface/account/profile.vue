<template>
  <div class="main">
    <p>個人資料</p>

    <QCard class="Qcard">
      <q-item clickable>
        <q-item-section avatar class="q-icon">
          {{ "09" }}
        </q-item-section>
        <q-item-section class="q-menu-text">
          {{ "test" }}
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section avatar class="q-icon">
          {{ "09" }}
        </q-item-section>
        <q-item-section class="q-menu-text">
          {{ "test" }}
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section avatar class="q-icon">
          {{ "09" }}
        </q-item-section>
        <q-item-section class="q-menu-text">
          {{ "test" }}
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section avatar class="q-icon">
          {{ "09" }}
        </q-item-section>
        <q-item-section class="q-menu-text">
          {{ "test" }}
        </q-item-section>
      </q-item>
    </QCard>
  </div>
</template>

<script lang="ts">
import { useCookie } from "vue-cookie-next";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { apiget } from "../function/api_function";
import {get_Profile} from '../../url_manager'
export default {
  setup() {
    const router = useRouter();
    const {getCookie} = useCookie();
    const url = ref('');
    const jwt: string = ','+getCookie('user').token

    onMounted(async() => {
        url.value = get_Profile
        console.log(url.value)
        console.log(jwt)
        const res = await apiget(url.value,jwt) 
        console.log(res)
    });
    return {};
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.Qcard {
  width: 50%;
  border-radius: 10px;
  padding: 10px;
}
</style>
