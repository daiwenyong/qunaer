<template>
    <div class="detail">
      <detail-header
        :sightName="sightName"
      />
      <detail-banner
        :bannerImg="bannerImg"
        :sightName="sightName"
        :gallaryImgs="gallaryImgs"
      />
      <detail-card
        :cardInfo="cardInfo"
      />
      <detail-recommend
        :recommendInfo="recommendInfo"
      >
        <h3>去哪儿推荐</h3>
      </detail-recommend>
      <detail-ticket :calendarInfo="calendarInfo"/>
      <detail-comment :commentInfo="commentInfo"></detail-comment>
    </div>
</template>

<script>
  import {getDetail} from  '@/api'
  import DetailHeader from './base/Header'
  import DetailBanner from './base/DetailBanner'
  import DetailCard from './base/DetailCard'
  import DetailRecommend from './base/DetailRecommend'
  import DetailTicket from './base/DetailTicket'
  import DetailComment from './base/DetailComment'



  export default {
      data() {
          return {
            sightName:'',
            bannerImg:'',
            gallaryImgs:[],
            cardInfo:{},
            recommendInfo:[],
            calendarInfo:[],
            commentInfo:[]
          }
      },
      components:{
        DetailHeader,
        DetailBanner,
        DetailCard,
        DetailRecommend,
        DetailTicket,
        DetailComment
      },
      async activated(){
        let data = await getDetail(this.$route.params.id);
        console.log(data);
        let {sightName,bannerImg,gallaryImgs,cardInfo,recommendInfo,calendarInfo,commentInfo} = data;
        let reg = /[\(](.+)[\)]/g;
        this.sightName = sightName.replace(reg,'');
        this.bannerImg = bannerImg
        this.gallaryImgs = gallaryImgs
        this.cardInfo = cardInfo
        this.recommendInfo = recommendInfo
        this.calendarInfo = calendarInfo
        this.commentInfo = commentInfo
      }
    }
</script>

<style scoped lang="stylus">
  .detail
    height 2000px
</style>
