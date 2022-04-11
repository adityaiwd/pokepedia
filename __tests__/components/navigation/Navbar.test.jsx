import { render, screen } from '@testing-library/react'
import Navbar from "../../../components/navigation/Navbar"

describe('Navbar component', () => {
  it('should render a navbar-wrapper', () => {
    render(<Navbar />)

    const navbarWrapper = screen.getByTestId("navbar-wrapper")

    expect(navbarWrapper).toBeInTheDocument()
  })
})