<template>
  <p>{{ listItem.name }}</p>
  <button>Click</button>
  <div v-for="(item, index) in listItem.items" v-if="openList" :key="index" class="color-item">
    <div  class="color-block">
      <div v-for="i in item.count" :style="{backgroundColor: item.color}" class="color-content"></div>
    </div>
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
.color-item{
  margin: 10px 0;
}
.color-block{
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.color-content{
  width: 12px;
  height: 12px;
  /* border: 1px solid initial; */
}
</style>