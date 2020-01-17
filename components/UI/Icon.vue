<template lang="pug">
	include ../../assets/bemto.pug
	+b.icon(
		:class="getClass('icon')"
		:style="getStyles"
	)
		+e.image(:class="getClass('icon__image')" :style="getImageWidth")
			+e.ico(:style="getImageHeight")
		+e.content(v-if="content" :class="getClass('icon__content')" :style="getTextSpacing")
			slot
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      // show slot
      content: {
        type: Boolean,
        default: false,
      },
      orientation: {
        type: String,
        default: 'top',
        required: true,
      },
      width: {
        type: String,
        default: '100%',
      },
      height: {
        type: String,
        default: '100%',
      },
      align: {
        type: String,
        default: 'left',
      },
      position: {
        type: String,
        default: 'top',
      },
      center: {
        type: Boolean,
        default: false,
      },
      spacing: {
        type: Array,
        default: [],
      },
      textSpacing: {
        type: Array,
        default: [],
      },
      stretch: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      getStyles () {
        let styles = []
        if (this.stretch) styles.push(`min-height: 100%`)
        styles.push('margin:' + this.spacing.map(item => process.env.gutter * item + 'px').join(' '))
        return styles.join(';')
      },
      getTextSpacing () {
        return this.textSpacing ? 'margin:' + this.textSpacing.map(item => process.env.gutter * item + 'px').join(' ') : ''
      },
      getImageWidth () {
        return 'min-width:' + this.width + ';'
      },
      getImageHeight () {
        return 'padding-top:' + this.height + ';'
      },
    },
    methods: {
      getClass (parent) {
        let classes     = []
        let classString = ''
        // set size classes
        for (let position of ['top', 'right', 'bottom', 'left',]) {
          if (this.orientation === position) {
            classString += parent + '_' + this.orientation
            classes.push(classString)
          }
        }
        classes.push(this.align ? parent + '_align-' + this.align : '')
        classes.push(this.position ? parent + '_position-' + this.position : '')
        classes = classes.join(' ')
        return classes
      },
    },
  }
</script>
<style lang="stylus">
	@import '../../assets/styles/main.styl';
	.icon
		icon()
</style>
