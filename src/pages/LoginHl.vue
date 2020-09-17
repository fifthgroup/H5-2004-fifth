<template>
    <div class="box">
        <div class="box-top">
            <Login-return-hl/>
        </div>
        <div class="box-center">
            <Login-title-hl/>
        </div>
        <div class="box-bottom">
            <Login-bottom-hl/>
        </div>
    </div>
</template>

<script>
import LoginReturnHl from "../components/LoginReturnHl";
import LoginTitleHl from "../components/LoginTitleHl";
import LoginBottomHl from "../components/LoginBottomHl";

export default {
    name:"LoginHl",
    // props:["id"]
    components:{
        LoginReturnHl,LoginTitleHl,LoginBottomHl
    }
}
</script>

<style>
 .box{
     position: relative;
 }
 .box-bottom{
     position: absolute;
     bottom: -3.2rem;
     left: 0;
     width: 100%;
     /* background-color: #fff; */
 }
</style>