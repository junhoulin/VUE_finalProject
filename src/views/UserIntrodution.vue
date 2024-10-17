<template>
  <div class="allbackground">
    <div class="row inrodution">
      <div class="col-md-6">
        <div id="container3D"></div>
      </div>
      <div class="col-md-6 undermd">
        <h1>{{ displayedText }}<span class="cursor" v-if="isCursorVisible">_</span></h1>
        <button class="btn btn-primary">一起打球!!</button>
      </div>
    </div>
  </div>
</template>

<script>
import model3d from '../methods/model3d';

export default {
  name: 'UserIntrodution',
  data() {
    return {
      fullText: '大家一起來快樂打球',
      displayedText: '',
      currentCharIndex: 0,
      isCursorVisible: true,
    };
  },
  mounted() {
    this.typeText();
    this.blinkCursor();
    this.$nextTick(() => {
      const container = document.getElementById('container3D');
      model3d(container);
    });
  },
  methods: {
    typeText() {
      if (this.currentCharIndex < this.fullText.length) {
        this.displayedText += this.fullText[this.currentCharIndex];
        this.currentCharIndex += 1;
        setTimeout(this.typeText, 300);
      }
    },
    blinkCursor() {
      setInterval(() => {
        this.isCursorVisible = !this.isCursorVisible;
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
.allbackground{
  background-image: url('../assets/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  overflow: hidden;
}
.cursor {
  font-weight: bold;
  width: 100%;
  color: white;
}
.inrodution {
  height: 100vh;
}
.col-md-6 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 3.5em;
    margin-top: 0;
    color: white;
  }
  button {
    margin-top: 20px;
    width: 100px;
    height: 50px;
    margin-left: 200px;
    font-weight: 700;
  }
  #container3D {
    width: 880px;
    height:468px;
    margin: 0 auto;
  }
}

@media screen and (max-width: 768px) {
  #container3D {
    width: 160px !important;
    height: 260px !important;
  }
  .col-md-6{
    h1 {
      font-size: 2.3em;
    }
    button {
    width: 100px;
    height: 50px;
    margin: 20px auto;
    font-weight: 700;
  }
  }
  .undermd {
    margin-top: -80%;
  }
}
</style>
