new Vue({
    el: '#desafio',
    data: {
        nome: 'Fagner',
        idade: 37,
        multIdade: 0,
        numero: 0,
        imagemAleatoria: 'https://lh5.googleusercontent.com/1i13SbH_T4uBDTZzRGLz5xKyxoeOrbDD4Y6cc2tuL8IcPPlayyZlwviI53RswQ12zvqTKutPHXVxu1bHj3z46mHrWvAVJ6JQlOQ_WKvXqcemFOsxWZXY_7mHlOyC1UcvLww-Yz3q'
    },
    created: function() {
        this.randomNum();
        this.calcIdade();
    },
    methods: {
        randomNum: function() {
            this.numero = Math.random(0,1);
        },
        calcIdade: function() {
            this.multIdade = this.idade * 3;
        }
    }
});