<script>
  import NoteComponent from './NoteComponent.svelte';
  import NoteFullComponent from './NoteFullComponent.svelte';
  import { text_area_resize } from './autoresize_textarea.js'
  import { poems } from './poems.js'

  let notes_local = localStorage.getItem('notes')

  let notes =  notes_local ? JSON.parse(notes_local) : poems
  let title = ''
  let text = ''

  let note_full = {
    active: false,
    title: '',
    text: '',
  }

  function createNote() {
    notes = notes.concat({
      'title': title,
      'text': `${text}`
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    document.querySelector('#text-content').removeAttribute('style')
    title = ''
    text = ''
  }

  function removeNote (index) {
    notes = [...notes.slice(0, index), ...notes.slice(index + 1, notes.length)]
    localStorage.setItem('notes', JSON.stringify(notes))
  }

  function removeNoteChildComponent (event) {
    removeNote(event.detail.index)
  }

  function fullNote (event) {
    let index = event.detail.index
    let title_content = document.querySelector('#title-content-edit')
    let text_content = document.querySelector('#text-content-edit')

    note_full = {
      index: index,
      active: true,
      edit: false,
      title: notes[index].title,
      text: notes[index].text,
    }

    title_content.value = notes[index].title
    text_content.value = notes[index].text
    text_content.scrollTop = 0
    text_area_resize(text_content)
  }

  function changeFullNote (event) {
    notes[event.detail.note_full.index].title = event.detail.note_full.title
    notes[event.detail.note_full.index].text = event.detail.note_full.text
    notes = notes
    localStorage.setItem('notes', JSON.stringify(notes))
  }
</script>

<template lang='pug'>
section.keep
  input#title-content(type='text' bind:value='{title}' placeholder='Titulo')
  textarea#text-content(bind:value='{text}' class:active='{text}' placeholder='Criar uma nota...' use:text_area_resize)
  button.btn.primary(type='button' on:click='{createNote}' disabled='{!title || !text}') Criar nota
section.notes
  +each('notes as note, index')
    NoteComponent({index} {note} on:remove='{removeNoteChildComponent}' on:full='{fullNote}')
NoteFullComponent({note_full} on:remove='{removeNoteChildComponent}' on:changeNote='{changeFullNote}')
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

:global(.btn)
  background #eee
  border 1px solid rgba(0,0,0,.3)
  border-radius 3px
  box-shadow inset 0 0 0 1px rgba(255,255,255,.5), 0 2px rgba(0,0,0,.3)
  color #000
  cursor pointer
  padding 10px
  text-shadow 0 1px #fff
  transition .3s all
  user-select none
  &[disabled]
    opacity .7
    pointer-events none
  &:hover
    background #fff
    color #000
    &.primary
    &.danger
      color #fff
      text-shadow none
    &.primary
      background #ff3e00
    &.danger
      background #f74d4d

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
</style>

