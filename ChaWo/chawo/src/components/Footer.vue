<template>
    <footer class="footer">
       <a v-for="(item) in menu" :key="item.name" class="guide" @click="goto(item.path)">
         <span>
           <i :class="item.icon"></i>
         </span>
         <span>
           {{item.text}}
         </span>
       </a>
    </footer>
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
          name: "type",
          path: "/type",
          text: "分类",
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
  methods:{
      goto(path){
          this.$router.replace(path)
      }
  }
}
</script>
<style>
    .footer {
    border-top:1px soild #e4e4e4;
    position:fixed;
    z-index :100;
    left :0;
    right :0;
    bottom:1px;
    background-color:#fff;
    width:100%;
    height:60px;
    display:flex;
}
.guide{
    display:flex;
    flex:1;
    text-align :center;
    flex-direction:column;
    align-items :center;
    margin:5px;
    color:#999999;
}  
span{
    font-size:12px;
    margin-top:2px;
    margin-bottom:2px;
}
/* .iconfont{
    font-size:22px;
} */
</style>