<template>
    <div class="ticket-card">
        
        <div class="ticket-what">
            <label for="ticket-what">What</label>
            <h1>{{ events.name }}</h1></div>

        
        <div class="ticket-where">
            <label for="ticket-where">Where</label>
            {{ events.place }}</div>

        <div class="ticket-date">
        <div class="ticket-when">
            <label for="ticket-when">When</label>
            {{ events.date }}</div>

        
        <div class="ticket-from"> 
            <label for="ticket-from">From</label>
            {{ events.startDateTime }}</div>

        
        <div class="ticket-to">
            <label for="ticket-to">To</label>
             {{ events.endDateTime }}</div>
             </div>


        <div class="ticket-qr">{{ events.qr }}</div>
        <h3 class="biljett-nr">Biljettnummer: {{ events.id }}</h3>

    </div>
</template>

<script>

export default {
    name: 'Ticket'    
}

</script>

<style lang="scss" scoped>

.ticket-card{

    .ticket-what{
        position: absolute;
        width: 311px;
        height: 450px;
        left: 32px;
        top: 109px;
        background: #FFFFFF;
        box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.34);
        border-radius: 3px;

        h1{
            font-family: Sansita One;
            font-style: normal;
            font-weight: normal;
            font-size: 26px;
            line-height: 30px;
            display: flex;
            align-items: center;
            color: #F56B9A;
        }
    }

    .ticket-where{
        position: absolute;
        width: 311px;
        height: 120px;
        left: 32px;
        top: 199px;
        background: rgba(0, 0, 0, 0.03);    
    }

    .ticket-date{
        position: absolute;
        width: 311px;
        height: 66px;
        left: 32px;
        top: 313px;
        background: rgba(0, 0, 0, 0.06); 
    }
}

</style>