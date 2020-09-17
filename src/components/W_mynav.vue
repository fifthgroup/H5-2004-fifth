<template>
    <van-tabs v-model="active">
        <van-tab title="排行榜">
            <news/>
        </van-tab>
        <van-tab title="言情">
            <hot/>
        </van-tab>
        <van-tab title="悬疑">
            
        </van-tab>
        <van-tab title="都市"></van-tab>
    </van-tabs>
    
</template>

<script>
import news from "./W_news"
import hot from "./W_hot"

export default {
    name:"mynav",
    components:{
        news,hot
    },
    data(){
        return{
            active: 0,
        }
    },
    methods:{
        
       
    }
}
</script>

<style scoped>
    /* .box div{
        display:flex;
        align-items:center;
        justify-content:space-evenly;
        padding: 0.075rem;
    }
    .box div span{
        width: 0.8rem;
        height: 0.4rem;
        text-align:center;
        line-height:0.4rem;
        background-color:#edeef0;
        color: black;
        border-radius:0.75rem;
    } */
</style>