<template>
    <div style="background:#eee;">
        <header>
            <div style="background-color:#eee;height:45%;width:100%;padding:0 10px;">
                <i class="el-icon-arrow-left" style="margin:3% 0 0 4%" @click="go('/type')"></i>
                <img src="http://www.chawo.com/wap/images/chawo-logo.png" style="height: 18px;margin-top: 2%;padding-left: 5px; width: 47.38px !important; ">
                <a class="hinp"> <i class="el-icon-search"></i> <span class="search-input" id="keyword" placeholder="大益">大益</span> </a>
                <el-button icon="el-icon-more" circle></el-button>
            </div>
        </header>
        
        <el-carousel :interval="5000">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
          <div style="background:#fff;height:154px;">
                  <p style="color:red;font-size:12px;margin-top:-16px;z-index:999">(编号:260498)</p>
                  <h6 style="margin-left:10px;">2006年八角亭 7540 生茶 357克/饼 单片fzJ</h6>
                  <p style="font-size:12px;color:red;margin-left:10px;">年份中期茶，纯昆明干仓存放，陈化好，口感、性价比高，综合品质靠谱。</p>
                  <p style="margin-left:10px;color:red">￥ 98.00 <s style="color:#ccc;font-size:12px">￥158.00</s></p>
                  <p style="float:right;margin-right:10px;font-size:9px;">量：<b style="font-size:9px;">1128</b>饼&nbsp;&nbsp;库存：<b style="font-size:9px;">0</b></p> 
              <div slot="header" class="clearfix" style="width:100%;margin-top:22px;">
                    <span style="margin-left:10px;">已选</span>
                    <el-button style="float: right; padding: 3px 0;margin-right:10px;" type="text" icon="el-icon-arrow-right"></el-button>
                </div>
            </div>
            <div style="background:#fff;height:280px;margin-top:10px">
           
                <div slot="header" class="clearfix" style="margin-bottom:5px;">
                    <span style="margin-left:10px;">商品评价</span>&nbsp;&nbsp;<span style="color:red;">好评率96%</span>
                    <el-button style="float: right; padding: 3px 0;margin-right:10px;" type="text">（60人评论）<i class="el-icon-arrow-right"></i></el-button>
                </div>
                <hr>
                <div class="block" style="margin:10px">
                <el-rate v-model="value1"></el-rate><span style="float: right; margin-top:-20px;color:#ccc" >@*** 2019-11-15</span>
                <span class="demonstration">好评</span>
                </div>
                 <hr>
                <div class="block" style="margin:10px">
                <el-rate v-model="value1"></el-rate><span style="float: right; margin-top:-20px;color:#ccc" >公*** 2019-11-14</span>
                <span class="demonstration">好评</span>
                </div>
                 <hr>
                <div class="block" style="margin:10px">
                <el-rate v-model="value1"></el-rate><span style="float: right; margin-top:-20px;color:#ccc" >da*** 2019-11-14</span>
                <span class="demonstration">好评</span>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        value1: true,
        value2: true,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      }
    }
  }

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
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    span{
        font-size: 12px;
    }
</style>