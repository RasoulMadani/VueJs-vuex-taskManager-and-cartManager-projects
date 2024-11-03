
const cart ={
    namespaced: true,
    state: {
        cart: []
    },
    mutations: {
        addToCart(state, product) {
           const item = state.cart.find(p=>p.id === product.id);
           if(!item){
               state.cart.push({
                   ...product,
                   quantity:1
               });
           }else{
               item.quantity++;
           }
            console.log(state.cart);
        }
    },
    actions: {
        addToCart({commit}, product) {
            console.log(product);
            commit("addToCart", product);
        }
    }
}
export default cart;