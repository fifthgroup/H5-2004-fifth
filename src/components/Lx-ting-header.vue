<template>
  <div class="box ">
       <router-link to="/" tag="span"><span class="iconfont icon-jiantou-copy"></span> </router-link>
      <p>听单</p>
      <span class="iconfont icon-shenglvehao"></span>
  </div>
</template>

<script>
export default {
    name:"Litingheader"
}
</script>

<style scoped>
@import url(../assets/iconfront1/iconfont.css);
.box{
    display:flex;
    height:1rem;
    width: 100%;
    align-items:center;
    font-size: 25px;
    justify-content:space-between;
    background-color:#fff;
}
.box span{
    margin:0 10px;
    font-size: 25px;
}
</style>