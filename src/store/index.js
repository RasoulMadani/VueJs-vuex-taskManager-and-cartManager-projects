import {createStore} from "vuex";
import axios from "axios";
import Swal from "sweetalert2";

const store = createStore({
    state: {
        tasks: []
    },
    getters: {
        allTasks: state => state.tasks,
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks;
        }
    },
    actions: {
        async fetchTasks({commit}) {
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
                commit('setTasks', response.data);
            }catch (error){
                Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong',
                    confirmButtonText: 'Ok',
                    cancelButtonText: 'Cancel',
                })
            }

        },
        async filterTasks({commit},limit) {
            console.log(limit);
            try{
                const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
                commit('setTasks', response.data);
            }catch (error){
                Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong',
                    confirmButtonText: 'Ok',
                    cancelButtonText: 'Cancel',
                })
            }

        }
    }
})
export default store;