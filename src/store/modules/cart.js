import Swal from "sweetalert2";
function updateLocalStorage(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}
const cart ={
    namespaced: true,
    state: {
        cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    },
    getters: {
        countCartItems: state => state.cart.length,
        allItems(state){
            return state.cart
        },
        totalAmount(state){
            return state.cart.reduce((total, item) => {
                return total + item.price * item.quantity;
            },0)
        }
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
           updateLocalStorage(state.cart);

        }
    },
    actions: {
        addToCart({commit}, product) {
            console.log(product);
            commit("addToCart", product);
            Swal.fire({
                icon: 'success',
                title: 'Product Added',
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: "top",
            })
        }
    }
}
export default cart;