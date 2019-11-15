<template>
    <div>
        <dl>
            <dd v-for="(item) in tuijian" :key="item.brand_id">
				<a>
					<img :src="brand_pic">
					<p>{{item.brand_name}}</p>
				</a>
			</dd>
        </dl>
    </div>
</template>

<script>
import {my} from '../api'
export default {
    data(){
        return{
            tuijian:[]
        }
    },
    async created(){
        // let {data}=await my.get('/list');
    }
}
</script>