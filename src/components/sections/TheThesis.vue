<template>
  <div class="thesis__item">
    <p class="heading">The id: {{ id }}</p>
    <p class="body-text">The  title: {{ title }}</p>
  </div>
</template>
 
 <script setup>
import { defineOptions, defineProps } from "vue";

defineOptions({
  name: "TheThesis",
});

defineProps({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
});
</script>
 
 <style>
</style>