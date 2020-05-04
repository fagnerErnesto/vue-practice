<template>
    <v-toolbar app>
        <v-toolbar-title class="headline text-uppercase">
            <span>{{title}}</span>
            <span class="font-weight-light"> {{subtitle}}</span>
        </v-toolbar-title>
    </v-toolbar>
</template>

<script>
export default {
    name:'Headline',
    data() {
        return {
            title: 'Desafio',
            subtitle: 'Componente'
        }
    }
}
</script>