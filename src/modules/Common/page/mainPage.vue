<template>
  <section class="section">
    <article class="article list-checkbox">
      <div v-for="(listItem, index) in listItems" :key="index">
        <listCheckbox :listItem="listItem" :index="index"/>
      </div>
    </article>
    <article class="article list-result">
      <div v-for="(listItem, index) in listItems" class="list-result-content" :key="index">
        <listResult :listItem="listItem" :index="index"/>
      </div>
    </article>
  </section>
</template>
<script setup>
import {listItems} from '@/modules/Common/commonService'
import listCheckbox from '../../List/components/listCheckbox.vue'
import listResult from '../../List/components/listResult.vue'

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
</style>