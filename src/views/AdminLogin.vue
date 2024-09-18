<template>
  <div class="container mt-5">
    <form class="row justify-content-center">
      <div class="col-md-4 form-background ">
        <h1 class="h3 mb-4 font-weight-normal row justify-content-center">後台管理登入</h1>
        <div class="mb-3">
          <label for="inputEmail" class="sr-only">電子郵件
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
          <label for="inputPassword" class="sr-only">密碼
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
          <button class="btn btn-md btn-primary" type="submit" @click.prevent="signIn">登入</button>
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
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
            console.log(document.cookie);
            this.$router.push('/dashboard');
          }
        });
    },
  },
};
</script>

<style lang="scss">
$maincolor: #443;
$border-radius: 95% 4% 97% 5% / 4% 94% 3% 95%;
$border: .2rem solid;

form {
  color: $maincolor;
  label {
    width: 100%;
  }
  .form-background{
    margin-top: 80px;
    border: $border;
    padding: 3%;
    border-radius: $border-radius;
  }
}

</style>
