<template>
	<v-app>
		<Navigation />
		<Headline />
		<v-content>
			<Carousel :arrFotos="fotos" />
		</v-content>
		<Footer />
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			fotos: [
				{src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'}
			]
		}
	}
}
</script>