import { render } from '@testing-library/svelte'

import Contact from './Contact.svelte'

describe("Should render Contact", () => {
  it('renders components', () => {
    const { getByText, getByTestId } = render(Contact, {
      props: { name: 'keep_cybernetically'}
    })

    expect(getByText('Contact')).toBeInTheDocument()
  })
})
