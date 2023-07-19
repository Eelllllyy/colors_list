<template>
    <div v-for="(color, index) in colors" :key="index" class="color-item">
      <div class="color-block">
        <div v-for="i in color" :style="{backgroundColor: color.color}" class="color-content">{{ i }}</div>
      </div>
    </div>
</template>
<script setup>
const props = defineProps({
  colors: {
    type: Object,
    required: true,
    default: () => {
  }
  }})
</script>
<style scoped>
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