<template>
  <div class="page-cart">
      <div>
      <el-page-header content="购物车" title="返回" style="height: 2.0rem;padding:0.6rem 0;">
       </el-page-header>
          <i class="el-icon-more"></i>
      </div>
      <div class="checkAll">
           <el-checkbox :indeterminate="isIndeterminate" v-model="selectAll" @change="handleCheckAllChange">茶窝网</el-checkbox>
           <i class="el-icon-hot-water"></i>
      </div>
    <div  v-for="item in goodslist" :key="item.id">
        <el-row :gutter="30" class="row" >
        <el-col :span="3">
            <el-checkbox v-model="checked" class="c_b"></el-checkbox>
        </el-col>
         <el-col :span="5">
            <img :src="item.imgurl" />
        </el-col>
        <el-col :span="13">
            <h4>{{item.name}}</h4>
            <p class="price">
            <span class="price_span">￥{{item.price}}.00</span>
            <el-input-number class="i_n" size="mini" v-model="item.qty" @change="changeQtyAsync(item.id,$event)"></el-input-number>
            </p>
        </el-col>
        <el-col :span="3" style="text-align:right; margin-top:0.5rem">
            <el-button type="danger" icon="el-icon-delete" circle size="mini" @click="removeItem(item.id)"></el-button>
        </el-col>
        </el-row>
        <el-divider></el-divider>
    </div>
    <el-row :gutter="30">
      <el-col :span="12">
        <el-button type="danger" icon="el-icon-delete" size="mini" @click="clearCart">清空购物车</el-button>
      </el-col>
      <el-col :span="12" class="price" style="text-align:right">
        总计：
        <span>{{totalPrice.toFixed(2)}}</span>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {mapState,mapGetters,mapMutations, mapActions} from 'vuex'
import {my} from '../api'
export default {
  data() {
    return {
      checked: true,
    };
  },
  computed:{
    ...mapState({
      goodslist(state){
        return state.cart.goodslist
      }
    }),
    ...mapGetters(['totalPrice'])
  },
  
  methods:{
    ...mapMutations({
      removeItem:'removeFromCart',
      changeQty2:(commit,payload)=>{
        // 其他额外操作
        commit('changQty',payload);
      }
    }),
    ...mapMutations(['clearCart','changeQty']),
    ...mapActions({
      changeQtyAsync(dispatch,id,qty){
        console.log(dispatch,id,qty)
        dispatch('changeQtyAsync',{id,qty})
      }
    })
  }
};
</script>
<style>
img{
    width: 100%;
    margin-top: 0.6rem;
}
.row{
padding:0.6rem 1.0rem 0.6rem 0;
margin-left: 0.5rem;
 height: 4.5rem;
 background: pink;
 margin-bottom: 0.5rem
}
.page-cart h4{
    margin-top:0.5rem;
    font-size: 0.6rem;
    line-height: 0.7rem;
    height: 1.4rem;
}
.price{
    padding: 0;
    margin-top: -0.3rem;
    margin-bottom: 0;
    width: 100%;
}
.i_n{
    position: absolute;
    top: 65%;
    right: 5%
}
.price_span{
    font-weight: bold;
    color: red;
    font-size: 0.6rem;
}
.c_b{
    margin-top: 1.0rem;
    margin-left: 0.5rem
}
.el-page-header{
  background-color: #eeeeee;
  background-image: url(http://www.chawo.com/wap/images/chawo-logo.png);
  background-repeat: no-repeat;
  background-size: 1.5rem;
  background-position: 6.7rem 0.6rem;
}
.el-page-header__content {
    font-size: 0.9rem;
    color: #303133;
    margin-left: 4.7rem;
    font-weight: bold;
}
.el-icon-more{
    position: absolute;
    right: 1.3rem;
    top: 0.8rem;
    z-index: 999;
}
.checkAll{
    width: 100%;
    height:2.0rem;
    padding: 0.4rem 0 0 0.5rem;
}
.el-checkbox__label{
    margin-left: 1.5rem;
    font-size: 0.6rem;
}
.el-icon-hot-water{
     position: absolute;
    left: 1.8rem;
    top: 2.5rem;
    z-index: 999;
}
</style>