<template>
  <ul class="box ">
     <a href="#"><li>
        <img src="../assets/img/ting/Lt1.jpg"/>
        <p>每日必听</p>
     </li></a>
     <a href="#"><li>
        <img src="../assets/img/ting/Lt2.jpg"/>
        <p>限时免费</p>
     </li></a>
     <a href="#"><li>
        <img src="../assets/img/ting/Lt3.jpg"/>
        <p>音乐歌单</p>
     </li></a>
     <a href="#"><li>
        <img src="../assets/img/ting/Lt4.jpg"/>
        <p>小说剧场</p>
     </li></a>
     <a href="#"><li>
        <img src="../assets/img/ting/Lt5.jpg"/>
        <p>智慧书库</p>
     </li></a>
  </ul>
</template>

<script>
export default {
    name:"Litinglogo"
}
</script>

<style scoped>
.box{
   display:flex;
   height:1.3rem;
   padding:0 10px;
	overflow: auto;
   margin-bottom: 0.1rem;
   align-items: center;
	justify-content: space-between;
   border-bottom:1px solid #e8e8e8;
}
li{
   height: 1.3rem;
   margin: 0 10px 0 0;
   display:flex;
   width:0.8rem;
   align-items: center;
   justify-content:center;
   flex-direction:column;
}
img{
    width:0.6rem;
    height:0.6rem;
    margin-bottom: 10px;
}
a{
   width:25%;
   height: 1.3rem;
   font-size: 15px;
    color:#555555;
}

</style>