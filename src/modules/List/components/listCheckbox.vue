<template>
  <button @click="openList = !openList">Open</button>
  <label><input type="checkbox" name="name"> {{ listItem.name }}</label>
  <div v-for="item in listItem.items" v-if="openList">
    <label><input type="checkbox" name="name" > {{ item.name }}</label>
    <input type="number" v-model="item.count">
    <input type="color" v-model="item.color">
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

</style>