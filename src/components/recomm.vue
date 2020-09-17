<template>
    <div class="app">

        <div class="box">
            <p>推荐搜索</p>
            <div>
                <span>儿歌</span>
                <span>鬼吹灯</span>
                <span>剑来</span>
                <span>未解之谜</span>
            </div>
            <div>
                <span>鬼谷子</span>
                <span>单田芳</span>
                <span>恐怖故事</span>
                <span>岳云鹏</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"recomm"
}
</script>

<style scoped>
    .box{
        width:100%;
        height: 1.5rem;
        /* background-color: aqua; */
    }
    .box p{
        font-size:0.3rem;
        font-weight:bold;
        margin:0.1rem;
    }
    .box div{
        display: flex;
        justify-content:space-between;
        align-items:center;
    }
    span{
        width:20%;
        height: 0.275rem;
        text-align:center;
        line-height:0.275rem;
        border: 1px solid #f6f7f9;
        border-radius:0.175rem;
        background-color:#eaeaea;
        margin-bottom: 0.2rem;
    }
</style>