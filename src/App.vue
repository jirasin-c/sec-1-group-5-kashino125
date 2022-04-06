<script setup>
import Player from './components/Pokdang/player.vue';
import Bot from './components/Pokdang/bot.vue';
import Random from './components/Pokdang/random.vue';
</script>

<template>
  <div class="flex flex-col h-screen bg-green-700 pt-10">
    <div class="pt-20 h-1/3">
      <Bot />
    </div>
    <main class="p-4 flex-grow h-1/4">
      <div class="flex justify-center">
        <img
          class="w-1/6 h-auto animate-bounce"
          src="./assets/background/—Pngtree—vs versus 3d transparent background_5995748.png"
          alt
        />
      </div>
    </main>
    <footer>
      <Random />
    </footer>
    <div class="bg-green-700 h-1/3">
      <Player />
    </div>
  </div>
</template>

<style scoped>
</style>
