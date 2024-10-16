<template>
  <!-- footer -->
  <div class="footer">
    <div class="container">
      <div class="footer__wrapper">
         <!-- footer content -->
        <div class="footer__content">
          <ul>
            <li><router-link class="header__link" to="/">Home</router-link></li>
            <li><router-link class="header__link" to="/all">All</router-link></li>
            <li><router-link class="header__link" to="/top">Top</router-link></li>
            <li><router-link class="header__link" to="/celebrity">Celebrity</router-link></li>
            <li><router-link class="header__link" to="/sports">Sport</router-link></li>
            <li><router-link class="header__link" to="/politics">Politics</router-link></li>
            <li><router-link class="header__link" to="/television">Television</router-link></li>
            <li><router-link class="header__link" to="/entertainment">Entertainment</router-link></li>
          </ul>
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

defineOptions({
  name: "TheFooter",
});
</script>