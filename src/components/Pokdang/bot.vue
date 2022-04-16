<script setup>
import Card from './card.vue';
import { ref } from 'vue';
import { pok } from '../../../data/pokdeng';

const checkThree = (id) => {
    if (id == 2 && !(pok.botDraw)) {
        return true
    }
    return !pok.statusStart
}



</script>
 
<template>
    <div class="flex justify-center">
        <div class="w-1/3 h-60 bg-slate-300 rounded-lg border-solid border-slate-400 border-8">
            <div class="grid grid-cols-3 gap-4 p-2 pl-12 w-full h-full">
                <div v-for="(value, count) of pok.botCard" :id="count + 1"
                    :class="{ 'invisible': checkThree(count), 'disabledbutton': !pok.botstatus }">
                    <Card :t="value.Type" :n="value.Numbers" :showw="!checkThree(count)" :showactive="pok.allshow" />
                    <!-- {{ value }} -->
                </div>
            </div>
        </div>
    </div>
</template>
 
<style scoped>
.disabledbutton {
    pointer-events: none;
    opacity: 1;
}
</style>