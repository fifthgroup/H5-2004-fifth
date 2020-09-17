<template>
  <div>
    <div class="box_top">
      <Lxlieheader />
      <Lxliecount />
    </div>
    <div class="box_bottom">
        <Lxlielie :id="id"/>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
import Lxlieheader from "../components/Lx-lie-header";
import Lxliecount from "../components/Lx-lie-count";
import Lxlielie from "../components/Lx-lie-lie";
export default {
  name: "liebiao",
  components: {
    Lxlieheader,
    Lxliecount,
    Lxlielie,
  },
  data(){
    return {
      id:""
    }
  },
  created(){
    this.id=this.$route.params.id;
    console.log("this.id",this.id);
  }
};
</script>

<style>
@import url(../assets/iconfront1/iconfont.css);
.box_top{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.box_bottom{
  margin-top:2.2rem;
}
</style>