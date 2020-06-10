<template>
  <div class="addEvent-wrapper">
    <h1 class="addEvent-header">Add Event</h1>
    <form action="#">
      <div class="full">
        <input
          v-model="input.name"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
        />
        <input
          v-model="input.place"
          type="text"
          name="place"
          id="place"
          placeholder="Where"
        />
        <input
          v-model="input.date"
          type="date"
          name="date"
          id="date"
          placeholder="When"
        />
      </div>
      <div class="half">
        <input
          v-model="input.startTime"
          type="time"
          name="startTime"
          id="startDateTime"
        />
        <input
          v-model="input.endTime"
          type="time"
          name="endTime"
          id="endDateTime"
        />
        <input
          v-model="input.tickets"
          type="number"
          name="tickets"
          id="tickets"
          placeholder="Tickets"
        />
        <input
          v-model="input.price"
          type="number"
          name="price"
          id="price"
          placeholder="Price"
        />
      </div>
      <button type="submit" class="submit-button" @click="addEvent">
        Add the event
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'addEvent',
  data: () => {
    return {
      input: {
        name: '',
        place: '',
        date: '',
        startTime: '',
        endTime: '',
        tickets: '',
        price: '',
      },
    }
  },
  methods: {
    addEvent(e) {
      e.preventDefault()
      this.$store.dispatch('addEvent', { ...this.input })
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');
.addEvent-wrapper {
  background: rgba(0, 0, 0, 0.3);
  width: 500px;
  height: auto;
  padding: 0.7%;
}

.addEvent-header {
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  color: #f56b9a;
  margin-bottom: 1%;
}

.submit-button {
  background: #f56b9a;
  border-radius: 3px;
  color: #fff;
  padding: 14px 50px;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
}

input {
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 3px;
  height: 40px;
  background: none;
  color: rgba(255, 255, 255, 0.6);
  padding-left: 5%;
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
}

.full input {
  width: 98%;
  margin: 0.8%;
}

.half input {
  width: 48%;
  margin: 0.8%;
}
</style>
