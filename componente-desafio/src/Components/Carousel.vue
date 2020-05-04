<template>
    <v-carousel>
        <v-carousel-item
            v-for="(item,i) in arrFotos"
            :key="i"
            :src="item.src" />
    </v-carousel>
</template>
<script>
export default {
    props: ['arrFotos']
}
</script>