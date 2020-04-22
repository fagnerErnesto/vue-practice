new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		perigo: true,
		perigo2: true,
		personalClass: 'c1',
		personalClass2: 'c3',
		classConditional: 'true',
		cor: '',
		estilo: {
			width: '100px',
			height: '100px'
		},
		progresso: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 === 'destaque' ? 'encolher' : 'destaque';
			}, 1000);
		},
		iniciarProgresso() {
			setInterval(() => {
				this.progresso = this.progresso < 100 ? this.progresso+10 : clearInterval();
			}, 1000);
		},
		conditionalClass(event) {
			if (event.target.value === 'true') {
				this.perigo2 =  true;
			} else if (event.target.value === 'false') {
				this.perigo2 = false;
			}
		}
	}
})
