<template>
  <!-- item for category pages list / grid -->
  <div class="category__item">
    <!-- category text div-->
    <div class="category__text">
      <!-- title -->
      <div class="category__text--title">
        <router-link :to="'/thesis/' + id">
          <p class="subheading link">
            {{ title }}
          </p>
        </router-link>
      </div>
      <div class="category__text--description">
        <p class="body-text text-limit">{{ description }}</p>
        <router-link :to="category">
        <p class="body-text-category">category: #{{ category }}</p>
        </router-link>
        <router-link :to="ai_tag">
          <p class="body-text-category">
          #{{ai_tag}}
        </p>
        </router-link>
       
       
      </div>
      <div class="category__text--img">
        <a :href="source_url" target="_blank">
          <img :src="source_icon" alt="icon" />
        </a>
      </div>
    </div>
    <!--category img div-->
    <div class="category__img grayscale">
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
  ai_tag: {
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