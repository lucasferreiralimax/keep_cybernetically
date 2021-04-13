<script>
  import { link } from "svelte-navigator";
  import NavComponent from './NavComponent.svelte';
  export let name;
</script>

<template lang='pug'>
header(data-testid="app-header")
  a.logo(href='/' use:link)
    h1 {name}
  NavComponent
</template>

<style lang="stylus">
header
  align-items center
  background #333
  bottom 0
  color #fff
  display flex
  height 60px
  left 0
  padding-left 80px
  position fixed
  right 0
  top 0
  z-index 2
.logo
  color #fff
  user-select none
  h1
    font-size 1rem
    line-height 0
    margin 0
    padding 0
</style>

