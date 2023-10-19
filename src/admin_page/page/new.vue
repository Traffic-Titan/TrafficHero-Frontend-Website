<template>
  <div class="main">
    <div class="q-linear-progress">
      <q-linear-progress dark rounded indeterminate  size="25px"  color="blue" class="q-mt-sm" v-if="linnershow" />
    </div>
    <p class="titleText">
    最新消息
    </p>
    <q-card class="Q-card">
      <q-item class="item" v-for="(list, index) in newsList" :key="index">
        <q-item-section class="title">
          <p>{{ list.label }}</p>
       
        </q-item-section>
        <q-space />
        <q-item-section class="title2">
          <p>{{ list.show }}</p>
        </q-item-section>
       
          <q-btn push color="primary" label="更新" @click="update(list.path,index)" v-bind:disable="buttondisable" :loading="buttondisable">
          </q-btn>
      
      </q-item>
    </q-card>
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
import {
  news_TaiwanRailway,
  news_TaiwanHighSpeedRail,
  news_MRT,
  news_Bus,
  news_IntercityBus,
  news_ProvincialHighway,
  news_LocalRoad,
  news_TaiwanTouristShuttle,
  news_AlishanForestRailway,
  news_Freeway,
  news_PublicBicycle,
} from "../../url_manager";
import { apiput } from "../../shared_interface/function/api_function";
import { ref } from "vue";
import { useCookie } from "vue-cookie-next";

export default {
  setup() {
    const { getCookie } = useCookie();
    const jwt = "," + getCookie("user").token;
    const body = {};
    const message = ref('')
    const mess = ref("1");
    const dialog_text = ref("");
    const dialog = ref(false)
    const linnershow = ref(false)
    const buttondisable = ref(false)
    const newsList = ref([
      {
        label: "最新消息-臺鐵",
        path: news_TaiwanRailway,
        show: '',
        type: "rail"
      },
      {
        label: "最新消息-高鐵",
        path: news_TaiwanHighSpeedRail,
        show: '',
        type: "rail"
      },

      {
        label: "最新消息-捷運",
        path: news_MRT,
        show:'',
        type: "rail"
      },
      {
        label: "最新消息-公車",
        path: news_Bus,
        show: '',
        type: "road"
      },
      {
        label: "最新消息-公路客運",
        path: news_IntercityBus,
        show:'',
        type: "road"
      },
      {
        label: "最新消息-省道",
        path: news_TaiwanRailway,
        show: '',
        type: "way"
      },
      {
        label: "最新消息-地區道路",
        path: news_LocalRoad,
        show: '',
        type: "way"
      },
      {
        label: "最新消息-臺灣好行公車",
        path: news_TaiwanTouristShuttle,
        show: '',
        type: "road"
      },
      {
        label: "最新消息-阿里山林業鐵路",
        path: news_AlishanForestRailway,
        show: '',
        type: "rail"
      },
      {
        label: "最新消息-高速公路",
        path: news_Freeway,
        show: '',
        type: "way"
      },
      {
        label: "最新消息-公共自行車",
        path: news_PublicBicycle,
        show: '',
        type: "road"
      },
    ]);

    const update = async (url: string, index: any) => {
      linnershow.value = true
      buttondisable.value = true
      try {
        const res = await apiput(body, url, jwt);
        if (res.status == 200) {
          linnershow.value = false
          buttondisable.value = false
          newsList.value[index].show = res.data.message;
          dialog.value = true
          console.log(newsList.value[index].show)
          
          message.value = res.data.message
          newsList.value[index].show = res.data.message;
          return newsList.value[index].show
        }
      } catch (e) {
        console.log(e);
      }
      
    };
    return {
      update,
      news_TaiwanRailway,
      news_TaiwanHighSpeedRail,
      news_MRT,
      news_Bus,
      news_IntercityBus,
      news_ProvincialHighway,
      news_LocalRoad,
      news_TaiwanTouristShuttle,
      news_AlishanForestRailway,
      news_Freeway,
      news_PublicBicycle,
      message,
      newsList,
      slide: ref(1),
      mess,
      dialog,
      dialog_text,
      linnershow,
      buttondisable
    };
  },
};
</script>
<style scoped>
.main {
  display: flex;
  padding: 0px;
  height: 100vh;
  align-items: center;
  justify-content: start;
  flex-direction: column;
}

.Q-card {
  width: 80%;
  display: flex;
  padding: 10px;
  flex-direction: column;
  border-radius: 20px;
}

.button {
  color: white;
  background-color: rgb(67, 150, 200);
  width: 70px;
  height: 30px;
  border-radius: 20px;
}

.Q-card-con {
  display: flex;
  flex-direction: row;
  width: 200px;

}

.q-carousel-slide {
  width: 200px;
  display: flex;
  justify-content: start;
  align-items: start;
}
.titleText{
  font-size:300%;

}

.q-linear-progress{
  padding: 0px;
  height: 10px;
}

.title2{
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
