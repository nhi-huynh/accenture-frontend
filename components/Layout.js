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
    
    <div className='font-sans text-gray-900'>
    	{children}
    </div>

    <Footer/>
  </>
)


const Footer = () => 
	<footer className="font-sans">
    <h3>Footer</h3>
	</footer>

export default Layout