// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Todos from './components/Todos.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const todo = {
  state: {
    id_seq: 0,
    todos: []
  },
  mutations: {
    add (state, todo) {
      todo.id = state.id_seq++
      todo.complete = false
      state.todos.push(todo)
    },
    remove (state, id) {
      const idx = state.todos.findIndex(todo => todo.id === id)
      state.todos.splice(idx, 1)
    },
    update (state, param) {
      state.todos.find(todo => todo.id === param.id).value = param.value
    },
    allDone (state) {
      state.todos = state.todos.map(todo => {
        todo.complete = true
        return todo
      })
    },
    complete (state, id) {
      state.todos.find(todo => todo.id === id).complete = true
    },
    uncomplete (state, id) {
      state.todos.find(todo => todo.id === id).complete = false
    }
  },
  getters: {
    done: (state) => {
      return state.todos.filter(todo => todo.complete)
    },
    active: (state) => {
      return state.todos.filter(todo => !todo.complete)
    }
  }
}

const store = new Vuex.Store({
  modules: {
    todo: todo
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App, Todos
  },
  template: '<div><todos></todos></div>'
})
