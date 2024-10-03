<template>
  <div class="thesis__item">
    <div class="thesis__title">
      <p class="heading">{{title}}</p>
    </div>
    <div class="thesis__img">
      <img :src="img" alt="img">
    </div>
    <div class="thesis-text">
      <p class="subheading">{{ description }}</p>
      <p class="body-text">content: {{ content }}</p>
    </div>
    <div class="thesis__info">
      <p class="body-text"> {{ pubDate }}</p>
      <p class="body-text">category: {{ category }}</p>
      <p class="body-text">#{{ ai_tag }}</p>
      <p class="body-text">keywords: {{ keywords }}</p>
    </div>
    <div class="thesis__source">
      <div class="thesis__source--img">
              <a :href="source_url">
        <img :src="source_icon" alt="icon">
      </a>
      </div>

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
  description: {
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
  source_url: {
    type: String,
  },
  source_icon: {
    type: String,
  },
});
</script>
 
 <style>
</style>