<template>
<div class="article">
  <div class="container">
    <div class="article__wrapper">
      <the-article 
      v-for="item in store.news" 
      :key="item.article_id" 
      :id="item.article_id" 
      :title="item.title"
      :description="item.description"
      :source_icon="item.source_icon"
      :ai_tag="item.ai_tag"
      :keywords="item.keywords"
      :img="item.image_url"
      />
    </div>
  </div>
</div>
</template>

<script setup>
//vue
import { defineOptions, onMounted, ref } from "vue";
//pinia
import { useNewsStore } from "@/stores/news";
//import components
import TheArticle from "@/components/sections/TheArticle.vue";


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


<style lang="sass">


</style>