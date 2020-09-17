<template>
  <div class="box">
    <div class="other">其他登录方式</div>
    <div class="bottom">
        <span class="iconfont icon-weixin icon01"></span>
        <span class="iconfont icon-QQ icon02"></span>
        <span class="iconfont icon-icon_xinlang-chunselogo icon03"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginBottom",
};
</script>

<style scoped>
@import url(../assets/loginFont/iconfont.css);

.other {
  text-align: center;
  line-height: 0.15rem;
  font-size: 0.14rem;
  color: #949494;
}
.bottom {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 0.7rem;
}
.bottom .icon01{
  font-size: 0.4rem;
  color: green;
  text-align: center;
  line-height: 0.7rem;
}
.bottom .icon02{
    width: 0.4rem;
    height: 0.4rem;
    background-color: skyblue;
    border-radius: 50%;
    font-size: 0.4rem;
    color: #fff;
    text-align: center;
    line-height: 0.4rem;
}
.bottom .icon03{
    width: 0.4rem;
    height: 0.4rem;
    background-color: #f86342;
    border-radius: 50%;
    font-size: 0.25rem;
    color: #fff;
    text-align: center;
    line-height: 0.4rem;
}
</style>