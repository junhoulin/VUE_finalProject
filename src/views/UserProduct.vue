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
        <div class="col-md-9">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="item in products" :key="item.id">
              <div class="card h-100 w-100" >
                <img src="../assets/indexbackground.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">
                    <i class="fa-solid fa-volleyball" style="color: #443;"></i>
                    {{item.category}}
                  </h5>
                  <p class="card-text">{{item.content}}</p>
                  <div class="d-flex justify-content-between">
                    <a href="#" class="btn btn-primary">觀看細節</a>
                    <a href="#" class="btn btn-danger">我要打球</a>
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
  },
  created() {
    this.getProducts();
  },
};
</script>

<style lang="scss">
.content{
  margin-top: 100px;
}
.card {
  min-height: 360px;
}
</style>
