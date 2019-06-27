<template>
    <div class="gallary" @click="handleClick">
      <div class="gallary-list">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide v-for="(item,index) in gallaryImgs" :key="index">
            <img :src="item" alt="">
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
    export default {
        props:['gallaryImgs'],
        data() {
            return {
              swiperOption: {
                pagination: {
                  el: '.swiper-pagination',
                  type:'fraction',

                },
                observer:true,
                observeParents:true,
              }
            }
        },
      methods:{
          handleClick(){
            this.$emit('hanleClose')
          }
      }
    }
</script>

<style scoped lang="stylus">
  .gallary>>>.swiper-pagination-fraction
    position relative
    bottom 0rem
    color #fff
  .gallary
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    margin auto
    background-color: #000
    z-index 10
    .gallary-list
      position absolute
      width 100%
      height 4rem
      top 0
      bottom 0
      margin auto
      img
        width 100%
</style>
