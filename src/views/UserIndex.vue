<template>
  <Navbar></Navbar>
  <div class="container-fluid">
    <router-view/>
  </div>
</template>

<script>
import Navbar from '../components/NavBaruser.vue';

export default {
  name: 'UserIndex',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">

</style>
