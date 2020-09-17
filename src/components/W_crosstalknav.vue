<template>
    <van-tabs v-model="active">
        <van-tab title="郭德纲">
            <xiangsheng/>
        </van-tab>
        <van-tab title="于谦">
            <yuqian/>
        </van-tab>
        <van-tab title="岳云鹏">
            
        </van-tab>
        <van-tab title="单田芳"></van-tab>
    </van-tabs>
    
</template>

<script>
import xiangsheng from "@/components/xiangsheng"
import yuqian from "@/components/W_yuqian"

export default {
    name:"crosstalknav",
    components:{
        xiangsheng,yuqian
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