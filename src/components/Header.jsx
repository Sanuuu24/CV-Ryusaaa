import { Navbar, NavbarLink } from 'flowbite-react'
import React from 'react'



const Header = () => {
  return (
    <Navbar fluid rounded>
    <Navbar.Brand as={NavbarLink}>
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link href="#">2024</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Header
