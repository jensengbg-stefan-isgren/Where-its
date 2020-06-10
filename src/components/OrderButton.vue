<template>
    <button class="button" v-on:click="order">Beställ</button>
</template>

<script>
export default {
    name: "OrderButton",
    methods: {
        order() {
            this.$router.push('/tickets')
        }
    }
}
</script>

<style scoped>
    .button {
        width: 310px;
        height: 60px;
        background: #37AEAB;
        border-radius: 3px;
        font-family: Fira Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
    }
</style>