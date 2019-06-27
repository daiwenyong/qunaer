<template>
  <div class="comment">
    <h3 class='border-bottom'>用户评论</h3>
    <div class="comment-container border-bottom" v-for='(comment,index) in commentInfo' :key='index'>
      <p class="comment-desc">{{comment.desc}}</p>
      <div class='comment-item'  @click="handleClick(comment)">
        <img :src="item"
             class='comment-img'
             v-for="(item,index) in comment.imgs"
             :key="index"
             v-if="index<6">
        <div class='img-amount' v-if='comment.imgs.length>6'>共{{comment.imgs.length}}张</div>
      </div>

      <common-gallary v-if='comment.isShow'
                      :gallaryImgs="comment.imgs"
                      @hanleClose="handleClose(comment)"
      ></common-gallary>
    </div>
  </div>
</template>

<script>
  import CommonGallary from '@/common/Gallary'
    export default {
      props:['commentInfo'],
      components:{
        CommonGallary
      },
      methods:{
        handleClick(comment){
          comment.isShow = true
        },
        handleClose(comment){
          comment.isShow = false;
        }
      },
      data() {
          return {

          }
      }
    }
</script>

<style scoped lang="stylus">
  .comment
    //padding-left .2rem
    h3
      padding 0 .2rem
      line-height .88rem
      font-size .3rem
      color #333
      background-color: #fff
    .border-bottom::before
      border-color #dadada
    .comment-container
      padding .2rem
      p
        font-size .26rem
        line-height .42rem
        color #616161
      .comment-item
        display flex
        //justify-content space-around
        flex-wrap wrap
        position relative
        box-sizing border-box
        height 191px
        .comment-img
          width 32%
          height 50%
          //margin-bottom 1.2%
          margin 0 .6% 1.2% .6%
        .img-amount
          position absolute
          right .1rem
          bottom .3rem
          color #fff
          border-radius:.2rem 0 0 .2rem
          background-color:rgba(0,0,0,.5)


</style>
