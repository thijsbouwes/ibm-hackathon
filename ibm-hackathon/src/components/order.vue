<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-12">
        <h1>Orders</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex align-items-center mb-3" v-for="(product, ref) in products">
        <img :src="'/images/' + product.CA_DESCRIPTION.split(' ')[0].toLowerCase() + '.jpg'" style="max-width: 100%; max-height: 100px;" class="mr-4">
        <h3 class="flex-grow-1">{{ product.CA_DESCRIPTION }}</h3>
        <span class="price">$ {{ product.CA_COST | money }}</span>
        <span class="quantity ml-4">{{ product.quantity }}</span>
      </div>

      <div class="col-12 d-flex justify-content-end">
        <span class="total mr-2">Total:</span>
        <span class="price">$ {{ total | money }}</span>
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
      refresh: true,
      isActive: this.active,
      total: 0,
      products: {},
    }
  },

  mounted() {
    EventBus.$on('order', product => {
      if (product.CA_ITEM_REF in this.products) {
        let p = this.products[product.CA_ITEM_REF];
        p.quantity += 1;
        this.$set(this.products, product.CA_ITEM_REF, p);
      } else {
        product.quantity = 1;
        this.$set(this.products, product.CA_ITEM_REF, product);
      }

      let total = 0;
      Object.keys(this.products).forEach(key => {
        const product = this.products[key];
        total += parseFloat(parseFloat(product.CA_COST)) * product.quantity;
      });
      this.total = total;

      this.$forceUpdate();

      //console.log(JSON.parse(JSON.stringify(this.products)));
    });
  },

  method: {

  }
}
</script>

<style lang="scss" scoped>
  .price {
    color: #3c89ff;
    font-size: 2rem;
    font-weight: 900;
  }
  .quantity {
    font-size: 2rem;
    font-weight: 900;
  }
  .total {
    font-size: 2rem;
  }
  img {
    height: 200px;
    object-fit: cover;
  }
</style>