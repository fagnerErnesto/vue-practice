new Vue({
    el: '#app',
    data: {
        title: 'Escutando Eventos',
        contador: 0,
    },
    methods: {
        somar() {
            this.contador++;
        },
        subtrair() {
            this.contador--;
        }
    }
});
new Vue({
    el: '#app2',
    data: {
        title: 'Coletar dados do Evento ',
        mouseX: 0,
        mouseY: 0
    },
    methods: {
        mousePosition(event) {
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
        }

    }
});

new Vue({
    el: '#app3',
    data: {
        title: 'Informar Parametros para Função',
        mouseX: 0,
        mouseY: 0,
        contador: 0,
    },
    methods: {
        mousePosition(event) {
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
        },
        somar(event, passo) {
            this.mousePosition(event);
            this.contador += passo;
        },
        subtrair(event, passo) {
            this.mousePosition(event);
            this.contador -= passo;
        }

    }
});
new Vue({
    el: '#app4',
    data: {
        title: 'Modificador de Evento (stop e prevent)',
        mouseX: 0,
        mouseY: 0,
        contador: 0,
    },
    methods: {
        mousePosition(event) {
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
        },
        somar(event, passo) {
            this.mousePosition(event);
            this.contador += passo;
        },
        subtrair(event, passo) {
            this.mousePosition(event);
            this.contador -= passo;
        },
        // stopMousePosition(event) {
        //     event.stopPropagation();
        // }

    }
});
new Vue({
    el: '#app5',
    data: {
        title: 'Modificador de Evento (keyup)',
        mouseX: 0,
        mouseY: 0,
        contador: 0,
    },
    methods: {
        exibirAlerta(event) {
            alert('Exibindo o alerta!');
        }
    }
});
new Vue({
    el: '#desafio1',
    data: {
        title: 'Desafio 1',
        valor: ''
    },
    methods: {
        exibirAlerta(event) {
            alert('Exibindo o alerta!');
        },
        alterarValor(event) {
            this.valor = event.target.value
        },
    }
});