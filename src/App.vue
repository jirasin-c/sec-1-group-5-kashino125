<script setup>
import { onMounted, onUpdated, onBeforeMount } from 'vue'
import AppNavbar from './components/AppNavbar.vue';
// const PlaySound = () => {
//   var audio = new Audio('KashinoNew.wav');
//   audio.loop = true;
//   audio.play();
// }
// PlaySound();
// function play() {
//   var audio = new Audio('KashinoNew.wav');
//   audio.play();
// }
// onBeforeMount(() => {
//   //   // var audio = new Audio('KashinoNew.wav');
//   // audio.play();
//   // play();
//   PlaySound();
// })


</script>
 
<template>
  <AppNavbar />
  <!-- <button @click="PlaySound">PLAY MY AUDIO</button> -->
</template>
 
<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>

