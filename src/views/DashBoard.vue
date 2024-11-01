<template>
  <Navbar></Navbar>
  <ToastMessage></ToastMessage>
  <div class="container-fluid">
    <router-view/>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessage from '@/components/ToastMessage.vue';
import Navbar from '../components/NavBar.vue';

export default {
  name: 'DashBoard',
  components: {
    Navbar,
    ToastMessage,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {
    const token = document.cookie
      .replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user)
      .then((res) => {
        if (!res.data.success) {
          this.$router.push('/userindex/adminlogin');
        }
      });
  },
};
</script>

<style lang="scss">

</style>
