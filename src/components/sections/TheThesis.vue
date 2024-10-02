<template>
  <div class="thesis__item">
    <div class="thesis__title">
      <p class="heading">Title: {{title}}</p>
    </div>
    <div class="thesis__img">
      <img :src="img" alt="img">
    </div>
    <div class="thesis-text">
      <p class="body-text">content: {{ content }}</p>
    </div>
    <div class="thesis__info">
      <p class="body-text">Publicated: {{ pubDate }}</p>
      <p class="body-text">category {{ category }}</p>
      <p class="body-text">ai_tag {{ ai_tag }}</p>
      <p class="body-text">keywords :{{ keywords }}</p>
    </div>
  </div>

</template>
 
 <script setup>
import { defineOptions, defineProps } from "vue";

defineOptions({
  name: "TheThesis",
});

defineProps({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  img: {
    type: String,
  },
  content: {
    type: String,
  },
  pubDate: {
    type: String,
  },
  category: {
    type: String,
  },
  ai_tag : {
    type: String,
  },
  keywords : {
    type: String,
  },
});
</script>
 
 <style>
</style>