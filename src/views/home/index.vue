<template>
  <div class="home">
		100vw = 375px
		<div>
			<van-button size="large" type="primary">
				van-button
			</van-button>
		</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from 'vant'

export default defineComponent({
  name: 'Home',
	components:{
		[Button.name]: Button
	},
	setup() {
		console.log(123)
	}
})
</script>
<style lang="less" scoped>
.home{
	width: 375px;
	background-color: gray;
	height: 100vh;
}
	
</style>
