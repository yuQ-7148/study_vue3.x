<template>
    <div>
       <h3>Home组件--{{ count }}</h3>
       <button @click="count++">+1</button>
    </div>
</template>

<script>
export default {
    name: 'MyHome',
    data() {
        return {
            count: 0
        }
    },
    created() {
        console.log('created');
    },
    unmounted() {
        console.log('unmounted');
    }
}
</script>

<style scoped></style>