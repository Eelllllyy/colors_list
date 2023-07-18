<template>
  <section class="section">
    <article class="article list-checkbox">
      <div v-for="listItem in listItems">
        <listCheckbox :listItem="listItem"/>
      </div>
    </article>
    <article class="article list-result">
      <div v-for="listItem in listItems">
        <listResult :listItem="listItem"/>
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
</style>