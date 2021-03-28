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
  height calc(100vh - 60px)
  overflow auto
  padding 20px
  position fixed
  text-align center
  top 60px
  transition .3s
  width 100%
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
