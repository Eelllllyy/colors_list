<template>
  <div class="list-container">
    <button @click="openList(index)" :class="[isOpen? 'close-list' : 'open-list']" class="btn-list"></button>
  <!-- <label><input type="checkbox" name="name" v-model="listChecked" @click="listChecked = !listChecked"> {{ listItem.name }}</label> -->
  <label><input type="checkbox" name="name" @click="pickItems"> {{ listItem.name }}</label>
  </div>
  <div v-for="item in listItem.items" v-if="isOpen" class="items-container">
    <!-- <label><input type="checkbox" name="name" @click="currentItem = !currentItem"> {{ item.name }}</label> -->
    <itemChekbox :item="item"  :value="itemChecked"/>
    <div class="input-container">
      <input type="number"  min="0" v-model="item.count" class="input-count">
      <input type="color" v-model="item.color" class="input-color">
    </div>

  </div>
</template>
<script setup>
import {ref, watch} from 'vue'
import {currentList, itemChecked} from '../listService'
import itemChekbox from '@/modules/List/components/itemCheckbox.vue'
const isOpen = ref(false)
const listChecked = ref(false)
// const itemChecked = ref(false)
const pickItems = () => {
  itemChecked.value = ! itemChecked.value
  // listChecked.value? itemChecked.value = true : itemChecked.value = false
}
// watch(() => listChecked.value, (newValue) => {
//   // newValue? itemChecked.value = true : itemChecked.value = false
//   console.log(newValue)
// })
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
.btn-list{
  width: 20px;
  height: 20px;
  background-color: inherit;
  margin: 2px;
  border: none;
}
.open-list{
  background-image: url('../assets/images/open.svg');
}
.close-list{
  background-image: url('../assets/images/close.svg');
}
.list-container{
  display: flex;
  align-items: center;
}
.items-container{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
input{
  border: none;

}
.input-count{
  width: 48px;
  /* height: 20px; */
  padding: 5px;
}
.input-color{
  width: 20px;
  height: 23px;
}
.input-container{
  display: flex;
  align-items: center;
}
</style>