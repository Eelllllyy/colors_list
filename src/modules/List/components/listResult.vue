<template>
  <div class="container">
    <p>{{ listItem.name }}</p>
    <button @click="mixArray(index)" class="btn-mix" v-if="openListResult"> Перемешать</button>
  </div>
  <div v-if="openListResult">
    <div v-for="(item, index) in listItem.items" :key="index" class="color-item">
      <div class="color-block">
        <div v-for="i in item.count" :style="{backgroundColor: item.color}" class="color-content"></div>
      </div>
    </div>
    <!-- <div>
    </div> -->
    
  </div>
</template>
<script setup>
import {ref, watch} from 'vue'
import {currentList} from '../listService'
import {mixArray} from '../../Common/commonService'
// import mixColor from './mixColor.vue';

const openListResult = ref(false)

watch(() => [...currentList.value], (newValue) => {
  if(newValue.includes(props.index)){
    openListResult.value = true
  }
  else{
    openListResult.value = false
  }

  // console.log([...currentList.value] ,newValue)
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
.container{
  display: flex;
  justify-content: space-between;
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
.btn-mix{
  background-color: #1cb1ff;
  color:white;
  border: none;
  border-radius: 20px;
  padding: 3px 7px;
}

</style>