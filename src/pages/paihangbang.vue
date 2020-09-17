<template>
  <div class="box">
    <div class="box_top">
      <Lxpaiheader  @MyClick="changeT"/>
    </div>
    
    <div class="left">
        <Lxpaileft  @myClick="changeType" :type="typeV"/>
    </div>
    <div class="right">
         <Lxpairight :type="typeVal"/>
    </div>
   
  </div>
</template>

<script>
import axios from "axios";
import Lxpaiheader from "../components/Lx-pai-header";
import Lxpaileft from "../components/Lx-pai-left";
import Lxpairight from "../components/Lx-pai-right";

export default {
  name: "paihangbang",
  components: {
    Lxpaiheader,
    Lxpaileft,Lxpairight
  },
  data(){
    return {
      typeVal:"xinre",
      typeV:"xinre",
    }
  },
  methods:{
    changeType(params_type){
      this.typeVal = params_type;
    },
    changeT(params_type){
      this.typeV = params_type;
    }
  }
};
</script>

<style>
@import url(../assets/iconfront1/iconfont.css);
.box{
    width:100%;
}
.left {
    width:22% ;
    float: left;
    margin-top:1.6rem;
}
.right{
    width:78%;
    float: right;
     margin-top:1.6rem;
}
.box_top{
   position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>