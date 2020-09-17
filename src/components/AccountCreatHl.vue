<template>
    <div class="box_wrap">
        <div class="box">
            <p class="title">创作服务</p>
            <ul class="box_center">
                <li>
                    <span class="iconfont icon-yuyin- icon01"></span>
                    <p>我要录音</p>
                </li>
                <li>
                     <span class="iconfont icon-video  icon02"></span>
                    <p>我要直播</p>
                </li>
                                <li>
                     <span class="iconfont icon-zhuanjiguangpan  icon03"></span>
                    <p>我的作品</p>
                </li>
                                <li>
                     <span class="iconfont icon-dianshi  icon04"></span>
                    <p>创作中心</p>
                </li>
            </ul>
            <div class="box_bottom">
                <img src="../assets/accountImages/account03.jpg" alt="">
                <p>喜马拉雅MCN讲师招募</p>
                <span class="iconfont icon-youjiantou2 icon05"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"AccountCreat"
}
</script>

<style scoped>
@import url(../assets/accountFont/iconfont.css);

.box_wrap{
    padding: 0 0.2rem;
    margin-bottom: 0.125rem;
}
.box{
    /* padding: 0.2rem 0 0.1rem; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 0 0.08rem #ccc;
    border-radius: 0.15rem;
}
.title{
    font-size: 0.15rem;
    padding: 0 0.15rem;
    line-height: 0.5rem;
}
.box_center{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.15rem;
    height: 0.75rem;
}
.box_center li{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    
}
.box_center li span{
    font-size: 0.35rem;
    color: #ee8d7a;
}
.box_center li p{
    font-size: 0.125rem;
    color: #999;
}
.box_bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.15rem;
    height: 0.5rem;
    border-top: 0.015rem dashed #ccc;
}
.box_bottom img{
    width: 0.6rem;
    height: 0.175rem;
}
.box_bottom p{
    font-size: 0.135rem;
    color: #5c5c5c;
    margin-left: -0.7rem;
}
.box_bottom .icon05{
    color: #cccccc;
    font-weight: bold;
}
</style>