<template>

</template>

<script lang="ts">
import { useCookie } from 'vue-cookie-next';
import { useRouter } from 'vue-router';

export default{


    setup(){
        const router = useRouter()
        const {setCookie,getCookie} = useCookie()
    }
}
</script>

<style>

</style>