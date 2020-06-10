<template>
    <main class="main-container">
        <h1 class="heading">Events</h1>
        <div class="event-container">
           <eventItem v-for="(item, index) in eventList" :key="index" :eventItemData="item" />
        </div>
    </main>
</template>

<script>
import eventItem from '../components/eventItem.vue'
export default {
    name: 'Events',
    components: {
        eventItem
    },
    computed: {
        eventList() {
            return this.$store.state.eventList;
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        padding: 2rem;

        .heading {
            color: #F56B9A;
            font-family: 'Sansita', sans-serif;
            letter-spacing: 2px;
            margin-bottom: 3rem;
        }
        .event-container {
            width: 100%;
        }
    }

</style>