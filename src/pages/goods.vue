<template>
  <div>
  <listofpp :name="name"></listofpp>
  </div>
</template>

<script>
import listofpp from "@/components/listofpp"
export default {
    name: 'goods',
    data(){
      return{
        name:""
      }
    },
   created(){
     this.name = this.$route.params.name;
     console.log(this.name);
   },
    components:{
        listofpp
    }
}
</script>

<style scoped>
div{
  background-color: #f6f6f6;
  
}
</style>