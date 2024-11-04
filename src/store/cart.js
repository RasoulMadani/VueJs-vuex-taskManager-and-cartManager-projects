import Swal from "sweetalert2";
import {defineStore} from "pinia";
function updateLocalStorage(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}
export const useCartStore = defineStore("cart",{
    state: ()=>{
        return {
            cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
        }
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
    actions: {
        addToCart( product) {
            const item = this.cart.find(p=>p.id === product.id);
            if(!item){
                this.cart.push({
                    ...product,
                    quantity:1
                });
            }else{
                item.quantity++;
            }
            updateLocalStorage(this.cart);


            Swal.fire({
                icon: 'success',
                title: 'Product Added',
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: "top",
            })
        },
        increment(id) {
            const item = this.cart.find(p=>p.id === id);
            if(item){
                item.quantity++;
            }
            updateLocalStorage(this.cart);
            Swal.fire({
                icon: 'success',
                title: 'Product Update',
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: "top",
            })
        },
        decrement(id) {
            const item = this.cart.find(p=>p.id === id);
            if(item){
                if(item.quantity > 1){
                    item.quantity--;
                }
            }
            updateLocalStorage(this.cart);
            Swal.fire({
                icon: 'success',
                title: 'Product Update',
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: "top",
            })
        },
        removeFromCart( id) {
            this.cart = this.cart.filter(cart=>cart.id !== id);
            updateLocalStorage(this.cart);
            Swal.fire({
                icon: 'warning',
                title: 'Product Deleted',
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: "top",
            })
        },
        clearCart() {
            this.cart = [];
            updateLocalStorage(this.cart);
            Swal.fire({
                icon: 'warning',
                title: 'Cart Empty',
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: "top",
            })
        }
    }
})