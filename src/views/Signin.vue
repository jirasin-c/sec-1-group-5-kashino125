<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router';
import { user } from '../../data/user';
import AppSignin from '../components/AppSignin.vue';
const appRouter = useRouter()
const closeModal = () => {
    // appRouter.push({ name: 'Home' })
    appRouter.go(-1)
}
const accounts = ref()
const isInCorrect = ref(false)

//GET method
const getUser = async () => {
    const res = await fetch('http://localhost:5000/accounts')
    accounts.value = await res.json()
    // console.log(accounts.value);
}

onBeforeMount(async () => {
    await getUser()
})

const signIn = (signIn) => {
    // console.log(signIn.isAnonymous);
    if (signIn.isAnonymous == true) {
        // console.log('you are anonymous');
        user.setLoginStatus()
        user.setLoginName('Anonymous')
        user.setLoginUserPoint(1000)
        closeModal()
    }
    // console.log(e);
    // console.log(e.ac);
    // console.log(accounts.value);
    // console.log(e.username);
    // console.log(e.status);
    // for (let index = 0; index < e.ac.length; index++) {
    //     const ac = e.ac[index];
    //     // console.log(ac);
    //     if (ac.userName === e.username) {
    //         console.log('username correct');
    //         isInCorrect.value = true
    //         if (ac.passWord === e.password) {
    //             console.log('password correct');
    //             console.log('login pass');

    //             isInCorrect.value = false
    //             // currUser.value = ac.name
    //             user.setUserName(ac.name)
    //             user.setStatus()
    //             // console.log(user.statusUser); 
    //             // console.log(user.userName);
    //             closeModal()
    //         } else {
    //             console.log('password incorrect');
    //             isInCorrect.value = true
    //         }

    //     } else {
    //         console.log('username incorrect');
    //         isInCorrect.value = true
    //     }

    // }
    accounts.value.filter((current) => {
        if (current.userName === signIn.username) {
            if (current.passWord === signIn.password) {
                isInCorrect.value = false
                // currUser.value = ac.name
                user.setLoginStatus()
                user.setLoginUserId(current.id)
                user.setLoginName(current.name)
                user.setLoginUserName(current.userName)
                user.setLoginUserPoint(current.points)
                // user.setUserName(ac.name)
                // user.setStatus()
                // console.log(user.statusUser); 
                // console.log(user.userName);
                closeModal()
            } else {
                isInCorrect.value = true
            }
        } else {
            isInCorrect.value = true
        }
    }
    );
    // for (let index = 0; index < accounts.value.length; index++) {
    //     const check = accounts.value[index];
    //     if (check.userName === signIn.username) {
    //         // console.log('username correct');
    //         // isInCorrect.value = true
    //         if (check.passWord === signIn.password) {
    //             // console.log('password correct');
    //             // console.log('login pass');
    //             isInCorrect.value = false
    //             // currUser.value = ac.name
    //             user.setLoginUserId(check.id)
    //             user.setLoginUserName(check.name)
    //             user.setLoginStatus()
    //             // user.setUserName(ac.name)
    //             // user.setStatus()
    //             // console.log(user.statusUser); 
    //             // console.log(user.userName);
    //             closeModal()
    //         } else {
    //             // console.log('password incorrect');
    //             isInCorrect.value = true
    //         }

    //     } else {
    //         // console.log('username incorrect');
    //         isInCorrect.value = true
    //     }
    // }
    // for (let index = 0; index < accounts.value.length; index++) {
    //     const ac = accounts.value[index];
    //     if (ac.userName === userName.value) {
    //         console.log('username correct');
    //         // isInCorrect.value = true
    //         if (ac.passWord === passWord.value) {
    //             console.log('password correct');
    //             console.log('login pass');
    //             isInCorrect.value = false
    //             // currUser.value = ac.name
    //             user.setUserName(ac.name)
    //             user.setStatus()
    //             // console.log(user.statusUser); 
    //             // console.log(user.userName);
    //             closeModal()
    //         } else {
    //             console.log('password incorrect');
    //             isInCorrect.value = true
    //         }

    //     } else {
    //         console.log('username incorrect');
    //         isInCorrect.value = true
    //     }
    // }
    // console.log(userName.value)
    // console.log(passWord.value)
    // console.log('current user =', currUser.value);

}
</script>
<template>
    <!-- <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-body">
                    <h3
                        class="text-xl font-medium text-gray-900 dark:text-white mb-5"
                    >Sign in to Kashino125</h3>
                    <div class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
                        <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
                            <div>
                                <label
                                    for="name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >User name</label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="username"
                                    required
                                    v-model="userName"
                                    @keydown.enter="login"
                                />
                            </div>
                            <div>
                                <label
                                    for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                    v-model="passWord"
                                    @keydown.enter="login"
                                />
                            </div>
                            <div class="flex justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                            required
                                        />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label
                                            for="remember"
                                            class="font-medium text-gray-900 dark:text-gray-300"
                                        >Remember me</label>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    class="text-sm text-blue-700 hover:underline dark:text-blue-500 flex items-end"
                                >Lost Password?</a>
                            </div>
                            <button
                                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                @click="login"
                            >Login</button>
                            <p
                                class="text-red-500 animate-bounce"
                                v-if="isInCorrect"
                            >Username or password are incorrect</p>
                            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered?
                                <a
                                    href="#"
                                    class="text-blue-700 hover:underline dark:text-blue-500"
                                >Create account</a>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-button">
                    <button @click="closeModal">Close</button>
                </div>
            </div>
        </div>
    </div>-->
    <div>
        <AppSignin :vueUserStatus="isInCorrect" @closeModal="closeModal" @signIn="signIn" />
    </div>
</template>
<style scoped>
</style>