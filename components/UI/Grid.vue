<template lang="pug">
	include ../../assets/bemto.pug
	+b.grid(
		:class="getClass"
		:style="getSpacing"
	)
		slot
</template>

<script>
  export default {
    name: 'Grid',
    props: {
      xs: {
        type: Number,
      },
      sm: {
        type: Number,
      },
      md: {
        type: Number,
      },
      lg: {
        type: Number,
      },
      container: {
        type: Boolean,
        default: false,
      },
      spacing: {
        type: Array,
        default: [2],
      },

    },
    computed: {
      getSpacing () {
        return 'padding:' + this.spacing.map(item => process.env.gutter * item + 'px').join(' ')
      },
      getClass () {
        let classes = []

        // if not container then item
        classes.push(true === this.container ? 'grid_container' : 'grid_item')

        // set size classes
        for (let size of ['xs', 'sm', 'md', 'lg',]) {
          classes.push(this[size] ? 'grid_' + size + '-' + this[size] : '')
        }

        return classes.join(' ')
      },
    },
  }
</script>

<style lang="stylus">
	@import '../../assets/styles/main.styl';
	.grid
		grid()
</style>
