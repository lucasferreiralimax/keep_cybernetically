<script>
  import { Router, Link, Route } from "svelte-navigator";
  import HeaderComponent from './components/HeaderComponent.svelte';
  import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Contact from "./pages/Contact.svelte";
  export let name;
</script>

<template lang='pug'>
Router
  HeaderComponent({name})
  main#main
    Route(path="/")
      Home
    Route(path="about")
      About
    Route(path="contact")
      Contact({name})
</template>

<style lang="stylus">
#main
  box-sizing border-box
  padding 20px
  position relative
  text-align center
  transition .3s
  width 100%
  min-height 100vh
  word-break break-word
  z-index 1
  @media (min-width: 560px)
    transform translateX(70px)
    width calc(100% - 70px)
  &:after
    clear both
    content ''
    display table
</style>
