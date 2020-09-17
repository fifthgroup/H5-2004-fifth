<template>
 <div class="box">
     <ul class="ul">
         <li v-for="(book,idx) in books" :key=idx>
             <span class="li1">
                 {{idx+1}}
             </span>
             <img  :src="'/static/'+book.resource_pic" alt="">
             <span class="li2">
                 <h1>{{book.resource_name}}</h1>
                 <p>{{book.resource_intro}}</p>
                 <h3>热度：533153</h3>
             </span>
         </li>
     </ul>
 </div>
</template>

<script>
import axios from "axios";
export default {
    name:"Lxpairight",
    props: ["type"],
  data(){
    return {
      typenames: {  
      },
      books: []
    };
  },
  methods:{
    getBooks(){
        console.log(this.type);
      axios({
          url: 'http://localhost:3000/'+this.type,
          method: "get",
        }).then(res => {
          this.books = res.data;
          console.log(this.books);
        });
    }
  },
  watch:{
    type:function(){
       // 发送请求
      this.getBooks();
    }
  },
  created() {
    console.log("created");
    // 发送请求
    this.getBooks();
  }

}
</script>

<style scoped>
.box{
    width:100%;
    height: 1.4rem;
}
.ul{
    width:100%;
    height: 1.4rem;
}
.ul li{
    display:flex;
    height: 1.4rem;
    justify-content:center;
    align-items:center;
    padding-right:0.1rem;
    border-bottom:1px solid #e8e8e8;
}
.ul li .li1{
    display:inline-block;
    width:0.5rem;
    height: 0.5rem;
    text-align: center;
    line-height:0.5rem;
    font-weight:1000;
     color: #999999;
}
.ul li img{
    width:0.8rem;
    height: 0.8rem;
    margin-right:0.1rem;
}
.ul li .li2 h1{
    font-size:0.17rem;
    margin-bottom:0.05rem;
}
.ul li .li2 h3{
    margin-top:0.1rem;
    font-size:0.135rem;
     color: #999999;
}
.ul li .li2 p{
    font-size:0.135rem;
    color: #999999;
}
</style>