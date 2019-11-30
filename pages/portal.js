import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

const Portal = () => (
  <Layout title="Portal">
    <Header/>
    <Asd/>
    <SaverSection/>
  </Layout>
)

const Header = () => (
  <div className="bg-red-300">
    <div className="container pt-12 sm:pt-18 pb-10 sm:pb-20 px-6 mx-auto flex">
      <div className="mb-4 flex w-full">
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome, Peter.</h1>
          <p>Your current account balance is <span className="font-bold">$100.</span></p>
        </div>
        <div className="ml-auto text-right">
          <h1 className="text-4xl font-bold mb-4">$100.00</h1>
          <p>Available</p>
        </div>
      </div>
    </div>
  </div>
)

const Asd = () =>
  <div className="bg-gray-900 text-white border-t border-gray-600 font-sans">
    <div className="mx-auto container px-4 py-6">
      <div className="px-3 flex items-center">
        <div className="flex-grow text-sm">
          <span className="mr-5">Welcome to the Bank</span>
        </div>
      </div>
    </div>
  </div>

const accountList = [
  {
    vendor: "Everyday",
    price: "32.0",
    time: "9:05pm",
    location: "Ormond, VIC"
  },
  {
    vendor: "DeFi Saver",
    price: "1590.0",
    time: "9:05pm",
    location: "Ormond, VIC"
  },
  {
    vendor: "Hawaii Trip",
    price: "32.0",
    time: "9:05pm",
    location: "Ormond, VIC"
  }
]

const SaverSection = () => 
   <div className="bg-white text-gray-900">
    <div className="container pt-12 sm:pt-18 pb-10 sm:pb-20 px-6 mx-auto">
      <div>
        <h2 className="text-3xl font-bold">Savers <span>(4)</span></h2>
        <br/>
        {/*<small className="">Initiate a term deposit at a higher interest rate</small>*/}
      </div>
      <Savers/>
    </div>
  </div>

const Savers = () => 
  <div className="grid gc-6 gc-gap-10">
    {
      accountList.slice(0, 5).map((transaction) => (
        <div className="cursor-pointer p-4 border border-gray-900 hover:bg-gray-300 mh-12 text-gray-900 rounded">
          <div className="flex items-center">
            <div className="bg-gray-900 rounded-sm w-10 h-10 mr-2 flex items-center justify-center">
              <h3 className="text-white font-medium tracking-wide">PS</h3>
            </div>
            <div>
              <h3 className="font-bold">{transaction.vendor}</h3>
              <h3>${transaction.price}</h3>
            </div>
          </div>
          <br/>
          <small>{transaction.time}, {transaction.location}</small>
        </div>
      ))
    }
    <div className="cursor-pointer p-4 hover:bg-gray-800 border border-gray-900 bg-gray-900 text-white mh-12 rounded">
      <h3 className="font-bold">Add another +</h3>
      <br/>
    </div>
  </div>

export default Portal