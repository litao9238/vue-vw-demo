<template>
  <div class="home">
    <div class="test" id="example">
      <img alt="Vue logo" src="../assets/logo.png">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    
  <van-button block>1231</van-button>
    <van-tabbar v-model="active" fixed>
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      active: 0
    }
  },
}
</script>

<style lang="scss">

#example {
  background: white svg(square param(--color #00b1ff));
}
.home {
  height: 200px;
}
.test {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
img {
  display: block;
  width: 168px;
  height: 109px;
  transition: all 0.3s;
  animation: xx 0.3s ease-in;
  &:first-child {
    margin-right: 9px;
  }
}
</style>
