<template>
  <div class="q-pa-md page">
    <q-layout>
      <q-page-container>
        <q-page>
          <div class="main">
            <q-card class="q-card">
              <P class="register-text">註冊</P>
              <q-input outlined v-model="name_text" label="輸入姓名" />
              <q-input outlined v-model="email_text" label="輸入電子郵件"></q-input>
              <q-input outlined v-model="password_text" :type="isPwd ? 'password' : 'text'">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" @click="isPwd = !isPwd" />
                </template>
              </q-input>
              <q-input outlined v-model="password_text" :type="isPwd ? 'password' : 'text'">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" @click="isPwd = !isPwd" />
                </template>
              </q-input>
              <q-select outlined v-model="gender_text" :options="options" label="選擇性別" class="input" />
              <q-input v-model="date" outlined type="date" label="選擇生日" />
              <q-btn label="下一步" class="register-button" @click="registerClick" />
            </q-card>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { apipost } from "../shared_interface/function/api_function";
import { url_register } from "../url_manager";
import { encryptPassword } from "./function/SHA256";

export default {
  components: {},
  setup() {
    const name_text = ref("");
    const router = useRouter();
    const email_text = ref("");
    const password_text = ref("");
    const checkpassword_text = ref("");
    const gender_text = ref('選擇');
    const birthday_text = ref("");
    const birthday_year = ref(0);
    const birthday_mounth = ref(0);
    const birthday_day = ref(0);
    const res = ref();
    const loginurl = url_register;
    const message = ref("");
    const date = ref()




    const registerClick = async () => {
      const body = {
        name: name_text.value,
        email: email_text.value,
        password: encryptPassword(password_text.value),
        gender: gender_text.value,
        birthday:
          birthday_year.value + "/" + birthday_mounth.value + "/" + birthday_day.value,
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
        console.log(res.value.data.detail);
        router.push({ path: "/login" });
      }
    };
    const test = async () => {
      console.log(gender_text.value);
      console.log(
        birthday_year.value +
        "/" +
        birthday_mounth.value +
        "/" +
        birthday_day.value +
        "/" +
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
      isPwd: ref(true),
      date,
      options: [
        '女', '男', '其他',
      ],
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

.q-card {
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
