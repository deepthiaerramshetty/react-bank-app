import React, {useState, useEffect} from 'react';
import {AccountDetails} from "./AccountDetails";
import './App.css';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

export const Login=()=> {
    
    const initialValues = {userName:"", password :""}
    const [formValues, setFormValues] = useState(initialValues);
    const [users, setUsers] = useState([])

    const navigate=useNavigate();

    const handleChange=(event)=>{
        //console.log(event.target);
        const{name, value} = event.target;
        setFormValues({...formValues, [name]: value});
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        navigate('/accountdetails');
        console.log(formValues);
    }
    
    const fetchData = () => {
          fetch("http://localhost:8000/users/")
            .then(response => {
              return response.json();
            })
            .then(data => {
              setUsers(data);
              console.log(data);
              console.log("infetch method can I print username from"+data[0].userName)
            })
        }
      
        useEffect(() => {
          fetchData();
        }, [])
    
    const validate=()=>{
        console.log("trying to use fetchdata and print username in validate"+users[0].password)
    }

    return (

        <div className="ui fixed menu">
            <h2>Login</h2>
            <div className="ui container center">

                <form class="needs-validation" onSubmit={validate}>
                    <div class="form-group was-validated">
                        <label class="form-label" htmlFor="userName">UserName</label>
                        <input class="form-control" type="text" name="userName" onChange={handleChange} value={formValues.userName}/>
                        <div class="invalid-feedback">Please enter your username</div>
                    </div>
                    <div class="form-group was-validated">
                        <label class="form-label" htmlFor="password">Password</label>
                        <input class="form-control" type="password" name="password" onChange={handleChange} value={formValues.password}/>
                        <div class="invalid-feedback">Please enter your password</div>
                    </div>
                    <button class="btn btn-success w-100" type="submit" value="Login">Login</button>

                </form>
            </div>
        </div>
    );

}

