<template>
   <div class="small">
         <router-link :to="'/thesis/' + id">
      <p class="body-text">{{ title }}</p>
      <p class="red">id :{{ id }}</p>
   </router-link>
   </div>

  
</template>

<script  setup>

import { defineOptions, defineProps } from 'vue';


defineOptions({
   name: "TheSmallArticle"
})

defineProps({
   id:{
      type: String
   },
   title:{
      type: String
   }
})

</script>

<style>

</style>