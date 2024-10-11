<template>
  <div class="content">
    <h1>{{ displayedText }}<span class="cursor" v-if="isCursorVisible">_</span></h1>
  </div>
</template>

<script>
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
      }, 400);
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
}

</style>
