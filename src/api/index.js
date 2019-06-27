//处理数据交互

import axios from 'axios'

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data.data;
});


export let getHome =  ()=>{
  return axios.get('/static/mork/index.json')
}

export let getCity =  ()=>{
  return axios.get('/static/mork/city.json')
}

export let getDetail = (id)=>{
  return axios.get('/static/mork/detail/'+id+'.json')
}

export let getWeek = (id)=>{
  return axios.get('/static/mork/week/'+id+'.json')
}


