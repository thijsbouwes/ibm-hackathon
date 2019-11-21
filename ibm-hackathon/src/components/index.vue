<template>
  <div class="container" v-if="isActive">
    <div v-if="products !== null" class="row">
      <div class="col-12 text-center mt-4 mb-4">
        <h1>Mainframe Shop</h1>
      </div>

      <div v-for="product in products" class="col-md-3 mb-4 product" @click="open(product)">
        <img :src="'/images/' + product.CA_DESCRIPTION.split(' ')[0] + '.png'" style="max-width: 100%;">
        <h4 class="text-center mt-3 mb-0">{{ product.CA_DESCRIPTION }}</h4>
        <span class="d-block text-center price">$ {{ product.CA_COST | money }}</span>
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
      if (value === undefined) { return null }
      value = parseFloat(value);
      return value.toFixed(2);
    }
  },

  data() {
    return {
      isActive: this.active,
      offset: 0,
      products: [],
    }
  },

  mounted() {
    this.request();
  },

  methods: {
    open: function(product) {
      EventBus.$emit('product', product);
    },
    prev: function() {
      this.offset = (this.offset - 15 > 0 ? this.offset - 15 : 0);
      this.request();
    },
    next: function() {
      this.offset  = this.offset + 15;
      this.request();
    },
    request: function() {
      axios.request('/catalogManager4/items?offset=' + this.offset).then(response => {
        console.log(response);
        this.products = response.data.DFH0XCP1.CA_INQUIRE_REQUEST.CA_CAT_ITEM;
        this.isActive = false;
        this.$nextTick(() => {
          this.isActive = true;
        });
        console.log(this.products);
      });
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

  .price {
    color: #3c89ff;
    font-size: 2rem;
    font-weight: 900;
  }
</style>
