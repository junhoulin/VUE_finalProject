<template>
  <div id="introdution" class="col-md-12">
    <swiper :pagination="true" :modules="modules" class="mySwiper">
      <swiper-slide class="swiper-slide swiper-slide1">
        <h1>最大約球平台</h1>
        <h2>排球人的聚集地，隨時隨地來開打</h2>
        <p>不怕找不到隊友，排球讓我們變朋友！</p>
        <a href="/#/userindex/userproduct" class="btn btn-primary">觀看細節</a>
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    </swiper>
    <div class="item-list">
      <div class="item">
        <div class="item-icon">
          <i class="fa-solid fa-medal fa-xl" style="font-size: 48px;"></i>
        </div>
        <div class="item-info">
          <h5>1月熱血球員</h5>
          <p>林晉豪</p>
          <a>總共報名 15 場</a>
        </div>
      </div>
      <div class="item">
        <div class="item-icon">
          <i class="fa-solid fa-medal fa-xl" style="font-size: 48px;"></i>
        </div>
        <div class="item-info">
          <h5>1月熱門場地</h5>
          <p>東海大學</p>
          <a>總共報名 15 場</a>
        </div>
      </div>
      <div class="item">
        <div class="item-icon">
          <i class="fa-solid fa-medal fa-xl" style="font-size: 48px;"></i>
        </div>
        <div class="item-info">
          <h5>熱血球員</h5>
          <p>林晉豪</p>
          <a>總共報名 15 場</a>
        </div>
      </div>
      <div class="item">
        <div class="item-icon">
          <i class="fa-solid fa-medal fa-xl" style="font-size: 48px;"></i>
        </div>
        <div class="item-info">
          <h5>熱門場地</h5>
          <p>東海大學</p>
          <a>總共報名 15 場</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};

</script>

<style lang="scss" scoped>

@mixin flexCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}


#introdution{
  margin-top: 100px;
  display: flex;
  width: 100%;
  justify-content: center;
  height: 90vh;
  flex-direction: column;
  align-items: center;
}
.mySwiper {
  width: 90%;
  height: 60%;
  border-radius: 10px;
}
.swiper-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 8%;
  height: 100%;
  letter-spacing: 0.3em;
  h1{
    color: #BB2D3B;
    margin-bottom: 16px;
  }
  h2{
    margin-bottom: 16px;
  }
  a {
    padding: 10px 20px;
  }
}
.swiper-slide1 {
    background-image: url(../assets/swiper1.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; 
}

.item-list {
  width: 90%;
  height: 30%;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.item {
  width: 20%;
  height: 140px;
  background-color: #FFF9F1;
  border-radius: 10px;
  @include flexCenter();
  border: solid 1px #b5b59f;
  .item-icon {
    margin-right: 40px;
    padding: 40px 20px 20px;
    border-radius: 10px;
    background-color: rgba(169, 169, 169, 0.4);  /* 灰色 */
  }
  .item-info {
    font-size: 16px;
    a {
      color: #BB2D3B;
    }
    p {
      margin: 0;
    }
  }
}

//RWD設定--------------------------------------
@media (max-width: 768px) {
  #introdution{
    margin-top: 100px;
    height: 1400px;
    justify-content: flex-start;
  }
  .mySwiper {
    width: 90%;
    border-radius: 10px;
    height: 30%;
  }
  .item-list {
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    height: 40%;
  }
  .item {
    width: 80%;
    margin-bottom: 40px;
    height: auto;
    padding: 10px 5px;
  }
}
</style>
