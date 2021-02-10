<script>
  import NoteComponent from './NoteComponent.svelte';
  import { text_area_resize } from './autoresize_textarea.js'

  let notes_local = localStorage.getItem('notes')

  let notes =  notes_local ? JSON.parse(notes_local) : [{'title': 'teste', 'text': 'testes \n teste testes'}]
  let title = ''
  let text = ''

  function createNote() {
    notes = notes.concat({
      'title': title,
      'text': `${text}`
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    title = ''
    text = ''
  }

  function removeNote (event) {
    let index = event.detail.index
    notes = [...notes.slice(0, index), ...notes.slice(index + 1, notes.length)]
    localStorage.setItem('notes', JSON.stringify(notes))
  }
</script>

<template lang='pug'>
section.keep
  input#title-content(type='text' bind:value='{title}' placeholder='Titulo')
  textarea#text-content(bind:value='{text}' class:active='{text}' placeholder='Titulo' use:text_area_resize)
  button(type='button' on:click='{createNote}' disabled='{!title || !text}') Criar nota
section.notes
  +each('notes as note, index')
    NoteComponent({index} {note} on:remove='{removeNote}')
</template>

<style lang="stylus">
.keep
  background #333
  border-radius 10px
  color #fff
  margin 0 auto 2em
  max-width 450px
  padding 1em
  text-align left
  button
    cursor pointer

#title-content
  background rgba(0,0,0,0)
  border 0
  box-sizing border-box
  color #fff
  font-size 1.5em
  outline none
  width 100%
  &::placeholder
    color #fff

#text-content
  background rgba(0,0,0,0)
  border 0
  color #fff
  margin 15px 0 0
  max-width 100%
  min-width 100%
  outline none
  overflow hidden
  position relative
  resize none
  &::placeholder
    color #fff
  &.active:after
    opacity 0
  &:after
    content 'Criar uma nota...'
    display flex
    opacity 1
    pointer-events none
    position absolute
    top 0
    width 100%
    z-index 9
</style>

