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

<style lang="scss">

</style>
