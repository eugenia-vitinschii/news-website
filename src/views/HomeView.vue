<template>
<div class="top">
  <div class="container">
    <div class="top__wrapper">
      <p> Number{{ store.getNumber }}</p>
      <the-top v-for="item in store.getCelebrityyNews"
      :key="item.article_id"
      :top="item.title"
      />
    </div>
  </div>
</div>
<!-- Celebrityy News -->
<div class="article">
  <div class="container">
    <div class="article__wrapper">
      <the-article-title 
      :articleHeader="'Celebrity'"
      />
      <div 
      class="article__items"
      :class="'article--a'"
      >
      <the-article 
      v-for="item in store.getCelebrityyNews" 
      :key="item.article_id" 
      :articleHeader="item.category"
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
</div>
<!-- Sport News -->
<div class="article">
  <div class="container">
    <div class="article__wrapper ">
      <the-article-title 
      :articleHeader="'Sport'"
      />
      <div 
      class="article__items"
      :class="'article--b'"
      >
      <the-article 
      v-for="item in store.getStortsNews" 
      :key="item.article_id" 
      :articleHeader="item.category"
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
</div>
<!-- getPoliticsNews -->
<div class="article">
  <div class="container">
    <div class="article__wrapper ">
      <the-article-title 
      :articleHeader="'Politics'"
      />
      <div 
      class="article__items"
      :class="'article--c'"
      >
      <the-article 
      v-for="item in store.getPoliticsNews" 
      :key="item.article_id" 
      :articleHeader="item.category"
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
</div>
<!-- getTelevisionNews -->
<div class="article">
  <div class="container">
    <div class="article__wrapper ">
      <the-article-title 
      :articleHeader="'Television'"
      />
      <div 
      class="article__items"
      :class="'article--b'"
      >
      <the-article 
      v-for="item in store.getTelevisionNews" 
      :key="item.article_id" 
      :articleHeader="item.category"
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
</div>
<!-- getCricketNews -->
<div class="article">
  <div class="container">
    <div class="article__wrapper ">
      <the-article-title 
      :articleHeader="'Cricket'"
      />
      <div 
      class="article__items"
      :class="'article--b'"
      >
      <the-article 
      v-for="item in store.getCricketNews" 
      :key="item.article_id" 
      :articleHeader="item.category"
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
</div>
</template>

<script setup>
//vue
import { defineOptions, onMounted,} from "vue";
//pinia
import { useNewsStore } from "@/stores/news";
//import components
import TheTop from "@/components/sections/TheTop.vue";
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


<style lang="sass">


</style>