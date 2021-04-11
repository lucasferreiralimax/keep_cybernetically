<script>
  export let name;
</script>

<template lang="pug">
  h1 Contact
  p Visit the&nbsp;
    a(href="https://github.com/lucasferreiralimax/keep_cybernetically") Github {name}
    |  to learn how code Svelte apps.
  section.profile
    h2 Lucas Lima
    img(src="https://avatars.githubusercontent.com/u/40927839?v=4" alt="Lucas Lima" width="200")
    p Front-end Developer and Designer specialist in creating technological solutions with Web standards
    p I develop my artistic skills inside and outside technology at real world
    p Writing poetry and also creating drawarts (urban art).
</template>

<style lang="stylus">
.profile
  img
    border-radius 100%
    box-shadow 0 0 0 6px #333, 0 0 0 8px #fff
    transition .3s box-shadow
    cursor crosshair
    &:hover
      box-shadow 0 0 0 6px #333, 0 0 0 8px #fff, 0 0 0 12px #ff3e00
</style>
