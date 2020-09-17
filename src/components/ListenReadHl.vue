<template>
  <div class="box_wrap">
    <div class="box">
      <div class="box_left">
        <p class="read">订阅</p>
        <p class="listen">听更新</p>
      </div>
      <div class="box_right">
        <span class="iconfont icon-fenlei icon01"></span>
        <span class="iconfont icon-shaixuan icon02"></span>
        <p class="choose">筛选</p>
      </div>
    </div>

    <div class="box_bottom_wrap">
      <div class="box_bottom">
        <p class="gift">恭喜！您已获得新人大礼包</p>
        <div class="getGift">
          <span class="iconfont icon-libao icon03"></span>
          <p class="nowGet">立即领取</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListenRead",
};
</script>

<style scoped>
@import url(../assets/listenFont/iconfont.css);

.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.5rem;
  padding: 0 0.2rem;
  border-bottom: 0.005rem solid #eee;
}
.box_left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 0.5rem;
  font-size: 0.15rem;
  width: 30%;
}
.box_left p {
  color: #999;
}
.box_right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.box_right .icon02 {
  margin-right: 0.1rem;
  color: #999;
}
.box_right .icon01 {
  margin-right: 0.2rem;
  color: #999;
}
.box_right .choose {
  color: #999;
  font-size: 0.15rem;
}

.box_bottom_wrap {
  padding: 0.15rem 0.2rem;
}
.box_bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.7rem;
  background-color: #fff0dd;
  border-radius: 0.1rem;
  padding: 0 0.15rem;
}
.box_bottom .gift{
    font-size: 0.15rem;
    color: #a5622b;
}
.box_bottom .getGift{
    height: 0.3rem;
    background-color: #f76454;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.15rem;
    border-radius: 0.15rem;
}
.box_bottom .getGift .icon03{
    font-size: 0.175rem;
    color: #fff;
    margin-right: 0.025rem;
}
.box_bottom .getGift .nowGet{
    font-size:0.15rem;
    color: #fff;
}
</style>