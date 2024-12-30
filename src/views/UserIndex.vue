<template>
  <Navbar></Navbar>
  <ToastMessage></ToastMessage>
  <div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessage from '@/components/ToastMessage.vue';
import Navbar from '../components/NavBaruser.vue';

export default {
  name: 'UserIndex',
  components: {
    Navbar,
    ToastMessage,
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>

<style lang="scss" scoped>
  .content{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
  }
</style>
