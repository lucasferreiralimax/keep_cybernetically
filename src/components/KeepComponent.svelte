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
    document.querySelector('.note-full .text').scrollTop = 0
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
  .text
    max-height calc(100vh - 220px)
    overflow-y auto
    padding 0 10px
    text-align left
    white-space pre-line
    &::-webkit-scrollbar-track
	    background #fff
    &::-webkit-scrollbar-thumb
      background-color rgba(0,0,0,.2)
      border 3px solid #fff
.overlay-full
  background #000
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index 2
  opacity 0
  pointer-events none
  transition .5s all
  &.active
    opacity .7
    pointer-events all
</style>

