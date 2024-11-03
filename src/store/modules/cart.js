import Swal from "sweetalert2";

const cart ={
    namespaced: true,
    state: {
        cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
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
           localStorage.setItem("cart", JSON.stringify(state.cart));
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