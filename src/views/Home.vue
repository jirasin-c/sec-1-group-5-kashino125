<script setup>
import { user } from '../../data/user';
import { useRouter } from 'vue-router';
const appRouter = useRouter()

// const goPokdeng = () => {
//     appRouter.push({ name: 'Pokdeng' })
//     // appRouter.go(-1)
// }

// if (user.userName != null) {
//     goPokdeng()
// }
</script>
 
<template>
    <!-- <h1 class="text-3xl font-bold underline">Kashino125</h1> -->
    <div class="flex pt-64">
        <main class="flex-grow ">
            <div class="flex justify-center">
                <router-link v-if="user.statusUser == true" :to="{ name: 'Pokdeng' }">
                    <img class=" w-auto hover:animate-bounce" src="../assets/background/kashino125.png" alt />
                </router-link>
                <router-link v-else :to="{ name: 'Signin' }">
                    <img class=" w-auto hover:animate-bounce" src="../assets/background/kashino125.png" alt />
                </router-link>
            </div>
        </main>
    </div>


</template>
 
<style>
</style>