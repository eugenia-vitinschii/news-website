<template>
  <!-- article item (center) -->
  <div class="article__item">
    <div class="article__content">
      <!-- aricle content -->
      <div class="article__title">
        <p class="subheading">
      0 {{ articleHeader }}
        </p>
      </div>
      <div class="article__text">
        <router-link :to="'/thesis/' + id">
          <p class="subheading bold">{{ title }}</p>
        </router-link>
        <p class="body-text">{{ description }}</p>
      </div>
    </div>
    <!-- article description -->
    <div class="article__description">
      <div class="article__media">
        <div class="article__media--icon">
          <img :src="source_icon" alt="source icon" />
        </div>
      </div>
      <div class="article__media--tag">
        <p class="body-text">tags: {{ ai_tag }}</p>
        <p class="body-text">{{ keywords }}</p>
      </div>
      <div class="article__img">
        <img :src="img" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineOptions, defineProps } from "vue";

defineOptions({
  name: "TheArticle",
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
  source_icon: {
    type: String,
  },
  ai_tag: {
    type: String,
  },
  keywords: {
    type: String,
  },
  img: {
    type: String,
  },
  top: {
    type: Boolean,
  },
  articleHeader: {
    type: String,
  },
});
</script>

<style>
</style>