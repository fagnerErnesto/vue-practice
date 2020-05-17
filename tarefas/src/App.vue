<template>
	<div id="app">
		<status-bar :percent="percent"/>
		<h1>Tarefas</h1>
		<add-task @taskAdded="addTask"/>
		<todo-list :arrTasks="arrTasks" @taskChanged="toggleTask" @deletedTask="removeTask"/>
	</div>
</template>

<script>
import StatusBar from './components/StatusBar.vue'
import TodoList from './components/TodoList.vue'
import AddTask from './components/AddTask.vue'
export default {
	components:{
		'status-bar': StatusBar,
		'todo-list': TodoList,
		'add-task': AddTask
	},
	data() {
        return {
			arrTasks:[],
			debug:null,
        }
    },
    methods: {
		addTask(task) {
			const sameName = t => t.name === task.name
			const reallyNew = this.arrTasks.filter(sameName) == 0
			this.debug = reallyNew;
			if (reallyNew && task.name !== '') {
				this.arrTasks.push({'name': task.name, completed:false})
			}
		},
		removeTask(id) {
			this.arrTasks.splice(id, 1);
		},
		toggleTask(id) {
			this.debug = id;
			this.arrTasks[id].completed = !this.arrTasks[id].completed
		}

	},
	computed: {
		percent() {
			let completed = this.arrTasks.filter(t => t.completed).length;
			return Math.round(completed / this.arrTasks.length * 100) || 0
		}
	},
	watch: {
		arrTasks: {
			deep: true,
			handler() {
				localStorage.setItem('arrTasks', JSON.stringify(this.arrTasks))
			}
		}
	},
	created() {
		const json = localStorage.getItem('arrTasks')
		const array = JSON.parse(json)
		this.arrTasks = Array.isArray(array) ? array : []
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
