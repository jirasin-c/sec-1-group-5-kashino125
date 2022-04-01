<script setup>
import { ref, onBeforeMount } from 'vue'
const players = ref([])
const sortPlayers = ref([])
const getPlayers = async () => {
    const res = await fetch('http://localhost:5000/accounts')
    players.value = await res.json()

    // for (const py in players.value) {
    //     console.log(py);
    //     sortPlayer.push([py, py.points])
    // }
    // console.log(sortPlayer);
    for (let index = 0; index < players.value.length; index++) {
        const py = players.value[index];
        // console.log(py);
        sortPlayers.value.push([py.userName, py.name, py.points])
        // console.log(sortPlayer[index]);
        // console.log(players.value.sort());
        // console.log(py.points);

    }

    sortPlayers.value.sort(function (a, b) {
        // console.log(a[1]);
        // console.log(b[1]);
        return b[2] - a[2]
    })
    // console.log(sortPlayers.value);
    // players.value.sort()

}


onBeforeMount(async () => {
    await getPlayers()
    // console.log(players.value);
})
</script>
 
<template>
    <h1 class="text-3xl font-bold underline">Leaderboard</h1>

    <div>
        <ul v-for="(player, index) in sortPlayers" :key="index" class="mb-3">
            <li>Rank #{{ index + 1 }}</li>
            <!-- <li>Username: {{ player[0] }}</li> -->
            <li>Name: {{ player[1] }}</li>
            <li>Points: {{ player[2] }}</li>
        </ul>
    </div>
</template>
 
<style>
</style>