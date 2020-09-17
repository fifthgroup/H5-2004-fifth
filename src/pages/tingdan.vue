<template>
  <div id="box">
    <div class="box_top">
    <Lxtingheader/>

    </div>
    <div class="box_bottom">
      <Lxtinglogo/>
      <Lxtingfooter/>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios';
import Lxtingheader from "../components/Lx-ting-header";
import Lxtinglogo from "../components/Lx-ting-logo";
import Lxtingfooter from "../components/Lx-ting-footer";
export default {
  name: 'tingdan',
  components:{
    Lxtingheader,Lxtinglogo,Lxtingfooter
  }
}
</script>

<style scoped>
.box_top{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.box_bottom{
  margin-top:0.8rem;
}
</style>
