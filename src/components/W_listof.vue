<template>
    <div class="app">
        <div class="box">
            <img src="../assets/img/111.jpg">
            <ul>
                <li>
                    <span>1</span>
                    <p>米小圈上学记</p>
                </li>
                <li>
                    <span>2</span>
                    <p>郭德纲</p>
                </li>
                <li>
                    <span>3</span>
                    <p>单田芳</p>
                </li>
                <li>
                    <span>4</span>
                    <p>有声的紫襟</p>
                </li>
                <li>
                    <span>5</span>
                    <p>三国演义</p>
                </li>
                <li>
                    <span>6</span>
                    <p>上门龙婿</p>
                </li>
                <li>
                    <span>7</span>
                    <p>猴子警长探案记</p>
                </li>
                <li>
                    <span>8</span>
                    <p>岳云鹏</p>
                </li>
                <li>
                    <span>9</span>
                    <p>特朗普被提名诺贝尔和平奖</p>
                </li>
                <li>
                    <span>10</span>
                    <p>三字经</p>
                </li>
                <li>
                    <span>11</span>
                    <p>鬼故事</p>
                </li>
                <li>
                    <span>12</span>
                    <p>第一炉香</p>
                </li>
                <li>
                    <span>13</span>
                    <p>于谦</p>
                </li>
                <li>
                    <span>14</span>
                    <p>斗罗大陆</p>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    name:"listof"
}
</script>

<style scoped>
    .box{
        width:90%;
        height: 5.79rem;
        margin: 0 auto;
        position: relative;
        
    }
    .box img{
        width:100%;
        height: 100%;
        border-radius: 0.175rem;
        opacity: 0.4;
    }
    .box ul{
        position:absolute;
        top: 0;
        left: 5%;
    }
    .box ul li{
        display:flex;
        margin: 0.1rem 0;
        font-size:0.2rem;
    }
    .box ul li span{
        margin-right: 0.2rem;
        font-style:italic;
        font-size:0.25rem;
    }
    .box ul li:nth-child(1){
        font-size:0.25rem;
        color: tomato;

    }
    .box ul li:nth-child(2){
        font-size:0.23rem;
        color: green;

    }
    .box ul li:nth-child(3){
        font-size:0.21rem;
        color: blueviolet;

    }
</style>