<template>
    <div>
        <header style="background-color:#ccc;padding:0 10px;height: 40px;">
            <div>
                <i class="el-icon-arrow-left" style="margin:3% 0 0 4%"></i>
                <img src="http://www.chawo.com/wap/images/chawo-logo.png" style="height: 18px;margin-top: 2%;padding-left: 5px; width: 47.38px !important; ">
                <a class="hinp"> <i class="el-icon-search"></i> <span class="search-input" id="keyword" placeholder="大益">大益</span> </a>
                <i class="el-icon-more" style="right:4%;top:1.5%; position:absolute"></i>
            </div>
        </header>
        <main>
            <el-row :gutter="20">
                <el-col :span="4">
                    <aside class="bg-purple" style="background-color:#ccc">
                        <a v-for="(item) in Rlist" :key="item.name" class="guide">
                            <span style="width:22px;height:22px">
                                <i class="el-icon-star-off"></i>
                            </span>
                            <span>品牌推荐</span>
                        </a>
                        <a v-for="(item) in Llist" :key="item.name" class="guide">
                            <span style="width:22px;height:22px">
                                <img :src="item.image" alt="" style="width:100%;height:100%">
                            </span>
                            <span>
                            {{item.gc_name}}
                            </span>
                        </a>
                    </aside>
                </el-col>
                <el-col :span="8">
                    <section>

                    </section>
                </el-col>
            </el-row>
            
            
        </main>
    </div>
</template>
<script>
import my from '../api/my.js';
export default {
    data(){
        return{
            Rlist:[],
            Llist:[]
        }
    },
    async created(){
        let {data}=await my.get('/list/L');
        this.Llist=data.data;
        console.log(this.Llist);

        let {result}=await my.get('/list/R');
        this.Rlist=result.data;
        console.log(this.Rlist);
    }
}
</script>
<style>
    .hinp{
    position: absolute;
    top:1%;
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
.green{
        background-color: green;
        width:8px;
        height:8px;
        border-radius:50%;
    }
    .pink{
        background-color: pink;
        width:8px;
        height:8px;
        border-radius:50%;
    }
    .hotpink{
        background-color: hotpink;
        width:8px;
        height:8px;
        border-radius:50%;
    }
    .gray{
        background-color: gray;
        width:8px;
        height:8px;
        border-radius:50%;
    }
    .yellow{
        background-color: yellow;
        width:8px;
        height:8px;
        border-radius:50%;
    }
    .red{
        background-color: red;
        width:8px;
        height:8px;
        border-radius:50%;
    }
    el-icon-arrow-right{
        float:right;
        font-size:18px;
    }
</style>