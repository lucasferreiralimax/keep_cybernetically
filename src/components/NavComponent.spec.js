import { render } from '@testing-library/svelte'

import NavComponent from './NavComponent.svelte'

describe("Should render NavComponent", () => {
  it('renders components', () => {
    const { getByText, getByTestId } = render(NavComponent)

    expect(getByText('Menu button')).toBeInTheDocument()
    expect(getByTestId('app-nav')).toBeInTheDocument()
    expect(getByTestId('app-nav-button')).toBeInTheDocument()
  })
})
