import React, {Component} from 'react';
import axios from 'axios';

const ProductContext = React.createContext();

class ProductProvider extends Component{
    constructor(props){
        super(props);

        this.state = {
            profileUser:[], 
            currentProductId:'',
            allProducts:[],
            uploadImageError:'',
            activeProductPage:1,
            productOffset: 0,
            data: [],
            perProductPage: 5,
            currentProductPage: 0,
            productPageCount:5,
            userName:'',
            userEmail:'',
            userAvatar:'',
            showCurrentUserDropdown:false,
            activeProductPage:1,
            productOffset: 0,
            data: [],
            perProductPage: 5,
            currentProductPage: 0,
            productPageCount:2,
            productDetailModal:false,
            productTitle:'',
            productPriceRange:'',
            productDescription:'',
            productCategory:'',
            productImage:'',
            createdByName:'',
            singleProduct:this.getStorageProduct(),
            productBidModal:false,
            contactSellerModal:false,
            tempProductBidPrice:'',
            tempContactMessage:'',
            tempContactHeading:'',
            tempContactMessageError:'',
            tempContactHeadingError:'',
            tempProductBidPriceError:'',
            modalProduct:{},
            bidSent:false,
            contactMessageSent:false,
            
            
          
 
            
        
        }
         //bind
         this.handleLogOutSubmit = this.handleLogOutSubmit.bind(this);
         this.toggleUserDropdown = this.toggleUserDropdown.bind(this);
         this.handleProductPageClick = this.handleProductPageClick.bind(this);
         this.openProductDetailModal = this.openProductDetailModal.bind(this);
         this.closeProductDetailModal = this.closeProductDetailModal.bind(this);
         this.openSingleProductPage = this.openSingleProductPage.bind(this);
         this.closeProductBidModal = this.closeProductBidModal.bind(this);
         this.openProductBidModal = this.openProductBidModal.bind(this);
         this.openContactSellerModal = this.openContactSellerModal.bind(this);
         this.closeContactSellerModal = this.closeContactSellerModal.bind(this);
         this.handleProductBidSubmit = this.handleProductBidSubmit.bind(this);
         this.handleProductBidPriceChange = this.handleProductBidPriceChange.bind(this);
         this.handleContactMessageChange = this.handleContactMessageChange.bind(this);
         this.handleContactHeadingChange = this.handleContactHeadingChange.bind(this);
         this.handleContactSellerSubmit = this.handleContactSellerSubmit.bind(this);
     


    }
    /* start of pagination */
    handleProductPageClick(e){
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perProductPage;
        
        this.setState({
            currentProductPage: selectedPage,
            productOffset: offset,
            productPageCount: Math.ceil(this.state.allProducts.length / this.state.perProductPage),
        })
        
    
    };
    /* end of pagination*/
    /* bid modal */
    openProductBidModal(id){
        let product = this.state.allProducts.find(item => item.id === id);
        let productId = product.id
        this.setState({
            productBidModal:true,
            modalProduct:product,
            currentProductId:productId,
            bidSent:false,
        })
    }
    closeProductBidModal(){
        this.setState({
            productBidModal:false,

        })
    }
    handleProductBidPriceChange(e){
        this.setState({
            tempProductBidPrice:e.target.value
        })
    }
    handleProductBidSubmit(e){
        e.preventDefault();
        let id = this.state.currentProductId;
        let product = this.state.allProducts.find(item => item.id === id);
        let productTitle = product.title;

        // localStorage.setItem('singleProduct', JSON.stringify(product));
        
        const data = {
            productTitle:productTitle,
            priceRange:product.priceRange,
            productDescription:product.description,
            categoryTitle:product.category_title,
            sellerEmail:product.created_by_email,
            sellerName:product.created_by_name,
            bidPrice:this.state.tempProductBidPrice,
            bidRefNo:product.bid_ref_no
        }
        axios.post('/bid-product', data).then(response =>{
            if(response.data.errors){
                if(response.data.errors.bidPrice){
                    this.setState({
                        tempProductBidPriceError:response.data.errors.bidPrice
                    })
                }
            }else{
                this.setState({
                         
                    // singleProduct:product,
                    tempProductBidPriceError:'',
                    tempProductBidPrice:'',
                    bidSent:true,
                })
                // setTimeout(() => {
                //     this.setState({
                         
                //         // singleProduct:product,
                //         tempProductBidPriceError:'',
                //         bidSent:true,
                //     })
                //     window.location.href = '/products/'+ productTitle;
                // }, 1000);
            }
        })
    }
    /* end of bid modal */

    /* contact modal */
    openContactSellerModal(id){
        let product = this.state.allProducts.find(item => item.id === id);
        let productId = product.id;

        this.setState({
            contactSellerModal:true,
            modalProduct:product,
            currentProductId:productId,
            contactMessageSent:false,
        })
    }
    closeContactSellerModal(){
        this.setState({
            contactSellerModal:false,
        })
    }
    handleContactMessageChange(e){
        this.setState({
            tempContactMessage:e.target.value
        })
    }
    handleContactHeadingChange(e){
        this.setState({
            tempContactHeading:e.target.value
        })
    }
    handleContactSellerSubmit(e){
        e.preventDefault();
        let id = this.state.currentProductId;
        let product = this.state.allProducts.find(item => item.id === id);
        let productTitle = product.title;

        const data = {
            message:this.state.tempContactMessage,
            subject:this.state.tempContactHeading,
            sellerEmail:product.created_by_email,
            sellerName:product.created_by_name,
        }
        axios.post('/contact', data).then(response =>{
            if(response.data.errors){
                if(response.data.errors.message){
                    this.setState({
                        tempContactMessageError:response.data.errors.message
                    })
                }else{
                    this.setState({
                        tempContactMessageError:''
                    })
                }
                if(response.data.errors.subject){
                    this.setState({
                        tempContactHeadingError:response.data.errors.subject
                    })
                }else{
                    this.setState({
                        tempContactHeadingError:''
                    })
                }
            }else{
                this.setState({
                         
                    // singleProduct:product,
                    tempContactHeadingError:'',
                    tempContactMessageError:'',
                    tempContactMessage:'',
                    tempContactHeading:'',
                    contactMessageSent:true,
                })
                // setTimeout(() => {
                //     this.setState({
                         
                //         // singleProduct:product,
                //         tempProductBidPriceError:'',
                //         bidSent:true,
                //     })
                //     window.location.href = '/products/'+ productTitle;
                // }, 1000);
            }
        })
    }

    /* end of contact modal */
    
   
  
    openSingleProductPage(id){
        let product = this.state.allProducts.find(item => item.id === id);

        let productId = product.id;
        let productTitle = product.title;
        let productDescription = product.description;
        let productCategory = product.category_title;
        let productPriceRange = product.priceRange;
        let productImage = product.productImageTwo;
        let createdByName = product.created_by_name;
      
    
        localStorage.setItem('singleProduct', JSON.stringify(product));
        
        setTimeout(() => {
            this.setState({
                productTitle:productTitle,
                productPriceRange:productPriceRange,
                productDescription:productDescription,
                productCategory:productCategory,
                productImage:productImage,
                createdByName:createdByName,
                currentProductId:productId,
                singleProduct:product
            })
            window.location.href = '/products/'+ productTitle;
        }, 1000);
    }
    // get single product from local storage
    getStorageProduct(){

        return localStorage.getItem('singleProduct')? JSON.parse(localStorage.getItem('singleProduct')):[];
    }
    openProductDetailModal(id){
        let product = this.state.allProducts.find(item => item.id === id);
        // let productId = product.id;
        let productTitle = product.title;
        let productDescription = product.description;
        let productCategory = product.category_title;
        let productPriceRange = product.priceRange;
        let productImage = product.productImageTwo;
        let createdByName = product.created_by_name;
        this.setState({
            productDetailModal:true,
            productTitle:productTitle,
            productPriceRange:productPriceRange,
            productDescription:productDescription,
            productCategory:productCategory,
            productImage:productImage,
            createdByName:createdByName,
            // currentProductId:productId,
        })
    }
    closeProductDetailModal(){
        this.setState({
            productDetailModal:false,
            productTitle:'',
            productPriceRange:'',
            productDescription:'',
            productCategory:'',
        })
    }
    toggleUserDropdown(){
        this.setState((currentState) => ({
            showCurrentUserDropdown: !currentState.showCurrentUserDropdown, 
        }));
     }
    handleLogOutSubmit(e){
        e.preventDefault();
         const data = {
             userName:this.state.userName
         }
        axios.post('/sign-out', data).then(response => {
            if(response.data.success){
                setTimeout(() => {
                    window.location.href = '/';
                }, 1000);
                
            }else{
                console.log(response.data.errors)
            }
        })
    }
    getProfile(){
        return axios.get('/profileUser');
    }
    getAllProducts(){
        return axios.get('/product-data');
    }
    getItems(){


        axios.all([this.getProfile(), this.getAllProducts() ]).then(axios.spread((profileUserResponse,  productResponse)=>{
               this.setState(()=>{
                   return(
                       {
                        userName:profileUserResponse.data.user.name,
                        userEmail:profileUserResponse.data.user.email,
                        userAvatar:profileUserResponse.data.user.avatar,
                        allProducts:productResponse.data.products,
                       }
                   )
               }, ()=>{
                 this.getStorageProduct()
               })
               
        }));
    }
    componentDidMount(){
      
       this.getItems();
    }

    render(){
        return(
            <ProductContext.Provider value={{
                ...this.state,
                // getAuthenticatedUser:this.getAuthenticatedUser,
                handleLogOutSubmit:this.handleLogOutSubmit,
                toggleUserDropdown:this.toggleUserDropdown,
                handleProductPageClick:this.handleProductPageClick,
                openProductDetailModal:this.openProductDetailModal,
                closeProductDetailModal:this.closeProductDetailModal,
                openSingleProductPage:this.openSingleProductPage,
                openProductBidModal:this.openProductBidModal,
                closeProductBidModal:this.closeProductBidModal,
                openContactSellerModal:this.openContactSellerModal,
                closeContactSellerModal:this.closeContactSellerModal,
                handleContactHeadingChange:this.handleContactHeadingChange,
                handleContactMessageChange:this.handleContactMessageChange,
                handleContactSellerSubmit:this.handleContactSellerSubmit,
                handleProductBidPriceChange:this.handleProductBidPriceChange,
                handleProductBidSubmit:this.handleProductBidSubmit,
               
                
            }}> 
              {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer}