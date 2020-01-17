<template lang="pug">
	nuxt
</template>

<style lang="stylus">
	@import '../assets/styles/main.styl';
	html {
		word-spacing: 1px;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		box-sizing: border-box;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
		margin: 0;
	}

	body
		font-size fontBase
		background #eee
		color color__text
		font-family: font__famaly;


	for i in 1..6
		h{i}
			margin 0 0 3 * gutter 0

	p
		line-height 1.5
		margin 0 0 2 * gutter 0


	.form
		form()

</style>
