<template>
  <div class="box">
    <div class="box-top">
      <Listen-top-hl />
    </div>
    <div class="box-center">
      <Listen-nav-hl />
      <!-- <hr> -->
      <Listen-read-hl />
      <!-- <hr> -->
      <Listen-interest-hl />
    </div>
    <div class="box-bottom">
      <Homepage-bottom-hl />
    </div>
  </div>
</template>

<script>
import ListenTopHl from "../components/ListenTopHl";
import ListenNavHl from "../components/ListenNavHl";
import ListenReadHl from "../components/ListenReadHl";
import ListenInterestHl from "../components/ListenInterestHl";
import HomepageBottomHl from "../components/HomepageBottomHl";

export default {
  name: "ListenHl",
  components: {
    ListenTopHl,
    ListenNavHl,
    ListenReadHl,
    ListenInterestHl,
    HomepageBottomHl,
  },
};
</script>

<style>
.box-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 100;
}
.box-center{
    margin-top: 0.5rem;
    margin-bottom: 0.6rem;
}
.box-bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
      box-sizing: border-box;
  z-index: 100;
  background-color: #fff;
  box-shadow: 0 --0.025rem 0.025rem 0 #ccc;
}
</style>