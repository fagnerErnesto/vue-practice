<template>
    <div class="input-group">
        <input type="text" class="form-control" v-model="name" @keydown.enter="add()"
            placeholder="Nova Tarefa."
        />
        <button class="form-control" @click="add()">
            +
        </button>
    </div>
</template>

<script>
export default {
    name: 'AddTask',
    data() {
        return {
            name:''
        }
    },
    methods: {
        add() {
            this.$emit('taskAdded', {name: this.name})
            this.name = ''
        }
    }
}
</script>

<style>
    .form-control {
        outline: none;
        border: 1px solid #FFF2;
        padding: 5px 10px 8px;
    }
    input.form-control {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        width: 200px;
        background-color: #FFF9;
    }
    button.form-control {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        background-color: green;
    }
    .input-group {
        margin: 35px;
    }
</style>