<template>
  <label><input type="checkbox" name="name"> {{ item.name }}</label>
</template>
<script setup>
// import { itemChecked} from '../listService'
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => {
    }
  },
  
})
</script>