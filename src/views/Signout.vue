<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router';
import { user } from '../../data/user';
// import AppLogin from '../components/AppLogin.vue';
const appRouter = useRouter()
const closeModal = () => {
    appRouter.push({ name: 'Home' })
    // appRouter.go(-1)
}
user.setLogoutStatus()
user.setLogoutUserId
user.setLogoutName()
user.setLogoutUserName()
user.setLogoutUserPoint()
closeModal()
</script>
 
<template>
    <h1>Logout na</h1>
</template>
 
<style>
</style>