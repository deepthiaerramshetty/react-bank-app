import React from "react"
import { useNavigate } from 'react-router-dom';

export const AccountDetails=(props)=> {
    const navigate=useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        navigate('/creditcardpayment');
    }

    return (
        <div className="ui main">
            <h2>Account Details</h2>
            <h4>Hello User</h4>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <div>Checking</div>
                    {/*   <div>{accounts.checkingBalance}</div>*/}
                    <div>20000</div>
                </div>
                <div className="field">
                    <div>Savings</div>
                    {/*    <div>{accounts.savingsBalance}</div>*/}
                    <div>30000</div>

                </div>
                <div className="field">
                    <div>Credit Card</div>
                    {/*  <div>{accounts.creditcardBalance}</div>*/}
                    <div>500</div>
                </div>
                <div className="links">

                    <button type="submit" value="Login" className="ui button blue" >Make creditcardpayment</button>
                </div>
            </form>
        </div>
    )
}
