<template>

    <div class="banner" >
      <div class="banner-img" @click="hanleClick" >
        <img :src="bannerImg" alt="">

        <div class="banner-title">
          <div class="banner-font">
            <i class="iconfont icon-tupian"></i>
            <span>{{gallaryImgs.length}}</span>
          </div>
          <h1>{{sightName}}</h1>
        </div>
      </div>
      <fade-animation>
        <banner-gallary
          :gallaryImgs="gallaryImgs"
          v-show="isShow"
          @hanleClose="hanleClose"
        />
      </fade-animation>

    </div>
</template>

<script>
    import BannerGallary from '@/common/Gallary'
    import FadeAnimation from '@/common/FadeAnimation'

    export default {
        props:['bannerImg','gallaryImgs','sightName'],
        data() {
            return {
              isShow:false
            }
        },
        components:{
          BannerGallary,
          FadeAnimation
        },
        methods:{
          hanleClick(){
            this.isShow = true
          },
          hanleClose(){
            this.isShow = false
          }
        }
    }
</script>

<style scoped lang="stylus">
  .banner
    .banner-img
      height 4.46rem
      img
        width 100%
        height 100%
      .banner-title
        position: absolute
        padding-left .4rem
        left 0
        top 3.1rem
        color #fff
        .banner-font
          border 1px solid #ccc
          border-radius .1rem
          padding 0 .1rem .1rem
          background-color: rgba(0,0,0,.5)
          text-align center
        h1
          font-size .32rem
          padding-top .1rem
</style>
