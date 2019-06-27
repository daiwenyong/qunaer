<template>
    <div class="header">
      <router-link
        tag="i"
        class="iconfont icon-fanhui header-goback"
        to="/"
        v-show="isShow"
      />
      <div class="header-fixed" v-show="!isShow" :style="styleObj">
        <router-link
          tag="i"
          class="iconfont icon-fanhui header-back"
          to="/"
        />
        <h1>{{sightName}}</h1>
      </div>
    </div>
</template>

<script>
    export default {
        props:['sightName'],
        data() {
          return {
            isShow:true,
            styleObj:{}
          }
        },
        methods:{
          handleScroll(){
            let scroll = document.documentElement.scrollTop;
            if(scroll){
              this.isShow = false;
              this.styleObj={
                opacity:(scroll-70)/100
              }
            }else{
              this.isShow = true
            }
          }
        },
        activated(){
          window.addEventListener('scroll',this.handleScroll)
        },
        deactivated(){
          window.removeEventListener('scroll',this.handleScroll)
        }
    }
</script>

<style scoped lang="stylus">
  .header
    position fixed
    left 0
    right 0
    top 0
    z-index 1
    .header-goback
      position:absolute
      width .8rem
      background-color: rgba(0,0,0,.5)
      border-radius 50%
      line-height .8rem
      color #fff
      text-align center
    .header-fixed
      line-height .86rem
      background-color: #00bcd4
      text-align center
      position relative
      color #fff
      font-size .4rem
      .header-back
        position absolute
        left .2rem
        top 0
        font-size .4rem



</style>
