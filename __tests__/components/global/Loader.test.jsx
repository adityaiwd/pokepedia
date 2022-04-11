import { render, screen } from '@testing-library/react'
import Loader from "../../../components/global/Loader"

describe('Loader component', () => {
  it('should render a loader', () => {
    render(<Loader />)

    const loader = screen.getByTestId("loader")

    expect(loader).toBeInTheDocument()
  })
})