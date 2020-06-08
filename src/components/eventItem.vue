<template>
    <article class="event-item">
        <div class="event-item-date">
            <p class="event-item-date-day">21</p>
            <p class="event-item-date-month">mar</p>
        </div>
        <h2 class="event-item-name">Lasse Stefans</h2>
        <p class="event-item-place">Kjellsalen</p>
        <p class="event-item-time">19.00 - 21.00</p>
        <p class="event-item-price">350 sek</p>
    </article>
</template>

<script>
export default {
    name: 'eventItem'
}
</script>

<style lang="scss" scoped>
    .event-item {
        color: #ffffff;

        &-date {
            border: 1px solid #ffffff;
            border-radius: 0.5rem;
        }
        &-price {
            color: #37AEAB;
        }
    }

</style>