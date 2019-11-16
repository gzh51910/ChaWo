<template>
    <div>
        <header style="height: 100px;position:fixed;top:0;left:0;width:100%;z-index:100">
            <div style="background-color:#eee;height:45%;width:100%;padding:0 10px;">
                <i class="el-icon-arrow-left" style="margin:3% 0 0 4%" @click="go('/type')"></i>
                <img src="http://www.chawo.com/wap/images/chawo-logo.png" style="height: 18px;margin-top: 2%;padding-left: 5px; width: 47.38px !important; ">
                <a class="hinp"> <i class="el-icon-search"></i> <span class="search-input" id="keyword" placeholder="大益">大益</span> </a>
                <i class="el-icon-more" style="right:4%;top:10%; position:absolute"></i>
            </div>
            <div class="goods-search-list-nav">
                <ul id="nav_ul">
                    <li>
                        <el-dropdown trigger="click">
                            <span class="el-dropdown-link">
                                综合排序<i class="el-icon-caret-bottom el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item class="ditem" @click.native="getidx(0)">综合排序</el-dropdown-item>
                                <el-dropdown-item class="ditem" @click.native="getidx(-1)">价格从高到低</el-dropdown-item>
                                <el-dropdown-item class="ditem" @click.native="getidx(1)">价格从低到高</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </li>
                    <li><a class="nav-2-4" onclick="init_get_list('2', '4')">新上架</a></li>
                    <li><a class="nav-2-2" onclick="init_get_list('2', '2')">人气</a></li>
                    <li>
                        <el-dropdown trigger="click">
                            <span class="el-dropdown-link">
                                筛选<i class="el-icon-caret-bottom el-icon--right"></i>
                            </span>
                            <el-dropdown-menu>
                            </el-dropdown-menu>
                        </el-dropdown></li>
                </ul>
                <a><i class="el-icon-s-fold"></i></a>
            </div>
            <el-divider></el-divider>
        </header>
        <main style="margin-top:100px">
            <ul style="width:100%">                
                <li v-for="(item) in list" :key="item._id" style="width:100%;margin-bottom:10px;height:130px" @click="godetail('/detail')">
                    <a style="display:block;float:left;width:25%;height:100%">
                        <img :src="item.ImgMin" alt="" style="width:100%;border:0">
                    </a>
                     <div style="float:right;width:65%;height:100%">
                         <p>{{item.Title}}</p>
                         <p style="color:red;margin: 0">￥{{item.Price}}</p>
                         <p style="margin: 0"><i style="font-size:12px;color:#ccc;margin:5px"> 销量</i>{{item.Xl}}</p>
                         <el-divider></el-divider>
                     </div>      
                </li>
            </ul>
        </main>
    </div>
</template>
<script>
import { my } from '../api'
export default {
    
    data(){
        return{
            sort:0,
            allist:[],
            list:[],
            revlist:[],
            l:[]
            
        }
    },
    async created(){
        // getList(),clickNextPage() 
        // console.log()
        let tname=this.$route.query.name;
        // console.log(tname);
        let {data}=await my.get('/goods',{
            name:tname
            }
        )
        this.list=data.data;
        this.allist=data.data;
        this.l=data.data;
        // console.log(this.allist);
        // console.log(this.list) 
        
    },
    methods:{
        compareup(prop) {
            return function (obj1, obj2) {
                var val1 = obj1[prop];
                var val2 = obj2[prop];
                if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
                    val1 = Number(val1);
                    val2 = Number(val2);
                }
                if (val1 < val2) {
                    return -1;
                } else if (val1 > val2) {
                    return 1;
                } else {
                    return 0;
                }            
            } 
        },
        getidx(idx){
           if(idx===1){
               this.list=this.l.sort(this.compareup("Price"));
           }else if(idx===-1){
               this.revlist=this.l.sort(this.compareup("Price"));
               this.list=this.revlist.reverse();
           }
        },
        go(path){
            this.$router.push(path)
        },
        godetail(val){
            this.$router.push(val)
        }
    }
    // async agetList(){ 
        
    //     })

        // this.$http.jsonp({ //调用接口 
        //  data: data, method: 'POST', url: url.getHouseList, emulateJSON: true, }).then(function (res) { 
        // //接口返回数据 
        // this.resultlist = res.data.result data.page++ }) 
        // $(window).on("scroll", function () { 
        //     //给window绑定scroll触底事件 
        //     if ($(window).scrollTop() + $(window).height() + 1 >= $(document).height()) { $(".nextPage").trigger("click") } }) 
        //     // }
        //      }, clickNextPage: function () { 
        //          //给隐藏div绑定click事件 
        //          this.$http.jsonp({ //调用接口 
        //          data: data, method: 'POST', url: url.getHouseList, emulateJSON: true, }).then(function (res) { //接口返回数据 
        //          var curList = res.data.result if (this.resultlist) { this.resultlist = this.resultlist.concat(curList) data.page++ 
        //     } 
        // })
    
}
</script>
<style>
    .ditem{
        width: 100%
    }
    #nav_ul{
        height: 55%;
        margin: 0;
        width: 93%;
    }
    #nav_ul li{
        width: 25%;
        font-size: 14px;
        text-align: center;
        margin-top: 5px;
        height: 100%;
        float: left;
        padding-top: 3%;
    }
    #nav_ul li .el-dropdown-link{
        font-size: 14px;
        color: red;
    }
    .el-icon-s-fold{
        font-size: 18px;
        margin: 4% 0;
    }
    .el-divider{
        margin: 0;
    }
</style>