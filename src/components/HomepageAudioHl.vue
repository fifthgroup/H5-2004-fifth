<template>
  <div class="box_wrap">
    <ul class="box">
      <li v-for="(item,idx) in audioList" :key="idx">
        <div class="li_left">
          <img :src="'http://47.96.140.89:8080/ssm-1.0-SNAPSHOT'+item.resource_pic" alt />
          <span class="iconfont icon-bofang icon01"></span>
        </div>
        <div class="li_right">
          <p class="title">{{item.resource_name}}</p>
          <p class="val">{{item.resource_intro}}</p>
          <div class="li_right_bottom">
            <span class="iconfont icon-erji icon02"></span>
            <p>440.0万</p>
            <span class="iconfont icon-shenglvehao icon03"></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomepageAudio",
  data() {
    return {
      audioList: [],
    };
  },
  created() {
    axios({
      url: "/ssm-1.0-SNAPSHOT/resource/findByResource_id/?findByResource_id=15",
    }).then((res) => {
      this.audioList = res.data.data;
    });
  },
};
</script>

<style scoped>
@import url(../assets/font/iconfont.css);

.box_wrap {
  width: 100%;
  background-color: #f6f6f6;
  padding: 0.15rem;
  padding-top: 0;
  box-sizing: border-box;
}
.box li {
  background-color: #fff;
  padding: 0.15rem;
  border-radius: 0.1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.1rem;
}
.box li:last-child {
  margin-bottom: 0;
}
.box li .li_left {
  width: 30%;
  position: relative;
  margin-right: 0.2rem;
}
.box li .li_left img {
  width: 100%;
}
.box li .li_left .icon01 {
  position: absolute;
  bottom: 0.1rem;
  right: 0.1rem;
  width: 0.3rem;
  height: 0.3rem;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 0.3rem;
}
.box li .li_right {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* height: 0.455rem; */
}
.box li .li_right .title {
  font-size: 0.15rem;
  font-weight: bold;
  color: #000;
  /* margin-bottom: 0.12rem; */
}
.box li .li_right .val {
  font-size: 0.125rem;
  color: #777;
  background-color: #f8f8f8;
  padding: 0.08rem 0.12rem;
  border-radius: 0.05rem;
  margin-bottom: 0.1rem;

  /* margin-bottom: 0.15rem; */
}
.box li .li_right .li_right_bottom {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.125rem;
}
.box li .li_right .li_right_bottom .icon02 {
  color: #eb7253;
  margin-right: 0.1rem;
}
.box li .li_right .li_right_bottom p {
  color: #989898;
  margin-right: 1rem;
}
.box li .li_right .li_right_bottom .icon03 {
  color: #989898;
}
</style>