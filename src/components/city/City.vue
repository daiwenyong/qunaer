<template>
    <div>
      <city-head></city-head>
      <city-search :cities="cities"></city-search>
      <city-list :cities="cities" :hotCities="hotCities"></city-list>
      <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
  import {getCity} from "@/api";
  import CityHead from './base/Head'
  import CitySearch from './base/Search'
  import CityList from './base/List'
  import CityAlphabet from './base/Alphabet'
    export default {
        data() {
            return {
              hotCities:[],
              cities:[]
            }
        },
      components:{
        CityHead,
        CitySearch,
        CityList,
        CityAlphabet
      },
      created(){
          this.getData();
      },
      methods:{
          async getData(){
            let {hotCities,cities} = await getCity();
            this.hotCities = hotCities
            this.cities = cities
          }
      }
    }
</script>

<style scoped lang="stylus">

</style>
