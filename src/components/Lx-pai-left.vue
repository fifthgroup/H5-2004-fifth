<template>
  <ul class="box">
      <li @click="fn(a)">热门</li>
      <li @click="fn(b)">有声书</li>
      <li>相声评书</li>
      <li>儿童</li>
      <li>人文</li>
      <li>历史</li>
      <li>音乐</li>
      <li>教育培训</li>
      <li>外语</li>
      <li>娱乐</li>
      <li>情感生活</li>
      <li>商业财经</li>
      <li>头条</li>
      <li>健康养生</li>
      <li>广播剧</li>
      <li>戏曲</li>
      <li>IT科技</li>
      <li>旅游</li>
      <li>影视</li>
      <li>时尚生活</li>
      <li>汽车</li>
      <li>二次元</li>
  </ul>
</template>

<script>
export default {
    name:"Lxpaileft",
    props:["type"],
     data(){
    return{
      a:"xinre",
      b:"xinyou"
    }
  },
  watch:{
    type:function(){
      console.log("watch:type");
      if(this.type=="changre"){
        this.a="changre",
        this.b="changyou"
      }else{
        this.a="xinre",
        this.b="xinyou"
      }
      
      this.fn(this.type)
    }
  },
  methods:{
    fn(params_type){
      this.$emit("myClick",params_type);
    }
  }

}

</script>

<style scoped>
.box{
    width:100%;
}
li{
    width:100%;
    height: 0.6rem;
    background-color:#f6f7f9;
    font-size:0.15rem;
    text-align: center;
    line-height:0.6rem;
    color:#6d6d6d;
}
</style>