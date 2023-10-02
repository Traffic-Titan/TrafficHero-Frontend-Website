<script  lang="ts">
import  {RouterLink, RouterView } from 'vue-router'
import {QBtn ,QToolbar} from 'quasar'
import {ref} from 'vue'

export default {
  setup () {
    return {
      model: ref('one'),

      options: [
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'Three', value: 'three' }
      ]
    }
  }
}

</script>

<template>
  <div class="q-pa-md ">
    <header>
      <q-toolbar class="bg-secondary text-white q-my-md shadow-2 test">
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
  
        <q-space />
  
        <q-btn-toggle
          v-model="model"
          flat stretch
          toggle-color="yellow"
          :options="options"
        />
      </q-toolbar>
    </header>
    
    <RouterLink to="/login">
      <q-btn color="primary"  label="登入" />
    </RouterLink>
  </div>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .test{
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
