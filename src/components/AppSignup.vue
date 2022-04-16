<script setup>
import { ref, computed, onBeforeMount } from 'vue'


defineEmits(['closeModal', 'signUp', 'goBack'])
const props = defineProps({
    vuePassStatus: {
        type: Boolean,
        require: true
    },
    vueUserUsed: {
        type: Boolean,
        require: true
    },
    vueRequireFill: {
        type: Boolean,
        require: true
    }
})
const disName = ref()
const userName = ref()
const passWord = ref()
const confirmPassWord = ref()
const isInCorrect = computed(() => {
    return props.vuePassStatus
})
const userUsed = computed(() => {
    return props.vueUserUsed
})
const requireFill = computed(() => {
    return props.vueRequireFill
})
</script>
 
<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-body">
                    <button>
                        <span class="flex text-white mb-2" @click="$emit('goBack', $event)">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xml:space="preserve"
                                enable-background="new 0 0 512 512" heigh="24" width="24">
                                <path d="M352 128.4 319.7 96 160 256l159.7 160 32.3-32.4L224.7 256z" fill="#ffffff"
                                    class="fill-000000" />
                            </svg>
                        </span>
                    </button>
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-5">Sign up to Kashino125</h3>
                    <div class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
                        <!-- <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"> -->
                        <div>
                            <label for="disname"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Display
                                name</label>
                            <input type="text" name="disname" id="disname"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="displayname" required v-model="disName" />
                        </div>
                        <div>
                            <label for="username"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User
                                name</label>
                            <input type="text" name="username" id="username"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="username" required v-model="userName" />
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required v-model="passWord" />
                        </div>
                        <div>
                            <label for="repassword"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm
                                Password</label>
                            <input type="password" name="repassword" id="repassword" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required v-model="confirmPassWord" />
                        </div>
                        <button
                            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            @click="$emit('signUp', { name: disName, username: userName, password: passWord, confirmPass: confirmPassWord })">Create
                            account</button>
                        <p class="text-red-500 animate-bounce" v-if="isInCorrect">Password are unmatched</p>
                        <p class="text-red-500 animate-bounce" v-if="requireFill">Please fill the require fields</p>
                        <p class="text-red-500 animate-bounce" v-if="userUsed">Username already used</p>
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
</style>y