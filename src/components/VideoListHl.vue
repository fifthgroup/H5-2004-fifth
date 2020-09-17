<template>
  <div class="box_wrap">
    <ul class="box">
      <li v-for="(item,idx) in videoList" :key="idx">
        <!-- <img :src="'/static/'+item.rd_path" alt /> -->
        <div class="video_wrap">
          <video :src="'http://47.96.140.89:8080/ssm-1.0-SNAPSHOT'+item.resource_pic" controls width="100%" height="100%" preload="metadata" poster="http://www.youname.com/images/first.png"></video>
        </div>
        <p class="title">{{item.resource_name}}</p>
        <div class="auther_wrap">
          <p>佚名</p>
          <div class="praise_wrap">
            <span class="iconfont icon-ziyuan icon01"></span>
            <p class="praise">赞</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "VideoList",
    data() {
    return {
      videoList: [],
    };
  },
  created() {
    axios({
      url: "/ssm-1.0-SNAPSHOT/resource/findByResource_id/?findByResource_id=16",
    }).then((res) => {
      this.videoList = res.data.data;
    });
  }
};
</script>

<style scoped>
@import url(../assets/videoFont/iconfont.css);

.box_wrap{
    background-color: #f3f4f6;
    padding: 0.1rem 0.2rem;
}
.box{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.box li{
    width: 48.5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    margin-bottom: 0.1rem;
    border-radius: 0.1rem;
}
.video_wrap{
  background-color: #000;
  height: 100%;
}
/* .box li video{
    width: 100%;
    height: 100%;
} */
.box li .title{
    padding-left: 0.15rem;
    padding-right: 0.2rem;
    margin-top: 0.2rem;
    margin-bottom: 0.15rem;
    font-size: 0.16rem;
    color: #343434;
}
.auther_wrap{
    padding: 0 0.25rem 0 0.15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.1rem;
}
.auther_wrap p{
    color: #999;
    font-size: 0.15rem;
}
.praise_wrap{
    display: flex;
    align-items: flex-end;
}
.praise_wrap .icon01{
    font-size: 0.2rem;
    color: #999;
    font-weight: bold;
    margin-right: 0.05rem;
}
</style>