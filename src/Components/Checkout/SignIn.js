import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function SignIn() {
    // const submitHandler = (e) =>{
    //     e.prevenDefault() //when clicking, this form will not refresh
    // }
    // submitHandler()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <form className="form" >
                {/* onSumbit={sumbitHandler} */}
                <div>
                    <h2>Sign In</h2>
                </div>
                <div>
                    <label>Email address</label>
                    <input type="email" id="email" placeholder="Enter email" required ></input>
                    {/* onChange={(e) =>setEmail(e.target.value)} */}
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" id="password" placeholder="Enter password" required ></input>
                    {/* onChange={(e) =>setPassword(e.target.value)} */}
                </div>
                <div>
                    <label/>
                    <input type="button" type="submit">Sign In</input>
                </div>
                <div>
                    <label/>
                    <div>
                       New to our site? {' '}
                       <Link to="/register">Create your account</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
