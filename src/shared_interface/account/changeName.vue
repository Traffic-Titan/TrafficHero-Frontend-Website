<template>
  <div class="main">
    <QCard class="Qcard">
      <div class=" pp">
        <q-item class="item">
          <q-item-section class="title pp">

            <span class="material-icons icon" @click="back">
              arrow_back
            </span>

          </q-item-section>
        </q-item>
      </div>

      <div class="des">
        <p class="title">修改姓名</p>
        <div class="form-floating mb-3 input">
          <q-input rounded outlined v-model="text" label="輸入性名" class="input" />
          <p>{{ }}</p>
          <div class="btn">
            <q-btn push color="primary" label="更新" @click="updateName"/>
          </div>
        </div>
      </div>

    </QCard>

    <q-dialog v-model="dialog" position="top">
      <q-card style="width: 350px">
        <q-card-section class="row items-center no-wrap">
          <div>
            <div class="text-weight-bold">{{ message }}</div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import type { text } from "stream/consumers";
import { useCookie } from "vue-cookie-next";
import { useRouter } from "vue-router";
import { ref,onMounted } from 'vue'
import { apiput } from "../function/api_function";

export default {
  setup() {
    const { getCookie } = useCookie();
    const router = useRouter();
    const text = ref('')
    const url = '/Website/Account/Profile'
    const jwt = ','+getCookie('user').token
    const dialog = ref(false)
    const message = ref('')
    const profile = ref()
    const back = () => {
      router.go(-1)
    }
    onMounted(() => {
       profile.value = getCookie('profile')
       text.value = profile.value.name
    })
    const updateName = async() => {
     
      
      const body = {
        "name": text.value,
        "email": profile.value.email,
        "password": "string",
        "gender": profile.value.gender,
        "birthday": profile.value.birthday,
        "google_id": "string"
      }

      try {
        const res = await apiput(body,url,jwt)
        message.value = res.data.message
        dialog.value = true
        setTimeout(() => {
            dialog.value = false;
          }, 2000);
        console.log(res.data.message)
      } catch (e) {
        console.log(e)
      }
    }
    return {
      text,
      back,
      updateName,
      message,
      dialog
    }
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgb(230, 240, 255);
}

.Qcard {
  width: 60%;
  height: 60%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 30px;
}

.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
}

.pp {
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  padding: 0%;

}

.icon {
  width: 60px;
  height: 60px;
  font-size: 30px;
}

.title {
  font-size: 200%;
}

.input {
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.des {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
