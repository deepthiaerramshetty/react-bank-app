import React from "react"

export default function AccountDetails (props){
   // const renderAmount = props.accounts.map((account) =>{

        return(
        <div className="ui main">
            <h2>Account Details</h2>
            <h4>Hello User</h4>
            <form className="ui form">
                <div className="field">
                    <div>Checking</div>
                    <div>{props.checkingBalance}</div>
                </div>
                <div className="field">
                    <div>Savings</div>
                    <div>{props.savingsBalance}</div>

                </div>
                <div className="field">
                    <div>Credit Card</div>
                    <div>{props.creditcardBalance}</div>
                </div>

            </form>
        </div>
        )
    
   // return <div className = "ui celled list"> {renderAmount}</div>
}
