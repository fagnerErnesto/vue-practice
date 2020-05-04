<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome: <strong>{{nome}}</strong></p>
        <p>Idade: <strong>{{idade}}</strong></p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <!-- novoNome é um metodo declarado no filho para disparar um evento que passa o valor para pai. -->
        <div class="componentes">
            <app-usuario-info 
                :nome="nome"
                :idade="idade"
                @novoNome="nome = $event"
                :reiniciarFn="reiniciarNome"
                @novaIdade="idade = $event"
            />
            <app-usuario-editar 
                :idade="idade"
                :alterarIdadeFn="alterarIdadeFn"    
            />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: 'Pedro',
            idade: 22
        }
    },
    methods: {
        alterarNome() {
            this.nome = 'Ana'
        },
        reiniciarNome() {
            this.nome = 'Pedro'
        },
        alterarIdadeFn() {
            this.idade = 33
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
