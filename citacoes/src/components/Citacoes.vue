<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <Citacao>
            <h6 slot="fonte">{{citacoes[indice].fonte}}</h6>
            <!-- pode ser mistiruado slot nomeado com padrão, porém nos elementos deve ser definido quais usarão o nomeado -->
            <p>{{citacoes[indice].texto}}</p>
            <h1 slot="autor">{{citacoes[indice].autor}}</h1>
        </Citacao>
    </div>  
</template>

<script>
import Citacao from '@/components/Citacao.vue'

export default {
    components: {Citacao},
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, { 
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }],
            status: ''
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    },
    methods: {
        showStatus() {
            this.$emit('showStatus', this.status)
        }
    },

    // métodos de ciclo de vida
    created() {
        this.status = 'created'
        this.showStatus()
    },
    destroyed() {
        this.status = 'destroyed '
        this.showStatus()
    },
    // os métodos a seguir são são executados quando usamos a tag keep-alive
    activated() {
        this.status = 'activated' 
        this.showStatus()
    },
    deactivated() {
        this.status = 'deactivated' 
        this.showStatus()
    }
    
}
</script>

<style scoped>
    .citacoes {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
