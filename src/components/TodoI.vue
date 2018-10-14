<template>
  <div>
    <input type="checkbox">
    <input type="text" v-model="data.value"
    @keyup.enter="enter()"
    @change="valueChanged(index, data.value)">
    <button @click="remove(index)">x</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['data'],
  methods: {
    statusChanged (idx, value) {
      if (value) {
        this.$store.commit('complete', idx)
      } else {
        this.$store.commit('uncomplete', idx)
      }
    },
    valueChanged (idx, value) {
      this.$store.commit('update', {index: idx, value: value})
    }
  }
}
</script>
