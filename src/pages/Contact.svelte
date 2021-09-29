<script>
  export let name;
  const social_list = [
    { name: 'Github',       img: 'github-logo.svg',       link: 'https://github.com/lucasferreiralimax' },
    { name: 'Codepen',      img: 'codepen-logo.svg',      link: 'https://codepen.io/lucaslimax' },
    { name: 'Duolingo',     img: 'duolingo-logo.svg',     link: 'https://www.duolingo.com/profile/ferreiralimax' },
    { name: 'Freecodecamp', img: 'freecodecamp-logo.png', link: 'https://www.freecodecamp.org/lucasferreiralimax' },
    { name: 'Linkedin',     img: 'linkedin-logo.svg',     link: 'https://www.linkedin.com/in/lucasferreiralimax' },
    { name: 'Microsoft',    img: 'microsoft-logo.svg',    link: 'https://docs.microsoft.com/pt-br/users/lucasferreiralimax' },
    { name: 'Pluralsight',  img: 'pluralsight-logo.png',  link: 'https://app.pluralsight.com/profile/lucasferreiralimax' },
    { name: 'Steam',        img: 'steam-logo.png',        link: 'https://steamcommunity.com/id/lucaslima1337' },
    { name: 'Telegram',     img: 'telegram-logo.svg',     link: 'https://t.me/lucasferreiralimax' },
    { name: 'Whatsapp',     img: 'whatsapp-logo.svg',     link: 'https://api.whatsapp.com/send?phone=+5583996749477&text=Hello+Lucas%2C+how+are+you+doing%3F' },
    { name: 'Youtube',      img: 'youtube-logo.svg',      link: 'https://www.youtube.com/channel/UCxvF9bQs3PAasQJoNfeX-og' }
  ]
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
      +each('social_list as social')
        li
          a(href="{social.link}" target="_blank")
            img(class="{social.name.toLowerCase()}" src="{`./assets/${social.img}`}" alt="{`${social.name} Lucas Lima`}")
</template>

<style lang="stylus">
.profile
  & > img
    border-radius 100%
    box-shadow 0 0 0 6px #333, 0 0 0 8px #fff
    transition .3s box-shadow
    cursor crosshair
    &:hover
      box-shadow 0 0 0 6px #333, 0 0 0 8px #fff, 0 0 0 12px #00c1ff
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
      box-shadow 0 0 0 6px #333, 0 0 0 8px #fff, 0 0 0 12px #00c1ff
    img
      width 50px
</style>
