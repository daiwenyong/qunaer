<template>
    <div class="search">
      <input
        type="text"
        class='header-input'
        placeholder='请输入城市名和拼音'
        v-model="keyword">
      <div class="search-content" v-show="keyword" ref="wrapper">
        <ul class="content" >
          <li v-for="item in filterCitys" @click='handleClick(item.name)'>{{item.name}}</li>
          <li v-if=isShow>请输入城市名和拼音</li>
        </ul>
      </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        props:['cities'],
        data() {
            return {
              keyword:''
            }
        },
        computed:{
          filterCitys(){
            let citys = [];
            for(let key in this.cities){
              this.cities[key].forEach(v=>{
                if(v.spell.includes(this.keyword)||v.name.includes(this.keyword)){
                  citys.push(v)
                }
              })
            };
            return citys
          },
          isShow(){
            return !this.filterCitys.length
          }
        },
        mounted(){
          this.scroll = new BScroll(this.$refs.wrapper,{click:true})
        },
      methods:{
        handleClick(value){
          console.log(1);
          this.$store.commit('changeCity',value);
          this.$router.push('/')
        }
      }
    }
</script>

<style  scoped lang="stylus">
  .search
    background-color: #00bcd4
    padding-bottom .15rem
    height:.72rem
    .header-input
      display block
      width 95%
      height .5rem
      margin auto
      padding .1rem 0
      border-radius .1rem
      text-align center
    .search-content
      position  fixed
      top 1.5rem
      bottom 0
      left 0
      right 0
      z-index 2
      background-color:#ccc
      overflow hidden
      li
        line-height:.8rem
        padding-left:.2rem
        background-color:#fff
</style>
