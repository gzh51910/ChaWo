<template>
  <div>
    <div style="background-color:#eee;height:45%;width:100%;padding:0 10px;position:relative">
      <i class="el-icon-arrow-left" style="margin:3% 0 0 4%" @click="go('/mines')"></i>
      <img
        src="http://www.chawo.com/wap/images/chawo-logo.png"
        style="height: 18px;margin-top: 1%;margin-left:20%; width: 47.38px !important; "
      />
      <span style="font-size:18px">用户设置</span>
      <i class="el-icon-more" style="right:4%;top:10%; position:absolute"></i>
    </div>
    <div class="nctouch-main-layout">
      <ul class="nctouch-default-list">
        <li>
          <h4>登录密码<i class="el-icon-arrow-right" style="float:right;margin-right:10px"></i></h4>
          <h6>
            建议您定期更改密码以保护账户安全
          </h6>
        </li>
        <li>
          <h4>手机验证</h4>
          <h6>
            若您的手机已丢失或停用，请立即修改更换
            <i class="el-icon-arrow-right" style="float:right;margin-right:10px"></i>
          </h6>
          <span class="tip" id="mobile_value">{{phone}}</span>
        </li>
        <li>
          <h4>支付密码</h4>
          <h6>
            建议您设置复杂的支付密码保护账户金额安全
            <i class="el-icon-arrow-right" style="float:right;margin-right:10px"></i>
          </h6>
          <span class="tip" id="paypwd_tips">未设置</span>
        </li>
      </ul>
      <ul class="nctouch-default-list mt5">
        <li>
          <h4>用户反馈<i class="el-icon-arrow-right" style="float:right;margin-right:10px"></i></h4>
          <h6>
            您在使用中遇到的问题与建议可向我们反馈
          </h6>
        </li>
      </ul>
      <ul class="nctouch-default-list mt5">
        <li @click="logout()">
          <h4>
            安全退出
            <i class="el-icon-arrow-right" style="float:right;margin-right:10px"></i>
          </h4>
        </li>
      </ul>
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
       phone(){
           let phone=this.$store.state.common.user.phone;
           return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
        }
    },
  methods: {
    go(path) {
      this.$router.replace(path);
    },
    logout(){
      this.$store.commit('logout');

      // 在需要登录权限的页面退出登录
      // 需要跳转到登录页面
      if(this.$route.meta.requiresAuth){
        this.$router.push({
          name:'logins',
          query:{
            redirectUrl:this.$route.fullPath
          }
        })

      }
    }
  }
  
};
</script>
<style>
.nctouch-main-layout ul li {
  margin: 10px;
  border-bottom: 1px solid #eee;
}
.nctouch-main-layout ul li h4 {
  font-size: 18px;

}
.nctouch-main-layout ul li h6 {
  font-size: 12px;
  color: dimgrey;
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