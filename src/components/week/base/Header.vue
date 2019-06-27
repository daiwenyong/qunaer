<template>

    <div class="header">
        <router-link tag='i' to="/" class="iconfont icon-fanhui header-back"></router-link>
        <h2>长沙必打卡</h2>
  </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped lang="stylus">
  .header
    position: fixed
    left:0
    top 0
    right 0
    z-index 1
    display flex
    line-height:.86rem
    color:#fff
    justify-content center
    background:#00bcd4
    .header-back
      position:absolute
      left:0
      top:0
      width:.8rem
    h2
      font-size:.32rem



</style>
