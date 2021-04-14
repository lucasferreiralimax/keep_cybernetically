import { render } from '@testing-library/svelte'

import Home from './Home.svelte'

describe("Should render Home", () => {
  it('renders components', () => {
    const { getByText, getByTestId } = render(Home)

    expect(getByText('Keep')).toBeInTheDocument()
    expect(getByTestId('app-keep')).toBeInTheDocument()
  })
})
