import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import NumberFormat from 'react-number-format'
import fetch from 'isomorphic-unfetch'


/**
* The app portal page, designed to demo the DeFi account system.
**/

const accountId = "A001"

/* Portal Component */

const Portal = props => {
  return (
    <Layout title="Portal">
      <Header user={props.user} account={props.account} />
      <Asd/>
      <SaverSection/>
      <DeFiDeposit/>
    </Layout>
  )
}

/* Fetching required account & user data asynchronously. */

Portal.getInitialProps = async function() {
  // Account Data
  const accRes = await fetch('http://127.0.0.1:5000/accounts/' + accountId)
  const accData = await accRes.json()

  // User Data
  const userRes = await fetch('http://127.0.0.1:5000/users/' + accData.user_id)
  const userData = await userRes.json()

  return {
    user: userData,
    account: accData
  }
}

/* Header Component */

const Header = ({user, account}) => {
  return (
  <div className="bg-red-300 header-background">
    <div className="container pt-12 sm:pt-18 pb-10 sm:pb-20 px-6 mx-auto flex">
      <div className="mb-4 flex w-full">
        <div>
          <h1 className="text-4xl font-bold">Welcome, {user.first_name}.</h1>
          <p>Your current account balance is <span className="font-bold">${account.current_balance}</span></p>
        </div>
        <div className="ml-auto text-right">
          <h1 className="text-4xl font-bold">${account.current_balance}</h1>
          <p>Available</p>
        </div>
      </div>
    </div>
  </div>
  )
}

/* Splitter Component */
const Asd = () =>
  <div className="bg-gray-900 text-white ">
    <div className="mx-auto container px-4 py-6">
      <div className="px-3 flex items-center w-full">
        <div className="text-sm">
          <span className="mr-5">You were last paid <span className="font-bold text-green-300">+$0.5</span> interest on the <span className="font-bold">30th of December</span></span>
        </div>
        <div className="text-sm ml-auto font-medium">
          <span className=" mr-2">Support</span>
          <span className="bg-red-300 text-gray-900 px-1 rounded">4</span>
        </div>
      </div>
    </div>
  </div>

// Sample saver accounts.
const accountList = [
  {
    vendor: "Everyday",
    price: "32.0",
    time: "$10.50",
    location: "at Woolworths"
  },
  {
    vendor: "DeFi Saver",
    price: "0.0",
    time: "3 months",
    location: "until closure"
  },
  {
    vendor: "Hawaii Trip",
    price: "32.0",
    time: "5%",
    location: "of your goal reached"
  }
]

/* Component to show all of the user's savers. */
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
          <div className="flex items-center mb-2">
            <div className="bg-gray-900 rounded-sm w-10 h-10 mr-2 flex items-center justify-center">
              <h3 className="text-white font-medium tracking-wide">PS</h3>
            </div>
            <div>
              <h3 className="font-bold">{transaction.vendor}</h3>
              <h3>${transaction.price}</h3>
            </div>
          </div>
          <small><span className="font-medium">{transaction.time}</span> {transaction.location}</small>
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
    isActive: true,
    accBalance: "$0.00",
    depositPending: false,
    depositActive: false
  }

  initDeposit(accBalance) {

    const asd = {
      account_id: "A001",
      active: true,
      avg_interest_rate: "8.5",
      current_balance: "1100",
      current_interest_rate: "10",
      duration: "365",
      hedge_id: "H001",
      initial_deposit: "500",
      interest_paid_to_date: "0",
      loan_id: "L001",
      user_id: "U001"
    }

    console.log("acc")
    console.log(accBalance)

    this.setState({depositPending: true})
  }

  depositSuccess() {
    this.setState({depositActive: true})
  }

  updateAccountBalance(e) {
    console.log(e)
    this.setState({accBalance: e.target.value})
  }

  render () {
    return (
      <div className="bg-gray-900 text-white">
        <div className="container pt-24 sm:pt-18 pb-12 sm:pb-24 px-6 mx-auto flex items-center">
          <div className="flex-initial mr-12">
          <h3 className="font-medium">Selected Saver:</h3>
          <br/>
            <div className="cursor-pointer p-4 border border-white bg-white hover:bg-gray-300 mh-12 w-64 text-gray-900 rounded mb-4">
              <div className="flex items-center">
                <div className="bg-gray-900 rounded-sm w-10 h-10 mr-2 flex items-center justify-center">
                  <h3 className="text-white font-medium tracking-wide">DS</h3>
                </div>
                <div>
                  <h3 className="font-bold">DeFi Saver</h3>
                  <h3>{this.state.accBalance}</h3>
                </div>
              </div>
            </div>
            <div className="cursor-pointer p-4 py-2 border border-white bg-white hover:bg-gray-300 mh-12 w-64 text-gray-900 rounded flex items-center">
              <small className="font-medium">Interest Rate:</small>
              <small className="text-green-500 font-medium text-lg ml-auto">15.6%</small>
            </div>
            <br/>
            <div className="rounded-lg bg-gray-800 text-base font-medium py-3 px-4 flex">
              Compounding:
              {
                this.state.isActive ?
                <button onClick={() => this.setState({isActive: false})} className="ml-auto rounded-full flex items-center cursor-pointer w-12 bg-green-500 justify-end">
                  <span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"></span>
                </button>
                :
                <button onClick={() => this.setState({isActive: true})} className="ml-auto rounded-full flex items-center cursor-pointer w-12 bg-gray-700 justify-start">
                  <span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"></span>
                </button>
              }
            </div>
          </div>
          <div className="flex-initial">
           {
             !this.state.depositPending ? (
            <div>
              <h2 className="text-3xl font-bold">DeFi Deposit</h2>
              <small className="text-gray-500">Initiate a term deposit at a higher interest rate</small>
            </div>
            )
             :
             (
               <div>
              <h2 className="text-3xl font-bold">6 months remaining</h2>
              <small className="text-gray-500">You can withdraw your deposit in 6 months.</small>
            </div>)
            }
            <br/>
           {
             !this.state.depositPending ? (
             <>
              <NumberFormat 
                customInput={Input} 
                onChange={(e) => this.updateAccountBalance(e)}
                displayType={'input'}
                decimalScale={1}
                thousandSeparator={true} 
                fixedDecimalScale={true}
                prefix={'$'}
              />
              
              <br/>
              <div>
                <button className="bg-red-300 text-gray-900 font-bold py-2 px-4 rounded" onClick={() => this.initDeposit(this.state.accBalance)}>New Deposit +</button>
                <small className="ml-6 text-gray-600">There is a minimum deposit of $50.0.</small>
              </div>
              </>
              )
              : (
                  <></>
                )
          }
          </div>
          { this.state.depositPending ? (
              !this.state.depositActive ? (
              <div className="flex-initial w-full">
              
                <div className="rounded-lg border-yellow-400 border-2 px-4 py-4 w-full">
                  <div className="flex">
                    <p className="text-2xl font-medium">$500.0</p>
                    <button className="font-bold ml-auto rounded bg-yellow-400 px-2 py-1 text-sm text-gray-900" onClick={() => this.depositSuccess()}>Pending</button>
                  </div>
                  <br/>
                  <div>
                    <h1 className="font-bold text-5xl text-yellow-400">6.2%<span className="text-xl"> + 9.4%</span></h1>
                    <h3 className="font-bold text-xl">Annual Interest Rate*</h3>
                  </div>
                </div>
                <br/>
              </div>
               )
              : 
               (
                 <div className="flex-initial w-full">
              
                <div className="rounded-lg border-green-400 border-2 px-4 py-4 w-full">
                  <div className="flex">
                    <p className="text-2xl font-medium">$500.0</p>
                    <button className="font-bold ml-auto rounded bg-green-400 px-2 py-1 text-sm text-gray-900">Active</button>
                  </div>
                  <br/>
                  <div>
                    <h1 className="font-bold text-5xl text-green-400">6.2%<span className="text-xl"> + 9.4%</span></h1>
                    <h3 className="font-bold text-xl">Annual Interest Rate*</h3>
                  </div>
                </div>
                <br/>
              </div>
              )
              )
            :
              (
                <></>
              )
          }
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