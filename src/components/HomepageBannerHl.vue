<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!-- <div class="swiper-slide" v-for="(img,idx) in bannerImages" :key="idx">
        <img :src="'/static/'+img" />
      </div>-->
      <div class="swiper-slide" v-for="(value,key,index) in imgObj" v-if="index>0" :key="key">
        <img :src="'http://47.96.140.89:8080/ssm-1.0-SNAPSHOT/'+value" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>-->
  </div>
</template>

<script>
import Swiper from "swiper";
import axios from "axios";

export default {
  name: "HomepageBanner",
  data() {
    return {
      imgObj:{
        lbt_pic1:"",
        lbt_pic2:"",
        lbt_pic3:"",
        lbt_pic4:""
      },
    };
  },
  created() {
    axios({
      // url: "/lbt_pic",
      url:"http://47.96.140.89:8080/ssm-1.0-SNAPSHOT/lbt/all"
    }).then((res) => {
      this.bannerImages = res.data.data;
      console.log("ddd",  res.data.data[0]);
      // console.log(Array.isArray(res.data));
      // console.log("ttt", this.bannerImages)
      this.imgObj=res.data.data[0];
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
          disableOnInteraction: true,
        },
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },

        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
      });
    },
  },
};
</script>

<style scoped>
@import url(../assets/css/swiper.css);

.swiper-container {
  height: 1.3rem;
  width: 100%;
  border-radius: 0.2rem;
}
img {
  width: 100%;
  height: 100%;
}
.swiper-slide{
  cursor: pointer;
}
</style>>
