<template>
  <div class="box">
      <div class="left">
          <p>节目 <span></span></p>
          <p>评价 <span></span></p>
          <p>找相似 <span></span></p>
      </div>
      <div class="right">
          <div class="quanbo">
              <img src="../assets/img/lie/lie4.jpg"/>
              <p>全部播放</p>
          </div>
          <div class="jishu">
              <img src="../assets/img/lie/lie0.jpg" class="ji1"/>
              <img src="../assets/img/lie/lie1.jpg" class="ji3"/>
              <p>共30集</p>
              <img src="../assets/img/lie/lie3.jpg" class="ji2"/>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"Lxliecount"
}
</script>

<style scoped>
.box{
    width:100%;
    height: 1.5rem;
    padding:0 0.1rem;
    box-sizing: border-box;
    background-color:#fff;
}
.box .left{
    width:100%;
    display:flex;
    height: 0.835rem;
    align-items:center;
    border-bottom:1px solid #e8e8e8;
}
.box .left p{
    display:flex;
    flex-direction:column;
    color: #999999;
    font-size:0.18rem;
    margin:0 0.15rem;
    margin-top:0.17rem;
    align-items:center;
}
.box .left p span{
    margin-top:0.20rem;
   width:0.15rem;
   height: 0.05rem;
   border-radius:0.025rem;
   background-color:transparent;
}
.box .right{
    width:100%;
    height: 0.7rem;
    display:flex;

    align-items: center;
    justify-content:space-between;
}
.box .right .quanbo{
    width:1.2rem;
    height:0.45rem;
    display:flex;
    color:#666;
    justify-content:center;
    align-items: center;
    background-color:#f3f4f6;
}
.box .right .quanbo img{
    width:0.15rem;
    margin-right:0.1rem;
    height:0.185rem;
}
.box .right .jishu{
    display:flex;
    align-items: center;
}
.box .right .jishu .ji1{
    width:0.3rem;
    height:0.285rem;
}
.box .right .jishu .ji3{
    width:0.3rem;
    height:0.285rem;
    margin:0 0.15rem;
}
.box .right .jishu p{
    font-size:0.15rem;
    color: #666666;
    margin-right:0.085rem;
}
.box .right .jishu .ji2{
    width:0.185rem;
    height:0.1rem;
}
</style>