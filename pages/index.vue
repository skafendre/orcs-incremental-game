<template>
  <div>
    <div>
      Hey {{ test }}
      <button @click="this.test++">
        +
      </button>
      <button @click="this.test--">
        -
      </button>

      Test with a class NON POJO object
      {{ myBuilding }}
      <button @click="this.myBuilding.increaseAmount()">
        +
      </button>
      <button @click="this.myBuilding.amount--">
        -
      </button>
    </div>
    <div>
      <Buildings/>
      <BuildingsProps/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gameInstance} from "~/ts";
import {Building} from "~/ts/classes/Building";

const test: Ref<number> = ref(1)
const myBuilding: Ref<Building> = gameInstance.entities.buildings[0]
</script>

