<template>
   <!-- entertainmen news view -->
   <div class="category">
     <div class="container">
       <div class="category__wrapper">
         <div class="category__settings">
          <the-view-toggle
          @toggleStyle="toggleStyle()"
          :grid="toggle"
          :list="!toggle"/>
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
 import TheCategory from "@/components/sections/TheCategory.vue";
 import TheViewToggle from "@/components/components/TheViewToggle.vue";
 //pinia
 import { useNewsStore } from "@/stores/news";
 import { storeToRefs } from "pinia";
 
 defineOptions({
   name: "EntertainmentView",
 });
 
 //change Style 
let style = ref('list');
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