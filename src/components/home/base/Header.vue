<template>
    <div class="header">
      <slot name="ap"></slot>
      <i class="iconfont icon-fanhui"></i>
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="请输入城市/景点/游玩主题">
      </div>
      <router-link to='/city' tag='div' class="right">
        <span>{{this.$store.state.city}}</span>
        <i class="iconfont icon-jiantouxiangxia"></i>
      </router-link>
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
    display:flex;
    line-height: 0.84rem
    height 0.84rem
    background-color: #00bcd4
    color #fff
    .icon-fanhui
      font-size:0.32rem
      margin 0 0.1rem
    .search
      flex:1
      background-color: #fff
      line-height 0.64rem
      //height 0.64rem
      border-radius 0.1rem
      width 5.6rem
      margin 0.1rem 0.2rem
      input
        margin-top:-0.13rem
      .icon-sousuo
        color #ccc
        //margin-top -0.3rem
</style>
