<template>
  <button @click="openList = !openList">Open</button>
  <label><input type="checkbox" name="name" value="Четотам"> {{ listItem.name }}</label>
  <div v-for="item in listItem.items" v-if="openList">
    <label><input type="checkbox" name="name" value="Четотам"> {{ item.name }}</label>
    <input type="number" v-model="item.count">
    <input type="color" v-model="item.color" @input="updateColor">
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
const updateColor = () => {

}
</script>
<style scoped>
.card{
  color: rgb(102, 169, 93)
}
</style>