<template>
  <div v-if="win">
    축하!
  </div>
</template>

<script>
export default {
  name: 'SomethingEvent',
  computed: {
    win () {
      return this.$store.state.count === 10
    }
  }
}
</script>
