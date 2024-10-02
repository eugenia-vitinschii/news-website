<template>
   <!-- Celebrity news view -->
   <div class="category">
     <div class="container">
       <div class="category__wrapper">
         <div class="category__settings">
           <button @click="toggleStyle">{{ style }}</button>
         </div>
         <!-- Celebrity news items -->
         <div class="category__items"
         :class="style"
         >
           <the-category
             v-for="item in store.getPoliticsNews"
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
 //pinia
 import { useNewsStore } from "@/stores/news";
 
 
 defineOptions({
   name: "PoliticsView",
 });
 
 //change Style 
 let style = ref('list');
  
 function toggleStyle(){
   style.value = style.value === 'grid' ? 'list' : 'grid'
 }
 
 const store = useNewsStore();
 const { fetchNews } = store;
 
 //get news
 onMounted(() => {
   fetchNews();
 });
 </script>
 
 <style>
 </style>