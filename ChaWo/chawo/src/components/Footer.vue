<template>
    <div>
        <el-menu
            class="el-menu-dem"
            mode="horizontal"
            background-color="fff"
            text-color="#000"
            router
            >
                <el-menu-item v-for="(item) in menu" :index="item.path" :key="item.name" class="item-f"><i :class="item.icon"></i>{{item.text}}</el-menu-item>                
            </el-menu>

    </div>
</template>
<script>
export default {
    data(){
      return {
          menu: [
        {
          name: "home",
          path: "/home",
          text: "首页",
          icon: "el-icon-s-home"
        },
        {
          name: "list",
          path: "/list",
          text: "列表",
          icon: "el-icon-menu"
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车",
          icon: "el-icon-shopping-cart-2"
        },
        {
          name: "mine",
          path: "/mine",
          text: "我的",
          icon: "el-icon-s-custom"
        }
        ]
    }
},
// methods:{
//     goto(path){
//         this.$router.push(path)
//     }
// }
}
</script>
<style>
    .el-menu-dem{
        border: 1px solid gray;
        display: flex;
        position:fixed;
        left: 0;
        width: 100%;
        height: 60px;
        /* justify-content: space-around; */
        bottom: 0;

    }
    .item-f{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center
        
    }
</style>