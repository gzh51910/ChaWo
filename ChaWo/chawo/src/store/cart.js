import axios from 'axios';

export default {
    // 设置命名空间
    // namespaced: true,
    state: {
        goodslist: []
    },

    getters: {
        totalPrice(state) {
            return state.goodslist.reduce((prev, item) => prev + item.price * item.qty, 0);
        },
    },

    mutations: {
        findcart(state, data) {
            state.goodslist = data;
        },
        removeFromCart(state, id) {
            state.goodslist = state.goodslist.filter(item => item._id != id)
        },

        // 添加到购物车
        addToCart(state, goods) {
            state.goodslist.unshift(goods)
        },

        // 修改数量
        changeQty(state, payload) {
            state.goodslist.forEach(item => {
                if (item.gid === payload.gid) {
                    item.qty = payload.qty;
                }
            })
        }
    },
    actions: {
        async changeQtyAsync(context, { gid, qty }) {
            await axios.patch(`http://121.199.11.112:8011/cart/update/${gid}`, { qty: qty });
            context.commit('changeQty', { gid, qty })
        }
    }
}