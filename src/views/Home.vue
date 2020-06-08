<template>
  <div class="home">
    <h1>Where-its</h1>
    <button v-on:click="buy">click me</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    buy() {
      this.$router.push('/buy')
    }
  }
};
</script>
