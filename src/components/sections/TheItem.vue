<template>
  <div class="home__item">
    <div class="home__text">
      <router-link :to="'/thesis/' + id">
        <p class="heading link">
          {{ title }}
        </p>
      </router-link>
      <p class="subheading text-limit">
        {{ description }}
      </p>
    </div>
    <div class="home__info">
      <p class="body-text">{{ pubDate }}</p>
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
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  pubDate: {
    type: String,
  },
});
</script>

<style>
</style>