<template>
  <div>
    <Lxboheader />
    <Lxbocount :id="id"/>
  </div>
</template>

<script>
import axios from "axios";
import Lxboheader from "../components/Lx-bo-header";
import Lxbocount from "../components/Lx-bo-count";

export default {
  name: "bofang",
  components: {
    Lxboheader,
    Lxbocount
  },
   data(){
    return {
      id:""
    }
  },
  created(){
    this.id=this.$route.params.id;
    console.log(this.$route.params.id)
  }
};
</script>

<style>
@import url(../assets/iconfront1/iconfont.css);
div{
    box-sizing:border-box;
}

</style>