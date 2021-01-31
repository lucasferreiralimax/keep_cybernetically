<script>
  import { link } from "svelte-navigator";
  import NavComponent from './NavComponent.svelte';
  export let name;
</script>

<template lang='pug'>
header
  a.logo(href='/' use:link)
    h1 {name}
  NavComponent
</template>

<style lang="stylus">
header
  background #333
  color #fff
  padding-left 80px
  height 60px
  display flex
  align-items center
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index 2
.logo
  user-select none
  color #fff
  h1
    margin 0
    padding 0
    line-height 0
</style>

