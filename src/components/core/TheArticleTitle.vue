<template>
      <div class="article__header">
         <p class="heading red"> {{ articleHeader}}</p>
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