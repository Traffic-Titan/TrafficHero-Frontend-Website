<template>
    <div class="main">


        <q-card class="card-list ">
            <q-virtual-scroll style="max-height: 100%;width: 100%;" :items="cmsList" separator v-slot="{ item, index }">
                <q-item :key="index" dense @click="">
                    <q-item-section >
                        <q-item-label>
                            #{{ index }} - {{ item.type }}
                        </q-item-label>
                    </q-item-section>
                </q-item>
            </q-virtual-scroll>

        </q-card>
        <div class="sub-card">

            <q-card class="card-list2">


            </q-card>
            <q-card class="card-list2">



            </q-card>
        </div>






    </div>
</template>

<script lang="ts">

import { ref, onMounted } from 'vue'
import { apiget } from '../../shared_interface/function/api_function'
import { useCookie } from 'vue-cookie-next'
const items = ref([{}, {}, {}, {}, {}, {}, {}])

const cmsList = ref()

export default {
    setup() {
        const { getCookie } = useCookie()
        const jwt = ','+getCookie('user').token
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
    flex-direction: row;
}

.sub-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>