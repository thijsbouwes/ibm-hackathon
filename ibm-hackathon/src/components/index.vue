<template>
  <div class="container" v-if="isActive">
    <div v-if="products !== null" class="row">
      <div class="col-12 text-center mt-4 mb-4">
        <h1>Mainframe Shop</h1>
      </div>

      <div v-for="product in products" class="col-md-3 mb-4 product" @click="open(product)">
        <img src="https://via.placeholder.com/300.png" style="max-width: 100%;">
        <h4 class="text-center mt-3">{{ product.description }}</h4>
        <span class="d-block text-center price">{{ product.cost | money }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from './../event-bus.js';

export default {
  props: {
    active: Boolean,
  },

  filters: {
    money: function (value) {
      return value.toFixed(2);
    }
  },

  data() {
    return {
      isActive: this.active,
      products: []
    }
  },

  mounted() {
    EventBus.$on('page', page => {
      if (page === 'index') {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    });

    axios.request('/catalogManager4/items?offset=0').then(response => {
      console.log(response);
      this.products = response.data.DFH0XCP1.CA_INQUIRE_REQUEST.CA_CAT_ITEM;
      console.log(this.products);
    });
  },

  methods: {
    open: function(product) {
      EventBus.$emit('product', product);
    }
  }
}
</script>

<style scoped lang="scss">
  .product {
    img {
      transition: transform .3s;
    }

    &:hover {
        img {
          transform: scale(1.05);
        }
     }
  }
</style>
