<template>
  <LoadingApp :active="isLoading">
    <div class="loadingio-spinner-double-ring-nq4q5u6dq7r"><div class="ldio-x2uulkbinbj">
    <div></div>
    <div></div>
    <div><div></div></div>
    <div><div></div></div>
    </div></div>
  </LoadingApp>
  <div class="container mt-5">
    <form class="row justify-content-center">
      <div class="col-md-4 form-background ">
        <h1 class="h3 mb-4 font-weight-normal d-flex justify-content-center">後台管理登入</h1>
        <div class="mb-3">
          <label for="inputEmail" class="labinput mb-1">電子郵件
            <input
              type="email"
              id="inputEmail"
              class="form-control"
              placeholder="Email address"
              required
              v-model="user.username"
            />
          </label>
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="labinput">密碼
            <input
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="Password"
              required
              v-model="user.password"
            />
          </label>
        </div>
        <div class="text-end mt-4">
          <button class="btn btn-md main-btn" type="submit" @click.prevent="signIn">登入</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AdminLogin',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      isLoading: false,
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.isLoading = true;
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
            this.$router.push('/dashboard/controlpd');
            this.isLoading = false;
          }
        });
    },
  },
};
</script>

<style lang="scss">
$maincolor: #443;
$border-radius: 95% 4% 97% 5% / 4% 94% 3% 95%;
$border-radius-hover: 4% 95% 6% 95% / 95% 4% 92% 5%;
$border: .2rem solid;
$border-hover: .2rem dashed;

@mixin hover-border-radius() {
  border: $border-hover;
  border-radius: $border-radius-hover;
  transition: all .2s linear;
}

@mixin border-radius() {
  border: $border;
  border-radius: $border-radius;
  transition: all .2s linear;
}

form {
  color: $maincolor;
  .labinput {
    width: 100%;
  }
  .form-background{
    margin-top: 80px;
    border: $border;
    padding: 3%;
    border-radius: $border-radius;
  }
}

.main-btn{
  @include border-radius();
  font-weight: 600;
    &:hover{
      @include hover-border-radius()
    }
}

</style>
