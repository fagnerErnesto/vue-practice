<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Nome: {{reverseNome}}</p>
        <p>Idade: {{idadeLocal}}</p>
        <button @click="resetarNome">Reiniciar Nome via Barramento</button>
        <button @click="reiniciarFn">Reiniciar Nome (callback)</button>
    </div>
</template>

<script>
import barramento from './eventBus'
export default {
    props: {
        nome: {
            type: String,
            default: function() {
                if (self.nome === '') {
                    return 'Anônimo'
                }
            },
            required: true
        },
        reiniciarFn: Function
    },
    computed: {
        reverseNome() {
            return this.nome.split('').reverse().join('')
        }
    },
    data() {
        return {idadeLocal: barramento.idade }
    },
    methods: {
        resetarNome() {
            // Emite um evento que pode ser capiturado pelo pai através da diretiva novoNome
            this.$emit('novoNome', 'Pedro');
        }
    },
    // Criação de método de ciclo de vida
    created() {
        barramento.onUpdate(idade => {
            this.idadeLocal = barramento.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
