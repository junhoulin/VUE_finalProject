<template>
  <div class="container contact">
    <div class="col-md-6 inputform mx-auto">
      <h1>&bull; Keep in Touch &bull;</h1>
      <div class="underline"></div>
      <i class="fa-solid fa-volleyball fa-xl" style="color: #444433;"></i>
      <div class="contact-info">
        <label for="name">姓名
          <input type="text" id="name">
        </label>
        <label for="phone">電話
          <input type="text" id="phone">
        </label>
        <label for="mainInfo">主旨
          <input type="text" id="mainInfo">
        </label>
        <label for="content">內容
          <textarea type="text" id="content"></textarea>
        </label>
        <a href="#">發送email</a>
      </div>
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

  .underline {
    border-bottom: solid 2px $maincolor;
    margin: 20px auto;
    width: 80px;
  }
}
.contact-info {
  display: flex;
  flex-direction: column;
  height: 80%;
  label {
    margin-top: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  a {
    margin-top: 30px;
  }
  input {
    width: 300px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ccc;
  }
  textarea {
    width: 300px;
    height: 200px;
    max-height: 300px;
    background-color: transparent;
    border: 1px solid #ccc;
    padding: 0.5rem;
    resize: vertical;
    font-size: 1rem;
    font-family: Arial, sans-serif; /* 設置字體 */
  }
}

</style>
