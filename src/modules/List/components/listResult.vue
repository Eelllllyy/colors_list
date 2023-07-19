<template>
  <p>{{ listItem.name }}</p>
  <div v-if="openListResult">
    <button>Click</button>
    <div v-for="(item, index) in listItem.items" :key="index" class="color-item">
      <div  class="color-block">
        <div v-for="i in item.count" :style="{backgroundColor: item.color}" class="color-content"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref, watch} from 'vue'
import {currentList} from '../listService'

const openListResult = ref(false)

watch(() => [...currentList.value], (newValue) => {
  if(newValue.includes(props.index)){
    openListResult.value = true
    console.log('yyyee')
  }
  else{
    openListResult.value = false
  }

  console.log([...currentList.value] ,newValue)
})

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
  }
})
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