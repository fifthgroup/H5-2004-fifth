<template>
   <div class="box">
       <div class="bbb">
            <audio controls="controls" autoplay="autoplay" class="audio">
	<source src="../assets/img/bo/1.mp3" type="audio/mp3"></audio>
       </div>
  
    
    <div class="foot">
        <span class="foot0">
             <img src="../assets/img/dd2.jpg">
        </span>
        <input type="text" placeholder="发表图片评论，你就是热评区最...">
        <span class="foot1">
            <img src="../assets/img/dd3.jpg">
        </span>
        <span class="foot2">
            <img src="../assets/img/dd4.jpg">
        </span>
    </div>
  </div>
</template>

<script>
export default {
    name:"Lxbofoot"
}
</script>

<style scoped>
.box{
    width:100%;
    box-sizing:border-box;

}
.bbb{
     background-color:#f0f1f5;
}
.audio{
    width:100%;
}
.foot{
    width:100%;
    height: 0.6rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: relative;
}
 .foot input{
    width:2.5rem;
    height: 0.4rem;
    border:none;
    padding-left:0.3rem;
    border-radius:0.2rem ;
    background-color:#f0f1f5;
    outline-style: none;
  margin-left:0.15rem ;
  margin-right: 0.1rem;
} 
.foot0{
    position:absolute;
    top:15px;
    left: 20px;
}
.foot0 img{
    width:0.2rem;
    height:0.25rem;
}
.foot1 img{
    width:0.3rem;
    height:0.3rem;
     margin-right: 0.05rem;
}
.foot2 img{
    width:0.3rem;
    height:0.3rem; 
}
</style>