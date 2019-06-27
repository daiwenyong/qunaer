<template>
  <div class='calendar'>
    <ul class='ticket-title border-bottom'>
      <li @click="handleTicket">门票</li>
      <li  @click="handleTourist">一日游</li>
    </ul>
    <div  class='calendar-item' v-for='(item) in calendarInfo'>
      <h3 class='border-bottom' ref="ticket">{{item.calendarInfo.title}}</h3>

      <div class="border-bottom"  v-for='result in item.calendarInfo.result' >
        <div @click='handleClick(result)' class="calendar-info ">
          <div class="calendar-left">
            <h4 class="calendar-title">{{result.subtitle}}</h4>
          </div>

          <div class="calendar-right">
            <span>¥{{result.price}}<i class='iconfont icon-jiantouxiangxia' :style="result.styleObj"></i></span>
          </div>
        </div>
        <detail-recommend v-show='result.isShow' :recommendInfo="result.recommendInfo"></detail-recommend>
      </div>
    </div>
  </div>
</template>

<script>
  import DetailRecommend from '@/components/detail/base/DetailRecommend'
    export default {
        props:['calendarInfo'],
        data() {
            return {
              styleObj:{
                transform:''
              }
            }
        },
        methods:{
          handleTicket(){
            console.log(this.$refs.ticket)
            document.documentElement.scrollTop = this.$refs.ticket[0].offsetTop-85
          },
          handleTourist(){
            document.documentElement.scrollTop = this.$refs.ticket[2].offsetTop-45
          },
          handleClick(result){
            result.isShow = !result.isShow;
            result.styleObj.transform = 'rotate('+result.isShow*180+'deg)';
            //this.styleObj.transform = 'rotate('+result.isShow*180+'deg)';
          }
        },
        components:{
          DetailRecommend
        }
    }
</script>

<style scoped lang="stylus">
.calendar
  .calendar-item
    border-bottom .2rem solid #f5f5f5
    padding-left .2rem
  .ticket-title
    display flex
    line-height .96rem
    font-size .32rem
    color #212121
    li
      flex 1
      text-align center
  .calendar-item
    h3
      line-height .8rem
    .calendar-info
      display flex
      flex-wrap: wrap
      justify-content:space-between
      padding: .1rem 0
      .calendar-title
        line-height .8rem
        width 6.4rem
        //margin-right .2rem
      .calendar-right
        margin-right 0
        display flex
        flex-direction column
        justify-content center
        span
          color: #ff9800;
        i
          display inline-block



</style>
