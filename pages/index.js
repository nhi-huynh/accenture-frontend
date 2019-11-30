import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

const Home = () => (
  <Layout title="Home">
    <Introduction/>
    <Asd/>
    <First/>
    <div className="bg-blue-300">
      <div className="container pt-8 sm:pt-16 pb-10 sm:pb-24 px-6 mx-auto">
        <div>
          <h1 className="text-3xl font-bold mb-2">High Interest Rate Accounts</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
          <br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
          <br/>
        </div>
      </div>
    </div>
  </Layout>
)

const Introduction = () => 
<>
    <div className="bg-red-300 header-background">
      <div className="container pt-12 sm:pt-18 pb-10 sm:pb-20 px-6 mx-auto flex">
        <div>
          <header className="mb-4">
            <h1 className="text-5xl font-bold mb-4">Keep your finances,<br/>decentralized intelligently</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt.</p>
            <br/>
            <button className="bg-gray-900 text-white font-bold py-4 px-6 rounded">Get started now</button>
          </header>
        </div>
        <div className="hidden lg:block feature-image ml-auto"></div>
      </div>
    </div>
    </>

/* Splitter Component */
const Asd = () =>
  <div className="bg-gray-900 text-white font-sans">
    <div className="mx-auto container px-4 py-6">
      <div className="py-6 px-2 grid gc-4 items-center">
        <div className="flex flex-col">
          <span className="mr-5 font-bold text-4xl">No Fees</span>
          <p className="text-red-300">No monthly fee or
            <br/>hidden fees
          </p>
          <br/>
          <small className="text-gray-300">View pricing</small>
        </div>
        <div className="flex flex-col">
          <span className="mr-5 font-bold text-4xl">15.5%</span>
          <p className="text-red-300">Per annum,<br/> on DeFi savers</p>
          <br/>
          <small className="text-gray-300">* Conditions apply</small>
        </div>
        <div className="flex flex-col">
          <span className="mr-5 font-bold text-4xl">15.5%</span>
          <p className="text-red-300">Per annum,<br/> on DeFi savers</p>
          <br/>
        </div>
        <div className="flex flex-col">
          <span className="mr-5 font-bold text-4xl">15.5%</span>
          <p className="text-red-300">Per annum,<br/> on DeFi savers</p>
          <br/>
        </div>
      </div>
    </div>
  </div>

const First = () =>
  <div className="container pt-8 sm:pt-16 pb-10 sm:pb-24 px-6 mx-auto">
    <div>
      <h1 className="text-3xl font-bold mb-2">High Interest Rate Accounts</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
      <br/>
      <p>Excepteur sint occaecat cupidatat non proident, sunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
      <br/>
    </div>
  </div>

export default Home
