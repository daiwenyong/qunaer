<template>
    <div class="swiper">
      <swiper :options="swiperOption" v-if="isShow">
        <!-- slides -->
        <swiper-slide v-for='(item,index) in swiperList' :key="index">
          <img :src="item.imgUrl" alt="">
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
</template>

<script>
  export default {
    name: 'carrousel',
    props:['swiperList'],
    computed:{
      isShow(){
        return this.swiperList.length>0
      },
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          loop:true,
          autoplay:true
        }
      }
    },
    // mounted(){
    //   console.log(this.swiperList);
    // },
    // computed: {
    //   swiper() {
    //     return this.$refs.mySwiper.swiper
    //   }
    // }
  }
</script>

<style scoped lang="stylus">
  .swiper >>>.swiper-pagination-bullet-active
    background-color: #fff;

  /*.swiper >>>.swiper-pagination*/
    /*position absolute*/
  .swiper
    /*height:2.19rem*/
    height:auto
    .swiper-wrapper
      width 100%
    img
      width 100%
    .swiper-button-prev,.swiper-button-next{
      background-size: .32rem .6rem;
    }
</style>
