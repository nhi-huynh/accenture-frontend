import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

const Home = () => (
  <Layout title="Home">
    <Introduction/>
    <First/>
    <div className="bg-blue-300">
      <div className="container pt-8 sm:pt-16 pb-10 sm:pb-24 px-6 mx-auto">
        <div>
          <h1 className="text-3xl font-bold mb-2">High Interest Rate Deposits</h1>
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
    <div className="bg-red-300">
      <div className="container pt-12 sm:pt-18 pb-10 sm:pb-20 px-6 mx-auto flex">
        <div>
          <header className="mb-4">
            <h1 className="text-5xl font-bold mb-4">Keep your finances,<br/>decentralized intelligently</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt.</p>
            <br/>
            <button className="bg-gray-900 text-white font-bold py-2 px-4 rounded">Get started now</button>
          </header>
        </div>
        <div className="hidden lg:block feature-image ml-auto"></div>
      </div>
    </div>
    </>

const First = () =>
  <div className="container pt-8 sm:pt-16 pb-10 sm:pb-24 px-6 mx-auto">
    <div>
      <h1 className="text-3xl font-bold mb-2">High Interest Rate Deposits</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
      <br/>
      <p>Excepteur sint occaecat cupidatat non proident, sunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
      <br/>
    </div>
  </div>
export default Home
