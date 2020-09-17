<template>
    <div class="swiper-container">
    <div class="swiper-wrapper">
          <!-- <div class="swiper-slide">
            <img :src="banerImgs.lbt_pic1" />
          </div>
          <div class="swiper-slide">
            <img :src="banerImgs.lbt_pic2" />
          </div>
          <div class="swiper-slide">
            <img :src="banerImgs.lbt_pic3" />
          </div>
          <div class="swiper-slide">
            <img :src="banerImgs.lbt_pic4" />
          </div> -->


       <div class="swiper-slide" v-for="(value,key,index) in imgObj" v-if="index>0" :key="key">
            <img :src="'http://47.96.140.89:8080/ssm-1.0-SNAPSHOT/'+value"/>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import axios from "axios"
import Swiper from "swiper" 
export default {
    name:"baner",
    data(){
        return{
            imgObj:{
              lbt_pic1:"",
              lbt_pic2:"",
              lbt_pic3:"",
              lbt_pic4:""
            }
        }
    },
      created() {
    axios({
     url: "http://47.96.140.89:8080/ssm-1.0-SNAPSHOT/lbt/findById?lbt_id=3"
    }).then(res => {
      this.imgObj = res.data.data[0];
      console.log(res.data.data[0])
      this.$nextTick(() => {
        // console.log(this);
        this.showSwiper();  
      });
    });
  },  
  methods: {
    showSwiper() {
      new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        // autoplay:true,
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        },
        
      });
    }
  }
}
</script>

<style scoped>
@import url(../assets/css/swiper.css);
.swiper-container {
  width: 100%;
  height: 200px;
}

img {
  width: 100%;
  height: 100%;
}
</style>