<script>
  import { createEventDispatcher } from 'svelte';

  export let index;
  export let note;

  const dispatch = createEventDispatcher();

  function remove(index) {
    dispatch('remove', { index: index });
  }

  function full(index) {
    dispatch('full', { index: index });
  }
</script>

<template lang='pug'>
  article.note(id='note-{index}' on:click='{full.bind(this, index)}')
    h2 {note.title}
    .text {note.text}
    button.remove(on:click='{remove.bind(this, index)}' type="button")
      | Remove Note
      svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 510" width="20px" height="20px" fill="#fff")
        path(d="M118.832 467.243A44.892 44.892 0 00163.776 510h182.447a44.89 44.89 0 0044.944-42.757L417.447 165H92.552zM300 240h30v165h-30zm-60 0h30v165h-30zm-60 0h30v165h-30zM330 75V45c0-24.812-20.186-45-45-45h-60c-24.812 0-45 20.188-45 45v30H60v60h390V75zm-120 0V45c0-8.271 6.73-15 15-15h60c8.272 0 15 6.729 15 15v30z")
</template>

<style lang="stylus">
.note
  -webkit-tap-highlight-color transparent
  background #eee
  border-radius 6px
  box-shadow 0 5px 15px rgba(#000,.5)
  box-sizing border-box
  color #000
  cursor pointer
  height 150px
  margin-bottom 10px
  padding 1rem
  position relative
  transition .3s all
  user-select none
  z-index 1
  @media (min-width: 560px)
    float left
    margin-right 10px
    width calc(50% - 5px)
    &:nth-of-type(2n)
      margin-right 0
  @media (min-width: 760px)
    width calc(33.3% - 6.6px)
    &:nth-of-type(2n)
      margin-right 10px
    &:nth-of-type(3n)
      margin-right 0
  @media (min-width: 1200px)
    width calc(20% - 8px)
    &:nth-of-type(3n)
      margin-right 10px
    &:nth-of-type(5n)
      margin-right 0
  @media (min-width: 1700px)
    height 300px
  &:hover
    background #fff
    box-shadow 0 4px 10px rgba(#000, .3)
    transform scale(1.05)
    z-index 2
    .remove
      opacity 1
      pointer-events all
  h2, .text
    margin 0
    overflow hidden
    padding 0
    text-overflow ellipsis
    white-space nowrap
  h2
    white-space nowrap
  .text
    height 70%
    padding 0 10px
    text-align left
    white-space break-spaces
    @media (min-width: 1700px)
      height 85%
  .remove
    -webkit-tap-highlight-color transparent
    background #aaa
    border 0
    border-radius 100px
    box-shadow 0 0 5px 5px #fff
    color #fff
    cursor pointer
    font-size 0
    height 35px
    line-height 0
    opacity 0
    pointer-events none
    position absolute
    right 10px
    top 10px
    transition .3s all
    width 35px
    transform scale(.7)
    &:hover
      background #f00
      color #fff
      transform scale(1)
    &:active
      transform scale(.8)
</style>

