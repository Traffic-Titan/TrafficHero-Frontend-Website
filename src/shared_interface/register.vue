<template>
  <div class="q-pa-md page">
    <q-layout>
      <q-page-container>
        <q-page>
          <div class="main">
            <QCard class="QCard">
              <P class="register-text">註冊</P>

              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">姓名</span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="name"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                  v-model="name_text"
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">電子郵件</span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="E-mail"
                  aria-label="E-mail"
                  aria-describedby="basic-addon1"
                  v-model="email_text"
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">密碼</span>
                <input
                  type="password"
                  class="form-control"
                  placeholder="password"
                  aria-label="password"
                  aria-describedby="basic-addon1"
                  v-model="password_text"
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">確認密碼</span>
                <input
                  type="password"
                  class="form-control"
                  placeholder="check password"
                  aria-label="checkpassword"
                  aria-describedby="basic-addon1"
                  v-model="checkpassword_text"
                />
              </div>
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">性別</label>
                <select class="form-select" id="gender_text" v-model="gender_text">
                  <option selected value="0">選擇</option>
                  <option value="1">女</option>
                  <option value="2">男</option>
                  <option value="3">其他</option>
                </select>
              </div>
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">生日</label>
                <select class="form-select" id="year_text" v-model="birthday_year">
                  <option selected value="0">選擇</option>
                  <option v-for="year in 124" :key="year" :value="2023 - year">
                    {{ 2023 - year }}
                  </option>
                </select>
                <label class="input-group-text" for="inputGroupSelect01">年</label>
                <select class="form-select" id="inputGroupSelect01" v-model="birthday_mounth">
                  <option selected value="0">選擇</option>
                  <option v-for="i in 12" :key="i" :value="i">{{ i }}</option>
                </select>
                <label class="input-group-text" for="inputGroupSelect01">月</label>
                <select
                  class="form-select"
                  id="inputGroupSelect01"
                  v-model="birthday_day"
                >
                  <option selected :value="0">選擇</option>
                  <option v-for="i in 31" :key="i" :value="i">{{ i }}</option>
                </select>
                <label class="input-group-text" for="inputGroupSelect01">日</label>
              </div>
              <q-btn label="下一步" class="register-button" @click="registerClick" />
            </QCard>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { apipost } from "../shared_interface/function/api_function";
import { useCookie } from "vue-cookie-next";
import { url_register } from "../url_manager";

export default {
  components: {},
  setup() {
    const name_text = ref("");
    const router = useRouter();
    const email_text = ref("");
    const password_text = ref("");
    const checkpassword_text = ref("");
    const gender_text = ref(0);
    const birthday_text = ref("");
    const birthday_year = ref(0);
    const birthday_mounth = ref(0);
    const birthday_day = ref(0);
    const res = ref();
    const loginurl = url_register;
    const message = ref("");
    const { setCookie, removeCookie, getCookie } = useCookie();
    const onMounted = () => {};

    const registerClick = async () => {
      const body = {
        name: name_text.value,
        email: email_text.value,
        password: password_text.value,
        gender: gender_text.value,
        birthday: birthday_year.value + "/" + birthday_mounth.value + "/" + birthday_day.value,
        google_id: "string",
        google_avatar: "string",
      };
      try {
        res.value = await apipost(body, loginurl, "");
        console.log(res.value);
      } catch (e: any) {
        console.log(e);
        message.value = e.response.data.detail;
      }

      if (res.value.status == 200) {
      console.log( res.value.data.detail)
      router.push({ path: '/login' });
       
      }
    };
    const test = async () => {
      console.log(gender_text.value);
      console.log(
        birthday_year.value + '/' +
          birthday_mounth.value + '/' +
          birthday_day.value + '/' +
          gender_text.value
      );
    };
    return {
      email_text,
      password_text,
      registerClick,
      message,
      test,
      checkpassword_text,
      gender_text,
      birthday_text,
      birthday_year,
      birthday_mounth,
      birthday_day,
      name_text,
    };
  },
};
</script>

<style scoped>
.textinput {
  width: 160%;
}

.register-text {
  font-size: 300%;
}

.login-text-con {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.textinput-contaner {
  display: grid;
  gap: 10px;
}

.page {
  padding: 0%;
  display: flex;
  align-items: center;
}

.main {
  background-color: rgb(62, 111, 179);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.button {
  color: white;
  background-color: rgb(67, 150, 200);
}

.button-contaner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 10px;
}

.QCard {
  width: 30%;
  height: 80%;

  display: flow-root;

  align-items: center;
  justify-content: center;
  border-radius: 30px;
  padding: 30px;
}

.date {
  width: 600px;
  height: 50px;
  padding: 10px;
}

.born {
  width: 100px;
}

.born-set {
  padding: 30px;
}

.register-button {
  color: white;
  background-color: rgb(67, 150, 200);
}
</style>
./function/api_function