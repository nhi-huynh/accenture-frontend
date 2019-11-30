import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from './Nav'
import '../assets/css/index.css'

/**
* Layout component to contain each page.
**/

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>{title} | DeFiBank</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=0"/>
      <meta name="theme-color" content="#1A202C"/>
      <meta name="mobile-web-app-capable" content="yes"/>
      <meta name="description" content="DeFiBank is a digital bank."/>

      <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon"/>
      <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon"/>
    </Head>

    <Nav currentTitle={title}/>
    
    <div className='font-sans text-gray-900'>
    	{children}
    </div>

    <Footer/>
  </>
)


const Footer = () => 
  <footer className="bg-gray-900 text-gray-500 border-t border-gray-600 font-sans">
    <div className="mx-auto container px-4 py-12">
      <div className="px-3 flex items-center">
        <div className="flex-grow text-sm">
          <span className="mr-5">Copyright © {new Date().getFullYear()} DeFiBank, Pty Ltd</span>
        </div>
      </div>
    </div>
  </footer>

export default Layout