<template>
  <ul class="box">
     <li v-for="(lielie,idx) in lielies" :key=idx>
     <div class="lie-left">{{idx+1}}</div>
       <div class="lie-right">
        <div class="liezi">
        <router-link :to="'/bofang/'+idx"> <p>{{lielie.rd_content}}</p></router-link>
          <span class="lie-san">3天前</span>
        </div>
        <div class="lieping">
          <div class="lie56">
            <img src="../assets/img/lie/lie5.jpg" class="img1"/>
            <p>1.0万</p>
            <img src="../assets/img/lie/lie6.jpg" class="img2"/>
            <p>3:41</p>
            <img src="../assets/img/lie/lie7.jpg" class="img3"/>
            <p>5</p>
          </div>
            <div class="lie64">
                <img src="../assets/img/lie/lie1.jpg"/>
            </div>
          
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "Lxlielie",
  props:["id"],
     data(){
      return {
        lielies:[]
      }
    },
    created(){
      axios({
        url:'/ssm-1.0-SNAPSHOT/rd/findById?id='+this.id,
      })
      .then((res)=>{
         console.log("data",res.data);
         console.log(res.data);
         this.lielies=res.data.data;
         console.log(this.bannerImgs)
        });
      }
};
</script>

<style scoped>
.box {
  width: 100%;
  display: flex;
  flex-direction: column;
}
li {
  width: 100%;
  height: 1.05rem;
  display: flex;
  padding:0 0.1rem;
  box-sizing: border-box;
}
li .lie-left {
  width: 20%;
  height: 1.05rem;
  text-align: center;
  line-height: 1.05rem;
  font-size: 0.175rem;
  color: #999999;
}
li .lie-right {
  width: 80%;
  height: 1.05rem;
  border-bottom:1px solid #e8e8e8;
}
li .lie-right .liezi {
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content:space-between;
}
li .lie-right .liezi p{
    font-size:0.16rem;
}
li .lie-right .liezi .lie-san{
    font-size:0.1rem;
    color:#999999;
}
li .lie-right .lieping {
align-items: center;
  width: 100%;
  height: 40%;
  display: flex;
  justify-content:space-between;
}
li .lie-right .lieping .lie56{
    align-items: center;
  display:flex;
  color: #acacac;
}
li .lie-right .lieping .lie56 .img1{
    width:0.13rem;
    height:0.15rem;
}
li .lie-right .lieping .lie56 .img2{
    width:0.16rem;
    height:0.16rem;
}
li .lie-right .lieping .lie56 .img3{
    width:0.15rem;
    height:0.125rem;
}
li .lie-right .lieping .lie64 img{
    width:0.25rem;
    height:0.25rem;
}
</style>