<template>
  <div class="login-container">
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 提交 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { Button, Form, Field } from 'vant'
import Types from '@/store/type'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Home',
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Form.name]: Form
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const form = reactive({
      username: '',
      password: ''
    })

    function onSubmit() {
      store
        .dispatch(Types.LOGIN, {
          phone: form.username,
          password: form.password,
          type: 2
        })
        .then(() => {
          router.replace({
            path: '/home'
          })
        })
        .catch((err) => {
          console.log(err, 123)
        })
    }
    return {
      form,
      onSubmit
    }
  }
})
</script>
<style lang="less" scoped>
</style>
