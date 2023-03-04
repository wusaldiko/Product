<template>
  <div class="product__card" v-for="product in productArr" :key="product.id">
    <img :src="product.thumbnail" alt="" />
    <p class="product__card-brand">Brand: {{ product.brand }}</p>
    <h3 class="product__card-title">Name: {{ product.title }}</h3>
    <p class="product__card-stock">Stock: {{ product.stock }}</p>
    <div class="product__card-item">
      <p class="product__card-price">Cost: {{ product.price }}$</p>
      <button>
        <img class="product__card-img" src="../../assets/images/comment.png" alt="" />
      </button>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  productArr: Array,
});
</script>
<style lang=""></style>
