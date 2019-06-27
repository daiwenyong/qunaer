<template>
    <div class="commend">
      <slot></slot>
      <div class="recommend-info border-top" v-for='item of recommendInfo'>
        <div class="recommend-left">
          <h4 class="recommend-title">{{item.title}}</h4>
          <span>{{item.time}}</span>
          <span class='border'>随时退</span>
        </div>

        <div class="recommend-right">
          <div class="right-desc">
            <span >¥{{item.price}}</span>
            <div class='recommend-button'>{{item.type}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      props:['recommendInfo'],
      data() {
          return {}
      }
    }
</script>

<style scoped lang="stylus">
  .commend
    padding-left .1rem
    border-bottom .2rem solid #f5f5f5
    h3
      line-height .88rem
      color #333
      font-size .32rem
      padding-left .1rem
    .recommend-info
      display flex
      padding 0 0 .2rem .2rem
      .recommend-left
        margin-right 1.05rem
        h4
          line-height .52rem
          font-size .3rem
          color #616161
        p
          font-size .24rem
        .border
          color #a5e4ec
          border: 1px solid #a5e4ec
          border-radius .08rem
          margin-left .2rem
      .recommend-right
        color #ff9800
        text-align center
        .right-desc
          margin .3rem .2rem 0 0
          .recommend-button
            width 1.6rem
            height: .6rem;
            background-color: #ff9800
            border-radius .1rem
            color: #fff;
            font-size: .28rem;
            line-height: .6rem;


</style>
