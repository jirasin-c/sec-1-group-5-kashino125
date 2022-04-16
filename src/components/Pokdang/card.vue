<script setup>
import { computed, reactive, ref } from 'vue';
import { pok } from '../../../data/pokdeng';
const prop = defineProps({
    t: String,
    n: String,
    showw: Boolean,
    showactive: Boolean,
})
const active = ref(false)
const btn = () => {
    console.log(pok.statusStart)
    if (pok.statusStart) //true
        active.value = true
    else {
        active.value = false
    }
    console.log(active.value);
}


const checkshow = () => {
    if (!prop.showactive) {
        if (prop.showw) {
            if (active.value) {
                return true
            }
            return active.value
        }
        active.value = false
        return false
    }
    return true
}
const nameimg = () => {
    return `images/playingCard/${prop.n}_of_${prop.t}.svg`
}
</script>
 
<template>
    <div class="fixed h-screen transform transition duration-1000 ease-in-out"
        v-bind:class="{ '-translate-x-full left-0 ': !prop.showw }">
        <div class="flip-card" v-on:click="btn()">
            <div class="flip-card-inner" v-bind:class="{ flipActive: checkshow() }">
                <div class="flip-card-front">
                    <img src="../../assets/optionCard/card_back.png" alt="Avatar" />
                </div>
                <div class="flip-card-back">
                    <img :src="`images/playingCard/${prop.n}_of_${prop.t}.svg`" :alt="nameimg()" />
                </div>
            </div>
        </div>
    </div>
</template>
 
<style scoped>
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