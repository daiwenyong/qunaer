<template>
    <div>
      <div class="favourite">
        <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" class="fav-img">
        <span class="title">猜你喜欢</span>
        <ul>

          <router-link
            class='fav-li border-bottom'
            v-for="(item,index) in favList"
            :key="index"
            tag="li"
            :to="{name:'detailLink',params:{id:item.id}}"
          >
            <div class="fav-left">
              <img :src="item.imgUrl" alt="" class="fav-list-img">
            </div>

            <div class="fav-info">

              <p class="fav-title">{{item.title}}</p>
              <div class="fav-comment">
                <p class='item-fav-text'>
                  <i v-for='i in 5' class='iconfont icon-star'></i>
                  <span class='item-fav-star' :style="item.score|star">
                      <i v-for='i in 5' class='iconfont icon-star'></i>
                  </span>
                </p>
                <span>{{item.score}}</span>
                <span>{{item.comment}}条评论</span>

              </div>
              <p class='item-price'>{{item.price|price}}</p>
            </div>

          </router-link>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        props:['favList'],
        data() {
            return {}
        },
        filters:{
          price(value){
            return '￥'+value
          },
          star(score){
            return {
              width:score*100/5+'%'
            }
          }
        }
    }
</script>

<style scoped lang="stylus">
  .favourite
    padding: .12rem .24rem ;
    overflow hidden
    .fav-img
      display inline-block
      width 0.3rem
      height 0.3rem
    .fav-li
      padding 0.2rem 0
      height 2rem
      .fav-left
        float left
        //overflow hidden
        width 2rem
        height 2rem
        .fav-list-img
          display block
          width 100%
          height 100%
      .fav-info
      //display inline-block
      //float right
        overflow hidden
        padding-left .22rem
      .fav-title
        margin-top: .2rem;
        color: #212121;
        font-size: .32rem;
        line-height: .44rem;
      .fav-comment
        margin: .14rem 0 .28rem
        position relative
        .item-fav-text
            position:relative
            display:inline-block
            color #ccc
        .icon-star
          font-size .24rem

        .item-fav-star
          overflow hidden
          position absolute
          left 0
          top 0
          color:#ff8300
      .item-price
        color: #ff8300
        font-size: .4rem
        line-height: .4rem

</style>
