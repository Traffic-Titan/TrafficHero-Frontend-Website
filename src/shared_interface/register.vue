<template>
    <div class="q-pa-md page ">
      <q-layout>
        <q-page-container >
          <q-page>
          
          </q-page>
        </q-page-container>
      </q-layout>
    </div>
  </template>
  
  <script lang="ts">
  import { ref, onMounted } from 'vue'
  import { RouterLink } from 'vue-router'
  import { apipost } from '../function/api_function'

  import {url_login} from '../url_manager'
  export default {
    setup() {
      const email = ref('')
      const password = ref('')
      const res = ref()
      const loginurl = url_login
  
      const onMounted = () => {
  
      }
  
     
  
  
  
      
      return {
       
      }
    
    }}
  </script>
  
  <style scoped>

  </style>