<template>


  <swiper :options="swiperOption" v-if="isShow">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in navleft" :key="index">
      <div class="navs">

      <div class="item" v-for="icon in item" :key="icon.id">
        <img :src="icon.imgUrl" alt="">
        <span>{{icon.desc}}</span>
      </div>

    </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
    export default {
        props:['iconList'],
        data() {
            return {
              swiperOption: {
                pagination: {
                  el: '.swiper-pagination'
                }
              },
            }
        },
      created(){

      },
      computed:{
        isShow(){
          return this.iconList.length>0
        },
        navleft(){
          let icons = [[],[]];
          this.iconList.forEach((img,index)=>{
            let page = ~~(index/8)
              icons[page].push(img)
          });
          return icons
        }
      }
    }
</script>

<style scoped lang="stylus">
  .navs
    height 4rem
    display flex
    flex-wrap: wrap
    .item
      width 25%
      height 50%
      display flex
      flex-direction column
      justify-content  center
      align-items center
      img
        width 1.1rem
        height 1.1rem
</style>
