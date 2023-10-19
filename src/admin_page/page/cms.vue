<script lang="ts">

import { ref, onMounted } from 'vue'
import { apiget } from '../../shared_interface/function/api_function'
import { useCookie } from 'vue-cookie-next'
const items = ref([{}, {}, {}, {}, {}, {}, {}])

const cmsList = ref()

export default {
    setup() {
        const { getCookie } = useCookie()
        const jwt = ',' + getCookie('user').token
        const url = '/Website/CMS/Read'
        onMounted(async () => {
            try {
                const res = await apiget(url, jwt)
                if (res.status == 200) {
                    console.log(res.data)
                    cmsList.value = res.data.car
                }
            } catch (e) {

            }
        })
        return {
            items,
            cmsList,
            onLoad(_index: any, done: any) {
                setTimeout(() => {
                    items.value.push({}, {}, {}, {}, {}, {}, {})
                    done()
                }, 2000)
            }
        }
    }
}
</script>



<template>
    <div class="main">
        <q-card class="card-list ">
            <q-virtual-scroll style="max-height: 100%;width: 100%;" :items="cmsList" separator v-slot="{ item, index }">
                <q-item :key="index" dense @click="">
                    <q-item-section>
                        <q-item-label class="q-item">
                            {{ index + 1 }} - {{ item.type }}<p></p>
                            起始時間：<p></p>
                            {{ item.start }}<p></p>
                            結束時間：<p></p>{{ item.end }}
                        </q-item-label>
                    </q-item-section>
                </q-item>
            </q-virtual-scroll>
        </q-card>
        <q-card class="card-list4 ">
        </q-card>
        <div class="sub-card">

            <q-card class="card-list2">
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/ROC_Taiwan_Area_National_Freeway_Bureau_Logo.svg/200px-ROC_Taiwan_Area_National_Freeway_Bureau_Logo.svg.png" />
                </div>
                <div class="text1">
                    楊梅休息站
                </div>
            </q-card>
            <q-card class="card-list3">
            </q-card>
        </div>
    </div>
</template>



<style scoped>
.main {
    padding: 30px;
    height: 100%;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 40px;
}

.des {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;


}

.card-list {
    width: 300px;
    height: 610px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
}

.card-list2 {
    width: 600px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: black;
}
.text1{

}

.card-list4 {
    width: 300px;
    height: 610px;
    display: flex;
    flex-direction: row;
    background-color: black;
}
.q-item{
    padding: 10px;
}

.card-list3 {
    width: 600px;
    height: 300px;
    display: flex;
    flex-direction: row;
}

.sub-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>