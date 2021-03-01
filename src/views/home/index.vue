<template>
  <div class="home">
		100vw = 320px?
		<div>
			<van-button>
				123
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
	width: 750px;
	background-color: red;
	height: 100vh;
}
	
</style>
