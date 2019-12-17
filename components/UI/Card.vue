<template lang="pug">
	include ../../assets/bemto.pug
	+b.card._shadow
		slot
</template>

<script>
  export default {
    name: 'Card'
  }
</script>

<style lang="stylus">
	@import '../../assets/styles/main.styl';
	.card
		box-sizing border-box
		display block
		padding 4 *gutter
		border-radius 3*gutter

		&_shadow
			box-shadow 0 1px 2px 0px rgba(0,0,0,.05), 0 0 12px 0px rgba(0,0,0,.1)

</style>
