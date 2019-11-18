<template>
  <div class="main">
    <div class="banner">
      <div class="logo">
        <img
          src="http://www.chawo.com/wap/images/chawo-logo.png"
          style="height: 18px;position: absolute;margin-top: 12px;padding-left: 10px; width: 47.38px !important; "
        />
      </div>
      <div class="header-wrap">
        <a href class="header-inp" style="margin:6px 55px 0 55px">
          <i class="el-icon-search"></i>
          <span class="search-input" id="keyword" placeholder="大益">大益</span>
        </a>
        <i class="el-icon-more" style="right:8px;top:8px; position:absolute; z-index:100"></i>
      </div>
      <el-carousel height="200px" arrow="never" indicator-position="none">
        <el-carousel-item v-for="item in image" :key="item.image">
          <img :src="item.image" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="tablist">
      <el-row class="tab">
        <el-col v-for="(item) in tab" :key="item.name" class="tabitem">
          <el-button :type="item.type" :icon="item.icon" circle></el-button>
          <p style="margin-top:5px">{{item.name}}</p>
        </el-col>
      </el-row>
    </div>
    <div class="title">
      <div class="toutiao" style="float:left;height:100%;padding:0 5px">
        <img src="../assets/toutiao.jpg" alt style="height:100%" />
      </div>
      <!-- <ul style="float:left">
                <li v-for="(item) in tab" :key="item.name" class="titleitem">{{item.name}}</li>
      </ul>-->
      <ul style="float:left;height:50px;width:50%">
        <el-carousel height="50px" direction="vertical" :autoplay="true" indicator-position="none">
          <el-carousel-item
            v-for="(item) in tui"
            :key="item.article_title"
            style="background-color:#fff"
          >
            <li>{{ item.article_title }}</li>
          </el-carousel-item>
        </el-carousel>
      </ul>
    </div>
    <img
      src="//www.chawo.com/data/upload/mobile/special/s0/s0_06102178107647533.jpg"
      alt
      style="width:100%"
    />
    <div>
      <ul style="width:100%;overflow:auto;display:flex;margin:0">
        <li
          v-for="item in Lmove"
          :key="item.goods_id"
          style="width:30%;height:250px;text-align:center;margin:10px 3% 0"
        >
          <img :src="item.goods_image" alt style="width:100px;height:100px" />
          <p style="font-size:12px;text-align:center; margin:0">{{item.goods_name}}</p>
          <p style="font-size:12px;text-align:center; margin:0;color:red">{{item.goods_price}}</p>
          <p style="font-size:12px;text-align:center; margin:0;color:#ccc">
            ￥
            <s>{{item.goods_promotion_price}}</s>
          </p>
        </li>
      </ul>
    </div>
    <div style="width:100%;height:185px;margin-bottom:20px">
      <img :src="title" alt style="width:100%" />
      <div style="width:100%">
        <img v-for="item in list" :key="item.image" :src="item.image" alt style="width:50%" />
      </div>
    </div>

    <div class="list-1" v-for="item in t" :key="item.title">
      <img :src="item.title" alt style="width:100%;height:50px" />
      <ul style="width:100%;height:100%">
        <li
          v-for="item in item.item"
          :key="item.goods_image"
          style="width:50%;height:250px;float:left;text-align:center; position: relative;background:#fff;"
        >
          <img :src="item.goods_image" alt style="width:150px;height:150px;margin-left:3.5%;" />
          <p style="font-size:12px;text-align:left;">{{item.goods_name}}</p>
          <div class="list-bottom">￥{{item.goods_promotion_price}}</div>
        </li>
      </ul>
    </div>

    <div>
      <a>
        <img
          src="http://www.chawo.com/data/upload/mobile/special/s0/s0_06227404716647644.jpg"
          alt
          width="100%"
        />
      </a>
      <div class="foot" style="padding:0 0 0 10px">
        <span>个人中心</span>
        <el-divider direction="vertical"></el-divider>
        <span>注销</span>
        <el-divider direction="vertical"></el-divider>
        <span>反馈</span>
        <el-divider direction="vertical"></el-divider>
        <span>返回顶部</span>
        <hr />
        <ul style="margin-top:10px;float:left" class="diansan">
          <li style="margin-left:100px;float:left">
            <el-button icon="el-icon-mobile-phone" circle></el-button>
          </li>
          <li style="margin-left:60px;float:left">
            <el-button icon="el-icon-s-platform" circle></el-button>
          </li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
import { my } from "../api";
export default {
  components: {
    Footer
  },
  data() {
    return {
      image: [
        {
          image:
            "//www.chawo.com/data/upload/mobile/special/s0/s0_06255994036516341.jpg"
        },
        {
          image:
            "//www.chawo.com/data/upload/mobile/special/s0/s0_06262033735897791.jpg"
        },
        {
          image:
            "//www.chawo.com/data/upload/mobile/special/s0/s0_06260098163961994.jpg"
        },
        {
          image:
            "//www.chawo.com/data/upload/mobile/special/s0/s0_06246363848215431.jpg"
        },
        {
          image:
            "//www.chawo.com/data/upload/mobile/special/s0/s0_06199746067710705.jpg"
        },
        {
          image:
            "//www.chawo.com/data/upload/mobile/special/s0/s0_06199603556722824.jpg"
        },
        {
          image:
            "//www.chawo.com/data/upload/mobile/special/s0/s0_06151392867017369.jpg"
        },
        {
          image:
            "//www.chawo.com/data/upload/mobile/special/s0/s0_06107313877454629.jpg"
        },
        {
          image:
            "//www.chawo.com/data/upload/mobile/special/s0/s0_06136780201780141.jpg"
        }
      ],
      tui: [],
      Lmove: [],
      tab: [
        {
          name: "产品分类",
          icon: "el-icon-s-unfold",
          type: "danger"
        },
        {
          name: "近期新品",
          icon: "el-icon-upload2",
          type: "success"
        },
        {
          name: "限时折扣",
          icon: "el-icon-time",
          type: "primary"
        },
        {
          name: "茶窝秒杀",
          icon: "el-icon-timer",
          type: "info"
        },
        {
          name: "茶窝优选",
          icon: "el-icon-thumb",
          type: "success"
        },
        {
          name: "优惠套餐",
          icon: "el-icon-menu",
          type: "primary"
        },
        {
          name: "中老期茶",
          icon: "el-icon-star-on",
          type: "warning"
        },
        {
          name: "春茶上市",
          icon: "el-icon-shopping-cart-2",
          type: "success"
        },
        {
          name: "积分兑换",
          icon: "el-icon-coin",
          type: "primary"
        },
        {
          name: "签到有礼",
          icon: "el-icon-s-custom",
          type: "danger"
        }
      ],
      title:
        "//www.chawo.com/data/upload/mobile/special/s0/s0_06111652008392456.png",
      list: [],
      t: []
    };
  },
  async created() {
    let data = await my.get("http://localhost:8010/home");
    let d = data.data.data;
    this.list = d[1].item;
    let arr = [];
    for (let i = 2; i < 13; i++) {
      arr.push(d[i]);
    }
    this.t = arr;
    let res = await my.get("/home/li");
    let tli = res.data.data;
    this.tui = tli;
    let r = await my.get("/home/list");
    let lis = r.data.data;
    this.Lmove = lis;
  }
};
</script>
<style>
.content {
  overflow: hidden;
}
main {
  height: 100%;
  margin-bottom: 60px;
  overflow-y: scroll;
}
.banner {
  width: 100%;
}
.logo img {
  z-index: 100;
}
.header-inp {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.9);
  display: block;
  z-index: 100;
  color: grey;
  text-decoration: none;
  width: 75%;
  font-size: 16px;
  height: 30px;
  line-height: 30px;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}
.tab {
  height: 200px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.tablist .tabitem {
  flex: 20%;
  margin-top: 10px;
  font-size: 12px;
  text-align: center;
  color: gray;
}
.title {
  height: 50px;
  overflow: hidden;
  margin-bottom: 10px;
}
.titleitem {
  margin-top: 5px;
}

.list-1 {
  background: #eee;
  width: 100%;
  margin-top: 25px;
  overflow: hidden;
  z-index: -999;
}
.list-bottom {
  width: 100%;
  height: 20px;
  /* background: deepskyblue; */
  position: absolute;
  bottom: 10px;
  color: red;
  text-align: left;
  padding-left: 10px;
}
.foot span {
  margin: 0 15px;
}
</style>