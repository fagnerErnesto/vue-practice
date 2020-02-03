new Vue({
    el: '#app',
    data: {
        aplicarC1: false,
        classeCss: 'c1',
        aplicarGirar: false
    },
    computed: {
        estilo1() {
            return {
                c1: this.aplicarC1,
                c2: !this.aplicarC1
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