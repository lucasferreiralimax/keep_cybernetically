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
    title = ''
    text = ''
  }

  function removeNote (event) {
    let index = event.detail.index
    notes = [...notes.slice(0, index), ...notes.slice(index + 1, notes.length)]
    localStorage.setItem('notes', JSON.stringify(notes))
  }

  function fullNote (event) {
    let index = event.detail.index
    note_full = {
      index: index,
      active: true,
      title: notes[index].title,
      text: notes[index].text,
    }
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

  function handleFullNote () {
    note_full.active = false
  }
</script>

<template lang='pug'>
section.keep
  input#title-content(type='text' bind:value='{title}' placeholder='Titulo')
  textarea#text-content(bind:value='{text}' class:active='{text}' placeholder='Titulo' use:text_area_resize)
  button(type='button' on:click='{createNote}' disabled='{!title || !text}') Criar nota
section.notes
  +each('notes as note, index')
    NoteComponent({index} {note} on:remove='{removeNote}' on:full='{fullNote}')
section.note-full(class:active='{note_full.active}' use:clickOutside on:click_outside='{handleFullNote}')
  h2 {note_full.title}
  .text {note_full.text}
  button.remove(on:click='{handleFullNote}' type="button") x
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
.note-full
  background #fff
  box-shadow 0 10px 20px rgba(0,0,0,.25)
  border-radius 6px
  width calc(100% - 20px)
  max-width 400px
  padding-bottom 10px
  position fixed
  top 80px
  left 50%
  right 0
  z-index 99
  transform translate(-50%, 0)
  opacity 0
  pointer-events none
  &.active
    opacity 1
    pointer-events all
    &:hover
      .remove
        opacity 1
        pointer-events all
  .text
    padding 0 10px
    text-align left
    white-space pre
    overflow-y auto
    max-height calc(100vh - 220px)
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

