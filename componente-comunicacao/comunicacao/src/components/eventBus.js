import Vue from 'vue';
export default new Vue({
    methods: {
        updateIdade(idade){
            this.$emit('novaIdade', idade)
        },
        onUpdate(calback) {
            this.$on('novaIdade', calback)
        }
    },
    data: {
        idade: 22
    }

});