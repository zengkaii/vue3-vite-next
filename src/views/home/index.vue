<template>
  <div class="home">
    100vw = 375px
    <div>
      <van-button size="large" type="primary" @click="loginOut"> van-button </van-button>
    </div>
    <!-- <div class="dot-box">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div> -->
    <div class="table-class">
      <!-- <table border cellspacing="0" cellpadding="0">
        <tr>
          <th>表头1</th>
          <th>表头2</th>
          <th>表头3</th>
          <th>表头4</th>
          <th>表头5</th>
          <th>表头6</th>
          <th>表头7</th>
          <th>表头8</th>
          <th>表头9</th>
          <th>表头10</th>
        </tr>

        <tr v-for="i in 10" :key="i">
          <td>1222</td>
          <td>2</td>
          <td>322222</td>
          <td>4</td>
          <td>522</td>
          <td>6</td>
          <td>7222</td>
          <td>8</td>
          <td>9</td>
          <td>
            <van-swipe-cell class="a">
              10
              <template #right>
                <van-button square text="删除" type="danger" class="delete-button" />
              </template>
            </van-swipe-cell>
          </td>
        </tr>
      </table> -->
      <div class="class-table-b">
        <div class="table-header">
          <span>表头1</span>
          <span>表头2</span>
          <span>表头3</span>
          <span>表头4</span>
          <span>表头5</span>
          <span>表头6</span>
          <span>表头7</span>
          <span>表头8</span>
          <span>表头9</span>
          <span>表头10</span>
        </div>
        <van-swipe-cell class="a">
          10
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button, SwipeCell } from 'vant'
import Types from '@/store/type'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'Home',
  components: {
    [Button.name]: Button,
    [SwipeCell.name]: SwipeCell
  },
  setup() {
    const text = ``
    // let array = text.split(/\d{1,3}\.\s/)
    let array = text.split(/\d{1,3}\、/)
    console.log(array)
    array = array.map((item) => {
      return item.trim()
    })
    let c = array.filter((item) => !/^[a-zA-z]、*/.test(item))
    c = c.map((item, index) => {
      if (index === 0) {
        return ''
      }
      // item = item.replace('A.', '\n    A.')
      // item = item.replace('B.', '\n    B.')
      // item = item.replace('C.', '\n    C.')
      // item = item.replace('D.', '\n    D.')
      // item = item.replace('\r', ' ')
      return `\n\n\n${index}、${item}`
    })
    let cc = c.join(' ')
    console.log(cc)
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
  .dot-box {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
    .dot {
      width: 10px;
      height: 10px;
      background-color: #fff;
      animation: dotDance 1s linear;
      animation-iteration-count: infinite;
    }
    .dot:first-child {
      animation: dotDance 2s linear;
      animation-iteration-count: infinite;
    }
  }
  .table-class {
    width: 100%;
    overflow: scroll;
    // -webkit-overflow-scrolling: touch;
    table {
      text-align: center;
      width: 1000px;
      .a {
        width: 100%;
      }
    }
    tr {
      line-height: 30px;
      height: 30px;
    }
    th,
    td {
      width: 200px;
    }
    // tr:first-child {
    //   td {
    //     width: 110px;
    //   }
    //   td:nth-child(2) {
    //     width: 200px;
    //   }
    // }
    .delete-button {
      height: 30px;
    }
  }
  .class-table-b {
    width: 100%;
    overflow: scroll;
    .table-header {
      span {
        width: 300px;
      }
    }
  }
}
</style>

<style>
@keyframes dotDance {
  0% {
    /* width: 10px; */
    height: 10px;
  }
  33% {
    /* width: 100px; */
    height: 100px;
  }
  66% {
    /* width: 100px; */
    height: 100px;
  }
  100% {
    /* width: 10px; */
    height: 10px;
  }
}
</style>
