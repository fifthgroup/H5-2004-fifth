<template>
    <div id="app">
        <div class="top_box">
            <seach></seach>
        </div>
        <div class="center_box">
            <musicbanner></musicbanner>
            <musicnav></musicnav>
            <rollmusic/>
        </div>
        <div class="bottom_box">
          <myfooter/>
        </div>
    </div>
</template>

<script>
import seach from "../components/W_seach"
import musicbanner from "../components/W_musicbanner"
import rollmusic from "../components/W_rollmusic"
import musicnav from "../components/W_musicnav"
import myfooter from "../components/W_footer"
export default {
    name:"music",
    components:{
        seach,musicbanner,musicnav,myfooter,rollmusic
    }
}
</script>

<style>
#app{
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