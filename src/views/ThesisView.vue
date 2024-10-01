<template>
  <div class="thesis">
    <div class="container">
      <div class="thesis__wrapper">
        <button
        @click="$router.go(-1)"
        >Back</button>
        <p class="red">ID: {{ id }}</p>
        <p class="heading">id: {{ route.params.id }}</p>
        <the-thesis 
          :id="news.id"
          :title="news.title"
         />
        <the-thesis 
          :id="news.article_id"
          :title="news.title"
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



onMounted(() => {
  fetchNewsById(id);
});



</script>

<style>
</style>