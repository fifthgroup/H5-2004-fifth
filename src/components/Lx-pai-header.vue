<template>
  <div class="box">
      <div class="top">
           <router-link to="/" tag="span"><span class="iconfont icon-jiantou-copy"></span></router-link>
      <p>排行榜</p>
      <i class="iconfont icon-fenxiang_2"></i>
      </div>
      <ul class="bot">
          <li>
              <p @click="fn('xinre')">热播榜</p>
              <span></span>
          </li>
          <li>
              <p @click="fn('changre')">畅销榜</p>
              <span></span>
          </li>
          <li>
              <p @click="fn('changyou')">新品榜</p>
              <span></span>
          </li>
          <li>
              <p>口碑榜</p>
              <span></span>
          </li>
          <li>
              <p>影视原著</p>
              <span></span>
          </li>
      </ul>
     
  </div>
</template>

<script>
export default {
    name:"Lxpaiheader",
     data(){
    return{}
  },
  methods:{
    fn(params_type){
      this.$emit("MyClick",params_type);
    }
  }
}
</script>

<style scoped>
.box{
    width:100%;
    height: 1.6rem;
    padding:0 0.1rem;
    box-sizing: border-box;
    color: #fff;
    background:url(../assets/img/pai/pai1.png) center;
}
.box .top{
    width:100%;
    height: 1rem;
    display:flex;
    align-items: center;
    justify-content:space-between
}
.box .top span{
   font-size: 0.2rem;
   z-index: 10000;
}
.box .top p{
   font-size: 0.5rem;
}
.box .top i{
   font-size:0.25rem;
}
.box .bot{
    width:100%;
    height: 0.625rem;
}
.box .bot li{
    float: left;
    width:20%;
    height: 100%;
    text-align: center;
    line-height:0.6rem;
}
</style>