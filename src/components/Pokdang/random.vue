<script setup>
import { ref } from 'vue';
import { pok } from '../../../data/pokdeng.js';
import { user } from '../../../data/user.js';

const card = ref([])
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const type = ["spades", "hearts", "diamonds", "clubs"]
const randomobj = () => {
    let rannumber = Math.floor(Math.random() * number.length);
    let rantype = Math.floor(Math.random() * type.length);
    // console.log("num : " + rannumber)
    // console.log("type : " + rantype)
    // let obj = { "Number": number[rannumber], "Type": type[rantype] }
    let obj = { "Numbers": number[rannumber], "Type": type[rantype] }
    const filterobj = card.value.filter(value => {
        if ((value.Numbers == obj.Numbers) && (value.Type == obj.Type))
            return true
    })
    // console.log(filterobj)
    if (card.value.length < 6) {
        if (filterobj.length == 0) {
            card.value.push(obj)
            randomobj()
        } else {
            randomobj()
        }
    }
    return card.value
}
const startToPlay = () => {
    randomobj()
    user.userPoint -= 100
    pok.setStatus(true)
    pok.setBot(card.value.slice(0, 3))
    pok.setPlayer(card.value.slice(3))
    pok.setCard(card.value)
    // console.log(card.value)
    // console.log(pok.botcCard);
    // console.log(pok.playerCard);
    console.log(pok.statusStart);
    // console.log(pok.card);
}
const draw = () => {
    let a = !pok.draw
    console.log(a);
    pok.setDraw(a)
}
const reset = () => {
    pok.reStart()
    card.value = []
}
const endTurn = () => {
    console.log(pok.playerCard);
    pok.playerCard.filter((card) => {
        if (card.Numbers == 10) {
            console.log('jack');
        }
        if (card.Numbers == 11) {
            console.log('queen');
        }
        if (card.Numbers == 12) {
            console.log('king');
        }

    })
    alert('end')
}
</script>
 
<template>
    <div class="grid grid-cols-4 gap-4 flex justify-center p-3">
        <button
            class="hover:scale-110 rounded-2xl px-8 py-2 text-white text-xl bg-gradient-to-r bg-gradient-to-r from-cyan-500 to-blue-500 duration-300"
            v-on:click="startToPlay()" :class="{ 'opacity-25 cursor-not-allowed': pok.statusStart }"
            :disabled="pok.statusStart">Start</button>
        <button
            class="hover:scale-110 rounded-2xl px-8 py-2 text-white text-xl bg-gradient-to-r bg-gradient-to-r from-cyan-500 to-blue-500 duration-300"
            v-on:click="draw()" :class="{ 'opacity-25 cursor-not-allowed': !pok.statusStart }"
            :disabled="!pok.statusStart">Draw</button>
        <button
            class="hover:scale-110 rounded-2xl px-8 py-2 text-white text-xl bg-gradient-to-r bg-gradient-to-r from-cyan-500 to-blue-500 duration-300"
            v-on:click="endTurn()" :class="{ 'opacity-25 cursor-not-allowed': !pok.statusStart }"
            :disabled="!pok.statusStart">End
            Turn</button>
        <button
            class="hover:scale-110 rounded-2xl px-8 py-2 text-white text-xl bg-gradient-to-r bg-gradient-to-r from-cyan-500 to-blue-500 duration-300"
            v-on:click="reset()" :style="{ 'disabled:opacity-50': !pok.statusStart }">Restart</button>
    </div>
</template>
 
<style>
</style>