<template>
    <van-tabs v-model="active">
        <van-tab title="排行榜">
            <mianfeimusic/>
        </van-tab>
        <van-tab title="爵士">
             <sirmusic/>
        </van-tab>
        <van-tab title="摇滚">
           <rollmusic/>
        </van-tab>
        <van-tab title="纯音乐"></van-tab>
    </van-tabs>
    
</template>

<script>
import sirmusic from "@/components/W_Sirmusic"
import rollmusic from "@/components/W_rollmusic"
import mianfeimusic from "../components/W_mianfeimusic"
export default {
    name:"musicnav",
    components:{
        rollmusic,mianfeimusic,sirmusic
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