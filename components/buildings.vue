<script lang="ts" setup>
const buildings = useBuildings()
console.log('Buidlings?', buildings)
</script>

<template>
  <div>
    {{
      buildings
    }}
  </div>
</template>


