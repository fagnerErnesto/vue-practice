import Vue from 'vue'
export default new Vue({
    methods: {
        select(usuario) {
            this.$emit('userSelected', usuario)
        },
        show(callback) {
            this.$on('userSelected', callback)
        }
    }
})