<script>
  let navLinks = [
    {
      'title': 'Home',
      'link': '#home',
      'target': '_self'
    },
    {
      'title': 'About',
      'link': '#about',
      'target': '_self'
    },
    {
      'title': 'Contact',
      'link': '#contact',
      'target': '_self'
    },
    {
      'title': 'Github',
      'link': 'https://github.com/lucasferreiralimax',
      'target': '_blank'
    }
  ];

  let active = false;

  function handleMenu() {
    console.log("Dsadsadsa")
    active = !active
    if(active) {
      document.querySelector('#main').style.width = 'calc(100% - 220px)'
      document.querySelector('#main').style.transform = 'translateX(220px)'
    } else {
      document.querySelector('#main').removeAttribute('style')
    }

	}
</script>

<template lang='pug'>
button.nav-button(on:click='{handleMenu}') Menu
nav.nav(class:active='{active}')
  +each('navLinks as item')
    a(href='{item.link}' target='{item.target}') {item.title}
</template>

<style lang="stylus">
.nav-button
  padding 10px
  cursor pointer
  position absolute
  top 0
  left 0
.nav
  background #333
  position absolute
  top 60px
  left 0
  bottom 0
  display flex
  flex-direction column
  color #fff
  transition .3s all
  width 70px
  &.active
    width 200px
  a
    color #fff
    text-decoration none
    display flex
    padding 10px
    &:hover
      background #666
</style>

