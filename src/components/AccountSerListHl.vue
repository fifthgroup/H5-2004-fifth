<template>
  <div class="box_wrap">
    <div class="box">
      <p class="title">{{this.type}}</p>
      <ul class="list">
        <li v-for="(item,idx) in accountList" :key="idx">
          <img :src="'/static/'+item.resource_pic" />
          <p>{{item.resource_name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AccountSerList",
  props: ["type"],
  data() {
    return {
      typenames: {
      },
      accountList: [],
    };
  },
  methods: {
    getAccountList() {
      axios({
       
        url: "http://localhost:3000/accountList",
        params: {
          type: this.type,
        },
      }).then((res) => {
         console.log(this.type);
        this.accountList = res.data[0].data;
        console.log(this.accountList);
      });
    },
  },
  created() {
    this.getAccountList();
  },
  //   created() {
  //     axios({
  //       url: "/accountList",
  //     }).then((res) => {
  //       this.accountList = res.data;
  //     });
  //   }
};
</script>

<style scoped>
.box_wrap {
  padding: 0 0.2rem;
}
.box {
  padding: 0.2rem 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.15rem;
  box-shadow: 0 0 0.08rem #ccc;
  margin-bottom: 0.125rem;
  background-color:#fff;

}
.box .title {
  font-size: 0.15rem;
  color: #444341;
}
.box .list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;

}
.box .list li {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 0.8rem;
}
.box .list li img {
  width: 0.3rem;
  height: 0.3rem;
}
.box .list li p {
  font-size: 0.13rem;
  color: #444341;
}
</style>