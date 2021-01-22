<script>
  import NavComponent from './NavComponent.svelte';
  export let name;
</script>

<template lang='pug'>
header
  h1 {name}
  NavComponent
</template>

<style lang="stylus">
header
  background #333
  color #fff
  padding-left 80px
  height 60px
  h1
    margin 0
    padding 0
</style>

