<template>
  <div class="week">
    <week-header></week-header>
    <week-list :weekInfo="weekInfo"></week-list>
  </div>
</template>

<script>
  import {getWeek} from "@/api";
  import WeekHeader from './base/Header'
  import WeekList from './base/WeekList'
  export default {
        data() {
          return {
            weekInfo:[]
          }
        },
        activated(){
          this.getData()
        },
        methods:{
          async getData(){
            let {weekInfo} = await getWeek(this.$route.params.id)
            this.weekInfo = weekInfo;
            console.log(weekInfo);
          }
        },
        components:{
          WeekHeader,
          WeekList
        }
    }
</script>

<style scoped lang="stylus">


</style>
