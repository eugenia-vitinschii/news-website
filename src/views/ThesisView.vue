<template>
  <div class="thesis">
    <div class="container">
      <div class="thesis__wrapper">
        <button
        class="button-svg"
        @click="$router.go(-1)"

        ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg></button>
        <the-thesis 
          :id="news.id"
          :title="news.title"
          :description="news.description"
          :img="news.image_url"
          :content="news.content"
          :pubDate="news.pubDate"
          :category="news.category"
          :ai_tag="news.ai_tag"
          :keywords="news.keywords"
          :source_icon="news.source_icon"
          :source_url="news.source_url"
         />
      </div>
    </div>
  </div>
</template>

<script setup>
//vue
import { defineOptions, onMounted } from "vue";
//components
import TheThesis from "@/components/sections/TheThesis.vue";

//pinia & router

import { useNewsStore } from "@/stores/news";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

defineOptions({
  name: "ThesisView",
});

const store = useNewsStore();
const route = useRoute();
const id = route.params.id;
const { news } = storeToRefs(store);
const { fetchNewsById } = store;

// onUnmounted(() => {
//   console.log("onUnmounted")
//   store.$reset()
// }) 

onMounted(() => {
  fetchNewsById(id);
});



</script>

<style>
</style>