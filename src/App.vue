<template>
<!--  <navigate></navigate>-->
  <router-view></router-view>
</template>

<script>
  import navigation from "./components/Navigation";
  export default {
    components:{
      'navigate':navigation
    }
  }
</script>

<style>
  body{
    font-family: Garuda,serif;
  }

</style>
