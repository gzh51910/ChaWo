<template>
  <div style="background:#eee">
      <header style="width:100%;height:200px;background-color:hsl(14, 69%, 70%); position:relative">
          <i class="el-icon-setting" style="margin:10px;font-size:22px"></i>
          <ul style="position:absolute;right:-10px;top:0">
              <li class="m" style="position:absolute;right:10px">
                <i class="el-icon-more" style="font-size:22px"></i>
              </li>
          </ul>
          <div style="color:#fff;border-radius: 20px;background:rgba(193, 5, 250, 0.158);width:120px;height:50px;font-size:18px;text-align:center;line-height:50px;position:absolute;top:70px">签到送积分</div>
          <div style="text-align:center;margin-top:-20px;">
            <el-avatar
            :size="70"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            
            ></el-avatar>
            <p style="color:#fff;text-align:center;">{{user}}</p>
        </div>
         <div style="background:rgba(117, 97, 113, 0.541);width:100%;height:60px;position:absolute;bottom:0">
            <ul style="float:left" class="shoucang">
                <li>
                    0
                    <br />商品收藏
                </li>
                <li>
                    0
                    <br />
                    <p>店铺收藏</p>
                </li>
                <li>
                    <p style="margin:0">
                    <i class="el-icon-bicycle" ></i>
                    </p>
                    <p>足迹</p>
                </li>
            </ul>
        </div>   
      </header>     
    <div style="margin-top:10px;background:#fff;height:106px;">
      <el-button icon="el-icon-tickets" type="text" size="medium" style="margin-left:10px">我的订单</el-button>
      <el-button type="text" size="medium" style="float:right;margin-right:10px">
        查看全部订单
        <i class="el-icon-arrow-right"></i>
      </el-button>

      <ul style="float:left;" class="dingdan">
        <li>
          <i class="el-icon-s-finance"></i>
          <br />待付款
        </li>
        <li>
          <i class="el-icon-suitcase-1"></i>
          <br />待收货
        </li>
        <li>
          <i class="el-icon-truck"></i>
          <br />待自提
        </li>
        <li>
          <i class="el-icon-edit-outline"></i>
          <br />待评价
        </li>
        <li>
          <i class="el-icon-wallet"></i>
          <br />退款/退货
        </li>
        <li>
          <i class="el-icon-coin"></i>
          <br />积分订单
        </li>
      </ul>
    </div>
    <div style="margin-top:10px;background:#fff;height:106px;">
      <el-button icon="el-icon-tickets" type="text" size="medium" style="margin-left:10px">我的财产</el-button>
      <el-button type="text" size="medium" style="float:right;margin-right:10px">
        查看全部财产
        <i class="el-icon-arrow-right"></i>
      </el-button>

      <ul style="float:left" class="dingdan">
        <li>
          <i class="el-icon-s-ticket"></i>
          <br />代金券
        </li>
        <li>
          <i class="el-icon-bank-card"></i>
          <br />红包
        </li>
        <li>
          <i class="el-icon-coin"></i>
          <br />积分
        </li>
      </ul>
    </div>
    <div style="margin-top:10px">
      <el-breadcrumb style="height:40px;background:#fff;padding-top:10px">
        <el-breadcrumb-item>
          <i class="el-icon-map-location" style="margin-left:10px"></i> 收货地址管理
        </el-breadcrumb-item>
        <i class="el-icon-arrow-right" style="float:right;margin-right:10px"></i>
      </el-breadcrumb>
      <el-breadcrumb style="height:40px;background:#fff;padding-top:10px" @click.native="goto('/logouts')">
        <el-breadcrumb-item>
          <i class="el-icon-s-tools" style="margin-left:10px"></i>用户退出
        </el-breadcrumb-item>
        
        <i class="el-icon-arrow-right" style="float:right;margin-right:10px"></i>
      </el-breadcrumb>
    </div>
    <div style="margin-top:10px;background:#fff;height:106px;">
      <ul class="lmenu" style="margin-top:10px;">
        <li>个人中心</li>
        <li>注销</li>
        <li>反馈</li>
        <li>返回顶部</li>
      </ul>
      <ul style="margin-top:10px;float:left" class="diansan">
        <li style="margin-left:100px;float:left">
          <el-button icon="el-icon-mobile-phone" circle></el-button>
        </li>
        <li style="margin-left:60px;float:left">
          <el-button icon="el-icon-s-platform" circle></el-button>
        </li>
      </ul>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Footer from '../components/Footer';
import {mapMutations} from 'vuex';
export default {
      components:{
          Footer
      },
      computed:{
          user(){
           return this.$store.state.common.user._id;
          }
      },
      methods:{
        goto(path){
          this.$router.push(path)
        }
      }
};
</script>
<style>
.shoucang li {
  float: left;
  margin-left: 40px;
  text-align: center;
  color: #fff;
  margin-top: 5px;
}
a {
  color: rgba(193, 5, 250, 0.158);
}
.dingdan li {
  float: left;
  color: #ccc;
  margin-left: 15px;
  font-size: 9px;
  text-align: center;
}

.dingdan {
  width: 100%;
   
}
.lmenu li{
  float: left;
  border-right: 1px solid #ccc;
  /* padding: 0 10px; */
  width: 25%;
  text-align: center
}
.lmenu li:nth-last-child{
  border-right: 0;
}
</style>