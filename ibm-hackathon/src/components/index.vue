<template>
  <div class="container" v-if="isActive" style="margin-top: 50px;">
    <div v-if="products !== null" class="row">
      <div v-for="product in products" class="col-md-4 mb-4 product" @click="open(product)">
        <img :src="'/images/' + product.CA_DESCRIPTION.split(' ')[0].toLowerCase() + '.jpg'" style="max-width: 100%;">
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

    axios.request('/catalogManager4/items?offset=0').then(response => {
      // console.log(response);
      this.products = response.data.DFH0XCP1.CA_INQUIRE_REQUEST.CA_CAT_ITEM;
      // console.log(this.products);
    });
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
      height: 200px;
      object-fit: cover;
      width: 100%;
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
