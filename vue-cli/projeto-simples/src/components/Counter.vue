<template>
    <div id="app">
        <span>{{ startValue }}</span> &nbsp;
        <button @click="minus">-</button>
        <button @click="sum">+</button>
    </div>
</template>

<script>
    export default {
        name: 'Counter',
        data(){
            return {startValue:0}
        },
        methods: {
            sum() {
                this.startValue++;
            },
            minus() {
                this.startValue--;
            }
        }
    };
</script>

<style scoped>
    button {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-color: cornflowerblue;
        border: 1px solid #555;
        margin: 2px;
    }
    span {
        font-size: 1.4rem;
        border-bottom: 1px solid crimson;
        padding: 3px;
    }
</style>