<template>
    <section>
        <button class="button" v-on:click="order">Beställ</button>
    </section>
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
        position: absolute;
        width: 310px;
        height: 60px;
        left: 33px;
        top: 573px;
        background: #37AEAB;
        border-radius: 3px;
        font-family: Fira Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
    }
</style>