<template>
  <div class="container contact">
    <div class="col-md-6 inputform mx-auto">
      <h1>&bull; Keep in Touch &bull;</h1>
      <div class="underline"></div>
      <i class="fa-solid fa-volleyball fa-xl" style="color: #444433;"></i>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
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

.contact {
  margin-top: 100px;
}

.inputform {
  padding: 20px;
  text-align: center;
  height: 700px;
  border: $border;
  border-radius: $border-radius;

  h1 {
    color: $maincolor;
    font-size: 29px;
    font-weight: 700;
    letter-spacing: 7px;
    text-transform: uppercase;
  }

  .underline{
    border-bottom: solid 2px $maincolor;
    margin: 20px auto;
    width: 80px;
  }

}

</style>
