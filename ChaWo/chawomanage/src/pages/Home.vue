<template>
    <div>
        <div class="pic">
            <img src="../image/B28913147.jpg" alt="">
        </div>
        <h1 class="center">Hi <span>{{getName}}</span> 欢迎使用茶窝后台管理系统</h1>
    </div>
</template>
<script>
export default {
     computed:{
         getName(){
             return this.$store.state.common.user.name
         }
     }
}
</script>
<style>
.center{
    position: absolute;
    top: 50%;
    left: 35%;
    transform: translateY(-50%)
}
.pic{
    width: 200px;
    position: absolute;
    top: 200px;
    left: 50%;
    margin-left: -100px;
}
</style>