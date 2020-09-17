<template>
    <div class="boxx">
   <div class="box">
       <p>{{yishou.rd_content}}</p>
       <div class="img">
           <img  :src="'http://47.96.140.89:8080/ssm-1.0-SNAPSHOT'+yishou.rd_pic" >
       </div>
  </div>
  <div class="box_">
       <div class="bbb">
            <audio v-if="isshow" controls="controls" autoplay="autoplay" class="audio">
	            <source  :src="mstr"  type="audio/mp3">
            </audio>
       </div>
    
    <div class="foot">
        <span class="foot0">
             <img src="../assets/img/dd2.jpg">
        </span>
        <input type="text" placeholder="发表图片评论，你就是热评区最...">
        <span class="foot1">
            <img src="../assets/img/dd3.jpg">
        </span>
        <span class="foot2">
            <img src="../assets/img/dd4.jpg">
        </span>
    </div>
   </div>
   </div>
</template>

<script>
import axios from "axios";
export default {
    name:"Lxbocount",
    props: ["id"],
    data(){
    return {
          yishou:{},
          isshow:false,
    }
  },
  computed:{
      mstr:function(){
          let str = 'http://47.96.140.89:8080/ssm-1.0-SNAPSHOT'+this.yishou.rd_path ;
          console.log("str",str);
          return str;
     }
  },
  created(){
    
    // $router: vueRouter对象
    // console.log("this.$router",this.$router);
    // $route :当前匹配到的路由对象
    // console.log("this.$route",this.$route);
    // 接收书籍的编号
    // console.log(this.$route.params.id);
    // 发送请求
    axios({
      url:'/ssm-1.0-SNAPSHOT/rd/findById?id=62',
      
    })
     .then((res)=>{
            console.log(this.id);
            console.log("data",res.data.data[this.id].rd_path);
            this.yishou=res.data.data[this.id];
            console.log("this.yishou",this.yishou)
            console.log("this.yishou.rd_path",this.yishou.rd_path)
            this.isshow = true;
        });
  }
}
</script>

<style scoped>
.box{
    width:100%;
    height: 4.7rem;
    display:flex;
    align-items: center;
    flex-direction:column;
    justify-content:center;
    background-color:#808159;
    position: relative;
}
.box p{
    font-size:0.3rem;
    color: #fff;
    position:absolute;
    top:0.15rem;
}
.img{
    width:2.6rem;
    height:2.6rem;
    padding:0.3rem;
    box-sizing: border-box;
    border-radius:1.4rem;
    background-color: black;
    animation: myae  10s infinite linear;
}
.img img{
    width:2rem;
    height:2rem;
    box-sizing: border-box;
    border-radius:1.4rem;
    animation: myae 10s  infinite linear;
}

@keyframes myae {
0%{transform: rotate(0deg);}
100%{transform: rotate(360deg);}
}
.box_{
    width:100%;
    box-sizing:border-box;

}
.bbb{
     background-color:#f0f1f5;
}
.audio{
    width:100%;
}
.foot{
    width:100%;
    height: 0.6rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: relative;
}
 .foot input{
    width:2.5rem;
    height: 0.4rem;
    border:none;
    padding-left:0.3rem;
    border-radius:0.2rem ;
    background-color:#f0f1f5;
    outline-style: none;
  margin-left:0.15rem ;
  margin-right: 0.1rem;
} 
.foot0{
    position:absolute;
    top:15px;
    left: 20px;
}
.foot0 img{
    width:0.2rem;
    height:0.25rem;
}
.foot1 img{
    width:0.3rem;
    height:0.3rem;
     margin-right: 0.05rem;
}
.foot2 img{
    width:0.3rem;
    height:0.3rem; 
}
</style>