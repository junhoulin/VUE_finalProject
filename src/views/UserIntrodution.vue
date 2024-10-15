<template>
  <div class="content">
    <h1>{{ displayedText }}<span class="cursor" v-if="isCursorVisible">_</span></h1>
    <main>
      <div id="container3D"></div>
    </main>
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
    });
    model3d();
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
.content {
  margin-top: 100px;
}
.cursor {
  font-weight: bold;
  width: 100%;
}

h1 {
  font-size: 3em;
  text-align: center;
}

#container3D {
  width: 100vw !important;
  height: 100vh !important;
  position: absolute;
  top: 0;
  left: 0;
}

</style>
