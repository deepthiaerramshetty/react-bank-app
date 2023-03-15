import React from 'react'

export default function CreditCardPayment() {
    return (
        <div className="ui container center">
             <form className="ui form">
                <div className="field">
                    <label>Payment Made to CC</label>
                    <input type = "text" name ="Payment Made to CC" placeholder="Payment Made to CC"></input>
                </div>
                <div className="field">
                    <label>From Account</label>
                    <input type = "text" name ="From Account" placeholder="From Account"></input>
                </div>
                <button className="ui button blue">Pay</button>

            </form>

        </div>
    )
}

