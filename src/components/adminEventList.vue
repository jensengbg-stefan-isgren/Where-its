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
        <td class="nr">
          <h4>{{ event.tickets }}</h4>
        </td>
        <td class="nr">
          <h4>{{ event.soldTickets }}</h4>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
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
  margin: 0.8rem;
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

.nr {
  text-align: right;
}
td:first-of-type > * {
  font-size: 1.5rem;
  font-weight: bold;
}

td > * {
  color: #fff;
  font-weight: normal;
}
</style>
