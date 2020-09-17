<template>
  <div class="box">
    <div class="box-top">
      <Homepage-top-hl />
    </div>
    <div class="box-center">
      <!-- <hr> -->
      <Homepage-banner-hl />
      <!-- <hr/> -->
      <Homepage-list-hl />
      <!-- <hr> -->
      <Homepage-like-hl />
      <!-- <hr> -->
      <Homepage-audio-hl />
      <div class="box-center-vip">
        <Homepage-vip-hl/>
      </div>
    </div>
    <div class="box-bottom">
      <Homepage-bottom-hl />
    </div>
  </div>
</template>

<script>
import HomepageTopHl from "../components/HomepageTopHL";
import HomepageBannerHl from "../components/HomepageBannerHl";
import HomepageListHl from "../components/HomepageListHl";
import HomepageLikeHl from "../components/HomepageLikeHl";
import HomepageAudioHl from "../components/HomepageAudioHl";
import HomepageBottomHl from "../components/HomepageBottomHl";
import HomepageVipHl from "../components/HomepageVipHl";

export default {
  name: "HomepageHl",
  components: {
    HomepageTopHl,
    HomepageBannerHl,
    HomepageListHl,
    HomepageLikeHl,
    HomepageAudioHl,
    HomepageBottomHl,
    HomepageVipHl
  },
};
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
  margin-top: 1.195rem;
  margin-bottom: 0.6rem;
  position: relative;
}
.box-center-vip{
  position: fixed;
  right: 0.2rem;
  bottom: 2rem;
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