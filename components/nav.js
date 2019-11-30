import React from 'react'
import Link from 'next/link'

/**
* Navigation component to manage the navbar of each page.
**/

// const links = [
//   { href: 'https://zeit.co/now', label: 'ZEIT' },
//   { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
// ].map(link => {
//   link.key = `nav-link-${link.href}-${link.label}`
//   return link
// })

const Nav = (currentTitle) => (
    <div className="bg-red-300">
      <nav className="container pt-12 sm:pt-18 pb-4 sm:pb-18 px-6 mx-auto flex">
        <ul className="flex list-none items-center w-full">
          <li className="pr-6"><a className="font-bold text-lg">DeFiBank</a></li>
          {
            currentTitle == 'Portal' ?
              <>
                <li className="pr-6"><a className="opacity-25">|</a></li>
                <li className="pr-6"><a className="cursor-pointer select-none">Home</a></li>
                <li>
                  <a className="cursor-pointer select-none">About</a>
                </li>
              </>
            :
              <></>
          }
          <ul className="ml-auto flex list-none items-center">
          {
            currentTitle == 'Portal' ?
              <li>
                <Link href="/">
                  <a className="cursor-pointer select-none border-2 border-gray-900 border-solid font-bold py-2 px-4 rounded">Sign Out</a>
                </Link>
              </li>
            :
              <>
                <li className="pr-6">
                  <Link href="/portal">
                    <a title="App Portal" className="cursor-pointer select-none font-bold">Sign In</a>
                  </Link>
                </li>
                <li>
                  <a className="cursor-pointer select-none border-2 border-gray-900 border-solid font-bold py-2 px-4 rounded">Sign Up</a>
                </li>
              </>
            }
          </ul>
        </ul>
      </nav>
    </div>
)

export default Nav

 /* {}
        links.map(({ key, href, label }) => (
          <li key={key}>
            <a href={href}>{label}</a>
          </li>
        ))
    }*/  