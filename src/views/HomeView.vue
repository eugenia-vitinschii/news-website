<template>
  <!-- home view news -->
  <div class="home">
    <div class="container">
      <div class="home__wrapper">
        <!-- filters -->
        <div class="home__filters">
          <input 
          type="text" 
          id="search-input" 
          v-model="searchValue"
          placeholder="Search news"
          >
          <p class="body-text" v-show="searchValue.length > 0">{{ filteredNews.length }} result(s) for "{{ searchValue }}""  </p>
        </div>
        <div class="home__items">
          <the-item
            v-for="item in filteredNews"
            :key="item.title"
            :id="item.id"
            :title="item.title"
            :description="item.description"
            :pubDate="item.pubDate"
            :category="item.category"
          />

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//vue
import { defineOptions, onMounted, watch   } from "vue";
 
//pinia
import { useNewsStore } from "@/stores/news";
import { storeToRefs } from "pinia";

//import components
import TheItem from "@/components/sections/TheItem.vue";

defineOptions({
  name: "HomeView",
});

const store = useNewsStore();
const { fetchNews } = store;
const { filteredNews } = storeToRefs(store);
const { searchValue }= storeToRefs(store);

watch( searchValue, () => {
  fetchNews();
  })

//get news
onMounted(() => {
  fetchNews();
});

</script>
