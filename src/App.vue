<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('loadEventList')
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: inherit;
}

html {
  font-family: 'Fira sans', sans-serif;
}

body {
    background: #231F42;
}
</style>
