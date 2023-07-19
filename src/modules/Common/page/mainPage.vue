<template>
  <section class="section">
    <article class="article list-checkbox">
      <div v-for="(listItem, index) in listItems" :key="index" class="list-items-content">
        <listCheckbox :listItem="listItem" :index="index"/>
      </div>
    </article>
    <article class="article list-result">
      <div v-for="(listItem, index) in listItems" class="list-result-content" :key="index">
        <listResult :listItem="listItem" :index="index"/>
      </div>
      <div v-for="colors in currentMix">
        <mixColor :colors="colors"/>
      </div>
    </article>
  </section>
</template>
<script setup>
import {listItems, currentMix} from '@/modules/Common/commonService'
import listCheckbox from '../../List/components/listCheckbox.vue'
import listResult from '../../List/components/listResult.vue'
import mixColor from '@/modules/List/components/mixColor.vue';

</script>
<style scoped>
.section{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.article{
  width: 40vw;
  height: 90vh;
  border: 1px solid black;
}
.list-result-content{
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
}
.list-items-content{
  width: 80%;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>