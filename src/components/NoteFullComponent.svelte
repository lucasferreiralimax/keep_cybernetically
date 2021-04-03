<script>
  import { text_area_resize } from './autoresize_textarea.js'
  import { notes_store } from '../store.js';

  let notes;

  const unsubscribeNotes = notes_store.subscribe(value => {
		notes = value;
	});

  export let note_full;

  function remove() {
    notes_store.set([...notes.slice(0, note_full.index), ...notes.slice(note_full.index + 1, notes.length)])
    localStorage.setItem('notes', JSON.stringify(notes))
    note_full.active = false
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
    const { title, text } = note_full;
    notes.splice(note_full.index, 1, { title, text })
    notes_store.set(notes)
    localStorage.setItem('notes', JSON.stringify(notes))
  }
</script>

<template lang='pug'>
section.note-full(
  class:active='{note_full.active}'
  use:clickOutside on:click_outside='{handleHiddenFullNote}'
)
  input#title-content-edit(
    type='text'
    bind:value='{note_full.title}'
    on:input='{changeFullNote}'
    placeholder='Titulo'
  )
  textarea#text-content-edit(
    bind:value='{note_full.text}'
    on:input='{changeFullNote}'
    placeholder='Criar uma nota...'
    use:text_area_resize
  )
  button.minimize(
    on:click='{handleHiddenFullNote}'
    type="button"
  ) _
  button.btn.danger(
    type='button'
    on:click='{remove}'
  ) Excluir
.overlay-full(class:active='{note_full.active}')
</template>

<style lang="stylus">
 #title-content-edit
  background rgba(0,0,0,0)
  border 0
  box-sizing border-box
  color #fff
  font-size 1.5em
  outline none
  width 100%
  &::placeholder
    color #fff

 #text-content-edit
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
  top 50%
  transform scale(0) translate(-50%, -50%)
  transform-origin center left
  transition .3s all
  width calc(100% - 20px)
  z-index 99
  &.active
    opacity 1
    pointer-events all
    transform scale(1) translate(-50%, -50%)
    &:hover
      transform scale(1.05) translate(-50%, -50%)
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

