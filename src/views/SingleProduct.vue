<template>
  <div class="content1">
    <LoadingApp :active="isLoading">
      <div class="loadingio-spinner-double-ring-nq4q5u6dq7r"><div class="ldio-x2uulkbinbj">
      <div></div>
      <div></div>
      <div><div></div></div>
      <div><div></div></div>
      </div></div>
    </LoadingApp>
    <div class="container">
      <div class="row">
        <div class="col-md-6 itemimg">
          <img :src="product.imageUrl" class="productimg" alt="">
        </div>
        <div class="col-md-6 text-start describe">
          <h2>{{product.category}}</h2>
          <h4>{{product.title}}</h4>
          <p v-html="formatContent(product.content)"></p>
          <label for="price" class="form-label">👨‍👨‍👧‍👧 數量 :
            <input type="number" class="form-control" v-model="qty"
              placeholder="請輸入數量" min="1" max="18" step="1" value="1">
          </label>
          <div class="d-flex justify-content-between align-items-center">
            <h3>定價: {{product.price}} /{{product.unit}}</h3>
            <button class="btn btn-primary" @click="addProduct(product.id)"
            :disabled="this.status.LoadingItem === product.id">
            <div class="spinner-grow text-warning spinner-grow-sm  mx-1" role="status"
              v-if="this.status.LoadingItem === product.id">
              <span class="visually-hidden">Loading...</span>
            </div>我要打球</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleProduct',
  data() {
    return {
      id: '',
      product: {},
      qty: 1,
      isLoading: false,
      status: {
        LoadingItem: '',
      },
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product;
            this.isLoading = false;
          }
        });
    },
    addProduct(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.LoadingItem = id;
      const cart = {
        product_id: id,
        qty: this.qty,
      };
      this.$http.post(api, { data: cart })
        .then((res) => {
          this.status.LoadingItem = '';
          console.log(res);
        });
    },
    formatContent(content) {
      if (!content) return '';
      return content.replace(/\n/g, '<br>');
    },
  },
  created() {
    this.id = this.$route.params.productID;
    this.getProduct();
  },
};
</script>

<style lang="scss" scoped>
.content1 {
  margin-top: 140px;
}

.productimg {
  width: 100%;  // 讓圖片寬度自適應
  max-width: 600px; // 最大寬度設為 600px，防止過大
}

.itemimg {
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: .125rem solid #dee2e6 !important;
}

.describe {
  padding-left: 40px;
  h4 {
    margin-top: 20px;
  }
  p {
    margin-top: 20px;
  }
  button{
    margin-top: 20px;
  }
  h3{
    color: rgb(160, 29, 29);
  }
  label{
    margin-top: 10px;
    width: 120px;
  }
}

// 手機尺寸調整
@media (max-width: 768px) {
  .content1 {
    margin-top: 100px;
  }
  .productimg {
    width: 100%;  // 圖片在手機上完全佔滿容器寬度
    max-width: 380px;
  }
  .describe {
    padding-left: 20px;  // 減少 padding 確保適應小螢幕
  }
  .itemimg {
    border-right: .0rem solid #7b97b3 !important;
  }
}

</style>
