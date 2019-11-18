<template>
  <div >
    <header
      style="background-color:#eee;position: fixed;top: 0;z-index: 999;width:100%;height:50px"
    >
      <div style="height:45%;width:100%;padding:0 10px;">
        <i class="el-icon-arrow-left" style="margin:3% 0 0 4%" @click="go('/type')"></i>
        <img
          src="http://www.chawo.com/wap/images/chawo-logo.png"
          style="height: 18px;margin-top: 2%;padding-left: 5px; width: 47.38px !important; "
        />
        <i class="el-icon-more"></i>
      </div>
    </header>
    <main class="container" >
      <el-carousel :interval="5000" style="margin-top:50px">
        <el-carousel-item v-for="item in 4" :key="item">
          <img :src="goods.ImgMin" alt />
        </el-carousel-item>
      </el-carousel>
      <div style="background:#fff;height:154px;position:relative;">
        <div class="rr" style="width:100%;height:2px;background-color:#eee;margin-bottom: 10px"></div>
        <!-- <p style="color:red;font-size:12px;margin-top:-16px;z-index:999">(编号:260498)</p> -->
        <h6 style="margin-left:10px;font-size:12px">{{goods.Title}}</h6>
        <p style="font-size:12px;color:red;margin-left:10px;">年份中期茶，纯昆明干仓存放，陈化好，口感、性价比高，综合品质靠谱。</p>
        <p style="margin-left:10px;color:red;font-size:25px">
          ￥ {{goods.Price}}
          <s style="color:#ccc;font-size:12px">￥{{(goods.Price)*0.8}}</s>
        </p>
        <p
          style="float:right;margin-right:10px;font-size:15px;position:absolute;top:110px;z-index:10;right:0"
        >
          销量：
          <b style="font-size:9px;">{{goods.Xl}}</b>&nbsp;&nbsp;库存：
          <b style="font-size:9px;">520</b>
        </p>
        <!-- <div slot="header" class="clearfix" style="width:100%;margin-top:22px;">
                    <span style="margin-left:10px;">已选</span>
                    <el-button style="float: right; padding: 3px 0;margin-right:10px;" type="text" icon="el-icon-arrow-right"></el-button>
        </div>-->
      </div>
      <div style="background:#fff;height:280px;margin-top:10px">
        <div slot="header" class="clearfix" style="margin-bottom:5px;">
          <span style="margin-left:10px;">商品评价</span>&nbsp;&nbsp;
          <span style="color:red;">好评率96%</span>
          <el-button style="float: right; padding: 3px 0;margin-right:10px;" type="text">
            （60人评论）
            <i class="el-icon-arrow-right"></i>
          </el-button>
        </div>
        <hr />
        <div class="block" style="margin:10px">
          <el-rate v-model="value1"></el-rate>
          <span style="float: right; margin-top:-20px;color:#ccc">@*** 2019-11-15</span>
          <span class="demonstration">好评</span>
        </div>
      </div>
    </main>
    <footer style="background-color:#eee;position:fixed;bottom:0;height:50px;width:100%">
      <ul class="flist">
        <li @click="go('/home')">
          <i class="el-icon-house" ></i>首页
        </li>
        <li><i class="el-icon-star-off" style="font-size:16px"></i>收藏</li>
        <li><i class="el-icon-service"></i>客服</li>
        <li @click="go('/cart')">
          <el-badge :value="length" class="item">
            <i class="el-icon-shopping-cart-2"></i>
            购物车
          </el-badge>
        </li>
        <li @click="buynow"><el-button type="warning" size="mini" style="height: 50px;">立即购买</el-button></li>
        <li @click="add2cart"><el-button type="danger" size="small" style="height: 50px;">加入购物车</el-button></li>
      </ul>
    </footer>
  </div>
</template>
<script>
import {my} from '../api'
export default {
  data() {
    return {
      goods: {},
      value1: true,
      value2: true,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"] 
    };
  },
  computed:{
      uid(){
          return this.$store.state.common.user._id;
      },
      length(){
        return this.$store.state.cart.goodslist.length;
      }
  },
  created() {
    this.goods = this.$route.query.val;
  },
  methods: {
    go(path) {
      this.$router.replace(path);
    },
    async add2cart(){
        let uid=this.uid;
        let num=1;
        let check=true;
        let gid=this.goods._id;
        let gname=this.goods.Title;
        let img=this.goods.ImgMin;
        let price=this.goods.Price;
        let {goodslist} = this.$store.state.cart;
        let current = goodslist.filter(item=>item.gid===gid)[0]
        if(current){
            // let qty=current.qty+1;
            let id=current.gid;
          this.$store.commit('changeQty',{gid,qty:current.qty+1})
          await this.$axios.patch(`http://10.3.136.108:8010/cart/update/${id}`,{qty:current.qty+1})
        }else{
            let data=await my.post('/cart/add',{uid,
            gid,
            qty:num,
            gname,
            img,
            price,
            check});
            if(data.status==1){
                alert("添加商品成功")
            }
        }
      },
      buynow(){
        this.add2cart();
        // 并跳转到购物车
        this.$router.push('/cart');
      }
  }
};
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
span {
  font-size: 12px;
}
img {
  margin-top: 0;
}
.flist li {
  float: left;
  line-height: 50px;
  font-size: 12px;
  margin: 0  0 0 0.5%;
}

/* .flist li:nth-child(6){
   float: right;
} */

</style>