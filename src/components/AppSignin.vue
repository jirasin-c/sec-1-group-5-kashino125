<script setup>
import { ref, computed, onBeforeMount } from 'vue'

defineEmits(['closeModal', 'signIn'])
const props = defineProps({
    // vueAccounts: {
    //     type: Object,
    //     require: true
    // },
    vueUserStatus: {
        type: Boolean,
        require: true
    }
})
const anonymous = ref(true)
const userName = ref()
const passWord = ref()
const isInCorrect = computed(() => {
    return props.vueUserStatus
})

// const curAcc = computed(async () => {
//     return await { id: props.vueAccounts.id, userName: props.vueAccounts.id, passWord: props.vueAccounts.passWord, name: props.vueAccounts.name, points: props.vueAccounts.points }
// })
// console.log(curAcc.value);

// const getUser = async () => {
//     const res = await fetch('http://localhost:5000/accounts')
//     accounts.value = await res.json()
//     console.log(accounts.value);
// }

// onBeforeMount(async () => {
//     await getUser()
// })

// const accounts = ref()


// console.log(isInCorrect.value);
// const currUser = ref()

</script>
 
<template>
    <!-- <h1>login</h1> -->
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-body">
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-5">Sign in to Kashino125</h3>
                    <div class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
                        <!-- <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"> -->
                        <div>
                            <label for="name"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User
                                name</label>
                            <input type="text" name="name" id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="username" required v-model="userName"
                                @keydown.enter="$emit('signIn', { ac: props.vueAccounts, username: userName, password: passWord, status: props.vueUserStatus })" />
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required v-model="passWord"
                                @keydown.enter="$emit('signIn', { ac: props.vueAccounts, username: userName, password: passWord, status: props.vueUserStatus })" />
                        </div>
                        <!-- <div class="flex justify-between">
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
                        </div>-->
                        <button
                            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            @click="$emit('signIn', { ac: props.vueAccounts, username: userName, password: passWord, status: props.vueUserStatus })">Sign
                            in</button>
                        <button
                            class="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                            @click="$emit('signIn', { isAnonymous: anonymous })">Play
                            as Anonymous</button>
                        <p class="text-red-500 animate-bounce" v-if="isInCorrect">Username or password are incorrect</p>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered?
                            <router-link :to="{ name: 'Signup' }"
                                class="text-blue-700 hover:underline dark:text-blue-500">Create account</router-link>
                        </div>
                        <!-- </form> -->
                    </div>
                </div>
                <div class="modal-button">
                    <button @click="$emit('closeModal', $event)">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>
 
<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 400px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: rgb(55 65 81);
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

.modal-body h3 {
    margin-top: 0;
    color: white;
}

.modal-button {
    display: flex;
    justify-content: flex-end;
    color: white;
}
</style>