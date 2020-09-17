<template>
    <div class="box">
        <div class="box-top">
            <Video-top-hl/>
        </div>
        <div class="box-center">
            <Video-list-hl/>
        </div>
        <div class="box-bottom">
            <Homepage-bottom-hl/>
        </div>
    </div>
</template>

<script>
import VideoTopHl from "../components/VideoTopHl";
import VideoListHl from "../components/VideoListHl";
import HomepageBottomHl from "../components/HomepageBottomHl";

export default {
    name:"VideoHl",
    // props:["id"],
    components:{
        VideoTopHl,VideoListHl,HomepageBottomHl
    }
}
</script>

<style>
.box-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  z-index: 100;
}
.box-center {
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
}
.box-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  z-index: 100;
}
</style>