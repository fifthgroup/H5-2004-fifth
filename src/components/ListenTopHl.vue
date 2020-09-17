<template>
  <div class="box_wrap">
    <div class="box">
      <p class="title">我听</p>
      <span class="iconfont icon-download icon01"></span>
      <span class="iconfont icon-3lishi icon02"></span>
      <span class="iconfont icon-fangdajing icon03"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListenTop",
};
</script>

<style scoped>
@import url(../assets/listenFont/iconfont.css);

.box_wrap {
  background-color: #3b3a3f;
}
.box{
    position: relative;
}
.box .title {
  color: #fefefe;
  line-height: 0.5rem;
  font-size: 0.16rem;
  text-align: center;
}
.box span{
    position: absolute;
    top: 0.14rem;
    color: #fefefe;
    font-size: 0.22rem;
}
.box .icon01{
    right: 1.05rem;
    font-size: 0.2rem;
}
.box .icon02{
    right: 0.6rem;
}
.box .icon03{
    right: 0.2rem;
}
</style>