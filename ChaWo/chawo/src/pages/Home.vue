<template>
    <div class="main">
        <div class="banner">
            <div class="logo"><img src="http://www.chawo.com/wap/images/chawo-logo.png" style="height: 18px;position: absolute;margin-top: 12px;padding-left: 10px; width: 47.38px !important; "></div>
            <div class="header-wrap">
                <a href="" class="header-inp" style="margin:6px 55px 0 55px"> <i class="el-icon-search"></i> <span class="search-input" id="keyword" placeholder="大益">大益</span> </a>
                <i class="el-icon-plus" style="right:8px;top:8px; position:absolute; z-index:100"></i>
            </div>
            <el-carousel height="200px" arrow="never"  indicator-position="none">
                <el-carousel-item v-for="item in image" :key="item.image">
                    <img :src="item.image" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            image:[
               { "image": "//www.chawo.com/data/upload/mobile/special/s0/s0_06255994036516341.jpg" },
            { "image": "//www.chawo.com/data/upload/mobile/special/s0/s0_06262033735897791.jpg" },
            { "image": "//www.chawo.com/data/upload/mobile/special/s0/s0_06260098163961994.jpg" },
            { "image": "//www.chawo.com/data/upload/mobile/special/s0/s0_06246363848215431.jpg" },
            { "image": "//www.chawo.com/data/upload/mobile/special/s0/s0_06199746067710705.jpg" },
            { "image": "//www.chawo.com/data/upload/mobile/special/s0/s0_06199603556722824.jpg" },
            { "image": "//www.chawo.com/data/upload/mobile/special/s0/s0_06151392867017369.jpg" },
            { "image": "//www.chawo.com/data/upload/mobile/special/s0/s0_06107313877454629.jpg" },
            { "image": "//www.chawo.com/data/upload/mobile/special/s0/s0_06136780201780141.jpg" } 
            ]
            
        }
    }
}
</script>
<style>
.banner{
   width: 100%;
}
.logo img{
    z-index: 100;
}
.header-inp{
    position: absolute;
    background-color: rgba(255,255,255,0.9);
    display: block;
     z-index: 100;
     color: grey;
     text-decoration: none;
     width: 265px;
     font-size: 16px;
     height: 30px;
     line-height: 30px;
}
    .el-carousel__item img {
    width: 100%;
    height: 100%;
}

  /* .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  } */
</style>