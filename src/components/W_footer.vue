<template>
  <div class="box_wrap">
    <ul class="box">
      <li>
        <router-link to="/" tag="li">
          <span class="iconfont icon-shuaxin icon01"></span>
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link to="/l" tag="li">
          <span class="iconfont icon-icon- icon02"></span>
          <p>我听</p>
        </router-link>
      </li>
      <li>
        <span class="iconfont icon-bofang icon03"></span>
      </li>
      <li>
        <router-link to="/v" tag="li">
          <span class="iconfont icon-zhinanzhenfaxiandaohangdizhiweizhi icon04"></span>
          <p>发现</p>
        </router-link>
      </li>
      <li>
        <router-link to="/a" tag="li">
          <span class="iconfont icon-icon_account icon05"></span>
          <p>账号</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "myfooter",
};
</script>

<style scoped>
@import url(../assets/font/iconfont.css);

.box_wrap {
  padding: 0 0.35rem;
}
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.1rem;
}
.box li {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 0.6rem;
}

.box li span {
  width: 0.3rem;
  height: 0.3rem;
  background-color: #ccc;
  text-align: center;
  line-height: 0.3rem;
  border-radius: 50%;
  color: #fff;
  font-size: 0.2rem;
}
.box li:nth-child(3) span {
  width: 0.4rem;
  height: 0.4rem;
  background-color: #f86342;
  color: #fff;
  line-height: 0.4rem;
  font-size: 0.2rem;
  border: 0.02rem solid #ccc;
}
.box li p {
  font-size: 0.125rem;
  color: #949494;
}
</style>