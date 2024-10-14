<template>
  <!-- footer -->
  <div class="footer">
    <div class="container">
      <div class="footer__wrapper">
         <!-- footer content -->
        <div class="footer__content">
          <the-article-title
            @openLink()="$router.push('/celebrity')"
            :articleHeader="'celebrity'"
          />
          <the-article-title
            @openLink()="$router.push('sports')"
            :articleHeader="'sports'"
          />
          <the-article-title
            @openLink()="$router.push('television')"
            :articleHeader="'television'"
          />
          <the-article-title
            @openLink()="$router.push('top')"
            :articleHeader="'top'"
          />
        </div>
        <!-- footer information -->
        <div class="footer__info">
         <p class="body-text">
            ©All rights reserved
         </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { defineOptions } from "vue";
import TheArticleTitle from "../core/TheArticleTitle.vue";
defineOptions({
  name: "TheFooter",
});
</script>