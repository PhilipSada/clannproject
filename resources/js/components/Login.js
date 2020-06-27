import React from 'react';
import {ProductConsumer} from '../Context';

const Login = ()=>(
    <ProductConsumer>
        {
            value =>{
                const{handleRegisteredEmailChange,handleRegisteredPasswordChange, loginEmail,loginPassword, handleSubmitLogin, 
                    loginError, loginInMessage, isLoggedIn} = value
                return(
                    <div> 
                        
                        <div>
                            <form onSubmit={handleSubmitLogin} className="user-form">
                                <h3 className="pb-3">Checkout as a member</h3>
                                {
                                    isLoggedIn?<div>
                                        <p className="alert alert-success">Login Successful, please <a href="/checkout" className="more-shopping-btn">click here </a>if you're ready to make payment</p>
                                    </div>:null
                                }
                                <p className="login-error">{loginError}</p>
                               
                                    <input type="email" value={loginEmail} onChange={handleRegisteredEmailChange} placeholder="Enter email" />
                               
                                    <input type="password" value={loginPassword} onChange={handleRegisteredPasswordChange} placeholder="Enter password" />
                               
                                
                                  <button type="submit">Log in</button>
                                 <p className="forgot-password text-right">
                                    Not Registered <a href="/register" className="link-account">register here?</a>
                                </p>
                            </form>
                        </div>
                    </div>
                )
            }
        }
    </ProductConsumer>
)

export default Login;