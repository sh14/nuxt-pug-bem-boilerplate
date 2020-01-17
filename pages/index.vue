<template lang="pug">
	include ../assets/bemto.pug
	.page
		+b.main
			+e.box
				+e.container
					+e.block
						h2 Forms
							+b.form
								+e.item
									TextField(
										:id="'phone'"
										:placeholder="'+7-903-123-45-67'"
									)
								+e.item
									Button(:type="'default'"  ) Default
									Button(:type="'default'"  ) Default
									Button(:type="'default'"  ) Default
									Button(:type="'link'"  ) Link
									Button(:type="'primary'"  ) Primary
								+e.item
									Button(:type="'primary'" :wide="true" ) Primary Wide
						h2 Icons
							Grid(:xs="12")
								Grid(:container="true" :spacing="[0,2]")
									Grid(:xs="4")
										Icon(
											:width="'50px'"
											:content="true"
											:orientation="'left'"
											:align="'left'"
											:position="'start'"
											:spacing="[16,0]"
										) Text
									Grid(:xs="4")
										Icon(
											:width="'50px'"
											:content="true"
											:orientation="'left'"
											:align="'left'"
											:position="'center'"
											:spacing="[16,0]"
										) Text
									Grid(:xs="4")
										Icon(
											:width="'50px'"
											:content="true"
											:orientation="'left'"
											:align="'left'"
											:position="'end'"
											:spacing="[16,0]"
										) Text
								Grid(:container="true" :spacing="[0,2]")
									Grid(:xs="4")
										Icon(
											:width="'50px'"
											:content="true"
											:orientation="'left'"
											:align="'left'"
											:position="'start'"
											:spacing="[16,0]"
										) Text
									Grid(:xs="4")
										Icon(
											:width="'50px'"
											:content="true"
											:orientation="'left'"
											:align="'center'"
											:position="'center'"
											:spacing="[16,0]"
										) Text
									Grid(:xs="4")
										Icon(
											:width="'50px'"
											:content="true"
											:orientation="'left'"
											:align="'right'"
											:position="'end'"
											:spacing="[16,0]"
										) Text
								Grid(:container="true" :spacing="[0,2]")
									Grid(:xs="3")
										Icon(
											:width="'50px'"
											:content="true"
											:orientation="'top'"
											:align="'center'"
											:position="'center'"
											:spacing="[16,0]"
										) Text
									Grid(:xs="3")
										Icon(
											:width="'50px'"
											:content="true"
											:orientation="'right'"
											:align="'right'"
											:position="'center'"
											:spacing="[16,0]"
										) Text
									Grid(:xs="3")
										Icon(
											:width="'50px'"
											:content="true"
											:orientation="'bottom'"
											:align="'center'"
											:position="'center'"
											:spacing="[16,0]"
										) Text
									Grid(:xs="3")
										Icon(
											:width="'50px'"
											:content="true"
											:orientation="'left'"
											:align="'left'"
											:position="'center'"
											:spacing="[16,0]"
										) Text

		+b.steps
			+e.box
				+e.container
					+e.block
						+e.H2.title Cards
						Grid(:container="true" :spacing="[0,2]")
							Grid(:xs="4")
								Card(:stretch="true")
									Icon(
										:content="true"
										:orientation="'top'"
										:align="'center'"
										:position="'center'"
										:spacing="[-4,-4,0,-4]"
										:textSpacing="[4,4,0,4]"
									) Text text text
							Grid(:xs="4")
								Card(:stretch="true")
									Icon(
										:content="true"
										:orientation="'top'"
										:align="'center'"
										:position="'center'"
										:spacing="[-4,-4,0,-4]"
										:textSpacing="[4,4,0,4]"
									) Text text text
							Grid(:xs="4")
								Card(:stretch="true")
									Icon(
										:content="true"
										:orientation="'top'"
										:align="'center'"
										:position="'center'"
										:spacing="[-4,-4,0,-4]"
										:textSpacing="[4,4,0,4]"
									) Text text text


</template>

<script>
  // import Logo from '~/components/Logo.vue'
  import Card from '~/components/UI/Card'
  import TextField from '~/components/UI/TextField'
  import Button from '~/components/UI/Button'
  import Grid from '~/components/UI/Grid'
  import Icon from '~/components/UI/Icon'

  export default {
    components: {
      // Logo,
      Card,
      TextField,
      Button,
      Grid,
      Icon,
    }
  }
</script>

<style lang="stylus">
	@import '../assets/styles/main.styl';
	.main {
		section()
		min-height 70vh
		background-color color__section-background
	}

	.make {
		section()
	}

	.steps {
		section()
	}

	.checks {
		section()
	}

	.things {
		section()
	}

	.how {
		section()
	}


</style>
