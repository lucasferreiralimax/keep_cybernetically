import { render } from '@testing-library/svelte'

import HeaderComponent from './HeaderComponent.svelte'

describe("Should render HeaderComponent", () => {
  it('renders components', () => {
    const { getByTestId } = render(HeaderComponent, {
      props: { name: 'keep_cybernetically'}
    })

    expect(getByTestId('app-header')).toBeInTheDocument()
  })
})
