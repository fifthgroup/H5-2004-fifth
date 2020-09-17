<template>
    <div class="app">
        <wseek/>
        <recomm/>
        <listof/>
    </div>
</template>

<script>
import wseek from "../components/W_seek"
import recomm from "../components/recomm"
import listof from "../components/W_listof"
export default {
    name:"seek",
    data(){
        return{}
    },
    components:{
        wseek,recomm,listof
    }
}
</script>

<style>
.app{
  background-color: #f6f6f6;
  
}
@import url(../assets/font/iconfont.css);
</style>