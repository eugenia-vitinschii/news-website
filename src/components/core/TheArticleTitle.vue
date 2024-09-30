<template>
  <!-- article header for article item -->
  <div class="article__header">
    <router-link :to="view">
      <p class="heading ">{{ articleHeader }}</p>
    </router-link>
   
  </div>
</template>

<script setup>
import { defineOptions, defineProps } from "vue";

defineOptions({
  name: "TheArticleTitle",
});

defineProps({
  view:{
    type: String,
  },
  articleHeader: {
    type: String,
  },
});
</script>

<style>
</style>