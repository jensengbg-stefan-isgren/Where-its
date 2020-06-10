<template>
  <section>
    <img src="../assets/logologo.png" alt="logo" class="logo" />
    <div class="admin-wrapper">
      <addEvent />
      <List />
    </div>
  </section>
</template>

<script>
import addEvent from '../components/addEvent'
import adminEventList from '../components/adminEventList'

export default {
  name: 'Admin',
  components: {
    addEvent,
    List: adminEventList,
  }
}
</script>

<style scoped>
section {
  min-height: 100vh;
  background: #231f42;
}
.admin-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
  margin: 2%;
}

@media only screen and (min-width: 1100px) {
  .admin-wrapper {
    flex-direction: row-reverse;
    align-items: flex-start;
  }
}
</style>
