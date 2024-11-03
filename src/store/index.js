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
        },
        newTask(state, task) {
            state.tasks.unshift(task);
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

        },

        async storeTasks({commit},title) {

            try{
                const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`,{
                    title,
                    completed: false
                })
                console.log(response);
                commit('newTask', response.data);

                Swal.fire({
                    icon: 'success',
                    title: 'Task created',
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: "top",
                })
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