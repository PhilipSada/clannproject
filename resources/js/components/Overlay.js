// import React from 'react';
// import {ProductConsumer} from '../Context';

// const Overlay = ()=>(
//     <ProductConsumer>
//         {
//             value => {
//                 const {removeRightPanelActive, makeRightPanelActive} = value;

//                 return(
                    
//                          <div className="overlay">
//                             <div className="overlay-panel overlay-left">
//                                <h1>Welcome Back!</h1>
//                                 <p>
//                                     To stay connected with us please login with your personal info
//                                 </p>
//                                 <button className="ghost" id="signIn" onClick={removeRightPanelActive}>Sign In</button>
//                             </div>
//                             <div className="overlay-panel overlay-right">
//                                <h1>Hello, Neighbour!</h1>
//                                <p>Sign up and discover the great opportunities in your neighbourhood</p>
//                                 <button className="ghost" id="signUp" onClick={makeRightPanelActive}>Sign Up</button>
//                             </div>
//                         </div>
                    
//                 )
//             }
//         }
//     </ProductConsumer>
// )

// export default Overlay;