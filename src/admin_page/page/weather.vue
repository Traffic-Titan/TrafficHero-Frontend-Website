<template>
  <div class="main">
    <div>

    </div>

    <q-tabs v-model="tab" dense class="text-grey Qtabe1" active-color="primary" indicator-color="primary" align="justify"
      narrow-indicator>
      <q-tab name="mails" label="晴" />
      <q-tab name="alarms" label="陰" />
      <q-tab name="movies" label="多雲" />
    </q-tabs>

    <q-separator />
    <div class="q-linear-progress">
      <q-linear-progress dark rounded indeterminate size="25px" color="blue" class="q-mt-sm" v-if="linnershow" />
    </div>
    <q-tab-panels v-model="tab" animated class="Qtabe" v-for="(list, index) in options" :key="index">
      <q-tab-panel name="mails" v-if="list.type1 == '晴'">
        <QCard class="Qcard">
          <div class="row">
            <div class="column">
              <img :src=list.icon_url_day class="img" onerror="this.src='https://icon2.cleanpng.com/20180605/ijl/kisspng-computer-icons-image-file-formats-no-image-5b16ff0d2414b5.0787389815282337411478.jpg'">
              <p>白天</p>
              <img :src=list.icon_url_night class="img" onerror="this.src='https://icon2.cleanpng.com/20180605/ijl/kisspng-computer-icons-image-file-formats-no-image-5b16ff0d2414b5.0787389815282337411478.jpg'">
              <p>夜晚</p>
            </div>

            <q-item class="item" :key="index">
              <q-item-section class="title">
                <p> 類型： {{ list.weather }}</p>
                <q-input filled v-model=list.icon_url_day label="白天 URL" :dense="dense" />
                <q-input filled v-model=list.icon_url_night label="夜晚 URL" :dense="dense" />
              </q-item-section>
              <q-space />

            </q-item>
            <q-space />
            <q-btn push color="primary" label="更新" @click=" update(list.id,list.icon_url_day,list.icon_url_night)" />
          </div>

        </QCard>
      </q-tab-panel>

      <q-tab-panel name="alarms" v-if="list.type1 == '陰'">
        <QCard class="Qcard">
          <div class="row">
            <div class="column">
              <img :src=list.icon_url_day class="img" onerror="this.src='https://icon2.cleanpng.com/20180605/ijl/kisspng-computer-icons-image-file-formats-no-image-5b16ff0d2414b5.0787389815282337411478.jpg'">
              <p>白天</p>
              <img :src=list.icon_url_night class="img" onerror="this.src='https://icon2.cleanpng.com/20180605/ijl/kisspng-computer-icons-image-file-formats-no-image-5b16ff0d2414b5.0787389815282337411478.jpg'">
              <p>夜晚</p>
            </div>

            <q-item class="item" :key="index">
              <q-item-section class="title">
                <p> 類型： {{ list.type1 + list.type2 }}</p>
                <q-input filled v-model=list.icon_url_day label="白天 URL" :dense="dense" />
                <q-input filled v-model=list.icon_url_night label="夜晚 URL" :dense="dense" />
              </q-item-section>
              <q-space />
            </q-item>
            <q-space />
            <q-btn push color="primary" label="更新" @click=" update(list.id,list.icon_url_day,list.icon_url_night)" />
          </div>

        </QCard>
      </q-tab-panel>

      <q-tab-panel name="movies" v-if="list.type1 == '多雲'">
        <QCard class="Qcard">
          <div class="row">
            <div class="column">
              <img :src=list.icon_url_day class="img" onerror="this.src='https://icon2.cleanpng.com/20180605/ijl/kisspng-computer-icons-image-file-formats-no-image-5b16ff0d2414b5.0787389815282337411478.jpg'">
              <p>白天</p>
              <img :src=list.icon_url_night class="img" onerror="this.src='https://icon2.cleanpng.com/20180605/ijl/kisspng-computer-icons-image-file-formats-no-image-5b16ff0d2414b5.0787389815282337411478.jpg'">
              <p>夜晚</p>
            </div>

            <q-item class="item" :key="index">
              <q-item-section class="title">
                <p> 類型： {{ list.type1 + list.type2 }}</p>
                <q-input filled v-model=list.icon_url_day label="白天 URL" :dense="dense" />
                <q-input filled v-model=list.icon_url_night label="夜晚 URL" :dense="dense" />
              </q-item-section>
              <q-space />
            </q-item>
            <q-space />
            <q-btn push color="primary" label="更新" @click=" update(list.id,list.icon_url_day,list.icon_url_night)" />
          </div>

        </QCard>
      </q-tab-panel>
    </q-tab-panels>
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

import { apidelete, apipost, apiput, apiget } from "../../shared_interface/function/api_function";
import { ref, onMounted } from "vue";
import { useCookie } from "vue-cookie-next";

export default {
  setup() {
    const { getCookie } = useCookie();
    const jwt = "," + getCookie("user").token;
    const url = '/Website/Home/Weather/Icon';
    const message = ref("");
    const show = ref(false);
    const mess = ref("1");
    const dialog_text = ref("");
    const modelPut = ref(0)
    const weatherPut = ref(0)
    const modelPost = ref(0)
    const weatherPost = ref(0)
    const modelDel = ref(0)
    const weatherDel = ref(0)
    const iconUrlPost = ref('')
    const iconUrlPut = ref('')
    const iconUrlDel = ref('')
    const postrestext = ref('')
    const putrestext = ref('')
    const delrestext = ref('')
    const iconUrlPostC = ref(false)
    const iconUrlPutC = ref(false)
    const iconUrlDelC = ref(false)
    const options = ref()
    const linnershow = ref(false)
    const dialog = ref(false)




    onMounted(async () => {



      const res = await apiget(url, jwt)
      if (res.status == 200) {
        console.log(res.data)
      }
      options.value = res.data

    });

    const update = async (id:any,day:any,night:any) => {
      linnershow.value = true
      const body = {
        "id": id,
        "icon_url_day": day,
        "icon_url_night": night
      }
      console.log(body)
      try {
        const res = await apiput(body, url, jwt);
        if (res.status == 200) {
          linnershow.value = false
          dialog.value = true
          console.log(res.data);
          message.value = res.data.message
          setTimeout(() => {
            dialog.value = false;
          }, 3000);
          return res.data
        }
      } catch (e) {
        console.log(e);
      }
    };

    const del = async (url: string,) => {
      try {
        const res = await apidelete(url, jwt);
        if (res.status == 200) {
          console.log(res.data);
          return res.data
        }
      } catch (e) {
        console.log(e);
      }
    };
    const toggleItemStatus = (index: any) => {
      options.value[index].icon_url_day = 'https://cdn-icons-png.flaticon.com/512/4011/4011075.png'
    }

    return {
      update,
      toggleItemStatus,
      message,
      show,
      slide: ref(1),
      mess,
      dialog_text,
      modelPut,
      options,
      weatherPut,
      iconUrlPost,
      iconUrlDel,
      iconUrlPut,
      modelPost,
      weatherPost,
      modelDel,
      weatherDel,
      putrestext,
      postrestext,
      delrestext,
      iconUrlPostC,
      iconUrlPutC,
      iconUrlDelC,
      ph: ref(''),
      dense: ref(false),
      tab: ref('mails'),
      linnershow,
      dialog
    };
  },
};
</script>
<style scoped>
.main {
  display: flex;
  padding: 0%;
  height: 200%;
  align-items: center;
  flex-direction: column;

}

.Qcard {
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;


}

.item {
  display: flex;
  flex-direction: row;
}

.title {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
}

.title-sub {
  width: 50%;
  align-items: end;

}

.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
}

img {
  width: 100px;
  height: 100px;
}

.Img {
  display: flex;
  justify-content: center;
}

.titleCon {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.titleText {
  font-size: 300%;
}

.Qtabe {
  width: 100%;
  padding: 0%;
  display: flex;
  justify-content: start;
  align-items: start;
  background-color: rgb(230, 240, 255);
}

.Qtabe1 {
  width: 100%;
  padding: 0%;
  display: flex;
  height: 36px;
  justify-content: start;
  align-items: start;
}

.QP {
  width: 100%;
}

.q-linear-progress {
  padding: 0px;
  height: 10px;
  display: flex;
  justify-content: start;
  align-items: start;
}
</style>
