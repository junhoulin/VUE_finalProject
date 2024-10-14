<template>
  <div class="content">
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
          <div class="d-flex justify-content-between align-items-center">
            <h3>定價: {{product.price}} /{{product.unit}}</h3>
            <button class="btn btn-primary">加入購物車</button>
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
      isLoading: false,
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

<style lang="scss">
.content {
  margin-top: 180px;
  // 設定讓內容不會超出螢幕
  overflow-x: hidden;
}

.productimg {
  width: 100%;  // 讓圖片寬度自適應
  max-width: 600px; // 最大寬度設為 600px，防止過大
}

.itemimg {
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
}

// 手機尺寸調整
@media (max-width: 768px) {
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
