<template>
  <div class="admin-wrapper">
    <img src="../assets/logologo.png" alt="logo" class="logo" />
    <List />
    <addEvent />
  </div>
</template>

<script>
import addEvent from '../components/addEvent'
import adminEventList from '../components/adminEventList'

export default {
  name: 'Admin',
  components: {
    addEvent,
    List: adminEventList,
  },
}
</script>

<style scoped>
.admin-wrapper {
  height: 100vh;
  width: 100vw;
  background: #231f42;
}

.logo {
  margin: 2%;
}
</style>
