<template>
  <div class="home__item">
    <!-- home img -->
    <div class="home__img">
      <img :src="img" v-if="img"/>
      <img src="@/assets/img/news.jpg" v-else>
    </div>
    <!-- home title -->
    <div class="home__text">
      <router-link :to="'/thesis/' + id">
        <p class="subheading link">
          {{ title }}
        </p>
      </router-link>
    </div>
    <!-- home info -->
      <div class="home__info">
        <p class="body-text text-limit">
          {{ description }}
        </p>
        <p class="body-text">{{ pubDate }}</p>
        <p class="body-text-category">category: {{ category }}</p>
      </div>
    </div>
</template>

<script setup>
import { defineOptions, defineProps } from "vue";

defineOptions({
  name: "TheItem",
});

defineProps({
  id: {
    type: String,
  },
  img: {
    type: String,
    default: require('@/assets/img/news.jpg'),
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  pubDate: {
    type: String,
  },
  category: {
    type: String,
  },
 
});
</script>

<style>
</style>