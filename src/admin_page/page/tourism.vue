<template>
  <div class="main">


    <div class="q-linear-progress">
      <q-linear-progress dark rounded indeterminate size="25px" color="blue" class="q-mt-sm" v-if="linnershow" />
    </div>
    <p class="titleText">
      觀光資訊
    </p>
    <QCard class="Qcard">
      <q-item class="item">
        <q-item-section class="title">
          <p>觀光景點 - 全台觀光景點資料</p>
        </q-item-section>
        <q-item-section class="q-menu-text  title-sub">
          {{ tourismspot_text }}
          <q-btn push color="primary" label="更新" @click=" TouristSpot()" v-bind:disable="buttondisable">
          </q-btn>
        </q-item-section>
      </q-item>
      <q-item class="item">
        <q-item-section class="title">
          <p>觀光景點 - 全台觀光景點飯店</p>
        </q-item-section>
        <q-item-section class="q-menu-text  title-sub">
          {{ TouristHotel_text }}
          <q-btn push color="primary" label="更新" @click=" TouristHotel()" v-bind:disable="buttondisable" />
        </q-item-section>
      </q-item>
      <q-item class="item">
        <q-item-section class="title">
          <p>觀光景點 - 全台觀光景點活動</p>
        </q-item-section>
        <q-item-section class="q-menu-text  title-sub">
{{ TouristActivity_text }}
          <q-btn push color="primary" label="更新" @click=" TouristActivity()" v-bind:disable="buttondisable" />
        </q-item-section>
      </q-item>
      <q-item class="item">
        <q-item-section class="title">
          <p>觀光景點 - 全台觀光景點餐飲</p>
        </q-item-section>
        <q-item-section class="q-menu-text  title-sub">
          {{ TouristFood_text }}
          <q-btn push color="primary" label="更新" @click=" TouristFood()" v-bind:disable="buttondisable" />
        </q-item-section>
      </q-item>
      <q-item class="item">
        <q-item-section class="title">
          <p>觀光景點 - 全台觀光景點停車資料</p>
        </q-item-section>
        <q-item-section class="q-menu-text  title-sub">

          {{ TouristParking_text }}
          <q-btn push color="primary" label="更新" @click=" TouristParking()" v-bind:disable="buttondisable" />
        </q-item-section>
      </q-item>
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

import { apiput } from "../../shared_interface/function/api_function";
import { ref, onMounted } from "vue";
import { useCookie } from "vue-cookie-next";

export default {
  setup() {
    const { getCookie } = useCookie();
    const dialog = ref(false)
    const position = ref('top')
    const jwt = "," + getCookie("user").token;
    const body = {};
    const message = ref("");
    const show = ref(false);
    const mess = ref("1");
    const dialog_text = ref("");
    const tourismspot_text = ref('')
    const linnershow = ref(false)
    const TouristActivity_text = ref('')
    const TouristFood_text = ref('')
    const TouristParking_text = ref('')
    const TouristHotel_text = ref('')
    const buttondisable = ref(false)



    const update = async (url: string,) => {
      linnershow.value = true
      buttondisable.value = true
      try {
        const res = await apiput(body, url, jwt);
        if (res.status == 200) {
          linnershow.value = false
          buttondisable.value = false
          console.log(res.data);
          dialog.value = true
          message.value = res.data.message
          setTimeout(() => {
            dialog.value = false;
          }, 1500);
          return res.data.message
        }
      } catch (e) {
        console.log(e);
      }
    };

    const TouristSpot = async () => {
      tourismspot_text.value = await update("/Website/Information/Tourism/TouristSpot")
    }
    const TouristHotel = async () => {
      TouristHotel_text.value = await update("/Website/Information/Tourism/TouristHotel")
    }
    const TouristActivity = async () => {
      TouristActivity_text.value = await update("/Website/Information/Tourism/TouristActivity")
    }
    const TouristFood = async () => {
      TouristFood_text.value = await update("/Website/Information/Tourism/TouristFood")
    }
    const TouristParking = async () => {
      TouristParking_text.value = await update("/Website/Information/Tourism/TouristParking")
    }

    return {
      update,
      message,
      show,
      slide: ref(1),
      mess,
      dialog_text,
      TouristSpot,
      tourismspot_text,
      TouristActivity,
      TouristFood,
      TouristParking,
      TouristHotel,
      TouristActivity_text,
      TouristFood_text,
      TouristParking_text,
      TouristHotel_text,
      dialog,
      position,
      linnershow,
      buttondisable
    };
  },
};
</script>
<style scoped >
.main {
  display: flex;
  padding: 0px;
  height: 100vh;
  align-items: center;
  flex-direction: column;
}

.Qcard {
  width: 80%;

  border-radius: 20px;
  padding: 10px;
}

.item {
  display: flex;
  flex-direction: row;
}

.title {
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: row;
}



.title-sub {
  width: 50%;
  display: flex;
  justify-content: end;
}

.q-linear-progress {
  padding: 0px;
  height: 10px;
  display: flex;
  justify-content: start;
  align-items: start;
}

.titleText {
  font-size: 300%;
}
</style>
  