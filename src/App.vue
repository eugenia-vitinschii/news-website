<template>
<the-header/>
<!-- content -->
<div class="content">
  <RouterView />
</div>

 <the-footer/>
</template>



<script setup>
import TheHeader from './components/layout/TheHeader.vue';
import TheFooter from './components/layout/TheFooter.vue';
</script>

<style>
</style>
