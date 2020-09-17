<template>
    <div class="box">
        <span class="iconfont icon-xinxi icon01"></span>
        <div class="box_right">
            <span class="iconfont icon-icon-test icon02"></span>
            <span class="iconfont icon-xianxingtubiao_huabanfuben icon03"></span>
        </div>
    </div> 
</template>

<script>
export default {
    name:"AccountTop"
}
</script>

<style scoped>
@import url(../assets/accountFont/iconfont.css);

.box{
    height: 0.6rem;
    display: flex;
    padding: 0 0.25rem 0 0.2rem;
    justify-content: space-between;
    align-items: center;
}
.box_right{
    display: flex;
    align-items: center;
}
.box span{
    color: #333;
}
.box .icon01{
    font-size: 0.25rem;
}
.box .icon02{
    font-size: 0.21rem;
    margin-right: 0.3rem;
}
.box .icon03{
    font-size: 0.3rem;
    font-weight: bold;
}
</style>