<template>
  <ul class="box ">
     <li v-for="(img,idx) in bannerImgs" :key=idx>
         <img  :src="'http://47.96.140.89:8080/ssm-1.0-SNAPSHOT'+img.resource_pic" alt="">
         <p>{{img.resource_name}}</p>
     </li>
  </ul>
</template>

<script>
import axios from "axios"

export default {
    name:"Lxtingfooter",
   data(){
    return {
      bannerImgs:[]
    }
  },
  created(){
    axios({
      url:'/ssm-1.0-SNAPSHOT/resource/findByResource_id/?findByResource_id=21',
    })
    .then((res)=>{
       console.log("data",res.data);
       console.log(res.data.data);
       this.bannerImgs=res.data.data;
      });
    }
};
</script>

<style scoped>

.box{
    display:flex;
    widows: 100%;
    font-size: 0.16rem;
    flex-wrap:wrap;
    margin:0 10px;
    justify-content:space-between;
}
li{
    width:1rem;
    height: 1.5rem;
    font-size: 13px;
}
img{
     width:1rem;
    height:1rem;
}
</style>