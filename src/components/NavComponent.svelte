<script>
  import { onMount } from 'svelte';
  import { link } from "svelte-navigator";
  import { menu_store } from '../store.js';
  let navLinks = [
    {
      'title': 'Home',
      'link': '/',
      'icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 510" width="30px" height="30px" fill="#fff"><path d="M204 471.75v-153h102v153h127.5v-204H510L255 38.25 0 267.75h76.5v204z"/></svg>`
    },
    {
      'title': 'About',
      'link': 'about',
      'icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999" width="30px" height="30px" fill="#fff"><path d="M437.019 74.981C388.667 26.628 324.38 0 256 0 187.62 0 123.332 26.628 74.981 74.98 26.628 123.332 0 187.62 0 256s26.628 132.667 74.981 181.019c48.351 48.352 112.639 74.98 181.019 74.98 68.381 0 132.667-26.628 181.02-74.981C485.371 388.667 512 324.379 512 255.999s-26.629-132.667-74.981-181.018zM96.216 96.216c22.511-22.511 48.938-39.681 77.742-50.888-7.672 9.578-14.851 20.587-21.43 32.969-7.641 14.38-14.234 30.173-19.725 47.042-19.022-3.157-36.647-7.039-52.393-11.595a230.423 230.423 0 0115.806-17.528zm-33.987 43.369c18.417 5.897 39.479 10.87 62.461 14.809-6.4 27.166-10.167 56.399-11.066 86.591H30.536c2.36-36.233 13.242-70.813 31.693-101.4zm-1.635 230.053c-17.455-29.899-27.769-63.481-30.059-98.623h83.146c.982 29.329 4.674 57.731 10.858 84.186-23.454 3.802-45.045 8.649-63.945 14.437zm35.622 46.146a229.917 229.917 0 01-17.831-20.055c16.323-4.526 34.571-8.359 54.214-11.433 5.53 17.103 12.194 33.105 19.928 47.662 7.17 13.493 15.053 25.349 23.51 35.505-29.61-11.183-56.769-28.629-79.821-51.679zm144.768 62.331c-22.808-6.389-44.384-27.217-61.936-60.249-6.139-11.552-11.531-24.155-16.15-37.587 24.73-2.722 51.045-4.331 78.086-4.709v102.545zm0-132.578c-29.988.409-59.217 2.292-86.59 5.507-6.038-24.961-9.671-51.978-10.668-80.028h97.259v74.521zm0-104.553h-97.315c.911-28.834 4.602-56.605 10.828-82.201 27.198 3.4 56.366 5.468 86.487 6.06v76.141zm0-106.176c-27.146-.547-53.403-2.317-77.958-5.205 4.591-13.292 9.941-25.768 16.022-37.215 17.551-33.032 39.128-53.86 61.936-60.249v102.669zm209.733 6.372c17.874 30.193 28.427 64.199 30.749 99.804h-83.088c-.889-29.844-4.584-58.749-10.85-85.647 23.133-3.736 44.456-8.489 63.189-14.157zm-34.934-44.964a230.122 230.122 0 0116.914 18.91c-16.073 4.389-33.972 8.114-53.204 11.112-5.548-17.208-12.243-33.305-20.02-47.941-6.579-12.382-13.758-23.391-21.43-32.969 28.802 11.207 55.23 28.377 77.74 50.888zm-144.767 174.8h97.259c-1.004 28.268-4.686 55.49-10.81 80.612-27.194-3.381-56.349-5.43-86.449-6.006v-74.606zm0-30.032v-76.041c30.005-.394 59.257-2.261 86.656-5.464 6.125 25.403 9.756 52.932 10.659 81.505h-97.315zm-.002-208.845h.001c22.808 6.389 44.384 27.217 61.936 60.249 6.178 11.627 11.601 24.318 16.24 37.848-24.763 2.712-51.108 4.309-78.177 4.674V32.139zm.002 445.976V375.657c27.12.532 53.357 2.286 77.903 5.156-4.579 13.232-9.911 25.654-15.967 37.053-17.552 33.032-39.128 53.86-61.936 60.249zm144.767-62.331c-23.051 23.051-50.21 40.496-79.821 51.678 8.457-10.156 16.34-22.011 23.51-35.504 7.62-14.341 14.198-30.088 19.68-46.906 19.465 3.213 37.473 7.186 53.515 11.859a230.268 230.268 0 01-16.884 18.873zm34.823-44.775c-18.635-5.991-40-11.032-63.326-15.01 6.296-26.68 10.048-55.36 11.041-84.983h83.146c-2.328 35.678-12.918 69.753-30.861 99.993z"/></svg>`
    },
    {
      'title': 'Contact',
      'link': 'contact',
      'icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442 442" width="30px" height="30px" fill="#fff"><path d="M105.4 221c0 9.391-7.609 17-17 17h-34c-9.391 0-17-7.609-17-17s7.609-17 17-17h34c9.392 0 17 7.609 17 17zm0-108.8c0-9.391-7.609-17-17-17h-34c-9.391 0-17 7.609-17 17s7.609 17 17 17h34c9.392 0 17-7.609 17-17zm0 217.601c0-9.393-7.609-17-17-17h-34c-9.391 0-17 7.607-17 17 0 9.391 7.609 17 17 17h34c9.392 0 17-7.61 17-17zM404.6 54.4v333.2c0 30.043-24.357 54.4-54.398 54.4h-238c-30.042 0-54.4-24.357-54.4-54.4v-27.2h30.6c16.871 0 30.6-13.73 30.6-30.6 0-16.871-13.729-30.602-30.6-30.602H57.8v-47.6h30.6c16.871 0 30.6-13.729 30.6-30.6s-13.729-30.6-30.6-30.6H57.8v-47.6h30.6c16.871 0 30.6-13.729 30.6-30.6 0-16.871-13.729-30.6-30.6-30.6H57.8V54.4C57.8 24.358 82.158 0 112.2 0h238c30.042 0 54.4 24.357 54.4 54.4zM188.945 161.255c0 28.968 23.487 52.455 52.455 52.455 28.969 0 52.455-23.487 52.455-52.455s-23.486-52.456-52.455-52.456c-28.967.001-52.455 23.488-52.455 52.456zM323 289.482c0-32.184-26.098-58.283-58.283-58.283H218.09c-32.191 0-58.29 26.1-58.29 58.283V312.8H323v-23.318z"/></svg>`
    },
    {
      'title': 'Github',
      'link': 'https://github.com/lucasferreiralimax/keep_cybernetically',
      'target': '_blank',
      'icon': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="30px" height="30px" fill="#fff"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`
    }
  ];

  let menu;

  const unsubscribeMenu= menu_store.subscribe(value => {
		menu = value;
	});

  function handleMenu() {
    menu_store.set(!menu)
  }

  onMount(() => {
    let nav = document.querySelector('nav')
    let mediaQuery = window.matchMedia('(min-width: 560px)')
    const handleMenuMobile = () => { handleMenu() }

    mediaQuery.addListener(doMenuMobile)

    function doMenuMobile(mediaQuery) {
      if(mediaQuery.matches) {
        nav.removeEventListener('click', handleMenuMobile)
      } else {
        nav.addEventListener('click', handleMenuMobile)
        if(menu) handleMenu()
      }
    }

    doMenuMobile(mediaQuery);
  });
</script>

<template lang='pug'>
button.nav-button(data-testid="app-nav-button" class:active='{menu}' on:click='{handleMenu}' aria-label="menu button")
  | Menu button
  +if('menu')
    svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.76 511.76" width="35px" height="35px")
      path(d="M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048 c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251 l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251 c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165 c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0 c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z")
  +if('!menu')
    svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" width="35px" height="35px")
      path(d="M28 0C12.561 0 0 12.561 0 28s12.561 28 28 28 28-12.561 28-28S43.439 0 28 0zm12 41H16a2 2 0 010-4h24a2 2 0 010 4zm0-11H16a2 2 0 010-4h24a2 2 0 010 4zm0-11H16a2 2 0 010-4h24a2 2 0 010 4z")
nav.nav(data-testid="app-nav" class:active='{menu}')
  +each('navLinks as item')
    +if('item.target')
      a.nav-link(href='{item.link}' target='{item.target}' noroute)
        +if('item.icon')
          +html('item.icon')
        .text {item.title}
    +if('!item.target')
      a.nav-link(href='{item.link}' use:link)
        +if('item.icon')
          +html('item.icon')
        .text {item.title}
.nav-overlay(class:active='{menu}' on:click='{handleMenu}')
</template>

<style lang="stylus">
.nav-button
  -webkit-tap-highlight-color transparent
  background rgba(0,0,0,.1)
  border 0
  cursor pointer
  font-size 0
  height 60px
  left 0
  outline none
  padding 10px
  position absolute
  top 0
  width 70px
  z-index 2
  svg
    fill #fff
.nav
  background #222
  bottom 0
  color #fff
  display flex
  flex-direction column
  left -80px
  min-height 100vh
  position absolute
  top 60px
  transition .3s all
  width 70px
  z-index 2
  @media (max-width: 560px)
    box-shadow 5px 10px 10px rgba(0, 0, 0, .3)
  @media (min-width: 560px)
    left 0
  &.active
    left 0
    width 200px
    .nav-link
      justify-content start
      &:hover
        transform scale(1.1)
    .text
      margin-left 20px
      opacity 1
      transition 1s all

.nav-link
  -webkit-tap-highlight-color transparent
  align-items center
  border-bottom 1px solid #333
  color #fff
  display flex
  padding 10px 20px 10px
  text-decoration none
  transition .4s all
  &:hover
    background #666
    border-radius 0 10px 10px 0
    transform scale(1.2)
  .text
    opacity 0
    pointer-events none
    transition .3s all
    width 0

.nav-overlay
  -webkit-tap-highlight-color transparent
  background rgba(#000, .3)
  bottom 0
  left 0
  min-height calc(100vh - 60px)
  opacity 0
  pointer-events none
  position absolute
  right 0
  top 60px
  transition .5s all
  z-index 1
  @media (min-width: 560px)
    display none
  &.active
    opacity 1
    pointer-events all
</style>

