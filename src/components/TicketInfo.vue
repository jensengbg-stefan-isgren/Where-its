<template>
    <article class="ticket-info-container">
        <h1 class="name"> {{ eventInfo.name }} </h1>
        <div class="date-container">
            <h3 class="date"> {{ eventDay }} {{ eventMonth }} </h3>
            <h3 class="time"> {{ eventInfo.startTime }} - {{ eventInfo.endTime }} </h3>
        </div>
        <h5 class="place">@{{ eventInfo.place }} </h5>
        <h2 class="price"> {{ eventInfo.price }} sek </h2>
    </article>
</template>

<script>
export default {
    name: "TicketInfo",
    props: {
        eventInfo: Object
    },
    computed: {
        eventDay() {
            let date = new Date(this.eventInfo.date);
            let day = date.getDate();
            return day;
        },
        eventMonth() {
            let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            let date = new Date(this.eventInfo.date);
            let month = date.getMonth();
            return monthNames[month];
        }
    }
}
</script>

<style lang="scss" scoped>
    .ticket-info-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        .name {
            font-family: Sansita One;
            font-style: normal;
            font-weight: normal;
            font-size: 35px;
            line-height: 41px;
            display: flex;
            align-items: center;
            text-align: center;
            color: #F56B9A;
            margin-bottom: 0.2rem;
        }
        .date-container {
            display: flex;
            margin-bottom: 0.2rem;

            .date, .time {
                font-family: Fira Sans;
                font-style: normal;
                font-weight: bold;
                font-size: 19px;
                line-height: 23px;
                color: #37AEAB;
            }
            .date {
                margin-right: 1rem;
                text-transform: lowercase;
            }
        }

        .place {
            font-family: Fira Sans;
            font-style: italic;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            display: flex;
            align-items: center;
            text-align: center;
            color: rgba(255, 255, 255, 0.7);
        }

        .price {
            font-family: Fira Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 38px;
            display: flex;
            align-items: center;
            text-align: center;
            color: #FFFFFF;
            text-shadow: 1px 1px 0px #F56B9A;
            margin-top: 6rem;
        }

    }
</style>