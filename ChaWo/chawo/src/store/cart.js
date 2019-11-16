// import axios from 'axios';

// import { my } from '../api';
// import my from '../Api/my'
export default {
    // 设置命名空间
    // namespaced: true,

    state: {
        goodslist: [{
                id: "1",
                name: "2017年中茶 7581 单片装 熟茶 250克/砖",
                price: 5998,
                qty: 10,
                checked: false,
                imgurl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3089410232,3830777459&fm=11&gp=0.jpg",
            },
            {
                id: "2",
                name: "2017年中茶 7581 单片装 熟茶 250克/砖",
                price: 2999,
                qty: 2,
                checked: false,
                imgurl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3089410232,3830777459&fm=11&gp=0.jpg",
            },
            {
                id: "3",
                name: "2017年中茶 7581 单片装 熟茶 250克/砖",
                price: 3999,
                qty: 1,
                checked: false,
                imgurl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3089410232,3830777459&fm=11&gp=0.jpg",
            }
        ]
    },

    getters: {
        totalPrice(state) {
            console.log(6666);
            
console.log(state.goodslist.reduce((prev, item) => prev + item.price * item.qty, 0));

            return state.goodslist.reduce((prev, item) => prev + item.price * item.qty, 0);
        },
    },

    //   mutation的调用方式：store.commit(mutation)
    mutations: {
        // 删除单个商品
        // state:上面的state
        // payload:触发mutation时传入的参数
        removeFromCart(state, id) {
            // state.goodslist.forEach((item,idx)=>{
            //     if(item.id === id){
            //         state.goodslist.splice(idx,1)
            //     }
            // })
            state.goodslist = state.goodslist.filter(item => item.id != id)
        },

        // 清空购物车
        // clearCart(state) {
        //     state.goodslist = []
        // },
        clearCart() {
            // state.goodslist = []
            alert("请勾选确认框")
        },

        // 添加到购物车
        addToCart(state, goods) {
            state.goodslist.unshift(goods)
        },

        // 修改数量
        changeQty(state, payload) {
            state.goodslist.forEach(item => {
                if (item.id === payload.id) {
                    item.qty = payload.qty;
                }
            })
        }
    },

    // actions：间接修改state的方式
    // 触发action: store.dispatch(action)
    // actions: {
    //     // context: 一个类似于store的对象
    //     // payload: 触发action时传入的参数
    //     async changeQtyAsync(context, { id, qty }) {
    //         console.log('context', context);
    //         // 发起ajax请求
    //         // let { data: { data } } = await axios.get(`http://localhost:1910/goods/${id}/kucun`);
    //         // let { data: { data } } = await my.get(`/goods/${id}/kucun`)
    //         // if (qty > data) {
    //         //     qty = data;
    //         // }
    //         // console.log(id, qty, data)
    //         context.commit('changeQty', { id, qty })
    //     }
    // }
}