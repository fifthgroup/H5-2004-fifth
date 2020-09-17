<template>
   <div class="box">
      <div class="left">
        <router-link to="/liebiao"><span class="iconfont icon-jiantou-copy"></span></router-link>
      </div>
      <div class="right">
          <img src="../assets/img/lie/lie8.jpg" class="lie8">
          <img src="../assets/img/lie/lie9.jpg" class="lie9">
      </div>

  </div>
</template>

<script>
export default {
    name:"Lxboheader"
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
.box .right{
    display:flex;
     align-items: center;
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