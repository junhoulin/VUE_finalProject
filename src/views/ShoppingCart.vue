<template>
  <Navbar></Navbar>
  <LoadingApp :active="isLoading">
      <div class="loadingio-spinner-double-ring-nq4q5u6dq7r"><div class="ldio-x2uulkbinbj">
      <div></div>
      <div></div>
      <div><div></div></div>
      <div><div></div></div>
      </div></div>
    </LoadingApp>
  <div class="cart-container">
    <h1 class="cart-title"><i class="fa-solid fa-shop"></i>購物車</h1>
    <ul class="product-list">
      <li class="product-item"  v-for="item in cartData" :key="item.id">
        <div class="product-info">
          <img src="../assets/indexbackground.png" alt="Product Image" class="product-image" />
          <div class="product-details">
            <div class="product-title">{{ item.product.title }}</div>
            <div class="product-price">{{ item.product.price }} 元</div>
          </div>
        </div>
        <div class="product-info2">
          <div class="input-group">
            <input type="number" class="form-control" placeholder=""
            aria-label="number" aria-describedby="basic-addon2"
            min="1" max="18" step="1" value="1" v-model="item.qty"
            @change="updateCart(item)"
            :disabled="item.id === status.loadingdItem">
            <span class="input-group-text" id="basic-addon2">/ 人</span>
          </div>
          <div class="product-price">共 : {{ item.total }} 元</div>
        </div>
        <button class="remove-button" @click="deleteCart(item)">
          <i class="bi bi-trash"></i></button>
      </li>
    </ul>
    <div class="final-price">
      <label class="coupon-label" for="coupon-code">
        優惠券 :
        <input type="text" id="coupon-code" placeholder="請輸入優惠卷" class="coupon-input" />
      </label>
      <h3>總金額 : {{ cart.final_total }} </h3>
    </div>
    <button class="checkout-button">結帳</button>
  </div>
</template>

<script>
import Navbar from '../components/NavBaruser.vue';

export default {
  name: 'shoppingCart',
  components: {
    Navbar,
  },
  data() {
    return {
      cart: {},
      cartData: {},
      isLoading: false,
      status: {
        loadingdItem: '',
      },
    };
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api)
        .then((res) => {
          this.cart = res.data.data;
          this.cartData = res.data.data.carts;
          this.isLoading = false;
          this.$httpMessageState(res, '購物車');
        });
    },
    updateCart(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product.id,
        qty: item.qty,
      };
      this.status.loadingdItem = item.id;
      this.$http.put(api, { data: cart })
        .then((res) => {
          this.$httpMessageState(res, '數量');
          this.getCart();
          this.status.loadingdItem = '';
        });
    },
    deleteCart(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.status.loadingdItem = item.id;
      this.$http.delete(api)
        .then((res) => {
          this.$httpMessageState(res, '刪除');
          this.getCart();
          this.status.loadingdItem = '';
        });
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style lang="scss">
.cart-container {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.cart-title {
  font-size: 2rem;
  font-weight: 600px;
  text-align: center;
  margin-bottom: 20px;
}

.fa-shop{
  margin-right: 10px;
}
.product-list {
  list-style-type: none;
  padding: 0;
  margin: 0;

  .product-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-bottom: 10px;
    background-color: #ffffff;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }

    .product-info {
      display: flex;
      align-items: center;
      width: 50%;
      min-width: 200px;
    }

    .product-info2 {
      text-align: center;
    }

    .product-image {
      width: 70px;
      height: 70px;
      border-radius: 5px;
      margin-right: 15px;
    }

    .product-details {
      .product-title {
        font-weight: bold;
      }

      .product-price {
        color: #28a745;
      }
    }

    .input-group{
      width: 120px;
    }

    .remove-button {
      background-color: transparent;
      border: none;
      color: #dc3545;
      font-size: 1.5rem;
      padding: 8px;
      &:hover {
        color: #ff6b6b;
      }
    }
  }
}
.final-price{
  display: flex;
  align-items: center;
  justify-content: space-between;
  label{
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
}

.checkout-button {
  width: 100%;
  padding: 8px;
  background-color: #443;
  color: #ffffff;
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #28a745;
  }
}

</style>
