<script setup>
import { ref } from 'vue';
import { pok } from '../../../data/pokdeng.js';
import { user } from '../../../data/user.js';

const card = ref([])
const number = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "jack", "queen", "king"]
const type = ["spades", "hearts", "diamonds", "clubs"]
const btnEnd = ref(false)
const disDraw = ref(false)
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
    setTimeout(function () {
        botdraw()
    }, 500)
    // btnEnd.value = false
    pok.setStatus(true)
    pok.setBot(card.value.slice(0, 3))
    pok.setPlayer(card.value.slice(3))
    pok.setCard(card.value)
    // console.log(card.value)
    // console.log(pok.botcCard);
    // console.log(pok.playerCard);
    console.log("statue start " + pok.statusStart);
    console.log("Draw " + pok.playerdraw);
    // console.log(pok.card);
    // console.log(btnEnd.value);
}
const botdraw = () => {
    let botNumber = numberstoInt(pok.botCard)
    console.log(pok.botCard);
    let pointBot = botNumber[0] + botNumber[1]
    console.log("botnumber");
    console.log(botNumber);
    console.log("sdskdlja");
    console.log(pointBot);
    console.log((pointBot % 10) < 6);

    if ((pointBot % 10) < 6) {
        pok.setBotDraw(true)
        // console.log(pok.botDraw);
        // console.log("bot : " + bot);
    }
}
const draw = () => {
    if (!pok.draw) {
        disDraw.value = true
        // botdraw()
        // console.log('playerNumber');
        // console.log(playerNumber);
        pok.setPlayerDraw(true)
    }

}
const numberstoInt = (value) => {
    // console.log(value);
    let number = []
    value.forEach(element => {
        // console.log(element.Numbers);
        switch (element.Numbers) {
            case 'ace':
                number.push(1)
                break;
            case 'jack':
                number.push(10)
                break;
            case "queen":
                number.push(10)
                break;
            case 'king':
                number.push(10)
                break;
            default:
                number.push(parseInt(element.Numbers))
                break;
        }
    });
    return number
}
const reset = () => {
    pok.reStart()
    btnEnd.value = false
    disDraw.value = false
    card.value = []
}
const endTurn = () => {
    // console.log(pok.playerCard);
    // botdraw()
    pok.setAllShow(true)
    btnEnd.value = true
    let botNumber = numberstoInt(pok.botCard)
    let playerNumber = numberstoInt(pok.playerCard)
    let countCardBot = 0
    let countCardPlayer = 0
    if (pok.botDraw)
        countCardBot = 3
    else
        countCardBot = 2
    if (pok.playerdraw)
        countCardPlayer = 3
    else
        countCardPlayer = 2

    let scorePlayer = sumNumber(countCardPlayer, playerNumber) % 10
    let scoreBot = sumNumber(countCardBot, botNumber) % 10

    console.log(scoreBot);
    console.log(scorePlayer);
    if (scorePlayer > scoreBot) {// return ฝั่งplayer ว่าชนะหรือไม่ชนะ  
        alert('player Win')
    } else if (scorePlayer == scoreBot) {
        alert('เสมอไปไอ้โง่')
    } else {
        alert('Bot Win')
    }
}

const sumNumber = (count, value) => {
    let sum = 0
    for (let i = 0; i < count; i++) {
        sum += value[i]
    }
    return sum
}

const DrawShow = () => {
    if (pok.statusStart) {
        if (pok.playerdraw) {
            return true
        }
        else if (pok.allshow) {
            return true
        }
        else {
            return false
        }
    }
    return true
}
const EndShow = () => {
    // console.log((pok.statusStart == btnEnd.value));
    return (pok.statusStart == btnEnd.value)
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
            v-on:click="draw()" :class="{ 'opacity-25 cursor-not-allowed': DrawShow() }"
            :disabled="disDraw">Draw</button>
        <button
            class="hover:scale-110 rounded-2xl px-8 py-2 text-white text-xl bg-gradient-to-r bg-gradient-to-r from-cyan-500 to-blue-500 duration-300"
            v-on:click="endTurn()" :class="{ 'opacity-25 cursor-not-allowed': EndShow() }" :disabled="btnEnd">End
            Turn</button>
        <button
            class="hover:scale-110 rounded-2xl px-8 py-2 text-white text-xl bg-gradient-to-r bg-gradient-to-r from-cyan-500 to-blue-500 duration-300"
            v-on:click="reset()" :class="{ 'opacity-25 cursor-not-allowed ': !pok.statusStart }">Restart</button>
    </div>
</template>
 
<style>
</style>