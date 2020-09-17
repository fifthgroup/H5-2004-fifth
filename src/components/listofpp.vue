<template>
    <div class="app">
        
        <ul>
            <p class="iconfont icon-zuojiantou" @click="fn"></p>
            <li v-for="(v,i) in biao" :key="i">
                <img :src="'http://47.96.140.89:8080/ssm-1.0-SNAPSHOT'+v.resource_pic" >
                
                <p>{{v.resource_name}}</p>
                <h5>全网最好听电台</h5>
                <i class="iconfont icon-erji">55.5万</i>
                <h6 class="iconfont icon-bofang_huaban">110</h6>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios"
export default {
    name:"listofpp",
    props: ["name"],
    methods:{
        fn(){
            this.$router.go(-1)
        }
    },
    data(){
        return{
            biao:[]
        }
    },
    created(){
        axios({
            url:"http://47.96.140.89:8080/ssm-1.0-SNAPSHOT/resource/findByMh?name="+this.name,
            method:"get"
        }).then((res)=>{
            this.biao=res.data.data;
            console.log(this.data)
        })
    }
}
</script>

<style scoped>
@import url(../assets/font1/iconfont.css);
    .icon-zuojiantou{
        font-size:0.4rem;
    }
    ul{
        width:90%;
        height: 6rem;
        /* background-color:white; */
        margin: 0.15rem auto;
    }
     ul li{
         width:90%;
         height: 1.3rem;
        margin-bottom: 0.15rem;
        background-color:white;
        border-radius:0.075rem;
        margin-left: 0.19rem;
        position: relative;
        /* display:flex;
        justify-content: center; */
     }
     img{
         width:1.3rem;
         height: 1.3rem;
         float:left;
     }
     p{
         /* float:right; */
         font-size: 0.2rem;
         margin-top: 0.1rem;
         margin-right: 0.3rem;
     }
     h5{
         width:1rem;
        height: 0.3rem;
        background-color:#f6f6f6;
        float: left;
        margin-top: 0.1rem;
        margin-left:0.4rem;
        text-align:center;
        line-height:0.3rem;
        border-radius:0.055rem;
     }
     i{
         position:absolute;
         bottom: 0.1rem;
         left: 1.4rem;
        color: orange;
     }
     h6{
         position:absolute;
         bottom: 0.1rem;
         left: 2.2rem;
     }
</style>