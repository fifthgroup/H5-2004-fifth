<template>
  <div class="box_wrap">
    <ul class="box">
      <li>
        <span class="iconfont icon-bofang icon01"></span>
        <p>收听历史</p>
      </li>
      <li>
        <span class="iconfont icon-download  icon02"></span>
        <p>下载</p>
      </li>
      <li>
        <span class="iconfont icon-gouwuche icon03"></span>
        <p>已购</p>
      </li>
      <li>
        <span class="iconfont icon-moonbyueliang  icon04"></span>
        <p class="title">助眠</p>
      </li>
      <li>
        <span class="iconfont icon-biao-renwudan  icon05"></span>
        <p class="title">听单</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListenNav",
};
</script>

<style scoped>
@import url(../assets/listenFont/iconfont.css);

.box_wrap{
    width: 100%;
    padding: 0.2rem 0.15rem;
    box-sizing: border-box;
}
.box{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.box li{
    width: 18%;
    height: 1rem;
    border-radius: 0.05rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.box li:nth-child(1){
    background-color: #7b7b7b;
}
.box li:nth-child(2){
    background-color: #547644;
}
.box li:nth-child(3){
    background-color: #268a80;
}
.box li:nth-child(4){
    background-color: #767dd8;
}
.box li:nth-child(5){
    background-color: #63c6cc;
}
.box li span{
    width: 0.3rem;
    height: 0.3rem;
    text-align: center;
    line-height: 0.3rem;
    margin-bottom: 0.1rem;
}
.box li .icon01{
    font-size: 0.2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #4a4a4a;
}
.box li .icon02{
    font-size: 0.3rem;
    color: #fff;
}
.box li .icon03{
    font-size: 0.25rem;
    color: #fff;
}
.box li .icon04{
    font-size: 0.25rem;
    color: #fff;
}
.box li .icon05{
    font-size: 0.3rem;
    color: #fff;
}

.box li p{
    font-size: 0.15rem;
    color: #fff;
}
</style>