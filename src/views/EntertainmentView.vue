<template>
   <!-- entertainmen news view -->
   <div class="category">
     <div class="container">
       <div class="category__wrapper">
                 <!-- category nav -->
        <div class="category__nav">
          <the-category-nav :category="'Entertainment'" />
          <the-view-toggle
            @toggleStyle="toggleStyle()"
            :grid="toggle"
            :list="!toggle"
          />
        </div>
         <!-- entertainment news items -->
         <div class="category__items"
         :class="style"
         >
           <the-category
             v-for="item in getNewsByCategory('entertainment')"
             :key="item.id"
             :id="item.id"
             :title="item.title"
             :img="item.image_url"
             :description="item.description"
             :category="item.category"
                         :ai_tag="item.ai_tag"
                         :source_url="item.source_url"
            :source_icon="item.source_icon"
           />
         </div>
       </div>
     </div>
   </div>
 </template>
 
 <script setup>
 //vue
 import { defineOptions, onMounted, ref } from "vue";
 
 //components
 import TheCategoryNav from "@/components/core/TheCategoryNav.vue";
 import TheCategory from "@/components/sections/TheCategory.vue";
 import TheViewToggle from "@/components/components/TheViewToggle.vue";
 //pinia
 import { useNewsStore } from "@/stores/news";
 import { storeToRefs } from "pinia";
 
 defineOptions({
   name: "EntertainmentView",
 });
 
 //change Style 
let style = ref('grid');
let toggle = ref(true)

function toggleStyle() {
style.value = style.value === "grid" ? "list" : "grid"
toggle.value = toggle.value === false ? true : false
}

 const store = useNewsStore();
 const { fetchNews } = store;
 const { getNewsByCategory } = storeToRefs(store);

 
 //get news
 onMounted(() => {
   fetchNews();
 });
 </script>
 
 <style>
 </style>