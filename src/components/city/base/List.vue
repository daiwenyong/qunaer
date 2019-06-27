<template>
    <div class="list" ref="wrap">
      <div>
      <div class="nowCity">
        <p>当前城市</p>
        <span>{{this.$store.state.city}}</span>
      </div>

      <div class="hotCity">
        <p>热门城市</p>
        <div class="hotCity-list">
          <div class="hotCity-item" v-for="item in hotCities" @click='handleClick(item.name)'>
            {{item.name}}
          </div>
        </div>
      </div>

    <div class="list-item" v-for="(item,key) in cities">
      <h3 class='list-title border-topbottom' :ref="key">{{key}}</h3>
      <ul>
        <li v-for="city in item"
            class='city-item border-bottom'
            @click='handleClick(city.name)'>
          {{city.name}}
        </li>
        <!--<router-link to='/' tag='li' v-for="city in item"-->
            <!--class='city-item border-bottom'-->
            <!--@click='handleClick(city.name)'>-->
          <!--{{city.name}}-->
        <!--</router-link>-->
      </ul>
    </div></div>
    </div>
</template>

<script>
   import BScroll from 'better-scroll'
    export default {
        props:['cities','hotCities'],
        data() {
            return {}
        },
        methods:{
            handleClick(value){
              this.$store.commit('changeCity',value);
              this.$router.push('/')
            }
          },
        mounted(){
          this.scroll = new BScroll(this.$refs.wrap,{click:true})
        },
        computed:{
          letter(){
            return this.$store.state.letter
          }
        },
        watch:{
          letter(value){
            //console.log(this.$refs[value][0]);
            this.scroll.scrollToElement(this.$refs[value][0])
          }
        },


    }
</script>

<style scoped lang="stylus">
  /*.nowCity*/
  .list
    position:fixed
    overflow: hidden
    top: 1.5rem
    left: 0
    right: 0
    bottom: 0
  .nowCity p:nth-child(1),.hotCity p:nth-child(1)
    padding .12rem .2rem
    line-height: 0.54rem
    background: #eee
    padding-left: 0.2rem
    color: #666
    font-size: 0.26rem
  .nowCity span:nth-child(2)
    display block
    width: .6rem
    border 1px solid #ccc
    border-radius .1rem
    padding .2rem
  .hotCity-list
    display flex
    flex-wrap: wrap
    justify-content space-around
    .hotCity-item
      width 20%
      heigth 50%
      padding .1rem 0
      margin .2rem .2rem
      text-align: center
      border 1px solid #ccc
      border-radius .1rem
  /*.list-item*/
    /*overflow: hidden*/
    /*position  fixed*/
    /*top 5.5rem*/
    /*bottom 0*/
    /*left 0*/
    /*right 0  */
    .list-title
      line-height: 0.54rem
      background: #eee
      padding-left: 0.2rem
      color: #666
      font-size: 0.26rem
    .city-item
        line-height:.8rem
        padding-left:.2rem

</style>
