<template>
    
        <main class="main">
            <div class="banner">
                <div class="logo"><img src="http://www.chawo.com/wap/images/chawo-logo.png" style="height: 18px;position: absolute;margin-top: 12px;padding-left: 10px; width: 47.38px !important; "></div>
                <div class="header-wrap">
                    <a href="" class="header-inp" style="margin:6px 55px 0 55px"> <i class="el-icon-search"></i> <span class="search-input" id="keyword" placeholder="大益">大益</span> </a>
                    <i class="el-icon-plus" style="right:3%;top:1.5%; position:absolute; z-index:100"></i>
                </div>
                <el-carousel height="200px" arrow="never"  indicator-position="none">
                    <el-carousel-item v-for="item in image" :key="item.image">
                        <img :src="item.image" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="tablist">
                <el-row class="tab">
                    <el-col  v-for="(item) in tab" :key="item.name" class="tabitem"><el-button type="primary" :icon="item.icon" circle></el-button><p style="margin-top:5px">{{item.name}}</p></el-col>
                </el-row>
            </div>
            <div class="title">
                <div class="toutiao" style="float:left;height:100%;padding:0 5px" >
                    <img src="../assets/toutiao.jpg" alt="" style="height:100%">
                </div>
                <!-- <ul style="float:left">
                    <li v-for="(item) in tab" :key="item.name" class="titleitem">{{item.name}}</li>
                </ul> -->
                <ul style="float:left;height:50px;width:50%">
                    <el-carousel height="50px" direction="vertical"  :autoplay="true">
                        <el-carousel-item v-for="(item) in tab" :key="item.name">
                        <li>{{ item.name }}</li>
                        </el-carousel-item>
                    </el-carousel>
                </ul>
            </div>
            <img src="//www.chawo.com/data/upload/mobile/special/s0/s0_06102178107647533.jpg" alt="" style="width:100%">
            <div style="width:100%">
                <img :src="title" alt="" style="width:100%">
                <div style="width:100%">
                    <img v-for="item in list" :key="item.image" :src="item.image" alt="" style="width:40%">
                </div>
            </div>
            <Footer/>
        </main>
         
</template>
<script>
import Footer from '../components/Footer.vue';
export default {
    components:{
       Footer 

    },
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
            ],
            tab:[{
                "name": "产品分类",
                "icon": "el-icon-edit"
            },
            {
                "name": "近期新品",
                "icon": "el-icon-edit"
            },
            {
                "name": "限时折扣",
                "icon": "el-icon-edit"
            },
            {
                "name": "茶窝秒杀",
                "icon": "el-icon-edit"
            },
            {
                "name": "茶窝优选",
                "icon": "el-icon-edit"
            },
            {
                "name": "优惠套餐",
                "icon": "el-icon-edit"
            },
            {
                "name": "中老期茶",
                "icon": "el-icon-edit"
            },
            {
                "name": "春茶上市",
                "icon": "el-icon-edit"
            },
            {
                "name": "积分兑换",
                "icon": "el-icon-edit"
            },
            {
                "name": "签到有礼",
                "icon": "el-icon-edit"
            }
        ],
        title: "//www.chawo.com/data/upload/mobile/special/s0/s0_06111652008392456.png",
        list:[{
                "image": "//www.chawo.com/data/upload/mobile/special/s0/s0_06227407008969805.png",
                "type": "url",
                "data": "http://www.chawo.com/wap/tmpl/tag.html"
            },
            {
                "image": "//www.chawo.com/data/upload/mobile/special/s0/s0_06227408008185256.png",
                "type": "url",
                "data": "http://www.chawo.com/wap/tmpl/product_list.html?key=4&order=2"
            },
            {
                "image": "//www.chawo.com/data/upload/mobile/special/s0/s0_06227407381510749.png",
                "type": "url",
                "data": "http://www.chawo.com/wap/activity.html?id=12"
            },
            {
                "image": "//www.chawo.com/data/upload/mobile/special/s0/s0_06227407852783348.png",
                "type": "url",
                "data": "http://www.chawo.com/wap/activity.html?id=5"
            },
            {
                "image": "//www.chawo.com/data/upload/mobile/special/s0/s0_06258443878200087.png",
                "type": "url",
                "data": "http://www.chawo.com/wap/auction/",
                "order": "5"
            },
            {
                "image": "//www.chawo.com/data/upload/mobile/special/s0/s0_06258444048228833.png",
                "type": "url",
                "data": "https://mp.weixin.qq.com/mp/homepage?__biz=MzAwODA2OTExNQ==&hid=1&sn=1daf87589b64fc99d7da044bcc1670ac",
                "order": "6"
            }
        ]     
      }
    }
    // created(){
    //      this.$axios.get('http://localhost:8010/miaosha',{

    //      }).then(({data})=>{
    //         this.list=data;
    //      })

    //      }
}

</script>
<style>
 .content{
     
     overflow: hidden;
  }
  main{
      height: 100%;
      margin-bottom:60px;
      overflow-y: scroll;
  }
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
     width:75%;
     font-size: 16px;
     height: 30px;
     line-height: 30px;
}
.el-carousel__item img {
    width: 100%;
    height: 100%;
}
.tab{
    height: 200px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.tablist .tabitem{
    flex: 20%;
    margin-top: 10px;
    font-size: 12px;
    text-align: center;
    color: gray;
}
.title{
    height: 50px;
    overflow: hidden;
    margin-bottom: 10px;
}
.titleitem{
    margin-top: 5px;
}
  /* .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  } */
</style>