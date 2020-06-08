<template>
    <div class="admin-wrapper">
        <img src="../assets/logologo.png" alt="logo" class="logo">
        <addEvent />
    </div>
</template>

<script>
import addEvent from '../components/addEvent'
export default {
    name: 'Admin',
    components: {
        addEvent
    }
}
</script>

<style scoped>
.admin-wrapper {
    height: 100vh;
    width: 100vw;
    background: #231F42;
}

.logo {
    margin: 2%;
}
</style>