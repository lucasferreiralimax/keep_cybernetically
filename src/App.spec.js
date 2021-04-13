import { render } from '@testing-library/svelte'

import App from './App.svelte'

describe("Should render App", () => {
  it('renders components', () => {
    const { getByTestId } = render(App, {
      props: { name: 'keep_cybernetically'}
    })

    expect(getByTestId('app-container')).toBeInTheDocument()
    expect(getByTestId('app-header')).toBeInTheDocument()
    expect(getByTestId('app-nav-button')).toBeInTheDocument()
    expect(getByTestId('app-nav')).toBeInTheDocument()
  })
})
