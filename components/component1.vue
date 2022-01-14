<template>
  <div>
    Counter: {{ game.counter }}
    <button @click="this.game.counter++">
      +
    </button>
    <button @click="this.game.counter--">
      -
    </button>
  </div>
</template>

<script lang="ts" setup>
const game = useGame()
</script>

