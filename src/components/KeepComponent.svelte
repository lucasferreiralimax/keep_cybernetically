<script>
  let notes = [{'title': 'teste', 'text': 'testes \n teste testes'}]
  let title = ''
  let text = ''

  function createNote() {
    notes = notes.concat({
      'title': title,
      'text': `${text}`
    })
    title = ''
    text = ''
  }

  function removeNote (index) {
    notes = [...notes.slice(0, index), ...notes.slice(index + 1, notes.length)]
  }
</script>

<template lang='pug'>
section.keep
  input#title-content(type='text' bind:value='{title}' placeholder='Titulo')
  article#text-content(contenteditable='true' bind:innerHTML='{text}' class:active='{text}') {text}
  button(type='button' on:click='{createNote}' disabled='{!title || !text}') Criar nota
section.notes
  +each('notes as note, index')
    article.note(id='note-{index}')
      h2 {note.title}
      .text {note.text}
      button.remove(on:click='{removeNote.bind(this, index)}' type="button") x
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

.note
  background #eee
  width calc(33.3% - 6.6px)
  height 150px
  margin-right 10px
  margin-bottom 10px
  float left
  position relative
  transition .3s all
  border-radius 6px
  &:nth-of-type(3n)
    margin-right 0
  &:hover
    transform scale(1.05)
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

