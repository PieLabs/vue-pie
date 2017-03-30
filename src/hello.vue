<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  props:  { 
    msg: {
    type: String, 
    default: 'hi'}
  }

}
</script>
<style scoped>
h1 {
  color: #42b983;
}
</style>