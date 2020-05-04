<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade: <strong>{{idadeLocal}}</strong></p>
        <button @click="alterarIdade">Alterar Idade</button>
        <button @click="alterarIdadeFn">Alterar Idade (callback)</button>
    </div>
</template>

<script>
import barramento from './eventBus'

export default {
    props: {
        idade: {
            type: Number,
            required: true
        },
        alterarIdadeFn: Function
    },
    data() {
        return {idadeLocal: this.idade}
    },
    methods: {
        alterarIdade() {
            this.idadeLocal = 33
            barramento.updateIdade(this.idadeLocal)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
