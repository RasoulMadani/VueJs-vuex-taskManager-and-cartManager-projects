import axios from "axios";
import Swal from "sweetalert2";
import {defineStore} from "pinia";

export const useTaskStore = defineStore('task',{
    state: ()=>{
        return {
            tasks: []
        }
    },
    getters: {
        allTasks: state => state.tasks,
    },
    actions: {
        async fetchTasks() {
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
                this.state.tasks = response.data;
            }catch (error){
                Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong',
                    confirmButtonText: 'Ok',
                    cancelButtonText: 'Cancel',
                })
            }

        },
        async filterTasks(limit) {

            try{
                const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
                this.state.tasks = response.data;
            }catch (error){
                Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong',
                    confirmButtonText: 'Ok',
                    cancelButtonText: 'Cancel',
                })
            }

        },

        async storeTasks(title) {

            try{
                const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`,{
                    title,
                    completed: false
                })
                this.state.tasks.unshift(response.data);

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

        },
        async updateTask(task) {

            try{
                const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`,{
                    id: task.id,
                    title: task.title,
                    completed: !task.completed,
                })
                const index = this.state.tasks.findIndex(task => task.id === response.data.id);
                if (index > -1) {
                    this.state.tasks.splice(index,1,response.data);
                }

                Swal.fire({
                    icon: 'success',
                    title: 'Task updated',
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

        },

        async deleteTask(id) {
            try{
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
                this.state.tasks = this.state.tasks.filter(task => task.id !== id);

                Swal.fire({
                    icon: 'warning',
                    title: 'Task deleted',
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
});