<template>
<nav class="navbar0 navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid indexnavbar">
    <a href="#/userindex/shoppingcart" class="shop1">
      <span aria-hidden="true">
        <i class="fa-solid fa-cart-shopping fa-xl"></i>
      </span>
      <span class="visually-hidden">前往購物車</span>
    </a>
    <img class="navbarimg" src="../assets/logo.png" alt="" href="#">
    <button class="navbar-toggler" type="button"
    data-bs-toggle="collapse" data-bs-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse collapse0" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page"
          href="#/userindex/userintrodution" @click="toggleNavbar">主頁介紹</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/userindex/userproduct" @click="toggleNavbar">商品主頁</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/userindex/usercontactMe" @click="toggleNavbar">聯絡我們</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/userindex/adminlogin" @click="toggleNavbar">後台登入</a>
        </li>
      </ul>
    </div>
    <a href="#/userindex/shoppingcart" class="shop2">
      <span aria-hidden="true">
        <i class="fa-solid fa-cart-shopping fa-xl"></i>
      </span>
      <span class="visually-hidden">前往購物車</span>
    </a>
  </div>
</nav>
</template>

<script>
export default {
  name: 'DashBoard',
  methods: {
    toggleNavbar() {
      const navbar = document.getElementById('navbarNav');
      if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
      }
    },
  },
};
</script>

<style lang="scss">
$maincolor: rgba(48, 48, 48,);

.navbar0 {
  box-shadow: 0 4px 8px rgba(48, 48, 48, 0.2);
}

.collapse0 {
  display: flex;
  justify-content: center;
  transition: none !important;
}

.navbarimg {
  width: 100px;
  transform: translateX(40px);
}

.nav-item {
  margin: 3px 10px;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;
  &:hover {
    border-bottom: 2px solid #443;
  }
  a:hover {
    color: rgb(112, 112, 66);
  }
}

.shop1 {
  display: none;
  color: #444433;
  &:hover {
    cursor: pointer;
    color: #787858;
  }
}

.shop2 {
  margin-right: 40px;
  color: #444433;
  &:hover {
    cursor: pointer;
    color: #787858;
  }
}
@media (max-width: 992px) {
  .shop1 {
    display: block;
  }
  .shop2 {
    display: none;
  }
  .navbarimg {
  width: 100px;
  transform: translateX(0px);
  }
  .navbar-collapse {
  transform: translateX(0px);
  }
}

</style>
