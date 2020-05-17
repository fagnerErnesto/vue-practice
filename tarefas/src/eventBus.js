import Vue from 'vue'
export default new Vue({
    methods: {
        addTask(task) {
            this.$emit('arrTask', task)
        },
        removeTask(index) {
            this.$emit('arrTask', index)
        },
        getTasks(callback) {
            this.$on('arrTask', callback)
        }
    }
})