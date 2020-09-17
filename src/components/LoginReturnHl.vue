<template>
  <div class="box">
      <router-link to="/">
          <span class="iconfont icon-zuojiantou icon"></span>
      </router-link>
  </div>
</template>

<script>
export default {
    name:"LoginReturn"
}
</script>

<style scoped>
@import url(../assets/loginFont/iconfont.css);
    .box{
        padding: 0.1rem 0.15rem 0.4rem;
    }
    .box .icon{
        font-size: 0.25rem;
    }
</style>