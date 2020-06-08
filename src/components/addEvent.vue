<template>
    <div class="addEvent-wrapper">
        <h1 class="addEvent-header">Add Event</h1>
        <form action="#">
            <div class="full">
                <input type="text" name="name" id="name" placeholder="Name">
                <input type="text" name="place" id="place" placeholder="Where">
                <input type="date" name="date" id="date" placeholder="When">
            </div>
            <div class="half">
                <input type="time" name="startTime" id="startDateTime">
                <input type="time" name="endTime" id="endDateTime">
                <input type="number" name="tickets" id="tickets" placeholder="Tickets">
                <input type="number" name="price" id="price" placeholder="Price">
            </div>
            <button type="submit" class="submit-button">Add the event</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'addEvent',
    data: () => {
        return {
            input: {
                name: '',
                place: '',
                date: '',
                startTime: '',
                endTime: '',
                tickets: '',
                price: ''
            }
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');
.addEvent-wrapper {
    background: rgba(0, 0, 0, 0.3);
    width: 500px;
    height: auto;
    padding: .7%;
}

.addEvent-header {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    color: #F56B9A;
    margin-bottom: 1%;
}

.submit-button {
    background: #F56B9A;
    border-radius: 3px;
    color: #FFF;
    padding: 14px 50px;
    border: none;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: center;
}

input {
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 3px;
    height: 40px;
    background: none;
    color: rgba(255, 255, 255, 0.6);
    padding-left: 5%;
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
}

.full input {
    width: 98%;
    margin: .8%;
}

.half input {
    width: 48%;
    margin: .8%;
}
</style>