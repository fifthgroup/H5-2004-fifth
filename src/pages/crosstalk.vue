<template>
  <div class="app">
      <div class="top_box">
          <seach/>
      </div>
      <div class="center_box">
          <crosstalkbanner/>
          <crosstalknav/>
          <yue/>
      </div>
      <div class="bottom_box">
          <myfooter/>
      </div>
  </div>
</template>

<script>
import seach from "../components/W_seach"
import crosstalkbanner from "../components/W_crosstalkbanner"
import crosstalknav from "../components/W_crosstalknav"
import yue from "../components/W_yue"
import myfooter from "../components/W_footer"
export default {
    name:"crosstalk",
    components:{
        seach,crosstalkbanner,crosstalknav,yue,myfooter
    }
}
</script>

<style>
.app{
  background-color: #f6f6f6;

}
.top_box{
  position: fixed;
  left:0;
  top:0;
  z-index: 100;
  width: 100%;
  background-color:white;
}

.center_box{
  margin-top: 1.2rem;
  margin-bottom:0.75rem; 
  
}

.bottom_box{
  position: fixed;
  bottom: 0rem;
  left:0;
  width:100%;
  background-color: white;
}
</style>