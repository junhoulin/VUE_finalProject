<template>
  <LoadingApp :active="isLoading">
    <div class="loadingio-spinner-double-ring-nq4q5u6dq7r"><div class="ldio-x2uulkbinbj">
    <div></div>
    <div></div>
    <div><div></div></div>
    <div><div></div></div>
    </div></div>
  </LoadingApp>
  <div class="content d-flex justify-content-between align-items-center">
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle " type="button"
        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        分類
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item"><a href="#" style="color: rgb(68, 68, 51,0.8);"
          @click.prevent="openModal(true)">新增商品</a></li>
        <li class="breadcrumb-item"><a href="#" @click.prevent="logout">登出</a></li>
      </ol>
    </nav>
  </div>
  <div class="productlist">
    <table class="table mt-4 table-bordered align-middle">
      <thead class="table-black">
        <tr>
          <th width="100">分類</th>
          <th width="100">商品名稱</th>
          <th width="250">描述</th>
          <th width="250">說明</th>
          <th width="100">原價</th>
          <th width="100">售價</th>
          <th width="100">是否應用</th>
          <th width="100">編輯</th>
        </tr>
      </thead>
      <tbody class="table-striped">
        <tr v-for="item in products" :key="item.id">
          <td>{{item.category}}</td>
          <td>{{item.title}}</td>
          <td>{{item.description}}</td>
          <td>{{item.content}}</td>
          <td class="text-right">
            {{$filters.currency(item.origin_price)}}
          </td>
          <td class="text-right">
            {{$filters.currency(item.price)}}
          </td>
          <td>
            <span class="text-success" v-if="item.is_enabled">應用</span>
            <span class="text-success" v-else >未應用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm"
              @click="opendelProduct(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <PageNation :pages="pagination" @emit-pages="getProducts"></PageNation>
  <ProductModal ref="ProductModal"
  :product="tempProduct"
  @update-product="updateProduct">
  </ProductModal>
  <DeleteModal ref="DeleteModal"
  :product="tempProduct"
  @delete-product="delproduct">
  </DeleteModal>

</template>

<script>
import ProductModal from '@/components/ProductModal.vue';
import DeleteModal from '@/components/DeleteModal.vue';
import PageNation from '@/components/PageNation.vue';

export default {
  name: 'ControlProduct',
  data() {
    return {
      products: [],
      tempProduct: {},
      pagination: {},
      isNew: false,
      isLoading: false,
    };
  },
  inject: ['emitter'],
  components: {
    ProductModal,
    DeleteModal,
    PageNation,
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
            this.isLoading = false;
            this.emitter.emit('push-message', {
              style: 'success',
              title: '主頁更新成功',
              content: '主頁已更新',
            });
          }
        });
    },
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.isLoading = true;
      this.$http.post(api)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/login');
            this.isLoading = false;
          }
        });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        this.tempProduct = { ...item };
        this.isNew = false;
      }
      const productComponent = this.$refs.ProductModal;
      productComponent.showModal();
    },
    hideModal() {
      this.tempProduct = {};
      const productComponent = this.$refs.ProductModal;
      productComponent.hideModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpmethod = 'post';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpmethod = 'put';
      }
      this.$http[httpmethod](api, { data: this.tempProduct })
        .then((res) => {
          if (res.data.success) {
            this.hideModal();
            this.getProducts();
            this.emitter.emit('push-message', {
              style: 'success',
              title: '商品更新成功',
              content: '商品已更新',
            });
          }
        });
    },
    opendelProduct(item) {
      this.tempProduct = { ...item };
      const productComponent = this.$refs.DeleteModal;
      productComponent.showModal();
    },
    hidedelModal() {
      this.tempProduct = {};
      const productComponent = this.$refs.DeleteModal;
      productComponent.hideModal();
    },
    delproduct(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
      this.$http.delete(api)
        .then((res) => {
          if (res.data.success) {
            this.hidedelModal();
            this.getProducts();
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '商品更新成功',
              content: '商品已刪除',
            });
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
.content {
  margin-top: 70px;
  .breadcrumb {
    margin-right: 30px;
  }
  button {
    margin-top: 10px;
    margin-left: 20px;
    color: white;
    background-color: rgb(68, 68, 51,0.8);
  }
}
.breadcrumb{
  a {
    color: #f57963;
    text-decoration: none;
  }
}
</style>
