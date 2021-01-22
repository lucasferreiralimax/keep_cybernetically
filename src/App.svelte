<script>
  import HeaderComponent from './components/HeaderComponent.svelte';
  export let name;
</script>

<template lang='pug'>
HeaderComponent({name})
main#main
  h1 Hello {name}!
  p Visit the&nbsp;
    a(href="https://svelte.dev/tutorial") Svelte tutorial
    |  to learn how to build Svelte apps.
</template>

<style lang="stylus">
#main
  text-align center
  padding 20px
  width calc(100% - 70px)
  transform translateX(70px)
  transition .3s
  word-break break-word
  box-sizing border-box
h1
  color #ff3e00
  text-transform uppercase
  font-size 4em
  font-weight 100
</style>
