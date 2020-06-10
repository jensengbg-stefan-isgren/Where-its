<template>
    <section>
        <h1 class="name"> {{ eventInfo.name }} </h1>
        <h3 class="date"> {{ eventInfo.date }} </h3>
        <h3 class="time"> {{ eventInfo.startTime }} - {{ eventInfo.endTime }} </h3>
        <h5 class="place"> {{ eventInfo.place }} </h5>
        <h2 class="price"> {{ eventInfo.price }} sek </h2>
    </section>
</template>

<script>
export default {
    name: "TicketInfo",
    props: {
        eventInfo: Object
    }
}
</script>

<style scoped>
    .name {
        position: absolute;
        width: 281px;
        height: 43px;
        left: 51px;
        top: 189px;
        font-family: Sansita One;
        font-style: normal;
        font-weight: normal;
        font-size: 35px;
        line-height: 41px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #F56B9A;
    }

    .date, .time {
        position: absolute;
        width: 284px;
        height: 25px;
        left: 49px;
        top: 234px;
        font-family: Fira Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 19px;
        line-height: 23px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #37AEAB;
    }

    .place {
        position: absolute;
        width: 272px;
        height: 37px;
        left: 55px;
        top: 257px;
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
        position: absolute;
        width: 145px;
        height: 50px;
        left: 115px;
        top: 390px;
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
    }
</style>