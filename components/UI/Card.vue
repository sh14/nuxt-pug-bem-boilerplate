<template lang="pug">
	include ../../assets/bemto.pug
	+b.card(
		:style="getStyles"
		:class="{card_shadow: shadow }"
	)
		slot
</template>

<script>
  export default {
    name: 'Card',
    props: {
      bg: {
        type: String,
        default: '#fff',
      },
      shadow: {
        type: Boolean,
        default: true,
      },
      stretch: {
        type: Boolean,
        default: true,
      },
    },
    computed: {
      getStyles () {
        let styles = []
        styles.push(`backgroundColor: ${this.bg}`)
        if (this.stretch) styles.push(`min-height: 100%`)
        return styles.join(';')
      },
    },
  }
</script>

<style lang="stylus">
	@import '../../assets/styles/main.styl';
	.card
		box-sizing border-box
		display block
		padding 4 * gutter
		border-radius 3 * gutter
		overflow: hidden

		&_shadow
			box-shadow 0 1px 2px 0px rgba(0, 0, 0, .05), 0 0 12px 0px rgba(0, 0, 0, .1)

</style>
