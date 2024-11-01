<template>
  <div class="coupon">
    <div class="content1 d-flex justify-content-end align-items-center">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item"><a href="#" style="color: rgb(68, 68, 51,0.8);"
            @click.prevent="opendelProduct()">新增優惠</a></li>
          <li class="breadcrumb-item"><a href="#" @click.prevent="logout">登出</a></li>
        </ol>
      </nav>
    </div>
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
        <tr>
          <td>分類</td>
          <td>商品名稱</td>
          <td>描述</td>
          <td>說明</td>
          <td class="text-right">
            原價
          </td>
          <td class="text-right">
            售價
          </td>
          <td>
            <span class="text-success">應用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm">編輯</button>
              <button class="btn btn-outline-danger btn-sm">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <CouponModal ref="CouponModal">
  </CouponModal>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue';

export default {
  name: 'ControlCoupon',
  inject: ['emitter'],
  data() {
    return {
      Coupon: [],
      tempCoupon: {},
      pagination: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    CouponModal,
  },
  methods: {
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
    opendelProduct() {
      const productComponent = this.$refs.CouponModal;
      productComponent.showModal();
    },
  },

};
</script>

<style lang="scss">
.content1 {
  margin-top: 80px;
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
