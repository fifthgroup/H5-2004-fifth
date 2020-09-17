<template>
  <div class="box_wrap">
    <div class="box">
      <p class="title">登录发现更多精彩</p>
      <div class="phone">
        <span>+86</span>
        <span class="iconfont icon-xiajiantou icon01"></span>
        <input type="search" placeholder="请输入手机号" v-model="msg" />
      </div>
      <div class="two">
        <div class="show" @click="show">
          <span class="iconfont icon-duigou icon02" v-show="isShow"></span>
        </div>
        <div class="two_bottom">首次登录会自动创建新账号，且代表同意《用户服务协议》和《隐私协议》</div>
      </div>
      <div class="loginBtn" @click="jump">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginTitle",
  data: function () {
    return {
      isShow: false,
      msg: "",
    };
  },
  methods: {
    show() {
      this.isShow = !this.isShow;
      //   console.log(this.isShow);
    },
    jump() {
      let regu = /^\d{11}$/;
      if (regu.test(this.msg)) {
        if (this.isShow == true) {
          // 这个路径是要改的
          this.$router.push("/zhuce/"+this.msg);
          console.log(this.msg);
        } else {
          alert("未同意隐私协议");
        }
      } else {
        alert("手机号格式错误");
      }
    },
  },
};
</script>


<style scoped>
@import url(../assets/loginFont/iconfont.css);

.box_wrap {
  padding: 0.1rem 0.4rem 0.45rem;
}
.title {
  font-size: 0.25rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
}
.phone {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 0.2rem;
  border-bottom: 0.005rem solid #ccc;
  margin-bottom: 0.15rem;
}
.phone span:nth-child(1) {
  font-size: 0.13rem;
  margin-right: 0.05rem;
}
.phone .icon01 {
  margin-right: 0.05rem;
}
.phone input:nth-child(3) {
  outline: none;
  border: 0;
  border-left: solid 0.005rem #ccc;
  padding-left: 0.05rem;
}
.two {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.15rem;
}
.two .icon02 {
  width: 100%;
  height: 100%;
  background-color: #f86342;
  border-radius: 50%;
  font-size: 0.15rem;
  text-align: center;
  line-height: 0.15rem;
  color: #fff;
  position: absolute;
  left: 0;
  top: 0;
}
.two .show {
  border: 0.005rem solid #ccc;
  border-radius: 50%;
  width: 0.25rem;
  height: 0.15rem;
  text-align: center;
  line-height: 0.15rem;
  position: relative;
  margin-right: 0.05rem;
}
.two .two_bottom {
  font-size: 0.13rem;
  color: #949494;
}
.loginBtn {
  width: 100%;
  height: 0.4rem;
  background-color: #f86342;
  text-align: center;
  line-height: 0.4rem;
  border-radius: 0.2rem;
  color: #fff;
  font-size: 0.15rem;
  font-weight: bold;
}
</style>