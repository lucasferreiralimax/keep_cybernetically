<script>
  import { Router, Link, Route } from "svelte-navigator";
  import { note_full_store } from './store.js';
  import HeaderComponent from './components/HeaderComponent.svelte';
  import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Contact from "./pages/Contact.svelte";
  import NoteFullComponent from './components/NoteFullComponent.svelte';
  import { menu_store } from './store.js';
  export let name;

  let menu;
  let note_full;

  const unsubscribeMenu= menu_store.subscribe(value => {
		menu = value;
	});

  const unsubscribeNoteFull = note_full_store.subscribe(value => {
		note_full = value;
	});
</script>

<template lang='pug'>
.app(data-testid="app-container")
  Router
    HeaderComponent({name})
    main#main(class:menu='{menu}')
      Route(path="/")
        Home
      Route(path="about")
        About
      Route(path="contact")
        Contact({name})
    NoteFullComponent({note_full})
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
    &.menu
      width calc(100% - 200px)
      transform translateX(200px)
  &:after
    clear both
    content ''
    display table
</style>
