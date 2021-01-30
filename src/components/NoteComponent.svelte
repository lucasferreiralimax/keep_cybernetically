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
  background #eee
  margin-bottom 10px
  position relative
  transition .3s all
  border-radius 6px
  height 150px
  z-index 1
  @media (min-width: 560px)
    width calc(50% - 5px)
    margin-right 10px
    float left
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
    transform scale(1.05)
    background #fff
    box-shadow 0 4px 10px rgba(#000, .3)
    z-index 2
    .remove
      opacity 1
      pointer-events all
  h2, .text
    margin 0
    padding 0
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
  .remove
    cursor pointer
    position absolute
    top 10px
    right 10px
    opacity 0
    pointer-events none
    transition .3s all
    border 0
    background #aaa
    color #fff
    border-radius 100px
    height 20px
    width 20px
    line-height 0
    &:hover
      background #f00
      color #fff
</style>

