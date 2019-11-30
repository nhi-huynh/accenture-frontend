import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import NumberFormat from 'react-number-format'


const Portal = () => (
  <Layout title="Portal">
    <Header/>
    <Asd/>
    <SaverSection/>
    <DeFiDeposit/>
  </Layout>
)

const Header = () => (
  <div className="bg-red-300 header-background">
    <div className="container pt-12 sm:pt-18 pb-10 sm:pb-20 px-6 mx-auto flex">
      <div className="mb-4 flex w-full">
        <div>
          <h1 className="text-4xl font-bold">Welcome, Peter.</h1>
          <p>Your current account balance is <span className="font-bold">$100.</span></p>
        </div>
        <div className="ml-auto text-right">
          <h1 className="text-4xl font-bold">$100.00</h1>
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
      accountList.slice(0, 5).map((transaction, index) => (
        <div key={index} className={transaction.vendor === "DeFi Saver" ? "cursor-pointer p-4 border border-gray-900 bg-gray-300 mh-12 text-gray-900 rounded" : "bg-white hover:bg-gray-200 cursor-pointer p-4 border border-gray-900 mh-12 text-gray-900 rounded"}>
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

class DeFiDeposit extends React.Component {
  state = {
    isActive: true
  }

  render () {
    return (
      <div className="bg-gray-900 text-white">
        <div className="container pt-24 sm:pt-18 pb-12 sm:pb-24 px-6 mx-auto flex items-start">
          <div className="flex-initial mr-12">
          <h3 className="font-medium">Selected Saver:</h3>
          <br/>
            <div className="cursor-pointer p-4 border border-white bg-white hover:bg-gray-300 mh-12 w-64 text-gray-900 rounded ">
              <div className="flex items-center">
                <div className="bg-gray-900 rounded-sm w-10 h-10 mr-2 flex items-center justify-center">
                  <h3 className="text-white font-medium tracking-wide">DS</h3>
                </div>
                <div>
                  <h3 className="font-bold">DeFi Saver</h3>
                  <h3>$100</h3>
                </div>
              </div>
              <br/>
              <small className="font-medium">Interest Rate: <span className="text-green-500">10%</span></small>
            </div>
            <br/>
            <div className="rounded-lg bg-gray-800 text-base font-medium py-3 px-4 flex">
              Compounding:
              {
                this.state.isActive ?
                <button onClick={() => this.setState({isActive: false})} class="ml-auto rounded-full flex items-center cursor-pointer w-12 bg-green-500 justify-end">
                  <span class="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"></span>
                </button>
                :
                <button onClick={() => this.setState({isActive: true})} class="ml-auto rounded-full flex items-center cursor-pointer w-12 bg-gray-700 justify-start">
                  <span class="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"></span>
                </button>
              }
            </div>
          </div>
          <div className="flex-initial">
            <div>
              <h2 className="text-3xl font-bold">DeFi Deposit</h2>
              <small className="text-gray-500">Initiate a term deposit at a higher interest rate</small>
            </div>
            <br/>
       
            <NumberFormat 
              customInput={Input} 
              displayType={'input'}
              decimalScale={1}
              thousandSeparator={true} 
              fixedDecimalScale={true}
              prefix={'$'}
            />
            
            <br/>
            <div>
              <button className="bg-red-300 text-gray-900 font-bold py-2 px-4 rounded">New Deposit</button>
              <small className="ml-6 text-gray-600">There is a minimum deposit of $50.0.</small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Input extends React.Component {
  render() {
    return (
      <input className="cursor-pointer bg-gray-900 font-bold text-5xl text-red-300 mb-8" placeholder="$0.00" {...this.props}/>
    )
  }
}

export default Portal