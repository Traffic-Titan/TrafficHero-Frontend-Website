<template>
  <div class="main">
    <p>最新消息</p>
    <div class="Q-card-con" v-for="(list, index) in newsList" :key="index">
      <QCard class="Q-card">
        <p>{{ list.label }}</p>
       

        <q-btn label="更新" class="button" @click="update(list.path, list.label)" />

        <q-dialog v-model="show">
          <q-carousel
            swipeable
            animated
            v-model="slide"
            control-color="primary"
            padding
            height="200px"
            class="bg-white shadow-1 rounded-borders"
          >
            <q-carousel-slide
              :name="1"
              class="column no-wrap flex-center q-carousel-slide"
            >
              {{ dialog_text }}
              <div class="q-mt-md text-center">
                {{ mess }}
              </div>
            </q-carousel-slide>
          </q-carousel>
        </q-dialog>
      </QCard>
    </div>
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
import { ref, onMounted } from "vue";
import { useCookie } from "vue-cookie-next";

export default {
  setup() {
    const { getCookie } = useCookie();
    const jwt = "," + getCookie("user").token;
    const body = {};
    const message = ref("");
    const show = ref(false);
    const mess = ref("1");
    const dialog_text = ref("");
    const newsList = [
      {
        label: "最新消息-臺鐵",
        path: news_TaiwanRailway,
        show: mess.value,
      },
      {
        label: "最新消息-高鐵",
        path: news_TaiwanHighSpeedRail,
        show: mess.value,
      },

      {
        label: "最新消息-捷運",
        path: news_MRT,
        show: mess.value,
      },
      {
        label: "最新消息-公車",
        path: news_Bus,
        show: mess.value,
      },
      {
        label: "最新消息-公路客運",
        path: news_IntercityBus,
        show: mess.value,
      },
      {
        label: "最新消息-省道",
        path: news_TaiwanRailway,
        show: mess.value,
      },
      {
        label: "最新消息-地區道路",
        path: news_LocalRoad,
        show: mess.value,
      },
      {
        label: "最新消息-臺灣好行公車",
        path: news_TaiwanTouristShuttle,
        show: mess.value,
      },
      {
        label: "最新消息-阿里山林業鐵路",
        path: news_AlishanForestRailway,
        show: mess.value,
      },
      {
        label: "最新消息-高速公路",
        path: news_Freeway,
        show: mess.value,
      },
      {
        label: "最新消息-公共自行車",
        path: news_PublicBicycle,
        show: mess.value,
      },
    ];

    const update = async (url: string, message: string) => {
      try {
        const res = await apiput(body, url, jwt);
        if (res.status == 200) {
          console.log(res.data);
          mess.value = res.data;
          console.log(mess.value);
          dialog_text.value = message;
          show.value = true;
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
      show,
      slide: ref(1),
      mess,
      dialog_text,
    };
  },
};
</script>
<style scoped>
.main {
  display: flex;
  padding: 20px;
  height: 100vh;
  gap: 10px;
  flex-direction: column;
}
.Q-card {
  width: 200px;
  height: 200px;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
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
  flex-direction: row;

  gap: 10px;
}

.q-carousel-slide {
  width: 200px;
}
</style>
