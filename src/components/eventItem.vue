<template>
    <article class="event-item">
        <div class="event-item-date">
            <p class="event-item-date-day">21</p>
            <p class="event-item-date-month">mar</p>
        </div>
        <div class="event-item-info">
            <h2 class="event-item-name">Lasse-Stefans</h2>
            <p class="event-item-place">Kjellsalen</p>
            <p class="event-item-time">19.00 - 21.00</p>
            <p class="event-item-price">350 sek</p>
        </div>
    </article>
</template>

<script>
export default {
    name: 'eventItem',
}
</script>

<style lang="scss" scoped>
    .event-item {
        color: #ffffff;
        display: flex;
        width: 100%;
        font-family: 'Fira Sans', sans-serif;
        margin-bottom: 1rem;

        &-date {
            border: 1px solid #ffffff;
            border-radius: 0.2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1rem 1.4rem;
            margin-right: 2rem;

            &-day {
                font-size: 1rem;
            }
            &-month {
                font-size: 0.7rem;
                text-transform: uppercase;
            }

        }

        &-info {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas: 
            "eventName eventName"
            "place place"
            "time price";
            border-bottom: 1px solid rgba($color: #ffffff, $alpha: 0.5);
            padding-bottom: 0.5rem;
        }
        &-name {
            grid-area: eventName;
            font-size: 1.4rem;
            text-shadow: 1px 1px 0px #F56B9A;
        }
        &-place {
            grid-area: place;
            opacity: 0.8;
            font-style: italic;
            font-size: 0.8rem;
            font-weight: 200;
        }
        &-time {
            grid-area: time;
            font-size: 0.8rem;
            align-self: end;
        }
        &-price {
            color: #37AEAB;
            grid-area: price;
            font-size: 1rem;
            font-weight: bold;
            justify-self: end;
            align-content: end;
        }
    }

</style>