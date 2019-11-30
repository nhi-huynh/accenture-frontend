import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import LineChart from '../components/graphs/LineChart'
import BarChart from '../components/graphs/BarChart'

const InfoRad = () => (
  <Layout title="InfoRad" hideNav>
<div className="bg-gray-900 flex h-screen">
      <div className="text-white grid gc-2 gc-gap-6 gr-gap-6 m-6 w-full">
        <div className="flex flex-col rounded py-4 px-4" style={{backgroundColor: "rgba(255, 255, 255, 0.05)"}}>
          <h3 className="text-sm rounded py-2 px-4 mr-auto" style={{backgroundColor: "rgba(255, 255, 255, 0.05)"}}>Varying Interest Rates</h3>
          <br/>
          <div className="flex">
            <LineChart/>
            <div className="flex flex-col mx-8">
              <div className="mb-10">
                <h3 className="text-xl">$15,000</h3>
                <small className="text-gray-600">Metric #1</small>
                <br/>
                <small className="text-green-400">+ 50%</small>
              </div>
              <div className="mb-10">
                <h3 className="text-xl">78.6%</h3>
                <small className="text-gray-600">Model Accuracy</small>
              </div>
              <div className="mb-10">
                <h3 className="text-xl">$10,000</h3>
                <small className="text-gray-600">Metric #3</small>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded py-4 px-4" style={{backgroundColor: "rgba(255, 255, 255, 0.05)"}}>
          <h3 className="text-sm rounded py-2 px-4 mr-auto" style={{backgroundColor: "rgba(255, 255, 255, 0.05)"}}>Net Funding Rates</h3>
          <div className="flex items-center justify-center flex-grow">
            <div className="text-center m-20">
              <h1 className="text-4xl">$15,000</h1>
              <small className="text-gray-600">Metric #1</small>
              <br/>
              <p className="text-green-400">+ 50%</p>
            </div>
            <div className="text-center m-24">
              <h1 className="text-4xl">$15,000</h1>
              <small className="text-gray-600">Metric #2</small>
              <br/>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded py-4 px-4" style={{backgroundColor: "rgba(255, 255, 255, 0.05)"}}>
          <h3 className="text-sm rounded py-2 px-4 mr-auto" style={{backgroundColor: "rgba(255, 255, 255, 0.05)"}}>Customer Breakdown</h3>
           <br/>
          <BarChart/>
        </div>
        <div className="flex flex-col rounded py-4 px-4 bg-gray-800" style={{backgroundColor: "rgba(255, 255, 255, 0.05)"}}>
          <h3 className="text-sm rounded py-2 px-4 mr-auto" style={{backgroundColor: "rgba(255, 255, 255, 0.05)"}}>Account Metrics</h3>

          <Link href="/portal">
            <button className="mt-auto bg-red-300 text-gray-900 font-bold py-2 px-4 rounded">Back Home</button>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default InfoRad