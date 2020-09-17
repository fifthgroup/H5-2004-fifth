<template>
  <div class="box">
      <div class="left">
        <span class="iconfont icon-jiantou-copy" @click="fn"></span>
        <p>听单列表</p>
      </div>
      <div class="right">
          <div class="dingyue">
              + 订阅
          </div>
          <img src="../assets/img/lie/lie8.jpg" class="lie8">
          <img src="../assets/img/lie/lie9.jpg" class="lie9">
      </div>

  </div>
</template>

<script>
export default {
    name:"Lxlieheader",
    methods: {
        fn(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.box{
    box-sizing: border-box;
    width:100%;
    height: 0.8rem;
    display:flex;
    padding:0 0.1rem;
    justify-content:space-between;
    align-items: center;
    background-color:#808159;
}
.box .left{
    display:flex;
    align-items: center;
}
.box .left span{
    color:#fff;
    font-size:0.2rem;
}
.box .left p{
     color:#fff;
     font-size:17px;
     margin-left:0.05rem;
}
.box .right{
    display:flex;
     align-items: center;
}
.box .right .dingyue{
    width:0.7rem;
    height: 0.35rem;
    background-color: #fff;
    border-radius:0.2125rem;
    text-align: center;
    line-height:0.35rem;
}
.box .right .lie8{
    width:0.32rem;
    height: 0.32rem;
    margin:0 0.11rem;
}
.box .right .lie9{
    width: 0.3rem;
    height:0.145rem;
}
</style>