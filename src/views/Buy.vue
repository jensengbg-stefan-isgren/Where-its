<template>
    <div>
        <h1>Buy</h1>
    </div>
</template>

<script>
export default {
    name: 'Buy',
    props: {
        eventData: Object
    },
    mounted() {
        console.log(this.eventData);
    }
}
</script>

<style>

</style>