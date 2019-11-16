<template>
   <div id="app" class="container"> 
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          router
          default-active="2"
          class=" nav-left"
          @open="handleOpen"
          @close="handleClose"
          background-color="#393d49">
          <img src="http://www.chawo.com/wap/images/chawo-logo.png" alt="" style="margin:20px 0 20px 100px ">
          <h2>后台管理系统</h2>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group v-for="item in goodmanagement" :key="item.name">
              <el-menu-item :index="item.path">{{item.text}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group v-for="item in usermanagement" :key="item.name">
                <el-menu-item :index="item.path">{{item.text}}</el-menu-item>
              </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item-group v-for="item in ordermangement" :key="item.name">
                <el-menu-item :index="item.path">{{item.text}}</el-menu-item>
              </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </el-col>
      
      <el-col>
        <div class="grid-content bg-purple-dark">
          <span>首页</span>
        </div>
      </el-col>
      <el-col><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row> 

    <main class="main-warp">
      <a></a>
      <a></a>
      <a></a>
      <a></a>
      <!-- 显示路由组件 -->
      <router-view /> 
    </main>
  </div> 
</template>

<script>


export default {
  name: 'app',
 data(){
   return {
        menu:[{
          name: "home",
          path: "/home",
          text: "首页",
          icon: "el-icon-s-home"
        },
        {
          name: "login",
          path: "/login",
          text: "登录",
          icon: "el-icon-menu"
        }],
      goodmanagement:[   {
          name: "goodslist",
          path: "/goodslist",
          text: "商品列表",
          icon: "el-icon-menu"
        },
       {
          name: "goodsclassify",
          path: "/goodsclassify",
          text: "商品分类",
          icon: "el-icon-menu"
        }
        ,
        {
          name: "addgood",
          path: "/addgood",
          text: "添加商品",
          icon: "el-icon-menu"
        }],
         usermanagement:[{
          name: "userlist",
          path: "/userlist",
          text: "管理员列表",
          icon: "el-icon-menu"
        }
        ,
        {
          name: "addname",
          path: "/addname",
          text: "添加管理员",
          icon: "el-icon-menu"
        }]
        ,
        ordermangement:[{
          name: "orderlist",
          path: "/orderlist",
          text: "订单管理",
          icon: "el-icon-menu"
        }
        ]
   }
 },
 methods: {
      handleOpen(key, keyPath) {
        window.console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        window.console.log(key, keyPath);
      }
    }
}
</script>

<style>
body{
  /* overflow: hidden; */
}
*{
  margin: 0;
  padding: 0;
}
.nav-left{
  width:300px;
  height: 1110px;
  float: left;
  
}
.el-submenu {
    margin-left: 60px;
}
h2{
  text-align: center;
  color: aliceblue;
}
.el-submenu__title{
  font-size: 22px
}
.el-submenu .el-menu-item {
    height: 39px;
    line-height: 40px;
    padding: 0 45px;
    min-width: 200px;
    margin-left: 20px;
    font: 18px
}
.el-submenu span{
  font: 20px;
  color: aliceblue;
}
.el-menu-item{
  color: aliceblue;
}
.el-submenu .el-submenu__icon-arrow{
  right: 80px
}
.el-col-12{
  width: 0;
  float: left;
}
.el-col-24{
  width: 1500px;
  float: left;
  height: 52px;
  margin-left: 300px;
  line-height: 52px;
  border-bottom:2px solid #f2f2f2;
  border-right:2px solid #f2f2f2
}

.main-warp{
  width: 1450px;
  height: 956px;
  position: absolute;;
  left: 300px;
  top: 104px;
  border: 25px solid #f2f2f2;
  /* background: rebeccapurple */
  }
  .main-warp a{
    display: inline-block;
    width: 25px;
    height: 25px;
    background: #195
  }
  .main-warp a:nth-child(1){
    position: absolute;
    left: -25px;
    top: -25px;
  }
  .main-warp a:nth-child(2){
    position: absolute;
    right:-25px;
    top: -25px;
  }
  .main-warp a:nth-child(3){
    position: absolute;
    left:-25px;
    bottom: -25px;
  }
  .main-warp a:nth-child(4){
    position: absolute;
    right:-25px;
    bottom: -25px;
  }
</style>
