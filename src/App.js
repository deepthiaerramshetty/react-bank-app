import React, {useState} from "react"
import './components/App.css'
import {Login} from "./components/Login"
import {AccountDetails} from "./components/AccountDetails"
import {CreditCardPayment} from "./components/CreditCardPayment"
import {PaymentConfirmation} from "./components/PaymentConfirmation"
import { BrowserRouter, Routes , Route} from "react-router-dom"

function App(){
  return (
  <div className="ui cotainer" >
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Login/>}></Route>
        <Route path ="/accountdetails" element={<AccountDetails/>}></Route>
        <Route path ="/creditcardpayment" element={<CreditCardPayment/>}></Route>
        <Route path ="/paymentconfirmation" element={<PaymentConfirmation/>}></Route>
      </Routes>
      </BrowserRouter>

  </div>
  );
  }
  export default App;