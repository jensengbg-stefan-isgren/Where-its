<template>
    <section class="buy">
        <top
            h6="You are about to score some tickets to"
        />
        <ticketInfo v-for="(item, index) in eventList" :key="index" :eventInfo="item" />
        <orderButton />
    </section>
</template>

<script>
import top from "../components/Top.vue";
import ticketInfo from "../components/TicketInfo.vue";
import orderButton from "../components/OrderButton.vue";

export default {
    name: "Buy",
    components: {
        top,
        ticketInfo,
        orderButton
    },
    computed: {
        eventList() {
            return this.$store.state.eventsList;
        }
    }
}
</script>

<style scoped>
    .buy {
        position: relative;
        width: 375px;
        height: 667px;
        background: #231F42;
    }
</style>