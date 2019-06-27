<template>
    <div>
      <home-header></home-header>
      <swiper :swiperList="swiperList"></swiper>
      <navs :iconList="iconList"></navs>
      <home-favourite :favList="recommendList"></home-favourite>
      <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
  import {getHome} from  '@/api'
  import HomeHeader from './base/Header'
  import Swiper from './base/Swiper'
  import Navs from './base/Nav'
  import HomeFavourite from './base/Favourite'
  import HomeWeekend from './base/Weekend'
    export default {
        data() {
            return {
              iconList:[],
              recommendList:[],
              swiperList:[],
              weekendList:[]
            }
        },
        components:{
          HomeHeader,
          Swiper,
          Navs,
          HomeFavourite,
          HomeWeekend
        },
        created(){
          //this.getData();
        },
        activated(){
          this.getData();
        },
        methods:{
          async getData(){
            let {iconList,recommendList,swiperList,weekendList} =await getHome();
            this.iconList = iconList;
            this.recommendList = recommendList;
            this.swiperList = swiperList;
            this.weekendList = weekendList;
          }
        }
    }
</script>

<style scoped>

</style>
