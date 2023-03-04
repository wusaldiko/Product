import {
  defineStore
} from 'pinia'
import axios from 'axios'
export const useProduct = defineStore('product', {
  state: () => ({
    products: null
  }),
  actions: {
    async getProducts() {
      const res = await axios.get("https://dummyjson.com/products")
      this.products = res.data.products
      console.log(this.products);
    }
  }
})