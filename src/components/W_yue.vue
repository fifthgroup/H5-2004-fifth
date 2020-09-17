<template>
     <div class="box">
      <div class="title">岳云鹏专场</div>
      <ul>
         <li v-for="(book,v) in books" :key="v">
                <img :src="'http://47.96.140.89:8080/ssm-1.0-SNAPSHOT'+book.resource_pic">
                <p>{{book.resource_name}}</p>
            </li>
      </ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name:"yue",
    data(){
        return{
            books:[]
        }
    },
    created(){
        axios({
            url:"/ssm-1.0-SNAPSHOT/resource/findByResource_id/?findByResource_id=18",
            method:"get"
        }).then((res)=>{
            this.books=res.data;
            // console.log(this.books)
        })
    }
}
</script>

<style scoped>
.box{
        width:90%;
        height: 4rem;
        background-color: white;
        margin: 0 auto;
        margin-top:0.1rem;
        margin-bottom: 0.1rem;
        border-radius: 0.05rem;
        position: relative;
    }
    .box .title{
        font-size:0.25rem;
        position: absolute;
        left: 0.1rem;
        top: 0.1rem;
    }
    .box ul li{
        float: left;
        width:30%;
        height: 1.3rem;
        margin-top: 0.5rem;
        background-color:red;
        margin-left: 0.1rem;
    }
    img{
        width: 100%;
        height: 100%;
    }
    p {
        text-align: center;
        height: 0.15rem;
        line-height: 0.15rem;
    }
</style>