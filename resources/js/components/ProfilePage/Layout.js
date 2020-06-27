import React from 'react';
import {ProfileConsumer} from '../../ProfileContext';
import ProfileSummaryCard from './ProfileSummaryCard';
import ColumnLayoutOne from './ColumnLayoutOne';


const Layout= ()=>(
    <ProfileConsumer>
        {
            value =>{
                const{ columnLayoutOne,  columnLayoutTwo, profileUser}=value;

                return(
                    <>
                      
                      {
                        columnLayoutOne && <div>
                            <ColumnLayoutOne/> 
                        </div>
                            
                        
                      }
                      
                    </>
                  
                )
            }
        }
    </ProfileConsumer>
)

export default Layout;