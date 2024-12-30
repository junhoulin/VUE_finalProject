<template>
  <div class="contents">
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
        <div class="col-md-3">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action active"
            aria-current="true"  @click.prevent="getProducts()">
              中部全部地區
            </a>
            <a href="#" class="list-group-item list-group-item-action"
              @click.prevent="getProducts(choice = '東海大學排球場')">東海大學-野場
            </a>
            <a href="#" class="list-group-item list-group-item-action"
              @click.prevent="getProducts(choice = '逢甲大學排球場')">逢甲大學-野場
            </a>
            <a href="#" class="list-group-item list-group-item-action"
              @click.prevent="getProducts(choice = '中興大學排球場')">中興大學-野場
            </a>
            <a href="#" class="list-group-item list-group-item-action"
              @click.prevent="getProducts(choice = '靜宜大學排球場')">靜宜大學-野場
            </a>
          </div>
        </div>
        <div class="col-md-9 product-card">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="item in products" :key="item.id">
              <div class="card h-100 w-100" >
                <img src="../assets/indexbackground.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">
                    <i class="fa-solid fa-volleyball" style="color: #443;"></i>
                    {{item.category}}
                  </h5>
                  <p class="card-text" v-html="formatContent(item.description)"></p>
                  <div class="d-flex justify-content-between">
                    <a href="#" class="btn btn-primary"
                    @click.prevent="getProduct(item.id)">觀看細節</a>
                    <a href="#" class="btn btn-danger"
                    :class="{'disabled': this.status.LoadingItem === item.id}"
                    @click.prevent="addProduct(item.id)">
                    <div class="spinner-grow text-warning spinner-grow-sm" role="status"
                    v-if="this.status.LoadingItem === item.id">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    我要打球</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserIndex',
  data() {
    return {
      category: '123',
      products: [],
      isLoading: false,
      status: {
        LoadingItem: '',
      },
    };
  },
  methods: {
    getProducts(choice = 'all') {
      this.category = choice;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success && choice === 'all') {
            this.products = res.data.products;
            this.isLoading = false;
            this.$httpMessageState(res, '場次');
          } else if (res.data.success) {
            this.products = res.data.products.filter((item) => item.category === choice);
            this.isLoading = false;
            this.$httpMessageState(res, '場次');
          }
        });
    },
    getProduct(id) {
      this.$router.push(`/userindex/userproduct/${id}`);
    },
    addProduct(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.LoadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
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
    this.getProducts();
  },
};
</script>

<style lang="scss">
.contents{
  margin-top: 100px;
}
.card {
  min-height: 360px;
}
.disabled {
  background-color: #ccc;
  cursor: not-allowed;
  opacity: 0.7;
}
@media (max-width: 768px) {
  .product-card {
    margin-top: 30px;
  }
}
</style>
