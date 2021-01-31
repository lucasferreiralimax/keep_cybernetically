<script>
  import { createEventDispatcher } from 'svelte';

  export let index;
  export let note;

  const dispatch = createEventDispatcher();

  function remove(index) {
    dispatch('remove', { index: index });
  }
</script>

<template lang='pug'>
  article.note(id='note-{index}')
    h2 {note.title}
    .text {note.text}
    button.remove(on:click='{remove.bind(this, index)}' type="button") x
</template>

<style lang="stylus">
.note
  -webkit-tap-highlight-color transparent
  background #eee
  border-radius 6px
  height 150px
  margin-bottom 10px
  position relative
  transition .3s all
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
  .remove
    -webkit-tap-highlight-color transparent
    background #aaa
    border 0
    border-radius 100px
    color #fff
    cursor pointer
    height 20px
    line-height 0
    opacity 0
    pointer-events none
    position absolute
    right 10px
    top 10px
    transition .3s all
    width 20px
    &:hover
      background #f00
      color #fff
</style>

