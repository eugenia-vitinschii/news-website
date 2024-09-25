<template>
  <div class="article__item">
      <div class="article__text">
         <router-link  :to="'/thesis/' + id">
            <p class="subheading"> 
            Title: {{ title }}
         </p>
         </router-link>
         <p class="body-text">Article Description: {{ description }}</p>
      </div>

  </div>
</template>

<script setup>
import { defineOptions, defineProps } from 'vue';

defineOptions({
  name: "TheArticle",
});

defineProps({
   id:{
      type: String
   },
   title: {
      type: String
   },
   description: {
      type: String
   },
})

</script>

<style>

</style>