<template>
  <div class="box">
    <div class="list_wrap">
      <!-- 动态渲染首页banner下面的列表 -->
      <div v-for="(item,idx) in underList" :key="idx">
        <router-link :to="'/'+idx">
          <img :src="'/static/'+item.img" alt />
          <p>{{item.val}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomepageList",
  data() {
    return {
      underList: [],
    };
  },
  created() {
    axios({
      url: "http://localhost:3000/underList",
    }).then((res) => {
      this.underList = res.data;
    });
  },
};
</script>

<style scoped>
.box {
  padding: 0.25rem 0.25rem;
}
.list_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  height: 1.8rem;
}
.list_wrap div {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.list_wrap div p {
  font-size: 0.125rem;
  margin-top: 0.1rem;
}
.list_wrap div img {
  width: 0.5rem;
  height: 0.5rem;
  box-shadow: 0 0 0.1rem #eff8ff;
  border-radius: 50%;
}
</style>