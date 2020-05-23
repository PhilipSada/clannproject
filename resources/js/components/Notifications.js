import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Notifications extends Component {

    constructor(props){
        super(props);
        this.state = {
            text:'',
            posts:[],
            // loading:false
        };
       
        //bind method to the app class
        
        

    }
   
    
    componentDidMount(){
       
       Echo.private('product-review-channel').listen('AwaitingProductReviewEvent', (e)=>{
            //  if(window.Laravel.user.following.includes(e.post.user_id)){
            //     this.setState({posts:[e.post, ...this.state.posts]});
            //  }
            console.log(e);
            this.setState({
                posts:[e.message, ...this.state.posts]
            })
        
       });
    }
 
    render(){
        return (
            <div className="container">
                <div>
                    {this.state.posts.map(post => <div>
                        <div>
                           <h4>{post}</h4>
                        </div>
                    </div>)}
                </div>
            </div>
        );

    }
   
}


export default Notifications;

if (document.getElementById('notifications')) {
    ReactDOM.render(<Notifications />, document.getElementById('notifications'));
}
