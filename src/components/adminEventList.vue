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
table {
  background: rgba(0, 0, 0, 0.3);
}

th,
td {
  padding: 10px 20px;
  min-width: 120px;
}

th {
  text-align: left;
  color: #f56b9a;
  font-weight: bold;
}

td {
  font-size: 1.5rem;
  color: #fff;
}
</style>
