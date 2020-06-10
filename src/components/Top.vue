<template>
    <header>
        <h6 class="top"> {{ h6 }} </h6>
    </header>
</template>

<script>
export default {
    name: "TopBuy",
    props: {
        h6: String
    }
}
</script>

<style scoped>
    .top {
        width: 202px;
        height: 27px;
        margin-bottom: 3rem;
        font-family: Fira Sans;
        font-style: italic;
        font-weight: normal;
        font-size: 19px;
        line-height: 23px;
        text-align: center;
        color: rgba(255, 255, 255, 0.8);
    }
</style>