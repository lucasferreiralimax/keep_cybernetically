import { render } from '@testing-library/svelte'

import KeepComponent from './KeepComponent.svelte'

describe("Should render KeepComponent", () => {
  it('renders components', () => {
    const { getByTestId } = render(KeepComponent)

    expect(getByTestId('app-keep')).toBeInTheDocument()
  })
})
