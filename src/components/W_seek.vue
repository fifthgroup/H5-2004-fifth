<template>
    <div class="app">
        <ul class="box">
            <li class="iconfont icon-zuojiantou" @click="fn"></li>
            <li>
                <input type="text" placeholder="你莫走"/>
                <span class="iconfont icon-fangdajingsousuo"></span>
                <i class="iconfont icon-yuyin"></i>
            </li>
            <router-link to="/goods">搜索</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"wseek",
    methods:{
        fn(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    body{
        background-color:white;
    }
    ul{
        width:100%;
        height: 0.55rem;
        margin-top: 0.2rem;
    }
    li{
        float: left;
        position: relative;
    }
    ul li:nth-child(1){
        /* position: absolute; */
        margin-left: 0.15rem;
        font-size:0.4rem;
    }
    ul li input{
        display:block;
        width:2.5rem;
        height: 0.4rem;
        border-radius:0.2rem;
        border: none;
        background-color:#ccc;
        padding-left: 14%;
        box-sizing: border-box;
    }
    li span{
        position:absolute;
        top: 3%;
        left: 2%;
        font-size: 0.35rem;
    }
    li i{
        position:absolute;
        top: 3%;
        right: 2%;
        font-size: 0.3rem;
        color: #ff4713;
    }
    a{
        color: #ff4713;
        font-size: 0.25rem;
        position:absolute;
        right: 2%;
        top:3%;
    }
</style>