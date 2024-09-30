<template>
  <!-- item for category page -->
  <div class="category__item">
    <div class="category__text">
      <!-- title -->
      <div class="category__text--title">
        <router-link :to="'/thesis/' + id">
          <p class="subheading">
            {{ title }}
          </p>
        </router-link>
      </div>
      <div class="category__text--description">
        <p class="body-text">{{ description }}</p>
        <p class="body-text-category">#{{ category }}</p>
      </div>
    </div>
    <!-- img -->
    <div class="category__img">
      <img :src="img" alt="" />
    </div>
  </div>
</template>

<script setup>
import { defineOptions, defineProps } from "vue";

defineOptions({
  name: "TheCategory",
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
  description: {
    type: String,
  },
  category: {
    type: String,
  },
});
</script>

<style>
</style>