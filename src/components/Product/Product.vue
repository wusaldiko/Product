<template>
  <Navbar/>
  <div class="container" v-if="productArr">
    <div class="product">
      <ProductCard :productArr="productArrFilter" />
    </div>
    <div class="product__page">
      <button
        class="product__page-btn"
        v-for="page in pagesArr"
        :key="page"
        @click="pagePush(page)"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>
<script setup>
import Navbar from '../Navbar/Navbar.vue'
import { ref, onMounted, computed } from "vue";
import { useProduct } from "@/stores/product.js";
import ProductCard from "./ProductCard.vue";
const product = useProduct();
const productNum = ref(12);
const pageNum = ref(1);
onMounted(() => {
  product.getProducts();
});
function pagePush(page) {
  pageNum.value = page;
}
const productArr = computed(() => product.products);
console.log(productArr);

const productArrFilter = computed(() => {
  let from = (pageNum.value - 1) * productNum.value;
  let to = from + productNum.value;
  return productArr.value.slice(from, to);
});
const pagesArr = computed(() => {
  return Math.ceil(productArr.value.length / 12);
});
</script>
<style lang=""></style>
