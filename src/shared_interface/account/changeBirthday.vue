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
     
     
      <p class="title">修改生日日期</p>
      <div class="form-floating mb-3 input" >
        <q-input rounded standout v-model="date" filled type="date"  />
        <p>{{ }}</p>
        <div class="btn">
          <q-btn push color="primary" label="更新" @click="update" />
        </div>
      </div>
    </QCard>
  </div>
</template>

<script lang="ts">
import type { text } from "stream/consumers";
import { useCookie } from "vue-cookie-next";
import { useRouter } from "vue-router";
import { ref } from 'vue'

export default {
  setup() {
    const { } = useCookie();
    const router = useRouter();
    const text = ref('')
    const date = ref()

    const back =()=>{
      router.go(-1)
    }

    const update = ()=>{
      console.log(date.value)
    }
    return {
      text,
      back,
      date,
     update
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
  height: 50%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: start;
  align-items: center ;
  border-radius: 30px;
}

.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
}

.pp{
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  padding: 0%;

}
.icon{
  width: 60px;
  height: 60px;
  font-size: 30px;
}

.title{
  font-size: 200%;
}

.input{
  width:70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
