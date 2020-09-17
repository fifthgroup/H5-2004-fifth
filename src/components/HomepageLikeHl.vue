<template>
  <div class="box_wrap">
    <div class="box">
      <div class="title">
        <div class="title_left">
          <span class="iconfont icon-yonghu icon01"></span>
          <p class="like">猜你喜欢</p>
        </div>
        <div class="title_right">
          <p class="interest">选择兴趣</p>
          <div class="vertical"></div>
          <p class="more" style="cursor:pointer;">更多</p>
          <span class="iconfont icon-iconfontjiantou3 icon02"></span>
        </div>
      </div>
      <div class="list_wrap">
        <ul class="list">
          
          <li v-for="(item,idx) in likeList" :key="idx"  style="cursor:pointer;">
           <router-link :to="'/liebiao/'+26"> <img :src="'http://47.96.140.89:8080/ssm-1.0-SNAPSHOT'+item.resource_pic" alt />
            <p>{{item.resource_name}}</p> </router-link>
          </li>
         
        </ul>
      </div>
      <div class="btn">
        <span class="iconfont icon-shuaxin1 icon03"></span>
        <p class="resh" @click="change">换一批</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomepageLike",
  data() {
    return {
      likeList: [],
      index: 0,
      // type:"likeList01"
    };
  },
  created() {
    axios({
      url: "/ssm-1.0-SNAPSHOT/resource/findByResource_id/?findByResource_id=22",
    }).then((res) => {
      for(let i=0;i<res.data.data.length/2;i++){
        this.likeList.push(res.data.data[i]);
      }
    });
    this.index++;
  },

    // axios({
    //   url: "/likeList",
    // }).then((res) => {
    //   // res.data = res.data
    //   for (let i = 0; i < res.data.length / 2; i++) {
    //     this.likeList.push(res.data[i]);
    //   }
    //   // console.log(this.likeList);
    // });
    // this.index++;
    
    // axios({
    //   url: "/ssm-1.0-SNAPSHOT/resource/findByResource_id/?findByResource_id=22",
    // }).then((res) => {
    //   // res.data = res.data
    //   console.log(res.data.data);
    //   for (let i = 0; i < res.data.length / 2; i++) {
    //     this.likeList.push(res.data[i]);
    //   }
    //   // console.log(this.likeList);
    // });
    // this.index++;
  
  methods: {
    change() {
      //   console.log("被点击了");
      //  this.type= (this.type=="likeList01"?"likeList02":"likeList01");
      //   console.log(this.type);
      //    axios({
      //   url: "/"+this.type,
      // }).then((res) => {
      //   this.likeList = res.data;
      // });

      if (this.index == 2) {
        this.index = 0;
        this.index++;
        this.likeList = [];

        axios({
          url: "/ssm-1.0-SNAPSHOT/resource/findByResource_id/?findByResource_id=22",
        }).then((res) => {
          // res.data = res.data
          for (let i = 0; i < res.data.data.length / 2; i++) {
            this.likeList.push(res.data.data[i]);
          }
          // console.log(this.likeList);
        });
      } else if (this.index == 1) {
        axios({
          url: "/ssm-1.0-SNAPSHOT/resource/findByResource_id/?findByResource_id=22",
        }).then((res) => {
          this.likeList = [];
          // console.log(this.likeList);
          for (let i = res.data.data.length / 2; i < res.data.data.length; i++) {
            this.likeList.push(res.data.data[i]);
            // console.log(this.likeList);
          }
        });
        this.index++;
      }
    },
  },
};
</script>

<style scoped>
@import url(../assets/font/iconfont.css);

.box_wrap {
  width: 100%;
  background-color: #f6f6f6;
  padding: 0.15rem;
  box-sizing: border-box;
}
.box {
  background-color: #fff;
  border-radius: 0.1rem;
  padding: 0.15rem;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title_left,
.title_right {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.title_left {
  color: #333;
}
.title_left .icon01 {
  font-size: 0.2rem;
  margin-left: 0.025rem;
}
.title_left .like {
  font-size: 0.15rem;
  margin-left: 0.075rem;
}
.title_right {
  font-size: 0.15rem;
}
.title_right .interest {
  color: #e66548;
}
.title_right .vertical {
  width: 0.01rem;
  height: 0.16rem;
  background-color: #b97666;
  border: 0.005rem solid #ffeddd;
  margin: 0 0.1rem;
}
.title_right .more {
  color: #666;
  margin-right: 0.075rem;
}
.title_right .icon02 {
  color: #111;
  font-size: 0.1rem;
}
.list_wrap {
  padding: 0.15rem 0;
}
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.list li {
  width: 30%;
  margin-bottom: 0.1rem;
}
.list li img {
  width: 100%;
}
.list li p {
  font-size: 0.15rem;
  margin-top: 0.1rem;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn .icon03 {
  font-size: 0.175rem;
  color: #ea6346;
  margin-right: 0.075rem;
}
.btn .resh {
  font-size: 0.125rem;
  color: #666;
  cursor: pointer;
}
</style>