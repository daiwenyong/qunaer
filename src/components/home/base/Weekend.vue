<template>
    <div class="weekend">
      <h2>周末去哪儿</h2>
      <ul>
        <router-link
          v-for="(item,index) in weekendList"
          :key="index"
          tag="li"
          :to="{name:'weekLink',params:{id:item.id}}"
        >
          <img :src="item.imgUrl" alt="">
          <div class="week-title">
            <p>{{item.title}}</p>
            <p>{{item.desc}}</p>
          </div>


        </router-link>
      </ul>
    </div>
</template>

<script>
    export default {
        props:['weekendList'],
        data() {
            return {}
        }
    }
</script>

<style scoped lang="stylus">
  .weekend
    //padding 0 0.24rem
    h2
      padding-left: .26rem;
      line-height: .8rem;
      color: #212121;
    img
      width 100%
    .week-title
      padding: .14rem .2rem .2rem .2rem
      p
        padding-right: 1.4rem
        color: #212121
        font-size: .28rem
        line-height: .48rem
        white-space: nowrap;
        text-overflow: ellipsis
        overflow: hidden

</style>
