<template>
    <div >
        <div v-if="arrTasks.length > 0" class="grid">
        <Task v-for="(obj, i) in arrTasks" :task="obj" :key="obj.task"
             @deletedTask="$emit('deletedTask', i)"
             @taskChanged="$emit('taskChanged', i)"
        />
        </div>
        <div v-else>
            <p>Nenhuma atividade pendente!</p>
        </div>
    </div>
</template>

<script>
import Task from './Task.vue'
export default {
    name: 'TodoList',
    props: {
        arrTasks: {type: Array, required: true },
    },
    components: {Task}
}
</script>

<style>
    .grid{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>