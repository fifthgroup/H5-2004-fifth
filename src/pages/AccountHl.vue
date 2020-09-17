<template>
  <div class="box">
    <div class="box-top">
      <Account-top-hl />
    </div>
    <div class="box-center">
      <Account-user-hl />
      <!-- <br> -->
      <Account-vip-hl />
      <!-- <br> -->
      <Account-creat-hl />
      <!-- <hr> -->
      <Account-ser-list-hl type="我的服务"/>
      <Account-ser-list-hl type="必备工具"/>
      <Account-ser-list-hl type="其他服务"/>
      <Account-ser-list-hl type="商务合作与服务"/>
    </div>
    <div class="box-bottom">
      <Homepage-bottom-hl />
    </div>
  </div>
</template>

<script>
import AccountTopHl from "../components/AccountTopHl";
import AccountUserHl from "../components/AccountUserHl";
import AccountVipHl from "../components/AccountVipHl";
import AccountCreatHl from "../components/AccountCreatHl";
import AccountSerListHl from "../components/AccountSerListHl";
import HomepageBottomHl from "../components/HomepageBottomHl";

export default {
  name: "AccountHl",
  components: {
    AccountTopHl,
    AccountUserHl,
    AccountVipHl,
    AccountCreatHl,
    AccountSerListHl,
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
  background-color: #fff;
  box-sizing: border-box;
  z-index: 100;
}
.box-center {
  margin-top: 0.6rem;
  margin-bottom: 0.725rem;
}
.box-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  z-index: 100;
  box-shadow: 0 0 0.025rem #ccc;
}
</style>
