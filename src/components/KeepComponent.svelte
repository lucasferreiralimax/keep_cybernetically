<script>
  import NoteComponent from './NoteComponent.svelte';
  import { text_area_resize } from './autoresize_textarea.js'

  let notes_local = localStorage.getItem('notes')

  let notes =  notes_local ? JSON.parse(notes_local) : [{'title': 'teste', 'text': 'testes \n teste testes'}]
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

  function clickOutside(node) {
    const handleClick = event => {
      if (note_full.active && node && !node.contains(event.target) && !event.defaultPrevented) {
        node.dispatchEvent(
          new CustomEvent('click_outside', node)
        )
      }
    }

    document.addEventListener('click', handleClick, true);

    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    }
  }

  function handleHiddenFullNote () {
    note_full.active = false
  }

  function changeFullNote () {
    notes[note_full.index].title = note_full.title
    notes[note_full.index].text = note_full.text
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
section.note-full(class:active='{note_full.active}' use:clickOutside on:click_outside='{handleHiddenFullNote}')
  input#title-content-edit(type='text' bind:value='{note_full.title}' on:input='{changeFullNote}' placeholder='Titulo')
  textarea#text-content-edit(bind:value='{note_full.text}' on:input='{changeFullNote}' placeholder='Criar uma nota...' use:text_area_resize)
  button.minimize(on:click='{handleHiddenFullNote}' type="button") _
  button.btn.danger(type='button' on:click='{removeNote(note_full.index) || handleHiddenFullNote}') Excluir
.overlay-full(class:active='{note_full.active}')
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

.btn
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

#title-content, #title-content-edit
  background rgba(0,0,0,0)
  border 0
  box-sizing border-box
  color #fff
  font-size 1.5em
  outline none
  width 100%
  &::placeholder
    color #fff

#text-content, #text-content-edit
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

#title-content-edit
  padding-left 10px
  margin 5px 0

#title-content-edit,
#text-content-edit
  color #000
  &::placeholder
    color #000

#text-content-edit
  min-width calc(100% - 20px)
  max-height calc(100vh - 300px)
  overflow-y auto
  padding 0 10px
  text-align left
  &::-webkit-scrollbar-track
    background #fff
  &::-webkit-scrollbar-thumb
    background-color rgba(0,0,0,.2)
    border 3px solid #fff

.note-full
  background #fff
  border-radius 6px
  box-shadow 0 10px 20px rgba(0,0,0,.25)
  left 50%
  max-width 400px
  opacity 0
  padding-bottom 10px
  pointer-events none
  position fixed
  right 0
  top 80px
  transform translate(-50%, 0)
  transform-origin top left
  transition .3s all
  width calc(100% - 20px)
  z-index 99
  &.active
    opacity 1
    pointer-events all
    &:hover
      transform scale(1.05) translate(-50%, 0)
      .minimize
        opacity 1
        pointer-events all
  .btn.danger
    margin 10px 10px 0 0
    float right
  .minimize
    -webkit-tap-highlight-color transparent
    background #ccc
    border 0
    border-radius 3px
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
      background #aaa
      color #fff
.overlay-full
  background #000
  bottom 0
  left 0
  opacity 0
  pointer-events none
  position fixed
  right 0
  top 0
  transition .5s all
  z-index 2
  &.active
    opacity .7
    pointer-events all
</style>

