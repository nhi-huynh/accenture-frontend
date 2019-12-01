import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import LineChart from '../components/graphs/LineChart'
import LineChartBtc from '../components/graphs/LineChartBtc'
import BarChart from '../components/graphs/BarChart'

const InfoRad = () => (
  <Layout title="InfoRad" hideNav>
<div className="bg-gray-900 flex h-screen">
      <div className="text-white grid gc-2 gc-gap-6 gr-gap-6 m-6 w-full">
        <div className="flex flex-col rounded py-4 px-4" style={{backgroundColor: "rgba(255, 255, 255, 0.05)"}}>
          <h3 className="text-sm font-medium rounded py-2 px-4 mr-auto" style={{backgroundColor: "rgba(255, 255, 255, 0.05)"}}>Predicted vs Actual Funding Rate</h3>
          <br/>
          <div className="flex">
            <LineChart/>
            <div className="flex flex-col mx-8">
              <div className="mb-10">
                <h3 className="text-xl font-medium">$15,000</h3>
                <small className="text-gray-600">Metric #1</small>
                <br/>
                <small className="text-green-400">+ 50%</small>
              </div>
              <div className="mb-10">
                <h3 className="text-xl font-medium">78.6%</h3>
                <small className="text-gray-600">Model Accuracy</small>
              </div>
              <div className="mb-10">
                <h3 className="text-xl font-medium">$10,000</h3>
                <small className="text-gray-600">Metric #3</small>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded py-4 px-4" style={{backgroundColor: "rgba(255, 255, 255, 0.05)"}}>
          <h3 className="text-sm font-medium rounded py-2 px-4 mr-auto" style={{backgroundColor: "rgba(255, 255, 255, 0.05)"}}>Net Funding Rates</h3>
          <div className="flex items-center justify-center flex-grow">
            <div className="text-center m-20">
              <h1 className="text-4xl font-bold">6.2%</h1>
              <small className="text-gray-600">Lending Interest Rate</small>
              <br/>
              <p className="text-green-400 mt-2">+ 5.5%</p>
            </div>
            <div className="text-center m-24">
              <h1 className="text-4xl font-bold">9.4%</h1>
              <small className="text-gray-600">Annualised Av Funding Rate</small>
              <br/>
              <p className="text-red-500 mt-2">- 1.24%</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded py-4 px-4" style={{backgroundColor: "rgba(255, 255, 255, 0.05)"}}>
          <h3 className="text-sm font-medium rounded py-2 px-4 mr-auto" style={{backgroundColor: "rgba(255, 255, 255, 0.05)"}}>Predicted vs Actual BTC Price</h3>
           <br/>
          <LineChartBtc/>
        </div>
        <div className="flex flex-col rounded py-4 px-4 bg-gray-800" style={{backgroundColor: "rgba(255, 255, 255, 0.05)"}}>
          <h3 className="text-sm font-medium rounded py-2 px-4 mr-auto" style={{backgroundColor: "rgba(255, 255, 255, 0.05)"}}>Asset Options</h3>
           <br/>
          <div className="grid gc-2 gc-gap-10 gr-gap-10">
            <div className="rounded bg-gray-800 p-4" style={{backgroundColor: "rgba(255, 255, 255, 0.05)"}}>
              <h3 className="text-gray-500 mb-2">Asset #1</h3>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold">USDC</h1>
                <p className="font-bold text-red-500 mt-2 ml-auto rounded bg-gray-800 px-2 py-1">- 1.24%</p>
              </div>
            </div>    
            <div className="rounded bg-gray-800 p-4" style={{backgroundColor: "rgba(255, 255, 255, 0.05)"}}>
              <h3 className="text-gray-500 mb-2">Asset #2</h3>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold">BTC</h1>
                <p className="font-bold text-red-500 mt-2 ml-auto rounded bg-gray-800 px-2 py-1">- 1.24%</p>
              </div>
            </div>    
            <div className="rounded bg-gray-800 p-4" style={{backgroundColor: "rgba(255, 255, 255, 0.05)"}}>
              <h3 className="text-gray-500 mb-2">Asset #3</h3>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold">USDT</h1>
                <p className="font-bold text-red-500 mt-2 ml-auto rounded bg-gray-800 px-2 py-1">- 1.24%</p>
              </div>
            </div>               
            <div className="rounded bg-gray-800 p-4" style={{backgroundColor: "rgba(255, 255, 255, 0.05)"}}>
              <h3 className="text-gray-500 mb-2">Asset #4</h3>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold">XRP</h1>
                <p className="font-bold text-red-500 mt-2 ml-auto rounded bg-gray-800 px-2 py-1">- 1.24%</p>
              </div>
            </div>                        
          </div>
          <Link href="/portal">
            <button className="mt-auto bg-red-300 text-gray-900 font-bold py-2 px-4 rounded">← Back Home</button>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default InfoRad