import { render } from '@testing-library/svelte'

import About from './About.svelte'

describe("Should render About", () => {
  it('renders components', () => {
    const { getByText } = render(About)

    expect(getByText('About')).toBeInTheDocument()
    expect(getByText('Svelte').href).toBe("https://github.com/lucasferreiralimax/keep_cybernetically")
  })
})
