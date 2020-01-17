<template lang="pug">
	include ../../assets/bemto.pug
	+b.A.button(
		v-if="''!==href"
		:class="getClass"
		:href="href"
	)
		slot
	+b.BUTTON.button(
		v-else
		:class="getClass"
	)
		slot
</template>

<script>
  export default {
    name: 'Button',
    props: {
      type: {
        type: String,
        default: 'default',
      },
      href: {
        type: String,
        default: '',
      },
      wide: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      getClass () {
        let classes = []
        classes.push('' === this.type ?  'button_default':'button_' + this.type )
        classes.push(this.wide ? 'button_wide' : '')
        return classes.join(' ')
      },
    },
  }
</script>

<style lang="stylus">
	@import '../../assets/styles/main.styl';
	.button
		button()

		&_wide
			width 100%
</style>
