<template>
  <section class="wrapper">
    <section class="showcase">
      <img src="../assets/staff-logo.png" class="logo" alt />
      <h2 class="name">Where It's @</h2>
      <h2 class="staff">STAFF</h2>
    </section>
    <section class="verify">
      <input v-model="ticketNumber" type="text" placeholder="Biljett nummer" class="verify-number" />
      <button @click="validateTicket" class="verify-button">Verify ticket</button>
    </section>
  </section>
</template>

<script>
export default {
  name: "Staff",

  data() {
    return {
      ticketNumber: ""
    };
  },
  methods: {
    validateTicket() {
      this.$store.dispatch("validateTicket", this.ticketNumber);
    }
  }
};
</script>

<style scoped>
.wrapper {
  background-color: #f39440;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.showcase {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  width: 70px;
  height: 69px;
}

.name {
  font-family: "Sansita", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1rem;
}
.staff {
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.3em;
  color: rgba(0, 0, 0, 0.8);
}

.verify {
  display: flex;
  flex-direction: column;
}

.verify-number {
  width: 310px;
  height: 80px;
  border: 2px solid #231f42;
  box-sizing: border-box;
  border-radius: 3px;
  background: transparent;
  font-size: 2rem;
  outline: none;
  text-align: center;
}
.verify-number::placeholder {
  font-family: Fira Mono;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 25px;
  display: flex;
  align-items: center;
  position: relative;
  text-align: center;
  letter-spacing: 0.3em;
  color: #090911;
  white-space: pre-line;
  padding-top: 5px;
}

.verify-button {
  height: 60px;
  width: 310px;
  background: #231f42;
  border-radius: 0px 0px 3px 3px;
  outline: none;
  border: none;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;

  text-align: center;

  color: #ffffff;
}
</style>
