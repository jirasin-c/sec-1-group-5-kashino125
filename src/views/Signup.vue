<script setup>
import AppSignup from '../components/AppSignup.vue';
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router';
import { user } from '../../data/user';
const appRouter = useRouter()
const closeModal = () => {
    appRouter.push({ name: 'Home' })
}
const goBack = () => {
    appRouter.go(-1)
    // appRouter.push({ name: 'Home' })
}
const accounts = ref([])
const isInCorrect = ref(false)
const userUsed = ref(false)
const requireFill = ref(false)

//GET method
const getUser = async () => {
    const res = await fetch('http://localhost:5000/accounts')
    accounts.value = await res.json()
    // console.log(accounts.value);
}
onBeforeMount(async () => {
    await getUser()
})

const checkUsedUserName = (signUpUserName) => {
    // console.log(signUpUserName);
    accounts.value.filter((current) => {
        if (current.userName === signUpUserName) {
            userUsed.value = true
        }
    }
    );

}

//POST method
const signUp = async (signUp) => {
    userUsed.value = false
    isInCorrect.value = false
    requireFill.value = false
    if (signUp.name == undefined || signUp.username == undefined || signUp.password == undefined || signUp.confirmPass == undefined) {
        requireFill.value = true
    }
    if (signUp.password != signUp.confirmPass) {
        userUsed.value = false
        isInCorrect.value = true
    } else {
        checkUsedUserName(signUp.username)
        if (userUsed.value == false) {
            console.log('can create');
            const res = await fetch('http://localhost:5000/accounts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    userName: signUp.username,
                    passWord: signUp.password,
                    name: signUp.name,
                    points: 1000
                })
            })
            if (res.status === 201) {
                signIn(signUp)
                closeModal()
                console.log("added");
            } else {
                console.log("error");
            }
        }
    }
}
const signIn = (signUp) => {
    user.setLoginStatus()
    user.setLoginUserId(signUp.id)
    user.setLoginName(signUp.name)
    user.setLoginUserName(signUp.username)
    user.setLoginUserPoint(1000)
}



</script>
 
<template>
    <AppSignup :vuePassStatus="isInCorrect" :vueUserUsed="userUsed" :vueRequireFill="requireFill"
        @closeModal="closeModal" @signUp="signUp" @goBack="goBack" />
</template>
 
<style>
</style>