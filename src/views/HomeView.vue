<template>
  <!-- Celebrityy News -->
  <div class="article">
    <div class="container">
    <div class="article__wrapper">
      <the-article-title
        @openLink()="$router.push('celebrity')"
        :articleHeader="'Celebrity'"
      />
      <div class="article__items" :class="'article--a'">
        <the-article
          v-for="item in store.getCelebrityyNews"
          :key="item.id"
          :articleHeader="item.category"
          :id="item.id"
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
  </div>
  <!-- Sport News -->
  <div class="article">
     <div class="container">
    <div class="article__wrapper">
     
      <the-article-title
        @openLink()="$router.push('sport')"
        :articleHeader="'sport'"
      />
      <div class="article__items" :class="'article--b'">
        <the-article
          v-for="item in store.getStortsNews"
          :key="item.id"
          :articleHeader="item.category"
          :id="item.id"
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
  </div>
  <!-- Politics News -->
  <div class="article">
    <div class="container">
    <div class="article__wrapper">
      <the-article-title
        @openLink()="$router.push('politics')"
        :articleHeader="'politics'"
      />
      <div class="article__items" :class="'article--c'">
        <the-article
          v-for="item in store.getPoliticsNews"
          :key="item.id"
          :articleHeader="item.category"
          :id="item.id"
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
  </div>
  <!-- Television News -->
  <div class="article">
    <div class="container">
    <div class="article__wrapper">
      <the-article-title
        @openLink()="$router.push('television')"
        :articleHeader="'television'"
      />
      <div class="article__items" :class="'article--b'">
        <the-article
          v-for="item in store.getTelevisionNews"
          :key="item.id"
          :articleHeader="item.category"
          :id="item.id"
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
  </div>
  <!-- Cricket News -->
  <div class="article">
    <div class="container">
    <div class="article__wrapper">
      <the-article-title
        @openLink()="$router.push('cricket')"
        :articleHeader="'cricket'"
      />
      <div class="article__items" :class="'article--b'">
        <the-article
          v-for="item in store.getCricketNews"
          :key="item.id"
          :articleHeader="item.category"
          :id="item.id"
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
  </div>
</template>

<script setup>
//vue
import { defineOptions, onMounted } from "vue";
//pinia
import { useNewsStore } from "@/stores/news";
//import components
import TheArticleTitle from "@/components/core/TheArticleTitle.vue";
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

