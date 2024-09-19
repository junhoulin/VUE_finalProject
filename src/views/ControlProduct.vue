<template>
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
        <li class="breadcrumb-item" aria-current="page">商品列表</li>
        <li class="breadcrumb-item"><a href="#" @click.prevent="logout">登出</a></li>
      </ol>
    </nav>
  </div>
  <div class="productlist">
    <table class="table mt-4 table-bordered align-middle">
      <thead class="table-black">
        <tr>
          <th width="200">分類</th>
          <th >商品名稱</th>
          <th width="160">原價</th>
          <th width="160">售價</th>
          <th width="160">是否應用</th>
          <th width="300">編輯</th>
        </tr>
      </thead>
      <tbody class="table-striped">
        <tr>
          <td>分類</td>
          <td>標題</td>
          <td class="text-right">
            200
          </td>
          <td class="text-right">
            100
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
</template>

<script>
export default {
  name: 'DashBoard',
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/login');
          }
        });
    },
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
