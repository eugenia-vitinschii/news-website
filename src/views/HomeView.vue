<template>
  <div class="news">
    <div class="container">
      <!-- news wrapper -->
      <div class="news__wrapper">
        <!-- left news title list -->
        <div class="news__left">
          <p class="colored">
            text Example
          </p>
          <the-small-article
            v-for="item in store.getTopCategory"
            :key="item.article_id"
            :id="item.article_id"
            :title="item.title"
          />
        </div>
        <!-- center news -->
        <div class="news__center">
          <!-- Celebrityy News -->
          <div class="article">
            <div class="article__wrapper">
              <the-article-title 
              :articleHeader="'Celebrity 0'" />
              <div class="article__items" :class="'article--a'">
                <the-article
                  v-for="item in store.getCelebrityyNews"
                  :key="item.id"
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
          <!-- Sport News -->
          <div class="article">
            <div class="article__wrapper">
              <the-article-title :articleHeader="'Sport'" />
              <div class="article__items" :class="'article--b'">
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
          <!-- Politics News -->
          <div class="article">
            <div class="article__wrapper">
              <the-article-title :articleHeader="'Politics'" />
              <div class="article__items" :class="'article--c'">
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
          <!-- Television News -->
          <div class="article">
            <div class="article__wrapper">
              <the-article-title :articleHeader="'Television'" />
              <div class="article__items" :class="'article--b'">
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
          <!-- Cricket News -->
          <div class="article">
            <div class="article__wrapper">
              <the-article-title :articleHeader="'Cricket'" />
              <div class="article__items" :class="'article--b'">
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
import TheSmallArticle from "@/components/sections/TheSmallArticle.vue";
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

