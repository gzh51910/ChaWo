<template>
   <div id="app"> 
    <el-row class="tac">
    <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  </el-row> 

 </div> 
</template>

<script>
// import Vue from 'vue';
// import {Row, Col,Menu,MenuItem, Badge,Button,Submenu} from 'element-ui';
// Vue.component(Row.name, Row);
// Vue.component(Col.name, Col);
// Vue.component(Menu.name, Menu);
// Vue.component(MenuItem.name, MenuItem);
// Vue.component(Badge.name, Badge);
// Vue.component(Button.name, Button);
// Vue.component(Submenu.name, Submenu);

export default {
  name: 'app',
 data(){
   return {
      menu:[  {
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
