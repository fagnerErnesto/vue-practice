<template>
	<div id="app">
		<button @click="component='Citacoes'">Citações</button>
		<button @click="component='Sobre'">Sobre</button>
		<keep-alive>
			<!-- 
				esta estrutura mantem o componente "vivo" ao invés de destruí-lo quando um outro componente é chamado.
				a tag keep-alive indica ao vue que o componente chamado não deve ser destruído.
			-->
			<component :is="component" />
		</keep-alive>
		<span class="small">{{status}}</span>
	</div>
</template>

<script>
import Citacoes from './components/Citacoes'
import Sobre from './components/Sobre'

export default {
	components: { Citacoes, Sobre },
	data() {
		return {
			component: 'Citacoes',
			status: ''
		}
	},
	created() {
		this.$on('showStatus', status => {
			this.status = status
		})
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }
</style>