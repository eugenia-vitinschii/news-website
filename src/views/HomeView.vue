<template>
<!-- home view news -->
  <div class="article">
    <div class="container">
      <div class="article__wrapper">
        <div class="article__items">
          <the-article
            v-for="item in news"
            :key="item.id"
             :articleHeader="item.category"
             :id="item.id"
             :title="item.title"
             :description="item.description"
             :source_icon="item.source_icon"
             :ai_tag="item.ai_tag"
             :keywords="item.keywords"
             :img="item.image_url"
             :creator="item.creator"
          />
        </div>
      </div>
    </div>
  </div>
  
</template>

<script setup>
//vue
import { defineOptions, onMounted } from "vue";

//pinia
import { useNewsStore } from "@/stores/news";

//import components
import TheArticle from "@/components/sections/TheArticle.vue";
import { storeToRefs } from "pinia";

defineOptions({
  name: "HomeView",
});

const store = useNewsStore();

const {news} = storeToRefs(store)
const { fetchNews } = store;


//get news
onMounted(() => {
  fetchNews();
});
</script>

