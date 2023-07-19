<template>
  <button @click="openList(index)">Open</button>
  <label><input type="checkbox" name="name"> {{ listItem.name }}</label>
  <div v-for="item in listItem.items" v-if="isOpen">
    <label><input type="checkbox" name="name" > {{ item.name }}</label>
    <input type="number" v-model="item.count">
    <input type="color" v-model="item.color">
  </div>
</template>
<script setup>
import {ref} from 'vue'
import {currentList} from '../listService'
const isOpen = ref(false)
const openList = (index) => {
  isOpen.value = !isOpen.value
  currentList.value.has(index) ? currentList.value.delete(index) : currentList.value.add(index)
}
const props = defineProps({
  listItem: {
    type: Object,
    required: true,
    default: () => {
    }
  },
  index: {
    type: Number,
    required: true,
  }})
</script>
<style scoped>

</style>