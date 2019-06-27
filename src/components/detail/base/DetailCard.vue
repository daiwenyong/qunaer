<template>
    <div class="card">
      <div class="card-desc border-bottom">

        <div class="card-left border-right">
            <p>
              <span class="span-score">{{cardInfo.score}}</span>分 <span>{{cardInfo.desc}}</span>
            </p>
            <p>
              <span>{{cardInfo.comment}}条评论</span>
              <span>{{cardInfo.walkthrough}}条攻略</span>
            </p>
            <i class='iconfont icon-jiantouyou'></i>
        </div>

        <div class="card-right">
          <span>景点简介</span>
          <p>开放时间、贴士</p>
          <i class='iconfont icon-jiantouyou'></i>
        </div>

      </div>
      <p class="card-address ">
        {{cardInfo.address}} <i class='iconfont icon-jiantouyou'></i>
      </p>
    </div>
</template>

<script>
    export default {
      props:['cardInfo'],
      data() {
          return {}
      }
    }
</script>

<style scoped lang="stylus">
  .card
    position: relative;
    top: -.1rem;
    padding: .1rem .2rem 0 .2rem;
    margin-bottom: .1rem;
    background: #fff;
    border-radius: .1rem .1rem 0 0
    border-bottom .2rem solid #f5f5f5
    .card-desc
      padding-top: .1rem;
      padding-bottom: .2rem;
      display flex
      .card-left
        flex 1
        p:nth-child(1)
          color #ff8300
        p:nth-child(2)
          color #212121
          font-size .28rem
          line-height 1
        .span-score
          font-size .44rem
        .icon-jiantouyou
          position absolute
          right .2rem
          top .18rem
      .card-right
        padding-left .2rem
        flex 1
        span
          font-size .28rem
          color #212121
          line-height .48rem
        .icon-jiantouyou
          position absolute
          right .2rem
          top .3rem
    .card-address
      padding:.2rem 0
      position relative
      .icon-jiantouyou
        position absolute
        right .2rem
        top .2rem
</style>
