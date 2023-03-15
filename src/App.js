import React from "react"
import './components/App.css'
import Login from "./components/Login"
import AccountDetails from "./components/AccountDetails"
import CreditCardPayment from "./components/CreditCardPayment"
import PaymentConfirmation from "./components/PaymentConfirmation"
export default function App() {
  return (
    <div className="ui cotainer" >
     <Login />
   {/*<AccountDetails accounts={accounts} /> */}
   <AccountDetails 
   checkingBalance = {10000}
   savingsBalance= {20000}
   creditcardBalance= {200} 
   /> 
    <CreditCardPayment /> 
    <PaymentConfirmation /> 
  </div>
  )
}


