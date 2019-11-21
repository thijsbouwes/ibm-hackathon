<template>
  <div class="modal" tabindex="-1" role="dialog" id="product">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <div class="d-flex justify-content-center" v-if="isLoading">
            <img src="/images/loading.gif" style="max-width: 100%">
          </div>

          <div v-if="!isLoading">
            <div class="d-flex justify-content-center">
              <img :src="'/images/' + product.CA_DESCRIPTION.split(' ')[0] + '.png'" style="max-width: 100%;">
            </div>
            <h2 class="mt-4 mb-3">{{ product.CA_DESCRIPTION }}</h2>

            <div class="d-flex justify-content-between">
              <span class="price">$ {{ product.CA_COST | money }}</span>
              <span class="stock">Stock: {{ product.IN_STOCK }}</span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="order">Order</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { EventBus } from './../event-bus.js';
  import JQuery from 'jquery';

export default {
  data() {
    return {
      isLoading: false,
      product: null,
    }
  },

  filters: {
    money: function (value) {
      if (value === undefined) { return null }
      value = parseFloat(value);
      return value.toFixed(2);
    }
  },

  mounted() {
    EventBus.$on('product', product => {
      this.product = product;

      let $ = JQuery;
      $('#product').modal('show');
    });
  },

  methods: {
    order: function () {
      this.product.IN_STOCK -= 1;
      EventBus.$emit('order', this.product);
    }
  }
}
</script>

<style lang="scss" scoped>
  .price {
    color: #3c89ff;
    font-size: 2rem;
    font-weight: 900;
  }
  .stock {
    font-size: 2rem;
  }
</style>
