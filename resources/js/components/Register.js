import React from 'react';
import {ProductConsumer} from '../Context';

const Register = ()=>(
    <ProductConsumer>
        {
            value =>{
                const{firstname, lastname, email, password, handleFirstNameChange,handleLastNameChange,handlePasswordChange,
                    handleEmailChange, handleSubmitRegistration,  regPasswordError, regFirstNameError, regLastNameError,  regEmailError, regSuccessMessage} = value;
                return(
                    <div> 
                        <div>
                           <form onSubmit={handleSubmitRegistration} className="user-form">
                                <h3 className="pb-3">Create an account</h3>
                                {/* {
                                    regSuccessMessage? <p className="reg-success-message alert alert-success">{regSuccessMessage}</p>:null
                                } */}
                                
                                
                                     <p>{regFirstNameError} </p>
                                    <input type="text"  name="firstname" value={firstname} onChange={handleFirstNameChange} placeholder="John" />
                               
                               
                                    <p>{regLastNameError} </p>
                                    <input type="text"  name="lastname" value={lastname} onChange={handleLastNameChange} placeholder="Doe" />
                             
                                    <p>{regEmailError} </p>
                                    <input type="email"  name="email" value={email} onChange={handleEmailChange} placeholder="johndoe@yahoo.com" />

                                
                                   <p>{regPasswordError} </p>
                                    <input type="password"  name="password" value={password} onChange={handlePasswordChange} placeholder="password" />
                             
                                <button type="submit">Register</button>
                               
                           </form>
                        </div>
                    </div>
                )
            }
        }
    </ProductConsumer>
);

export default Register;