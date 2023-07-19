import {ref} from 'vue'
export const listItems = ref([{name:'List1', items: [{ name:'Item1', count: 10, color: '#ff0200'}, { name:'Item2', count: 20, color: '#7FFF00'}, { name:'Item3', count: 36, color: '#7B68EE'},{ name:'Item4', count: 10, color: '#FFFF00'}]}, {name:'List2', items: [{ name:'Item1', count: 42, color: '#00FFFF'}, { name:'Item2', count: 6, color: '#0000FF'}, { name:'Item3', count: 11, color: '#FF00FF'},{ name:'Item4', count: 3, color: '#2F4F4F'}]},{name:'List3', items: [{ name:'Item1', count: 34, color: '#B8860B'}, { name:'Item2', count: 23, color: '#6A5ACD'}, { name:'Item3', count: 11, color: '#F0E68C'},{ name:'Item4', count: 1, color: '#48D1CC'}]},{name:'List4', items: [{ name:'Item1', count: 13, color: '#FFDAB9'}, { name:'Item2', count: 19, color: '#FF4500	'}, { name:'Item3', count: 10, color: '#00FF7F'},{ name:'Item4', count: 30, color: '#9400D3'}]}, ])
export const currentMix = ref([])
export const mixArray = (index) => {
  // console.log(listItems.value[index].items.map((item) => item.color))
  // console.log(listItems.value[index].items)
//   currentMix.value = listItems.value[index].items
//   console.log(currentMix.value)
//   let m = currentMix.value.length, t, i;
// console.log(m)
//   while (m) {
//     i = Math.floor(Math.random() * m--);
//     t = currentMix.value[m];
//     currentMix.value[m] = currentMix.value[i];
//     currentMix.value[i] = t;
//   }

//   return currentMix.value;
}