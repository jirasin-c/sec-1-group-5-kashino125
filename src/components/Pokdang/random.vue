<script setup>
import { ref } from 'vue';
import { pok } from '../../../data/pokdeng.js';
import { user } from '../../../data/user.js';

defineEmits(['updatePoint'])
const card = ref([])
const number = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "jack", "queen", "king"]
const type = ["spades", "hearts", "diamonds", "clubs"]
const btnEnd = ref(false)
const disDraw = ref(false)

const isAmount = ref(false)
const haveWinner = ref(false)
const playerWin = ref(false)
const botWin = ref(false)
const pointDraw = ref(false)
const isPlay = ref(false)
const amount = ref()

const randomobj = () => {
    let rannumber = Math.floor(Math.random() * number.length);
    let rantype = Math.floor(Math.random() * type.length);
    let obj = { "Numbers": number[rannumber], "Type": type[rantype] }
    const filterobj = card.value.filter(value => {
        if ((value.Numbers == obj.Numbers) && (value.Type == obj.Type))
            return true
    })
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

const checkAmount = () => {
    amount.value = null
    isAmount.value = true
    isPlay.value = false
    playerWin.value = false
    botWin.value = false
    pointDraw.value = false
}

const startToPlay = () => {
    if (amount.value == null || amount.value == 0 || amount.value > user.userPoint) {
        return
    }
    if (isPlay.value == false) {
        isPlay.value = !isPlay.value
        isAmount.value = !isAmount.value
        user.userPoint -= amount.value
        randomobj()

        setTimeout(function () {
            botdraw()
        }, 1000)
        pok.setStatus(true)
        pok.setBot(card.value.slice(0, 3))
        pok.setPlayer(card.value.slice(3))
        pok.setCard(card.value)

    }
}

const botdraw = () => {
    let botNumber = numberstoInt(pok.botCard)

    let pointBot = botNumber[0] + botNumber[1]

    if ((pointBot % 10) < 6) {
        pok.setBotDraw(true)

    }
}
const draw = () => {
    if (!pok.draw) {
        disDraw.value = true
        pok.setPlayerDraw(true)
    }

}
const numberstoInt = (value) => {
    let number = []
    value.forEach(element => {
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
    disDraw.value = false
    btnEnd.value = false
    card.value = []
}
const endTurn = () => {
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

    if (scorePlayer > scoreBot) {// return ฝั่งplayer ว่าชนะหรือไม่ชนะ  
        haveWinner.value = true
        playerWin.value = true
        user.userPoint += amount.value * 2
    } else if (scorePlayer == scoreBot) {
        haveWinner.value = true
        pointDraw.value = true
        user.userPoint += amount.value * 1
    } else {
        haveWinner.value = true
        botWin.value = true
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
    return (pok.statusStart == btnEnd.value)
}
</script>
 
<template>
    <div class="grid grid-cols-3 gap-4 flex justify-center p-3">
        <button
            class="hover:scale-110 rounded-2xl px-8 py-2 text-white text-xl bg-gradient-to-r bg-gradient-to-r from-cyan-500 to-blue-500 duration-300"
            v-on:click="checkAmount" :class="{ 'opacity-25 cursor-not-allowed': pok.statusStart }"
            :disabled="pok.statusStart">Start</button>
        <button
            class="hover:scale-110 rounded-2xl px-8 py-2 text-white text-xl bg-gradient-to-r bg-gradient-to-r from-cyan-500 to-blue-500 duration-300"
            v-on:click="draw()" :class="{ 'opacity-25 cursor-not-allowed': DrawShow() }"
            :disabled="disDraw">Draw</button>
        <button
            class="hover:scale-110 rounded-2xl px-8 py-2 text-white text-xl bg-gradient-to-r bg-gradient-to-r from-cyan-500 to-blue-500 duration-300"
            v-on:click="endTurn(), $emit('updatePoint', $event)" :class="{ 'opacity-25 cursor-not-allowed': EndShow() }"
            :disabled="btnEnd">End
            Turn</button>
        <!-- <button
            class="hover:scale-110 rounded-2xl px-8 py-2 text-white text-xl bg-gradient-to-r bg-gradient-to-r from-cyan-500 to-blue-500 duration-300"
            v-on:click="reset()" :class="{ 'opacity-25 cursor-not-allowed ': !pok.statusStart }">Restart</button> -->

    </div>
    <div :class="{ 'hidden': !isAmount }">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-body">
                        <h2 class="text-xl font-medium text-green-500 mb-5 ">How many points for playing ?
                        </h2>
                        <div class="px-6 pb-4 space-y-3 lg:px-8 sm:pb-6 xl:pb-8">
                            <div>
                                <label for="name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Amount</label>
                                <input type="number" name="name" id="name"
                                    class="bg-gray-50 border text-sm rounded-lg  block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                                    placeholder="Type amount" required v-model="amount" />
                                <button class="text-sm font-medium text-white " @click="amount = null">Clear</button>
                            </div>
                            <div class="grid gap-2 grid-cols-3">
                                <button
                                    class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none  focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                    @click="amount += 100">+ 100</button>
                                <button
                                    class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none  focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    @click="amount += 200">+ 200</button>

                                <button
                                    class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none  focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                    @click="amount += 500">+ 500</button>
                            </div>
                            <button
                                class="w-full text-white bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-violet-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                @click="amount = user.userPoint">ALL
                                IN</button>
                            <button
                                class="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                @click="startToPlay(), $emit('updatePoint', $event)">Play</button>
                            <p class="text-red-500 animate-bounce pt-3 font-bold" v-if="amount > user.userPoint">
                                Your
                                point isn't
                                enough to play ! <br>
                                <span class="text-blue-500 font-medium">If your points is ran out, You can add 1000
                                    Points at Edit
                                    account page.</span>
                            </p>
                        </div>
                    </div>
                    <div class="modal-button">
                        <button @click="isAmount = false">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div :class="{ 'hidden': !haveWinner }">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-body">
                        <h2 class="text-xl font-medium text-gray-900 mb-5 " v-if="playerWin">You Win
                            !!!
                        </h2>
                        <h2 class="text-xl font-medium text-gray-900 mb-5 " v-if="botWin">Bot Win
                            !!!
                        </h2>
                        <h2 class="text-xl font-medium text-gray-900 mb-5 " v-if="pointDraw">DRAW !!!
                        </h2>
                        <p v-show="playerWin" class="text-white text-xl">Receive {{ amount * 2 }} Points !</p>
                        <p v-show="botWin" class="text-white text-xl">Lose {{ amount }} Points</p>
                        <p v-show="pointDraw" class="text-white text-xl">Receive {{ amount }} Points !</p>
                    </div>
                    <div class="modal-button">
                        <button @click="haveWinner = false, reset()">Close</button>
                    </div>
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

.modal-body h2 {
    margin-top: 0;
    text-align: center;
    font-size: 24px;
    color: white;
}

.modal-button {
    display: flex;
    justify-content: flex-end;
    color: white;
}
</style>