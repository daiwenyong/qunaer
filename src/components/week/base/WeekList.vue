<template>
    <div class="list">
      <ul>
        <li v-for="(item,index) in weekInfo" :key="index">
          <img :src="item.imgUrl" alt="">
          <p>{{item.title}}</p>
          <p>{{item.desc}}</p>
          <span>￥<em>{{item.price}}</em></span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        props:['weekInfo'],
        data() {
            return {}
        }
    }
</script>

<style scoped lang="stylus">
  .list
    li
      border-bottom .2rem solid #f5f5f5
      position relative
      img
        width 100%
      p
        padding .1rem
      p:nth-child(2)
        font-size .36rem
        color #212121
        line-height .54rem
      span
        position absolute
        bottom .2rem
        right .2rem
        color: #ff8300
        em
          font-size .4rem
          font-weight bold

</style>
