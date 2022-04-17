<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router';
import { user } from '../../data/user';
import AppSignin from '../components/AppSignin.vue';
const appRouter = useRouter()
const closeModal = () => {
    appRouter.go(-1)
}
const accounts = ref([])
const isInCorrect = ref(false)

//GET method
const getUser = async () => {
    const res = await fetch('http://localhost:5000/accounts')
    accounts.value = await res.json()
}

onBeforeMount(async () => {
    await getUser()
})

const signIn = (signIn) => {
    if (signIn.isAnonymous == true) {
        user.setLoginStatus()
        user.setLoginName('Anonymous')
        user.setLoginUserPoint(1000)
        closeModal()
    }
    accounts.value.filter((current) => {
        if (current.userName === signIn.username) {
            if (current.passWord === signIn.password) {
                isInCorrect.value = false
                user.setLoginStatus()
                user.setLoginUserId(current.id)
                user.setLoginName(current.name)
                user.setLoginUserName(current.userName)
                user.setLoginUserPoint(current.points)

                closeModal()
            } else {
                isInCorrect.value = true
            }
        } else {
            isInCorrect.value = true
        }
    }
    );

}
</script>
<template>
    <div>
        <AppSignin :vueUserStatus="isInCorrect" @closeModal="closeModal" @signIn="signIn" />
    </div>
</template>
<style scoped>
</style>