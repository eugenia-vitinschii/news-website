<template>
   <div class="top__item">
      <router-link :to="'/thesis/' + id">
        <p class="body-text">{{ top}}</p>
      </router-link>
   </div>
  
</template>

<script setup>
import { defineOptions, defineProps } from 'vue';



defineOptions({
   name: "TheTop"
})

defineProps({
   id: {
      type: String,
   },
   top: {
      type: String
   }
})
</script>

<style>

</style>