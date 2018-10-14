<template>
  <div>
    <h1>todos</h1>
    <div>
      <div>
        <button @click="allDone()">All Done</button>
        <input type="text" v-model="inputValue"
        placeholder="What needs to be done?"
        @keyup.enter="enter()">
        <button @click="enter()">enter</button>
      </div>
      <!-- <todo></todo> -->
      <todo-i v-for="(todo, index) in todos" :key="index" :data='todo'>
      </todo-i>
      <div>
        {{todoLength}} item<span v-if="todoLength >1">s</span> left
        <button @click="showAll()" :class="{active: showStatus===0}">All</button>
        <button @click="showActive()" :class="{active: showStatus===1}">Active</button>
        <button @click="showCompleted()" :class="{active: showStatus===2}">Completed</button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoI1 from './TodoI.vue'

export default {
  name: 'todos',
  data () {
    return {
      inputValue: '',
      showStatus: 0
    }
  },
  computed: {
    todos () {
      if (this.showStatus === 0) {
        return this.$store.state.todo.todos
      } else if (this.showStatus === 1) {
        return this.$store.getters.active
      } else if (this.showStatus === 2) {
        return this.$store.getters.done
      }
    },
    todoLength () {
      return this.$store.state.todo.todos.length
    }
  },
  methods: {
    showAll () {
      this.showStatus = 0
    },
    showActive () {
      this.showStatus = 1
    },
    showCompleted () {
      this.showStatus = 2
    },
    enter () {
      this.$store.commit('add', {complete: false, value: this.inputValue})
      this.inputValue = ''
    },
    remove (idx) {
      this.$store.commit('remove', idx)
    },
    allDone () {
      this.$store.commit('allDone')
    }
  },
  components: {
    TodoI1
  }
}
</script>

<style scoped>
.active {
  border: solid 1px red;
}
.valueText {
  min-width: 80%;
}
</style>
