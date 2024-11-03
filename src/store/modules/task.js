import axios from "axios";
import Swal from "sweetalert2";

const task ={
    namespaced: true,
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
        },
        updateTask(state, updateTask) {
            const index = state.tasks.findIndex(task => task.id === updateTask.id);
            if (index > -1) {
                state.tasks.splice(index,1,updateTask);
            }
        },
        removeTask(state, id) {
            state.tasks = state.tasks.filter(task => task.id !== id);
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

        },
        async updateTask({commit},task) {

            try{
                const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`,{
                    id: task.id,
                    title: task.title,
                    completed: !task.completed,
                })

                commit('updateTask', response.data);

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

        async deleteTask({commit},id) {
            try{
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

                commit('removeTask', id);

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
}
export default task;