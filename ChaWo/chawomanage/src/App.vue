<template>
   <div id="app" class="container"> 
     <!-- 根据state仓库信息  判断管理员是否登录   如果没有登录  就跳转到登录页面-->
     <Login v-if="admin==false"> </Login>
     <!-- 否则跳转到主页 -->
     <Main v-else/>
  </div> 
</template>

<script>
import Login from "./pages/Login";
import Main from './pages/MainPage';
export default {
  name: 'app',
  components:{
    Login,
    Main
  }, 
  computed:{
      admin(){
        // 获取用户信息
        let name=this.$store.state.common.user.name;
        if(name){
          // 如果已经登录store会有用户信息 
          return true
        }else{
          return false
        }
       }
   },
}
</script>

<style>
</style>
