<template>
  <div>
    <td>
      <h3>{{ event.name }}</h3>
    </td>
    <td>
      <h4>{{ event.place }}</h4>
    </td>
  </div>
</template>

<script>
export default {
  props: {
    event: Object,
  },
}
</script>

<style scoped>
td {
  color: #fff;
}
.event-cont > * {
  color: #fff;
  /* display: inline-block; */
  /* padding: 2rem;
  margin: 1rem; */
}
</style>
