<script setup>
import Player from '../components/Pokdang/player.vue';
import Bot from '../components/Pokdang/bot.vue';
import Random from '../components/Pokdang/random.vue';
import { user } from '../../data/user';
import { useRouter } from 'vue-router';
const appRouter = useRouter()

const goHome = () => {
    appRouter.push({ name: 'Home' })
    // appRouter.go(-1)
}

if (user.statusUser == false) {
    goHome()
}

</script>
 
<template>
    <div class="flex flex-col h-screen ">
        <div class="pt-10 h-auto">
            <div class="text-white text-xl flex justify-center">
                <p>Bot </p>
            </div>
            <Bot />
        </div>
        <main class=" h-1/4">
            <div class="flex justify-center">
                <img class="w-1/6 h-auto animate-bounce" src="../assets/background/Vs.png" alt />
            </div>
        </main>
        <footer>
            <Random />
        </footer>
        <div class="h-auto">
            <div class="text-white text-xl flex justify-center">
                <p>Player name: {{ user.name }} <br> Points: {{ user.userPoint }} </p>
            </div>
            <Player />
        </div>
    </div>
</template>
 
<style>
</style>