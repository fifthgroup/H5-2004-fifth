<template>
  <div class="box">
    <!-- 顶部导航区域 -->
    <div class="box_top">
      <!-- 导航左边的功能列表 -->
      <ul class="box_top_left">
          <router-link to="/" tag="li">推荐</router-link>
        <router-link to="/music"  tag="li">音乐</router-link>
        <router-link to="/novel"  tag="li">小说</router-link>
        <router-link to="/crosstalk"  tag="li">相声</router-link>
        <router-link to=""  tag="li">历史</router-link>
        <router-link to=""  tag="li">评书</router-link>
        <router-link to="" tag="li">军事</router-link>
        <router-link to=""  tag="li">体育</router-link>
        <router-link to=""  tag="li">新闻</router-link>
        <router-link to=""  tag="li">关注</router-link>
      </ul>
      <!-- 导航右边的分类按钮 -->
      <div class="iconfont icon-gengduo1 box_top_right"></div>
    </div>
    <!-- 顶部搜索区域 -->
    <div class="box_bottom">
      <!-- 搜索区域左边的搜索框 -->
      <div class="box_bottom_left">
        <!-- 放大镜图标 -->
        <span class="search iconfont icon-fangdajingsousuo"></span>
        <!-- 搜索框 -->
        <router-link to="seek" ><input class="search_wrap" type="text" placeholder="武动乾坤" /></router-link>
        <!-- 语音图标 -->
        <span class="voice iconfont icon-yuyin"></span>
      </div>
      <!-- 搜索区域右边的菜单栏 -->
      <div class="box_bottom_right">
        <!-- 搜索区域中间的历史图标 -->
        <span class="box_bottom_right_left iconfont icon-lishi"></span>
        <!-- 搜索区域右边的十字图标 -->
        <span class="box_bottom_right_right iconfont icon-icon-test"></span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomepageTop",
    data() {
    return {
      homepageNav: [],
    };
  },
  created() {
    axios({
      url: "http://localhost:3000/homepageNav",
    }).then((res) => {
      this.homepageNav = res.data;
    });
  }
};
</script>

<style scoped>
@import url(../assets/font/iconfont.css);
/* 顶部盒子 */
.box {
  padding: 0 0.15rem;
}
/* 顶部导航区域 */
.box_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 滚动导航栏 */
.box_top_left {
  display: flex;
  overflow: auto;
  white-space: nowrap;
  width: 87%;
  /* box-shadow: 0.01rem 0 0.01rem #cccccc; */
}
.box_top_left li {
  float: left;
  margin-right: 0.22rem;
  line-height: 0.6rem;
  font-size: 0.154rem;
  cursor: pointer;
}
.box_top_left li:nth-child(1){
  color: #f86342;
  font-size: 0.17rem;
}
/* 导航区域右侧图标 */
.box_top_right {
  color: #f86342;
  font-size: 0.25rem;
  line-height: 0.6rem;
  padding-left: 0.1rem;
}
/* 顶部搜索框区域 */
.box_bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.13rem 0;
}
/* 搜索框左半部分 */
.box_bottom_left {
  position: relative;
  width: 60%;
}
/* 搜索框放大镜图标 */
.box_bottom_left .search {
  position: absolute;
  font-size: 0.27rem;
  top: 0.04rem;
  left: 0.04rem;
  color: #666;
}
/* 搜索框 */
.box_bottom_left .search_wrap {
  background-color: #f3f4f6;
  line-height: 0.35rem;
  height: 0.35rem;
  outline: none;
  border: none;
  border-radius: 0.2rem;
  padding-left: 0.45rem;
  width: 100%;
  font-size: 0.15rem;
}
/* 搜索框语音图标 */
.box_bottom_left .voice {
  position: absolute;
  font-size: 0.2rem;
  top: 0.07rem;
  right: -0.35rem;
  color: #666;
}
/* 搜索框区域右半部分 */
.box_bottom_right {
  color: #111;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
/* 搜索框区域右半部分两个图标 */
.box_bottom_right span {
  font-size: 0.25rem;
  margin-left: 0.16rem;
}
</style>>