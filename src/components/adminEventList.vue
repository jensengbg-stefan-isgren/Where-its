<template>
  <table>
    <thead class="list-head">
      <tr>
        <th>
          <span>NAMN</span>
        </th>
        <th>
          <span>VAR</span>
        </th>
        <th>
          <span>ANTAL PLATSER</span>
        </th>
        <th>
          <span>SÅLDA BILJETTER</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="list-head" v-for="event in events" :key="event.id">
        <td>
          <h3>{{ event.name }}</h3>
        </td>
        <td>
          <h4>{{ event.place }}</h4>
        </td>
        <td>
          <h4>{{ event.tickets }}</h4>
        </td>
        <td>
          <h4>{{ event.soldTickets }}</h4>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// import adminEventItem from './adminEventItem'
export default {
  components: {
    // EventItem: adminEventItem,
  },

  computed: {
    events() {
      return this.$store.state.eventList
    },
  },
}
</script>

<style scoped>
.grid {
  grid-template: auto / 4;
}

.list-head > h4 {
  color: #fff;
  display: inline-block;
  padding: 2rem;
  margin: 1rem;
}

span {
  color: #fff;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
  color: #fff;
}
</style>
