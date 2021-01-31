<script>
  import NoteComponent from './NoteComponent.svelte';

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
  article#text-content(contenteditable='true' bind:innerHTML='{text}' class:active='{text}') {text}
  button(type='button' on:click='{createNote}' disabled='{!title || !text}') Criar nota
section.notes
  +each('notes as note, index')
    NoteComponent({index} {note} on:remove='{removeNote}')
</template>

<style lang="stylus">
.keep
  background #333
  color #fff
  border-radius 10px
  max-width 450px
  margin 0 auto 2em
  padding 1em
  text-align left
  button
    cursor pointer

#title-content
  background rgba(0,0,0,0)
  border 0
  width 100%
  box-sizing border-box
  font-size 1.5em
  outline none
  color #fff
  &::placeholder
    color #fff

#text-content
  margin 15px 0
  position relative
  outline none
  &.active:after
    opacity 0
  &:after
    content 'Criar uma nota...'
    display flex
    width 100%
    position absolute
    top 0
    z-index 9
    opacity 1
    pointer-events none
</style>

