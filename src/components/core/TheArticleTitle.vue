<template>
  <!-- article header for article item -->
  <div class="article__header">
    <p class="heading ">{{ articleHeader }}</p>
  </div>
</template>

<script setup>
import { defineOptions, defineProps } from "vue";

defineOptions({
  name: "TheArticleTitle",
});

defineProps({
  articleHeader: {
    type: String,
  },
});
</script>

<style>
</style>