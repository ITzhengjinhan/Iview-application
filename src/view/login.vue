<template>
  <h1><button @click="jump">登录</button></h1>
  
 
</template>

<script>
export default {
 methods:{
     jump(){
    
    this.$router.push('/')
     }
 }
};
</script>
<style>

</style>