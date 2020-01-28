new Vue({
    el:'#app',
    data: {
        title: 'Propriedades Reativas',
        subTitulo: '2 Ways data Bind'
    }
});
new Vue({
    el:'#app1',
    data: {
        title: 'Propriedades Computadas',
        contador: 0,
        contador2: 0,
    },
    computed: {
        resultado() {
            console.log('resultado executado...')
            return this.contador >= 5 ? 'Maior/Igual a 5' : 'Menor que 5'
        }
    },
    methods: {
        somar() {
            this.contador++;
        },
        somar2() {
            this.contador2++;
        },
        subtrair() {
            this.contador--;
        },
        subtrair2() {
            this.contador2--;
        }
    }
});
new Vue({
    el:'#app3',
    data: {
        title: 'Monitorar Mudanças',
        contador: 0,
        contador2: 0,
    },
    watch: {
        // Mesmo nome da propriedade a ser monitorada
        contador(novo, antigo) {
            setTimeout(() => {
                this.contador = 0;
            }, 2000)
        },

        // Mesmo nome da propriedade a ser monitorada
        contador2(novo, antigo) {
            setTimeout(() => {
                this.contador2 = 0;
            }, 1000)
        },
    },
    computed: {
        resultado() {
            console.log('resultado executado...')
            return this.contador >= 5 ? 'Maior/Igual a 5' : 'Menor que 5'
        }
    },
    methods: {
        somar() {
            this.contador++;
        },
        somar2() {
            this.contador2++;
        },
        subtrair() {
            this.contador--;
        },
        subtrair2() {
            this.contador2--;
        }
    }
});

new Vue({
    el:'#desafio',
    data: {
        title: 'Desafio',
        contador: 0,
    },
    computed: {
        resultado() {
            return this.contador === 37 ? 'Igual a 37' : 'Diferente de 37'
        }
    },
    watch: {
        contador(novo, antigo) {
            if (novo >= 37) {
                setTimeout(() => {
                    this.contador = 0;
                }, 5000)
            }
        }
    }
});