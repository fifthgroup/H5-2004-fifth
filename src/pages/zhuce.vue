<template>
  <div class="app">
    <div class="top">
       <router-link to="/Lo" tag="span"><span class="iconfont icon-jiantou-copy"></span></router-link>
    </div>
    <div class="yanz">
        <h1>请输入验证码</h1>
        <p>用户{{this.$route.params.phone}}验证码为:</p>
        <input type="text" v-model="yan">
        <!-- <span class="span_">
            {{zhuce[0].resource_name}}
        </span> -->
        <span class="ss" v-show="isshow">你的验证码错误</span>
        <div class="yanzheng" @click="fn">
            <h2>验证</h2>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "yanzheng",
   data(){
    return {
      zhuce:[],
      yan:"",
      da:"",
      isshow:false
    }
  },
  created(){
    
    axios({
      url:"http://47.96.140.89:8080/ssm-1.0-SNAPSHOT/user/tel/"+this.$route.params.phone,

    })
     .then((res)=>{
         console.log("this.$route.params.phone",this.$route.params.phone);
         console.log("phone",res.data);
         this.zhuce=res.data;
         console.log(this.zhuce)
        });
  },
  methods:{
      fn(){
          if(this.yan==this.zhuce){
            //   console.log(this.zhuce[0].resource_name);
              console.log("zhengque");
              this.isshow=false;
            localStorage.setItem('username',"1");
            this.$router.push("/a")
          }else{

              this.isshow=true;
            //    console.log("cuowu")
          }
      }
  }
};
</script>

<style>
@import url(../assets/iconfront1/iconfont.css);
.top {
    
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
}
.top span{
    font-size:0.3rem;
}
.yanz{
    position: relative;
    width:100%;
    box-sizing: border-box;
    padding-left: 0.2rem;
}
.yanz h1{
    margin-top:0.3rem;
    font-size:0.3rem;
}
.yanz p{
    margin-bottom:0.3rem;
    color: #666;
}
.yanz input{
    outline:none;
    height: 0.33rem;
    width:2.5rem ;
}
.yanz .span_{
    text-align: center;
    line-height:0.33rem;
    font-style: italic;
    display:block;
    width:1.1rem;
    border:1px solid black;
    height: 0.33rem;
    position:absolute;
    top:0.9rem;
    right: 0.25rem;
    /* background-color:red; */
}
.yanz .ss{
    position:absolute;
    top:1.5rem;
    right:1.4rem;
    color:#f86342;
}
.yanz .yanzheng{
    width:90%;
    margin-left:0.08rem;
    margin-top:0.5rem;
    height: 0.5rem;
    color:#fff;
    border-radius:0.25rem;
    text-align: center;
    line-height:0.5rem;
    background-color:#f86342;
}

</style>