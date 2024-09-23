<template>
<!-- header -->
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <nav class="header__nav" :class="{ active: showBurger }">
          <ul v-on:click="showBurger = !showBurger">
            <li><router-link class="header__link" to="/">Home</router-link></li>
            <li><router-link class="header__link" to="test">Test</router-link></li>
            <li><a href="#" class="header__link">Shop</a></li>
            <li><a href="#" class="header__link">Delivery</a></li>
            <li><a href="#" class="header__link">About</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
    <!-- burger button -->
    <div
    class="burger"
    v-on:click="showBurger = !showBurger"
    v-bind:class="{ active: showBurger }"
  >
    <span></span>
  </div>
</template>



<script setup>
import { defineOptions, ref } from "vue";

defineOptions({
  name: "TheHeader",
});

const showBurger = ref(false);
</script>