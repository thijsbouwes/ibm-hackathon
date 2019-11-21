<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Orders</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex align-items-center mb-3" v-for="(product, ref) in products">
        <img src="https://via.placeholder.com/100.png" class="mr-3" style="max-width: 100%;">
        <h3 class="flex-grow-1">{{ product.description }}</h3>
        <span class="price">$ {{ product.cost | money }}</span>
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

  computed: {
      totalPrice: function() {
        let total = 0;
        Object.keys(this.products).forEach(key => {
          const product = this.products[key];
          total += parseFloat(product.cost) * product.quantity;
        });
        return total;
      }
  },

  mounted() {
    EventBus.$on('order', product => {
      if (product.itemRef in this.products) {
        let p = this.products[product.itemRef];
        p.quantity += 1;
        this.$set(this.products, product.itemRef, p);
      } else {
        product.quantity = 1;
        this.$set(this.products, product.itemRef, product);
      }

      let total = 0;
      Object.keys(this.products).forEach(key => {
        const product = this.products[key];
        total += parseFloat(product.cost) * product.quantity;
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
  }
  .total {
    font-size: 2rem;
  }
</style>