<script setup>
import { ref, computed, onBeforeMount } from 'vue'

defineEmits(['closeModal', 'signIn'])
const props = defineProps({
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


</script>
 
<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-body">
                    <h3 class="text-xl font-medium text-white mb-5">Sign in to Kashino125</h3>
                    <div class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
                        <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-300">User
                                name</label>
                            <input type="text" name="name" id="name"
                                class="bg-gray-50 border text-sm rounded-lg  block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                                placeholder="username" required v-model="userName"
                                @keydown.enter="$emit('signIn', { ac: props.vueAccounts, username: userName, password: passWord, status: props.vueUserStatus })" />
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-300">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                class="bg-gray-50 border text-sm rounded-lg  block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                                required v-model="passWord"
                                @keydown.enter="$emit('signIn', { ac: props.vueAccounts, username: userName, password: passWord, status: props.vueUserStatus })" />
                        </div>

                        <button
                            class="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
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