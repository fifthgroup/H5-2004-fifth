<template>
  <div class="box_wrap">
    <div class="box_title">
      <span class="iconfont icon-ganxingqu icon01"></span>
      <p class="interest">你可能感兴趣的内容</p>
    </div>
    <ul class="box_list">
      <li v-for="(item,idx) in listenList" :key="idx">
        <div class="list_left">
          <img :src="'http://47.96.140.89:8080/ssm-1.0-SNAPSHOT'+item.collect_pic" alt />
          <div class="val_wrap">
            <p class="title">{{item.collect_intro1}}</p>
            <p class="val">{{item.collect_intro2}}</p>
            <div class="val_bottom">
                <span class="iconfont icon-bofang icon02"></span>
                <p>1亿</p>
            </div>
          </div>
        </div>
        <div class="list_right">
          <!-- <span class="iconfont icon-zengjia icon03"></span> -->
          <p class="sub">订阅</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ListenInterest",
  data() {
    return {
      listenList: [],
    };
  },
  created() {
    axios({
      url: "/ssm-1.0-SNAPSHOT/collect/all",
    }).then((res) => {
      this.listenList = res.data.data;
    });
  },
};
</script>

<style scoped>
@import url(../assets/listenFont/iconfont.css);
@import url(../assets/listenFont02/iconfont.css);

.box_wrap {
  padding: 0 0.2rem;
}
.box_title{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0 0.15rem;
}
.box_title .interest{
    color: #f86342;
    font-size: 0.15rem;
}
.box_title .icon01{
    color: #f86342;
    font-size: 0.2rem;
    margin-right: 0.05rem;

}
.box_list li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    padding: 0.15rem 0;
    border-bottom: 0.005rem solid #eaeaea;
}
.box_list li .list_left{
    display: flex;
    justify-content: flex-start;
}
.box_list li .list_left img{
    width: 1rem;
    height: 1rem;
    margin-right: 0.15rem;
}
.box_list li .list_left .val_wrap{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}
.box_list li .list_left .val_wrap .title{
    font-size: 0.17rem;
    color: #111;
}
.box_list li .list_left .val_wrap .val{
    font-size: 0.15rem;
    color: #999;
}
.box_list li .list_left .val_wrap .val_bottom{
    display: flex;
    align-items: center;
}
.box_list li .list_left .val_wrap .val_bottom .icon02{
    color: #999;
    font-size: 0.15rem;
    width: 0.15rem;
    height: 0.15rem;
    background-color: #f65f4e;
    border-radius: 50%;
    margin-right: 0.05rem;
}
.box_list li .list_left .val_wrap .val_bottom p{
    font-size: 0.15rem;
    color: #999;
}

.list_right{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.05rem 0.15rem;
    background-color: #ffeeec;
    border-radius: 0.2rem;
}
/* .list_right .icon03{
    color: #f86241;
    font-size: 0.2rem;
    margin-right: 0.03rem;
} */
.list_right .sub{
    font-size: 0.16rem;
    color: #f86241;
}
</style>