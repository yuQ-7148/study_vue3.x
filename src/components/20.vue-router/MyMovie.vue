<template>
    <div>
        <!-- <h3>MyMovie---{{ $route.params.id }}</h3> -->
        <h3>MyMovie---{{ id }}</h3>
        <button @click="gotoMovie(3)">go to movie3</button>
        <button @click="goback(-1)">后退</button>

        <hr>
        <h3>{{ $store.state.count }}</h3>

    </div>
</template>

<script>
export default {
    name: 'MyMovie',
    props: ['id'],
    methods: {
        gotoMovie(id) {
            this.$router.push({ name: "mov", params: { id: id } })
        },
        goback(num) {
            this.$router.go(num)
        }
    }
}
</script>

<style lang="less" scoped>
h3 {
    color: yellow;
}
</style>