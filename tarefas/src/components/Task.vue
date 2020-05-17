<template>
    <div>
        <div :class="[task.completed ? 'done' : 'task', 'box']" @click="$emit('taskChanged', task)">
            <span class="close" @click.stop="$emit('deletedTask', task)">x</span>
            {{ task.name }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'Task',
    props: {
        task: Object
    }
    
}
</script>
<style scoped>
    .box {
        position: relative;
        border-radius: 13px;
        height: 120px;
        width: 250px;
        padding: 12px;
        text-align: center;
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        margin: 5px;
        user-select: none;
        cursor:pointer;
    }
    .done {
        background-color: darkseagreen;
        border-left: 12px solid darkgreen;
        text-decoration: line-through;
    }
    .task {
        background-color: salmon;
        border-left: 12px solid red;
    }
    .close {
        position:absolute;
        top: 10px;
        right: 10px;
        width: 24px;
        height: 24px;
        border-radius: 12px;
        align-items: center;
        justify-content: center;
    }

    .done .close {
        background-color: darkgreen;
    }
    .task .close {
        background-color: red;
    }
</style>