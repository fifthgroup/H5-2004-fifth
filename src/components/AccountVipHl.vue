<template>
    <div class="box_wrap">
        <div class="box">
            <div class="box_left">
                <span class="iconfont icon-VIP icon01"></span>
                <p>VIP会员</p>
            </div>
            <div class="box_right">
                <p>买会员，畅听22800+好书好课</p>
                <span class="iconfont icon-youjiantou2 icon02"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"AccountVip"
}
</script>

<style scoped>
@import url(../assets/accountFont/iconfont.css);

.box_wrap{
    padding: 0.2rem 0.2rem;
}
.box{
    width: 100%;
    height: 0.55rem;
    background-color: #f3cba7;
    border-radius: 0.1rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.15rem;
    align-items: center;
    box-sizing: border-box;
}
.box_left{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.box_right{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.box_left .icon01{
    font-size: 0.225rem;
    color: #cd9562;
}
.box_left p{
    font-size: 0.15rem;
    color: #6b3d23;
    font-weight: bold;
}
.box_right p{
    font-size: 0.13rem;
    color: #88593b;
}
.box_right .icon02{
    columns: #b37659;
    font-weight: bold;
}
</style>