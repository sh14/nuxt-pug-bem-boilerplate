<template lang="pug">
	include ../../assets/bemto.pug
	+b.text-field
		+e.group
			+e.LABEL.label(:for="id")
			+e.INPUT.control(
				:id="id"
				:type="type"
				:placeholder="placeholder"
				:required="!!required"
			)
</template>

<script>
  export default {
    name: 'TextField',
    props: {
      id: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: 'text',
      },
      placeholder: {
        type: String,
        default: '',
      },
      required: {
        type: Boolean,
        default: false,
      },
    },
    computed: {},
  }
</script>

<style lang="stylus">
	@import '../../assets/styles/main.styl';
	.text-field

		&__control
			input()
</style>
