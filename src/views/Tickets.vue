<template>
  <div class="ticket-main">
  <Ticket />
  </div>

</template>

<script>
import Ticket from '../components/Ticket.vue'
</script>

<style lang="scss">

body {
  position: relative;
  width: 375px;
  height: 667px;
  background: #231F42;
}

.ticket-main {
    background: linear-gradient(180deg, #F56B9A 0%, rgba(177, 52, 254, 0) 100%);
    position: absolute;
    width: 375px;
    height: 344px;
    left: 0px;
    top: 0px;
    display: flex;
    align-items: center;
  }

</style>