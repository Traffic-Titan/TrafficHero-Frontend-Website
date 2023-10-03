<script  lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { QBtn, QToolbar, QLayout, QHeader, QFooter, QDrawer, QPage } from 'quasar'
import { ref } from 'vue'

export default {
  setup() {
    const textd = ref('')
    const api = import.meta.env.VITE_API

    const test = () => {
      console.log(api)
    }
    return {
      textd,
      test,
      drawerLeft: ref(false),
      drawerRight: ref(true)
    }
  }

}

</script>

<template>
  <div class="">
    <div class="q-pa-md test ">
      <q-layout view="lhh LpR lff" container style="height: 1024px" class="shadow-2 rounded-borders "
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
        <q-header>

          <q-toolbar class=" text-white   test row">
            <div class="btn">
              <q-btn flat round dense icon="menu" class="q-mr-sm btn" />
            </div>
          
            <q-btn stretch flat label="登入" class="btn" RouterLink to="/login"/> 
          
            <q-btn stretch flat label="Link" class="btn" />
          </q-toolbar>

        </q-header>
        <q-footer>
        </q-footer>

        <q-drawer v-model="drawerLeft" :width="200" :breakpoint="700" bordered>
          <q-scroll-area class="fit">
            <div class="q-pa-sm">
              <div v-for="n in 50" :key="n">Drawer {{ n }} / 50</div>
            </div>
          </q-scroll-area>
        </q-drawer>



        <q-page-container>



          <q-page-scroller position="bottom">
            <q-btn fab icon="keyboard_arrow_up" color="red" />
          </q-page-scroller>
        </q-page-container>
      </q-layout>
    </div>


  </div>
</template>

<style scoped>
.test {
  top: 0%;

  padding: 0%;

}

.btn {
  color: white;
  /* background-color: white; */
  width: 50px;
  padding: 5px;


}
.main{
  background-color: rgb(230, 240, 255);
}

.tool {
  padding: 10px;
  width: 200px;
}
</style>
