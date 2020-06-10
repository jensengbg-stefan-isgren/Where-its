<template>
    <section class="buy">
        <top
            h6="You are about to score some tickets to"
        />
        <ticketInfo :eventInfo="eventData" />
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
    props: {
        eventData: Object
    },
    mounted() {
        console.log(this.eventData);
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