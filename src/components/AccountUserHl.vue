<template>
  <div class="box_wrap">
    <div class="box">
      <div class="box_left">
        <div class="box_left_left">
          <img src="../assets/img/yinyue.jpg" />
        </div>
        <div class="box_left_right">
          <h2 class="userName">听友25545</h2>
          <span class="iconfont icon-VIP icon01">vip</span>
          <div class="fans">
              <span>粉丝</span>
              <span>0</span>
              <span></span>
              <span>关注</span>
              <span>1</span>
          </div>
        </div>
      </div>
      <div class="box_right">
          <span class="iconfont icon-jindouyindou01 icon02"></span>
          <span>+100积分</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountUser",
};
</script>

<style scoped>
@import url(../assets/accountFont/iconfont.css);

.box_wrap {
  padding-top: 0.25rem;
  padding-left: 0.2rem;
}
.box {
  padding: 0.1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box_left{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.box_left .box_left_left{
    width: 0.7rem;
    height: 0.7rem;
    background-color: pink;
    border-radius: 50%;
    margin-right: 0.125rem;
}
.box_left .box_left_left img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.box_left .box_left_right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 0.7rem;
}
.box_left .box_left_right .userName{
    font-weight: normal;
    font-size: 0.175rem;
}
.box_left .box_left_right .icon01{
    width: 0.5rem;
    height: 0.2rem;
    background-color: #9a9969;
    font-size: 0.175rem;
    text-align: center;
    line-height: 0.2rem;
    color: orange;
    border-radius: 0.1rem;
}
.box_left .box_left_right .fans{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 0.8rem;
}
.box_left .box_left_right .fans span{
    font-size: 0.125rem;
    color: #999;
}
.box_left .box_left_right .fans span:nth-child(3){
    width: 0.015rem;
    background-color: #e6e6e6;
    height: 0.1rem;
}
.box_right{
    display: flex;
    align-items: center;
    width: 1.1rem;
    height: 0.5rem;
    border: 0.015rem solid #ede9e8;
    border-radius: 0.4rem;
    justify-content: center;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    padding-left: 0.05rem;
}
.box_right .icon02{
    font-size: 0.25rem;
    color: #ffc555;
    margin-right: 0.05rem;
}
.box_right span:nth-child(2){
    font-size: 0.15rem;
}
</style>