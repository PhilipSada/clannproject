// import React from 'react';
// import ReactDOM from 'react-dom';
// import {ProductProvider, ProductConsumer} from '../Context';
// import Register from '../components/Register';
// import Login from '../components/Login';
// import Overlay from '../components/Overlay';

// const SignInPage = ()=>(
//     <ProductConsumer>
//         {
//             value => {
//                 const{rightPanelActive}=value;

//                 return(
//                 <div className={rightPanelActive ? "main-container right-panel-active" : "main-container"}>
//                     <div className="form-container sign-up-container">
//                           <Register/>
//                    </div>
//                    <div className="form-container sign-in-container">
//                         <Login/>
//                   </div>
//                   <div className="overlay-container">
//                         <Overlay/>
//                   </div>
//                 </div>
//                 )
//             }
//         }
        
        
        
//     </ProductConsumer>
// )

// if(document.getElementById('signUp')){
//     ReactDOM.render(<ProductProvider> <SignInPage /></ProductProvider>, document.getElementById('signUp'));
// }