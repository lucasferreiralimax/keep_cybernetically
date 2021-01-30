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
  text-align center
  padding 20px
  width calc(100% - 70px)
  transform translateX(70px)
  transition .3s
  word-break break-word
  box-sizing border-box
</style>
