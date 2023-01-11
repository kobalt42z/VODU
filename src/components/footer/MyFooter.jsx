import { Footer } from 'flowbite-react'
import React from 'react'

export const MyFooter = () => {
  return (
    <Footer container={true}>
    <div className="w-full text-center">
      <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <Footer.Brand
          href="https://flowbite.com"
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Flowbite Logo"
          name="Flowbite"
        />
        <Footer.Brand
          href="https://www.themoviedb.org"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="Flowbite Logo"
          name="  "
        />
        <Footer.LinkGroup>
          <Footer.Link href="#">
            About
          </Footer.Link>
          <Footer.Link href="#">
            Privacy Policy
          </Footer.Link>
          <Footer.Link href="#">
            Licensing
          </Footer.Link>
          <Footer.Link href="#">
            Contact
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
      <Footer.Divider />
      <Footer.Copyright
        href="#"
        by="Flowbite™"
        year={2022}
      />
    </div>
  </Footer>
  )
}
