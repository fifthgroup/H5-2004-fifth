<template>
<div id="app">
    <div class="top_box">
        <seach></seach>
    </div>
    <div class="center_box">
        <baner></baner>
        <mynav></mynav>
        <suspense/>
    </div>
    <div class="bottom_box">
         <myfooter></myfooter>
    </div>
   
</div>
  
</template>

<script>
import seach from "../components/W_seach"
import baner from "../components/W_baner"
import mynav from "../components/W_mynav"
import suspense from "../components/W_suspense"
import myfooter from "../components/W_footer"
export default {
    name:"novel",
    components:{
        seach,baner,mynav,suspense,myfooter
    }
}
</script>

<style>
#app{
  background-color: #fff;
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