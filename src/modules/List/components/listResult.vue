<template>
  <label><input type="checkbox" name="name" value="Четотам"> {{ listItem.name }}</label>
  <button>Click</button>
  <div v-for="item in listItem.items" v-if="openList">
    <!-- <input type="color" :value="item.color"> -->
    <div :style="{color: item.color}">sdfsffd</div>
  </div>
</template>
<script setup>
import {ref} from 'vue'
const openList = ref(true)
const props = defineProps({
  listItem: {
  type: Object,
  required: true,
  default: () => {
  }
}})
</script>
<style scoped>
.card{
  color: rgb(102, 169, 93)
}
</style>