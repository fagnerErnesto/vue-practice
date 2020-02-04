new Vue({
    el: '#app',
    data: {
        aplicarC1: false,
        classeCss: 'c1',
        aplicarGirar: false,
        cor: 'red',
        largura: 100,
        altura: 30
    },
    computed: {
        estilo1() {
            return {
                c1: this.aplicarC1,
                c2: !this.aplicarC1
            }
        },
        meuEstilo() {
            return {
                backgroundColor: this.cor,
                width: this.largura + 'px'
            }
        }
    },
    methods: {
        girar() {
            if (this.aplicarGirar) {
                this.aplicarGirar = false;
            } else {
                this.aplicarGirar = true;
            }
        }
    }
});