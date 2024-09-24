<template>
  <p class="body-text" v-for="item in store.news" :key="item.article_id">
      Country {{ item.title}} 
  </p> 

</template>

<script setup>
import { defineOptions, onMounted } from "vue";

import { useNewsStore } from "@/stores/news";



defineOptions({
  name: "HomeView",
});

const store = useNewsStore();
const { fetchNews } = store;

//get news
onMounted(() => {
  fetchNews();
});
</script>

 