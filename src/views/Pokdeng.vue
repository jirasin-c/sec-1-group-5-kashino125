<script setup>
import Player from '../components/Pokdang/player.vue';
import Bot from '../components/Pokdang/bot.vue';
import Random from '../components/Pokdang/random.vue';
import { ref, onBeforeMount, reactive } from "vue";
import { user } from '../../data/user';
import { useRouter } from 'vue-router';
const appRouter = useRouter()

const goHome = () => {
    appRouter.push({ name: 'Home' })
}

if (user.statusUser == false) {
    goHome()
}
onBeforeMount(async () => {
    await getUser()

})
const accounts = ref([]);
const userEdit = reactive({
    userName: user.userName,
    passWord: "",
    name: user.name,
    points: ""
});
//GET method
const getUser = async () => {
    const res = await fetch(`http://localhost:5000/accounts/${user.userId}`);
    accounts.value = await res.json();
};

const updatePoint = async () => {
    if (user.name == "Anonymous") {
        return
    }
    userEdit.points = user.userPoint;
    userEdit.passWord = accounts.value.passWord;
    const res = await fetch(`http://localhost:5000/accounts/${user.userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userName: userEdit.userName,
            name: userEdit.name,
            passWord: userEdit.passWord,
            points: userEdit.points
        }),
    });
};

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
            <Random @update-point="updatePoint" />
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