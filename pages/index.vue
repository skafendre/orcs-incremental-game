<template>
  <div>
    <div>
      Counter: {{ counter }}
      <button @click="this.counter++">
        +
      </button>
      <button @click="this.counter--">
        -
      </button>
    </div>

    <div>
      <Component1/>
      <Component2/>
    </div>
  </div>
</template>

<script lang="ts" setup>

const counter = useCounter()
</script>

