<script setup>
import { ref } from 'vue';
const active = ref(false)
const btn = () => {
    if (!active.value)
        active.value = !active.value
}
const slideCard = ref(true)
const showCard = () => {
    if (slideCard.value)
        slideCard.value = !slideCard.value
}
</script>
 
<template>
    <div class="w-1/2 h-52 center bg-slate-200 rounded-lg">
        <div
            class="flip-card fixed h-screen transform transition duration-1000 ease-in-out"
            v-bind:class="{ '-translate-x-full left-0': slideCard }"
            v-on:click="btn()"
        >
            <div
                class="flip-card-inner"
                v-bind:class="{ flipActive: active }"
                style="background-image: url('../assets/card/card-back.png')"
            >
                <div class="flip-card-front">
                    <img src="../assets/card/card_back.png" alt="Avatar" />
                </div>
                <div class="flip-card-back">
                    <img src="../assets/card/king_of_hearts2.png" alt="Avatar" />
                </div>
            </div>
        </div>
    </div>

    <div class="w-10/12 h-96">
        <div class="flex justify-center">
            <div class="px-20">
                <div
                    class="flip-card fixed h-screen transform transition duration-1000 ease-in-out"
                    v-bind:class="{ '-translate-x-full left-0': slideCard }"
                    v-on:click="btn()"
                >
                    <div
                        class="flip-card-inner"
                        v-bind:class="{ flipActive: active }"
                        style="background-image: url('../assets/card/card-back.png')"
                    >
                        <div class="flip-card-front">
                            <img src="../assets/card/card_back.png" alt="Avatar" />
                        </div>
                        <div class="flip-card-back">
                            <img src="../assets/card/king_of_hearts2.png" alt="Avatar" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="-px-20">
                <div
                    class="flip-card fixed h-screen transform transition duration-1000 ease-in-out"
                    v-bind:class="{ '-translate-x-full left-0': slideCard }"
                    v-on:click="btn()"
                >
                    <div
                        class="flip-card-inner"
                        v-bind:class="{ flipActive: active }"
                        style="background-image: url('../assets/card/card-back.png')"
                    >
                        <div class="flip-card-front">
                            <img src="../assets/card/card_back.png" alt="Avatar" />
                        </div>
                        <div class="flip-card-back">
                            <img src="../assets/card/king_of_hearts2.png" alt="Avatar" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div>
        <br />
        <br />
        <br />
        <br />
        <button v-on:click="showCard()">flipcard</button>
    </div>

    <div class="grid grid-cols-4 gap-4">
        <div>01</div>
        <div>09</div>
    </div>
</template>
 
<style scoped>
.center {
    margin: auto;
    width: 50%;
}
.flip-card {
    background-color: transparent;
    width: 140px;
    height: 200px;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
/* 
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
} */

.flipActive {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-front {
    background-color: #bbb;
    color: black;
}

.flip-card-back {
    background-color: #2980b9;
    color: white;
    transform: rotateY(180deg);
}
</style>