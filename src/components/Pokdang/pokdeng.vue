<script setup>
import Player from './components/Pokdang/player.vue';
import Bot from './components/Pokdang/bot.vue';
import Random from './components/Pokdang/random.vue';
import { ref } from 'vue';
import Card from './components/Pokdang/card.vue';

const cards = ref([])
const showCards = ref(true)
const botCard = ref([{ Numbers: null, Type: null }, { Numbers: null, Type: null }, { Numbers: null, Type: null }])
const playerCard = ref([{ Numbers: null, Type: null }, { Numbers: null, Type: null }, { Numbers: null, Type: null }])
const show = () => {
    console.log(cards.value)
    console.log(showCard.value)
}

const sendValue = (e) => {
    // console.log('test me 2', e)
    cards.value = e
    showCards.value = !showCards.value
    botCard.value = e.slice(0, 3)
    playerCard.value = e.slice(3)
    // console.log(botCard.value + " bot")
    // console.log(playerCard.value + " player " + cards.value.slice(3))
    console.log(cards.value)
}



</script>

<template>
    <div class="flex flex-col h-screen bg-green-700 pt-10">
        <div class="pt-20 h-1/3">
            <Bot :cardBot="botCard" :showCard="showCards" />
            <button v-on:click="show()">sdajkdhjlska</button>
        </div>
        <main class="p-4 flex-grow h-1/3">
            <div class="flex justify-center">
                <img
                    class="w-1/6 h-auto"
                    src="./assets/background/—Pngtree—vs versus 3d transparent background_5995748.png"
                    alt
                />
            </div>
        </main>
        <footer class="p-4 bg-gray-400">
            <Random @starts="sendValue($event)" />
            <button v-on:click="show()">fdksaldfndlsjk</button>
        </footer>
        <div class="bg-green-700 h-1/3">
            <Player :cardPlayer="playerCard" :show-card="showCards" />
        </div>
    </div>
</template>

<style scoped>
</style>