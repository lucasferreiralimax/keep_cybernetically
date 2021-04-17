import { render } from '@testing-library/svelte'

import NoteComponent from './NoteComponent.svelte'

describe("Should render NoteComponent", () => {
  it('renders components', () => {
    const { getByTestId } = render(NoteComponent, {
      props: {
        note: {
          title: 'keep_cybernetically',
          text: 'keep_cybernetically text content test'
        }
      }
    })

    expect(getByTestId('app-note')).toBeInTheDocument()
  })
})
