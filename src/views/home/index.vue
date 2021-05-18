<template>
  <div class="home">
    100vw = 375px
    <div>
      <van-button size="large" type="primary" @click="loginOut"> van-button </van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from 'vant'
import Types from '@/store/type'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {
    [Button.name]: Button
  },
  setup() {
    const store = useStore()
    function loginOut() {
      store.dispatch(Types.LOGIN_OUT).then(() => {
        location.reload()
      })
    }

    return {
      loginOut
    }
  }
})
</script>
<style lang="less" scoped>
.home {
  width: 375px;
  background-color: gray;
  height: 100vh;
}
</style>
