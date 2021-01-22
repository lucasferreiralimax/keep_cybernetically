<script>
  let navLinks = [
    {
      'title': 'Home',
      'link': 'home'
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
  a(href="/#") {navLinks[0].title}
  a(href="/#") {navLinks[0].title}
  a(href="/#") {navLinks[0].title}
  a(href="/#") {navLinks[0].title}
  a(href="/#") {navLinks[0].title}
  a(href="/#") {navLinks[0].title}
  a(href="/#") {navLinks[0].title}
  a(href="/#") {navLinks[0].title}
</template>

<style lang="stylus">
.nav-button
  padding 10px
  cursor pointer
  position absolute
  top 0
  left 0
.nav
  padding 10px
  background #333
  position absolute
  top 60px
  left 0
  bottom 0
  display flex
  flex-direction column
  color #fff
  transition .3s all
  width 50px
  &.active
    width 200px
    background #f00
  a
    color #fff
</style>

