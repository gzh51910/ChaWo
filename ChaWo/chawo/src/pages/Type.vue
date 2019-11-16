<template>
    <div>
        <header style="background-color:#eee;padding:0 10px;height: 40px;position:fixed;top:0;left:0;width:100%;z-index:100">
            <div>
                <i class="el-icon-arrow-left" style="margin:3% 0 0 4%" @click="goto('/home')"></i>
                <img src="http://www.chawo.com/wap/images/chawo-logo.png" style="height: 18px;margin-top: 2%;padding-left: 5px; width: 47.38px !important; ">
                <a class="hinp"> <i class="el-icon-search"></i> <span class="search-input" id="keyword" placeholder="大益">大益</span> </a>
                <i class="el-icon-more" style="right:4%;top:20%; position:absolute"></i>
            </div>
        </header>
        <main style="margin-top:35px;height:100%">
            <aside class="bg-purple" style="background-color:#eee;width:25%;float:left;position:fixed">
                <a class="guide" @click="go(0)">
                    <span style="width:40px;height:40px">
                        <i class="el-icon-star-off"></i>
                    </span>
                    <span>品牌推荐</span>
                </a>
                <a v-for="(item,idx) in Llist" :key="item.gc_id" class="guide" @click="go(idx+1)">
                    <span style="width:40px;height:40px">
                        <img :src="item.image" alt="" style="width:100%;height:100%">
                    </span>
                    <span style="margin-top:20px">
                    {{item.gc_name}}
                    </span>
                </a>
            </aside>
             <section class="container" style="width:75%;float:right;padding-top:10px">
                   <div style="width:100%" v-if="active==0">
                        <dl style="width:100%;margin:0 " > 
                            <dd v-for="(item,id) in tuijian" :key="item.brand_id" style="width:30%;float:left;margin:1.5%" @click="gotolist(id)">
                                <a>
                                    <img :src="item.brand_pic">
                                    <p>{{item.brand_name}}</p>
                                </a>
                            </dd>
                        </dl>
                    </div>
                    <Typethree v-else-if="active==2"/>
                    <Typefour v-else-if="active==3"/>
                    <Typefive v-else-if="active==4"/>
                    <Typesix v-else-if="active==5"/>
                    <Typeeight v-else-if="active==7"/>
             </section>
            
        </main>
    </div>
</template>
<script>
import Typethree from '../components/Typethree.vue';
import Typefour from '../components/Typefour.vue';
import Typefive from '../components/Typefive.vue';
import Typesix from '../components/Typesix.vue';
import Typeeight from '../components/Typeeight.vue';
import {my} from '../api'
export default {
    components:{
        Typethree,
        Typefour,
        Typefive,
        Typesix,
        Typeeight
    },
    data(){
        return{
            active:0,
            tuijian:[],
            Rlist:[],
            Llist:[{
                "gc_id": "1",
                "gc_name": "普洱茶",
                "type_id": "2",
                "type_name": "普洱茶",
                "path":'',
                "image": "//www.chawo.com/data/upload/mobile/category/05513613025301197.png"
            },
            {
                "gc_id": "4",
                "gc_name": "红茶",
                "type_id": "8",
                "type_name": "红茶",
                "path":'/three',
                "image": "//www.chawo.com/data/upload/mobile/category/05513612843900504.png"
            },
            {
                "gc_id": "34",
                "gc_name": "绿茶",
                "type_id": "23",
                "type_name": "滇绿茶",
                "path":'/four',
                "image": "//www.chawo.com/data/upload/mobile/category/05727232007936487.png"
            },
            {
                "gc_id": "30",
                "gc_name": "乌龙茶",
                "type_id": "0",
                "type_name": "乌龙茶",
                "path":'/five',
                "image": "//www.chawo.com/data/upload/mobile/category/05513613392095893.png"
            },
            {
                "gc_id": "58",
                "gc_name": "黑茶",
                "type_id": "30",
                "type_name": "黑茶",
                "path":'/six',
                "image": "//www.chawo.com/data/upload/mobile/category/05513612843900504.png"
            },
            {
                "gc_id": "26",
                "gc_name": "白茶",
                "type_id": "16",
                "type_name": "白茶",
                "path":'',
                "image": "//www.chawo.com/data/upload/mobile/category/05727231876195798.png"
            },
            {
                "gc_id": "20",
                "gc_name": "花草茶",
                "type_id": "26",
                "type_name": "花草茶",
                "path":'/eight',
                "image": "//www.chawo.com/data/upload/mobile/category/05727231406913352.png"   
            }]
      }
    },
    methods:{
        goto(path){
            this.$router.push(path);
        },
        go(id){
            this.active=id;
            if(this.active==1){
                this.$router.push({path:'/list',query:{name:'普洱茶'}});
            }else if(this.active==6){
                this.$router.push({path:'/list',query:{name:'白茶'}});
            }
        },
        gotolist(id){
            this.active=id;
            if(this.active==1){
                this.$router.push({path:'/list',query:{name:'大益',limit:90}});
            }else{
                this.$router.push({path:'/list',query:{name:'中茶',limit:90}});
            }
        }

    },
    async created(){
        let {data}=await my.get('/List/R');
        this.tuijian=data.data;
    }
}
</script>
<style>
    .hinp{
    position: absolute;
    top:10%;
    left:25%;
    padding-left:5px;
    background-color: rgba(255,255,255,0.9);
     color: grey;
     text-decoration: none;
     border-radius:10px;
     width:60%;
     font-size: 16px;
     height: 30px;
     border:1px solid grey;
     line-height: 30px;
    }
.el-icon-star-off{
    font-size: 30px
}
.container .green{
        background-color: green;
        display: inline-block;
        width:8px;
        height:8px;
        margin: 0 10px;
        border-radius:50%;
    }
   .container .pink{
        background-color: pink;
        width:8px;
        height:8px;
        display: inline-block;
        border-radius:50%;
        margin: 0 10px;
    }
   .container .hotpink{
        background-color: hotpink;
        width:8px;
        height:8px;
        display: inline-block;
        margin: 0 10px;
        border-radius:50%;
    }
  .container  .gray{
        background-color: gray;
        width:8px;
        height:8px;
        display: inline-block;
        margin: 0 10px;
        border-radius:50%;
    }
   .container .yellow{
        background-color: yellow;
        width:8px;
        height:8px;
        margin: 0 10px;
        display: inline-block;
        border-radius:50%;
    }
   .container .red{
        background-color: red;
        width:8px;
        height:8px;
        display: inline-block;
        margin: 0 10px;
        border-radius:50%;
    }
   .container .el-icon-arrow-right{
        float:right;
        font-size:18px;
    }
</style>