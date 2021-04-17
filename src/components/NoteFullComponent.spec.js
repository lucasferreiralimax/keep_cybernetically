import { render } from '@testing-library/svelte'
import { note_full_store } from '../store.js';

import NoteFullComponent from './NoteFullComponent.svelte'

describe("Should render NoteFullComponent", () => {
  it('renders components', () => {
    const { getByTestId } = render(NoteFullComponent, {
      props: {
        note_full: {
          index: 1,
          active: true,
          edit: false,
          title: 'keep_cybernetically',
          text: 'keep_cybernetically text content test'
        }
      }
    })

    expect(getByTestId('app-note-full')).toBeInTheDocument()
  })
})
