<template>
  <nav class="navbar1 navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid indexnavbar">
    <img class="navbarimg" src="../assets/logo.png" alt="" href="#">
    <button class="navbar-toggler" type="button"
    data-bs-toggle="collapse" data-bs-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse collapse1" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#/dashboard/controlpd">商品主頁</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">訂單列表</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">庫存管理</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/dashboard/coupon">優惠管理</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'DashBoard',
};
</script>

<style lang="scss">

$maincolor:  rgba(48, 48, 48,);

.navbar1 {
  box-shadow: 0 4px 8px rgba(48, 48, 48, 0.2);
}
.collapse1 {
  display: flex;
  justify-content: center;
  transform: translateX(-50px);
}

.navbarimg {
  width: 100px;
  margin-left: 10px;
}

.nav-item {
  margin: 3px 10px;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;
  &:hover {
    border-bottom:2px solid #443;
  }
  a:hover {
    color: rgb(112, 112, 66)
  }
}

@media (max-width: 992px) {
  .collapse1 {
    transform: translateX(0px);
  }
}

</style>
