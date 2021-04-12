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
    ul
      li
        a(href="https://github.com/lucasferreiralimax" target="_blank")
          img(src="./assets/github-logo.svg" alt="Github Lucas Lima")
      li
        a(href="https://codepen.io/lucaslimax" target="_blank")
          img(src="./assets/codepen-logo.svg" alt="Codepen Lucas Lima")
      li
        a(href="https://www.duolingo.com/profile/ferreiralimax" target="_blank")
          img(src="./assets/duolingo-logo.svg" alt="Duolingo Lucas Lima")
      li
        a(href="https://www.freecodecamp.org/lucasferreiralimax" target="_blank")
          img(src="./assets/freecodecamp-logo.png" alt="Freecodecamp Lucas Lima")
      li
        a(href="https://www.linkedin.com/in/lucasferreiralimax" target="_blank")
          img(src="./assets/linkedin-logo.svg" alt="Linkedin Lucas Lima")
      li
        a(href="https://docs.microsoft.com/pt-br/users/lucasferreiralimax" target="_blank")
          img(src="./assets/microsoft-logo.svg" alt="Microsoft Lucas Lima")
      li
        a(href="https://app.pluralsight.com/profile/lucasferreiralimax" target="_blank")
          img(src="./assets/pluralsight-logo.png" alt="Pluralsight Lucas Lima")
      li
        a(href="https://steamcommunity.com/id/lucaslima1337" target="_blank")
          img(src="./assets/steam-logo.png" alt="Steam Lucas Lima")
      li
        a(href="https://t.me/lucasferreiralimax" target="_blank")
          img(src="./assets/telegram-logo.svg" alt="Telegram Lucas Lima")
      li
        a(href="https://api.whatsapp.com/send?phone=+5583996749477&text=Hello+Lucas%2C+how+are+you+doing%3F" target="_blank")
          img(src="./assets/whatsapp-logo.svg" alt="Whatsapp Lucas Lima")
      li
        a(href="https://www.youtube.com/channel/UCxvF9bQs3PAasQJoNfeX-og" target="_blank")
          img(src="./assets/youtube-logo.svg" alt="Youtube Lucas Lima")
</template>

<style lang="stylus">
.profile
  & > img
    border-radius 100%
    box-shadow 0 0 0 6px #333, 0 0 0 8px #fff
    transition .3s box-shadow
    cursor crosshair
    &:hover
      box-shadow 0 0 0 6px #333, 0 0 0 8px #fff, 0 0 0 12px #ff3e00
  ul
    margin 0
    padding 0
    list-style none
    wdith 100%
    display flex
    align-items center
    justify-content center
    flex-wrap wrap
  li
    background #fff
    border-radius 100%
    padding 1rem
    margin 0.7rem
    transition .3s all
    &:hover
      transform scale(1.1)
      box-shadow 0 0 0 6px #333, 0 0 0 8px #fff, 0 0 0 12px #ff3e00
    img
      width 50px
</style>
