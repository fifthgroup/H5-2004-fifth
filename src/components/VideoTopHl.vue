<template>
    <div class="box_wrap">
        <span class="iconfont icon-yonghu icon01"></span>
        <ul class="box">
            <li v-for="(item,idx) in videoList" :key="idx">{{item}}</li>
        </ul>
        <span class="iconfont icon-leimupinleifenleileibie icon02"></span>
    </div>
</template>

<script>
export default {
    name:"VideoTop",
    data:function(){
        return{
            videoList:[
                "关注","推荐","趣配音","小视频"
            ]
        }
    }
}
</script>

<style scoped>
@import url(../assets/videoFont/iconfont.css);

.box_wrap{
    position: relative;
    padding: 0 0.2rem;
    line-height: 0.6rem;
}
.box_wrap span{
    position: absolute;
    font-size: 0.25rem;
    color: #111;
    font-weight:bold;
}
.box{
    padding: 0 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.box li{
    font-size: 0.16rem;
    color: #333;
}
.box :last-child{
    color: #f86342;
    font-size: 0.17rem;
}
.box_wrap .icon02{
    right: 0.17rem;
    top: 0.03rem;
}
</style>