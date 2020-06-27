import React, {Component} from 'react';
import axios from 'axios';
import {base64StringtoFile,downloadBase64File,extractImageFileExtensionFromBase64 } from './reusable-functions';
import { FaTheRedYeti } from 'react-icons/fa';

const ProfileContext = React.createContext();

class ProfileProvider extends Component{
    constructor(props){
        super(props);
        // this.imagePreviewCanvasRef = React.createRef()
        this.state = {
            profileUser:[],
            createdProductsOpen:false,
            approvedProductsOpen:false,
            bidsReceivedOpen:false,
            bidsSentOpen:false,
            createdProducts:[],
            approvedProducts:[],
            bidsReceived:[],
            bidsSent:[],
            profileImageModal:false,
            imageMaxSize:10000000,
            imageSrc:null,
            productImageSrc:null,
            imageCanvasRef:this.imagePreviewCanvasRef,
            upImg:null,
            imgSrcExt:null,
            productImgSrcExt:null,
            crop:{
                unit: '%',
                width: 70,
                height: 70,

            },
            croppedImageUrl:null,
            singleProductCroppedImageUrl:null,
            tempProfileSummary:'',
            profileSummaryModal:false,
            profileSummaryError:'',
            profileSummary:'',
            jobModal:false,
            tempUserName:'',
            tempUserEmail:'',
            tempUserOccupation:'',
            tempUserOtherOccupation:'',
            tempUserEstate:'',
            tempUserOtherEstate:'',
            tempUserResidentStatus:'',
            tempUserNameError:'',
            tempUserEmailError:'',
            tempUserOccupationError:'',
            tempUserOtherOccupationError:'',
            tempUserEstateError:'',
            tempUserOtherEstateError:'',
            tempUserResidentStatusError:'',
            userName:'',
            userEmail:'',
            userOccupation:'',
            userOtherOccupation:'',
            userEstate:'',
            userOtherEstate:'',
            userResidentStatus:'',
            userAvatar:'',
            personalInfoFormFilled:false,
            personalInfoModal:false,
            jobPostingModal:false,
            jobPostingFormFilled:false,
            myProductsModal:false,
            myProductsFormFilled:false,
            columnLayoutOne:true,
            columnLayoutTwo:false,
            profileMyProductsTab:true,
            profileMyJobsTab:false,
            profileMyBidsTab:false,
            productInformationTab:true,
            uploadProductImageTab:false,
            tempProductTitle:'',
            tempProductPriceRange:'',
            tempProductDescription:'',
            tempProductTitleError:'',
            tempProductPriceRangeError:'',
            tempProductCategoryError:'',
            tempProductDescriptionError:'',
            tempProductCategory:'',
            productCategories:[],
            tempProductImage:'',
            tempCreatedByName:'',
            currentProductId:'',
            myProducts:[],
            productInformationFormFilled:false,
            uploadProductImageFormFilled:false,
            imageHover:false,
            editProductInformationModal:false,
            changeProductImageModal:false,
            productDetailModal:false,
            productDeleteModal:false,
            showCurrentUserDropdown:false,
            uploadImageError:'',
            activeProductPage:1,
            productOffset: 0,
            data: [],
            perProductPage: 5,
            currentProductPage: 0,
            productPageCount:5,
            finalView:false,
            bidsReceived:[],
            bidsSent:[]
          
 
            
        
        }
         //bind
         this.openProfileImageModal = this.openProfileImageModal.bind(this);
         this.closeProfileImageModal = this.closeProfileImageModal.bind(this);
         this.onImageUploadChange = this.onImageUploadChange.bind(this);
         this.handleOnDrop = this.handleOnDrop.bind(this);
         this.handleOnCropChange = this.handleOnCropChange.bind(this);
         this.handleImageLoaded = this.handleImageLoaded.bind(this);
         this.handleOnCropComplete = this.handleOnCropComplete.bind(this);
         this.handleImageUpload = this.handleImageUpload.bind(this);
         this.handleClearToDefault = this.handleClearToDefault.bind(this);
         this.openProfileSummaryModal = this.openProfileSummaryModal.bind(this);
         this.closeProfileSummaryModal = this.closeProfileSummaryModal.bind(this);
         this.handleProfileSummaryChange = this.handleProfileSummaryChange.bind(this);
         this.handleProfileSummarySubmit = this.handleProfileSummarySubmit.bind(this);
         this.handleProfileSummaryEditChange = this.handleProfileSummaryEditChange.bind(this);
         this.handleProfileSummaryEditSubmit = this.handleProfileSummaryEditSubmit.bind(this);
         this.closePersonalInfoModal = this.closePersonalInfoModal.bind(this);
         this.openPersonalInfoModal = this.openPersonalInfoModal.bind(this);
         this.openJobPostingModal = this.openJobPostingModal.bind(this);
         this.closeJobPostingModal = this.closeJobPostingModal.bind(this);
         this.openMyProductsModal = this.openMyProductsModal.bind(this);
         this.closeMyProductsModal = this.closeMyProductsModal.bind(this);
         this.openProfileMyProductsTab = this.openProfileMyProductsTab.bind(this);
         this.openProfileMyBidsTab = this.openProfileMyBidsTab.bind(this);
         this.openProfileMyJobsTab = this.openProfileMyJobsTab.bind(this);
         this.handleUserNameChange = this.handleUserNameChange.bind(this);
         this.handleUserEmailChange = this.handleUserEmailChange.bind(this);
         this.handleUserOccupationChange = this.handleUserOccupationChange.bind(this);
         this.handleUserOtherOccupationChange = this.handleUserOtherOccupationChange.bind(this);
         this.handleUserEstateChange = this.handleUserEstateChange.bind(this);
         this.handleUserOtherEstateChange = this.handleUserOtherEstateChange.bind(this);
         this.handleUserResidentStatusChange = this.handleUserResidentStatusChange.bind(this);
         this.handlePersonalInfoSubmit = this.handlePersonalInfoSubmit.bind(this);
         this.openProductInformationTab = this.openProductInformationTab.bind(this);
         this.openUploadProductImageTab = this.openUploadProductImageTab.bind(this);
         this.handleProductTitleChange = this.handleProductTitleChange.bind(this);
         this.handleProductPriceRangeChange = this.handleProductPriceRangeChange.bind(this);
         this.handleProductCategoryChange = this.handleProductCategoryChange.bind(this);
         this.handleProductInformationSubmit = this.handleProductInformationSubmit.bind(this);
         this.handleProductDescriptionChange = this.handleProductDescriptionChange.bind(this);
         this.handleUploadProductImageSubmit = this.handleUploadProductImageSubmit.bind(this);
         this.handleProductImageUploadCheckSubmit = this.handleProductImageUploadCheckSubmit.bind(this);
         this.showImageOnMouseEnter = this.showImageOnMouseEnter.bind(this);
         this.showImageOnMouseLeave = this.showImageOnMouseLeave.bind(this);
         this.openEditProductInformationModal = this.openEditProductInformationModal.bind(this);
         this.closeEditProductInformationModal = this.closeEditProductInformationModal.bind(this);
         this.handleEditProductInformationSubmit = this.handleEditProductInformationSubmit.bind(this);
         this.openChangeProductImageModal = this.openChangeProductImageModal.bind(this);
         this.closeChangeProductImageModal = this.closeChangeProductImageModal.bind(this);
         this.openProductDetailModal = this.openProductDetailModal.bind(this);
         this.closeProductDetailModal = this.closeProductDetailModal.bind(this);
         this.openProductDeleteModal = this.openProductDeleteModal.bind(this);
         this.closeProductDeleteModal = this.closeProductDeleteModal.bind(this);
         this.handleDeleteProductSubmit = this.handleDeleteProductSubmit.bind(this);
         this.handleLogOutSubmit = this.handleLogOutSubmit.bind(this);
         this.toggleUserDropdown = this.toggleUserDropdown.bind(this);
         this.handleProductPageClick = this.handleProductPageClick.bind(this);
         this.openFinalView = this.openFinalView.bind(this);
         this.closeFinalView = this.closeFinalView.bind(this);
         this.storeSingleProductImage = this.storeSingleProductImage.bind(this);
        
     


    }
    /* Handling profile page display functionality */

    showImageOnMouseEnter(){
        this.setState({
            imageHover:true
        })
    }
    showImageOnMouseLeave(){
        this.setState({
            imageHover:false
        })
    }
    
    openProfileMyProductsTab(){
        this.setState({
            profileAboutTab:false,
            profileMyBidsTab:false,
            profileMyJobsTab:false,
            profileMyProductsTab:true
        })
    }
    openProfileMyJobsTab(){
        this.setState({
            profileAboutTab:false,
            profileMyBidsTab:false,
            profileMyJobsTab:true,
            profileMyProductsTab:false
        })
    }
    openProfileMyBidsTab(){
        this.setState({
            profileAboutTab:false,
            profileMyBidsTab:true,
            profileMyJobsTab:false,
            profileMyProductsTab:false
        })
    }
    openProductInformationTab(){
        this.setState({
            productInformationTab:true,
            uploadProductImageTab:false,
        })
    }
    openUploadProductImageTab(){
        this.setState({
            productInformationTab:false,
            uploadProductImageTab:true,
        })
    }

    /*end of Handling profile page display functionality */
    /* Handling Profile Image Upload Functionality */
    onImageUploadChange(value){
        this.setState(value);
    }
    openProfileImageModal(){
        this.setState({
            profileImageModal:true
        })
    }
    verifyImageUpload(files){
        const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg,';
        const acceptedFileTypesArray = acceptedFileTypes.split(',').map((item)=> {return item.trim()});
        if(files && files.length > 0){
            const currentFile = files[0];
            const currentFileSize= currentFile.size;
            const currentFileType= currentFile.type;
            if(currentFileSize > this.state.imageMaxSize){
                alert('file is too big')
                return false;
            }
            if(!acceptedFileTypesArray.includes(currentFileType)){
                alert('This file is not allowed, only images are allowed');
                return false;
            }
            return true;
        }
    }
    handleOnDrop(files, rejectedFiles){
        if(rejectedFiles && rejectedFiles.length > 0){
          this.verifyImageUpload(rejectedFiles)
        }
        if(files && files.length > 0){
          const isVerified = this.verifyImageUpload(files)
            if(isVerified){
                //imageBase64Data
                const currentFile = files[0];
                const fileItemReader = new FileReader();
                fileItemReader.addEventListener('load', ()=>{
                    console.log(fileItemReader.result);
                    const myResult = fileItemReader.result;
                    this.setState({
                        imageSrc:myResult,
                        imgSrcExt: extractImageFileExtensionFromBase64(myResult)
                    })
                }, false);
               
                                   

                fileItemReader.readAsDataURL(currentFile);
            }
        }
    }
    getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
    
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );
    
         // As Base64 string
         const {imgSrcExt} =  this.state
         const base64Image = canvas.toDataURL('image/' + imgSrcExt);
         return base64Image;
        // return new Promise((resolve, reject) => {
        //   canvas.toBlob(blob => {
        //     if (!blob) {
        //       //reject(new Error('Canvas is empty'));
        //       console.error('Canvas is empty');
        //       return;
        //     }
        //     blob.name = fileName;
        //     window.URL.revokeObjectURL(this.fileUrl);
        //     this.fileUrl = window.URL.createObjectURL(blob);
        //     resolve(this.fileUrl);
        //   }, 'image/jpeg');
        // });
    }
    async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
          const croppedImageUrl = await this.getCroppedImg(
            this.imageRef,
            crop,
            // 'newFile.jpeg'
          );
          this.setState({ croppedImageUrl });
        }
    }
    handleOnCropChange(crop){
        this.setState({crop:crop});
        // console.log(crop);
     
    }
    handleImageLoaded(image){
        // console.log(image);
        this.imageRef = image;
    }
    handleOnCropComplete(crop, pixelCrop){
        this.makeClientCrop(crop);
    }
    closeProfileImageModal(){
        this.setState({
            profileImageModal:false,
            imageSrc: null,
            imgSrcExt: null,
            croppedImageUrl:null,
            crop:{
                unit: '%',
                width: 70,
                height: 70,

            }
        })
        
    }
    handleImageUpload(e){
        e.preventDefault();
        const {imageSrc}  = this.state
        if (imageSrc) {   
            const imageData64 = this.state.croppedImageUrl;
            const {imgSrcExt} =  this.state
            // const imageData64 = canvasRef.toDataURL('image/' + imgSrcExt)

      
            const myFilename = "previewFile." + imgSrcExt

            // file to be uploaded
            // const myNewCroppedFile = base64StringtoFile(imageData64, myFilename);
            const uploadImage = {image:imageData64}
            // const profileImageUpload = {profileImage:myNewCroppedFile}
            axios.post('/profile-image', uploadImage).then(response => {
                    if(response.data.success){
                        setTimeout(() => {
                            window.location.href = '/profile';
                        }, 1000);
                        // this.setState({
                        //     profileImageModal:false
                        // })
                    }
                  
                  
            });

            // console.log(myNewCroppedFile)
        
            // download file
            // downloadBase64File(imageData64, myFilename)
            // this.handleClearToDefault()
        }

    }
    handleClearToDefault(event){
        if(event)event.preventDefault();
        // const canvas = document.getElement('canvas');
        // const canvas = this.imagePreviewCanvasRef.current
        // const ctx = canvas.getContext('2d');
        // ctx.clearRect(0, 0, canvas.width, canvas.height)

        this.setState({
            imageSrc: null,
            imgSrcExt: null,
            croppedImageUrl:null,
            currentProductId:'',
            crop:{
                unit: '%',
                width: 70,
                height: 70,

            }

        })
        // this.fileInputRef.current.value = null  
    }

   /* end of profile image upload functionality */

   /* Handling Profile Summary Functionality */

   openProfileSummaryModal(){
    this.setState({
        profileSummaryModal:true
    })
   }
   closeProfileSummaryModal(){
    this.setState({
        profileSummaryModal:false
    })
   }
   handleProfileSummaryChange(e){
    this.setState({
        tempProfileSummary:e.target.value
    });
   }
   handleProfileSummaryEditChange(e){
    this.setState({
        profileSummary:e.target.value
    });
   }
   handleProfileSummarySubmit(e){
        e.preventDefault();

        const data = {profileSummary:this.state.tempProfileSummary}

        axios.post('/profile-summary', data).then(response => {
            if(response.data.errors){
                if(response.data.errors.profileSummary){
                    this.setState({
                        profileSummaryError:response.data.errors.profileSummary
                    })
                }else{
                    this.setState({
                        profileSummaryError:''
                    })
                   
                }
            }else{
                setTimeout(() => {
                    window.location.href = '/profile';
                    this.setState({
                        profileSummaryError:''
                    })
                }, 1000);
            }
          
        });
   }
   handleProfileSummaryEditSubmit(e){
        e.preventDefault();

        const data = {profileSummary:this.state.profileSummary}

        axios.post('/edit-profile-summary', data).then(response => {
            if(response.data.errors){
                if(response.data.errors.profileSummary){
                    this.setState({
                        profileSummaryError:response.data.errors.profileSummary
                    })
                }else{
    
                    this.setState({
                        profileSummaryError:''
                    })
                }
            }else{
                setTimeout(() => {
                    window.location.href = '/profile';
                    this.setState({
                        profileSummaryError:''
                    })
                }, 1000);
            }
          
        });
   }


  /* end of Profile Summary functionality */

   

 

 
  /* start of Personal Information functionality */
  openPersonalInfoModal(){
    this.setState({
        personalInfoModal:true
    })
   }
  closePersonalInfoModal(){
    this.setState({
        personalInfoModal:false
    })
   }
   handleUserNameChange(e){
     this.setState({
         tempUserName:e.target.value
     });
   }
   handleUserEmailChange(e){
     this.setState({
         tempUserEmail:e.target.value
     });
   }
   handleUserEstateChange(e){
    this.setState({
        tempUserEstate:e.target.value
    });
   }
   handleUserResidentStatusChange(e){
     this.setState({
         tempUserResidentStatus:e.target.value
     });
   }
   handleUserOccupationChange(e){
     this.setState({
         tempUserOccupation:e.target.value
     });
   }
   handleUserOtherOccupationChange(e){
     this.setState({
         tempUserOtherOccupation:e.target.value
     });
   }
   handleUserOtherEstateChange(e){
     this.setState({
         tempUserOtherEstate:e.target.value
     });
   }
   handlePersonalInfoSubmit(e){
    e.preventDefault();
    const data = {
        name:this.state.tempUserName,
        email:this.state.tempUserEmail,
        residentStatus:this.state.tempUserResidentStatus,
        estateName:this.state.tempUserEstate,
        otherEstateName:this.state.tempUserOtherEstate,
        occupation:this.state.tempUserOccupation,
        otherOccupation:this.state.tempUserOtherOccupation,
    }

    axios.post('/profile/info/update', data).then(response =>{
        if(response.data.errors){
            console.log(response.data.errors)
            if(response.data.errors.name){
                this.setState({
                    tempUserNameError:response.data.errors.name
                })
            }else{
                this.setState({
                    tempUserNameError:''
                })
            }
            if(response.data.errors.email){
                this.setState({
                    tempUserEmailError:response.data.errors.email
                })
            }else{
                this.setState({
                    tempUserEmailError:''
                })
            }
            if(response.data.errors.residentStatus){
                this.setState({
                    tempUserResidentStatusError:response.data.errors.residentStatus
                })
            }else{
                this.setState({
                    tempUserResidentStatusError:''
                })
            }
            if(response.data.errors.estateName){
                this.setState({
                    tempUserEstateError:response.data.errors.estateName
                })
            }else{
                this.setState({
                    tempUserEstateError:''
                })
            }
            if(response.data.errors.otherEstateName){
                this.setState({
                    tempUserOtherEstateError:response.data.errors.otherEstateName
                })
            }else{
                this.setState({
                    tempUserOtherEstateError:''
                })
            }
            if(response.data.errors.occupation){
                this.setState({
                    tempUserOccupationError:response.data.errors.occupation
                })
            }else{
                this.setState({
                    tempUserOccupationError:''
                })
            }
            if(response.data.errors.otherOccupation){
                this.setState({
                    tempUserOtherOccupationError:response.data.errors.otherOccupation
                })
            }else{
                this.setState({
                    tempUserOtherOccupationError:''
                })
            }
            // else{
            //     this.setState({
            //         tempUserNameError:'',
            //         tempUserEmailError:'',
            //         tempUserOccupationError:'',
            //         tempUserOtherOccupationError:'',
            //         tempUserEstateError:'',
            //         tempUserOtherEstateError:'',
            //         tempUserResidentStatusError:'',
            //     })
               
            // }
        }else{
            setTimeout(() => {
                window.location.href = '/profile';
                this.setState({
                    tempUserName:'',
                    tempUserEmail:'',
                    tempUserOccupation:'',
                    tempUserOtherOccupation:'',
                    tempUserEstate:'',
                    tempUserOtherEstate:'',
                    tempUserResidentStatus:'',
                    tempUserNameError:'',
                    tempUserEmailError:'',
                    tempUserOccupationError:'',
                    tempUserOtherOccupationError:'',
                    tempUserEstateError:'',
                    tempUserOtherEstateError:'',
                    tempUserResidentStatusError:'',
                    
                })
            }, 1000);
        }
      })
      
   }
  /* end of Personal Information functionality */

  /* start of My Products functionality */
  openFinalView(){
      this.setState({
          finalView:true
      })
  }
  closeFinalView(){
      this.setState({
          finalView:false
      })
  }
 
  handleProductPageClick(e){
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perProductPage;
    
    this.setState({
        currentProductPage: selectedPage,
        productOffset: offset,
        productPageCount: Math.ceil(this.state.myProducts.length / this.state.perProductPage),
    })
    

};

    openMyProductsModal(){
        this.setState({
            myProductsModal:true,
            crop:{
                unit: '%',
                width: 100,
                height: 100,

            },
        })
    }
    closeMyProductsModal(){
        this.setState({
            myProductsModal:false,
            tempProductTitle:'',
            tempProductPriceRange:'',
            tempProductDescription:'',
            tempProductCategory:'',
            imageSrc: null,
            imgSrcExt: null,
            croppedImageUrl:null,
            currentProductId:'',
            crop:{
                unit: '%',
                width: 70,
                height: 70,

            }
        })
    }
    openEditProductInformationModal(id){
        let product = this.state.myProducts.find(item => item.id === id);
        let productId = product.id;
        let productTitle = product.title;
        let productDescription = product.description;
        let productCategory = product.category_title;
        let productPriceRange = product.priceRange;
        this.setState({
            editProductInformationModal:true,
            tempProductTitle:productTitle,
            tempProductPriceRange:productPriceRange,
            tempProductDescription:productDescription,
            tempProductCategory:productCategory,
            currentProductId:productId,
        })
    }
    openProductDetailModal(id){
        let product = this.state.myProducts.find(item => item.id === id);
        // let productId = product.id;
        let productTitle = product.title;
        let productDescription = product.description;
        let productCategory = product.category_title;
        let productPriceRange = product.priceRange;
        let productImage = product.productImageTwo;
        let createdByName = product.created_by_name;
        this.setState({
            productDetailModal:true,
            tempProductTitle:productTitle,
            tempProductPriceRange:productPriceRange,
            tempProductDescription:productDescription,
            tempProductCategory:productCategory,
            tempProductImage:productImage,
            tempCreatedByName:createdByName,
            // currentProductId:productId,
        })
    }
    openChangeProductImageModal(id){
        let product = this.state.myProducts.find(item => item.id === id);
        let productId = product.id;
        let productTitle = product.title;
        let productPriceRange = product.priceRange;
       
        this.setState({
            changeProductImageModal:true,
            currentProductId:productId,
            tempProductTitle:productTitle,
            tempProductPriceRange:productPriceRange,
        })
    }
    openProductDeleteModal(id){
        let product = this.state.myProducts.find(item => item.id === id);
        let productId = product.id;
        let productTitle = product.title;
        let productPriceRange = product.priceRange;
        let productImage = product.productImage;
        let createdByName = product.created_by_name;
       
        this.setState({
            productDeleteModal:true,
            currentProductId:productId,
            tempProductTitle:productTitle,
            tempProductPriceRange:productPriceRange,
            tempProductImage:productImage,
            tempCreatedByName:createdByName,
        })
    }
    closeEditProductInformationModal(){
        this.setState({
            editProductInformationModal:false,
            tempProductTitle:'',
            tempProductPriceRange:'',
            tempProductDescription:'',
            tempProductCategory:'',
        })
    }
    closeProductDeleteModal(){
        this.setState({
            productDeleteModal:false
        })
    }
    closeChangeProductImageModal(){
        this.setState({
            changeProductImageModal:false,
        })
    }
    closeProductDetailModal(){
        this.setState({
            productDetailModal:false,
            tempProductTitle:'',
            tempProductPriceRange:'',
            tempProductDescription:'',
            tempProductCategory:'',
        })
    }
    handleProductImageUploadCheckSubmit(e){
        e.preventDefault();
        let filledProductInformationForm = this.state.productInformationFormFilled;
        let filledUploadProductImageForm = this.state.uploadProductImageFormFilled
        let currentProductId = this.state.currentProductId;
        
        const data = {productId:currentProductId}
        if(filledProductInformationForm && filledUploadProductImageForm === false ){
            axios.post('/incomplete-product-form/' + currentProductId + '/delete', data).then(response =>{
                if(response.data.errors){
                    console.log(response.data.errors)
                }else{
                    this.setState({
                        myProductsModal:false
                    })
                }
               
            })
        }
        this.setState({
            myProductsModal:false
        })
    }
    handleProductTitleChange(e){
        this.setState({
            tempProductTitle:e.target.value
        })
    }
    handleProductCategoryChange(e){
        this.setState({
            tempProductCategory:e.target.value
        })
    }
    handleProductPriceRangeChange(e){
        this.setState({
            tempProductPriceRange:e.target.value
        })
    }
    handleProductDescriptionChange(e){
        this.setState({
            tempProductDescription:e.target.value
        })
    }
    handleProductInformationSubmit(e){
        e.preventDefault();
        const data = {
            title:this.state.tempProductTitle,
            priceRange:this.state.tempProductPriceRange,
            description:this.state.tempProductDescription,
            category:this.state.tempProductCategory,
        }
        axios.post('/my-product/create', data).then(response =>{
            if(response.data.errors){
                console.log(response.data.errors)
                if(response.data.errors.title){
                    this.setState({
                        tempProductTitleError:response.data.errors.title
                    })
                }else{
                    this.setState({
                        tempProductTitleError:'',
                    })
                }
                if(response.data.errors.category){
                    this.setState({
                        tempProductCategoryError:response.data.errors.category
                    })
                }else{
                    this.setState({
                        tempProductCategoryError:'',
                    })
                }
                if(response.data.errors.priceRange){
                    this.setState({
                        tempProductPriceRangeError:response.data.errors.priceRange
                    })
                }else{
                    this.setState({
                        tempProductPriceRangeError:'',
                    })
                }
                if(response.data.errors.description){
                    this.setState({
                        tempProductDescriptionError:response.data.errors.description
                    })
                }else{
                    this.setState({
                        tempProductDescriptionError:'',
                    })
                }
                // else{
                //     this.setState({
                //         tempProductTitleError:'',
                //         tempProductPriceRangeError:'',
                //         tempProductCategoryError:'',
                //         tempProductDescriptionError:'',
                //     })
                   
                // }
            }else{
               this.setState({
                 uploadProductImageTab:true,
                 productInformationTab:false,
                //  currentProductId:response.data.success,
                 productInformationFormFilled:true,
                //  tempProductTitle:'',
                //  tempProductPriceRange:'',
                //  tempProductDescription:'',
                //  tempProductCategory:'',
                 tempProductTitleError:'',
                 tempProductPriceRangeError:'',
                 tempProductCategoryError:'',
                 tempProductDescriptionError:'',
                 
               })
            }
        })
    }
    handleEditProductInformationSubmit(e){
        e.preventDefault();
        const id = this.state.currentProductId;
        const data = {
            title:this.state.tempProductTitle,
            priceRange:this.state.tempProductPriceRange,
            description:this.state.tempProductDescription,
            category:this.state.tempProductCategory,
        }
        axios.post('/my-product/' + id + '/edit', data).then(response =>{
            if(response.data.errors){
                console.log(response.data.errors)
                if(response.data.errors.title){
                    this.setState({
                        tempProductTitleError:response.data.errors.title
                    })
                }else{
                    this.setState({
                        tempProductTitleError:'',
                    })
                }
                if(response.data.errors.category){
                    this.setState({
                        tempProductCategoryError:response.data.errors.category
                    })
                }else{
                    this.setState({
                        tempProductCategoryError:'',
                    })
                }
                if(response.data.errors.priceRange){
                    this.setState({
                        tempProductPriceRangeError:response.data.errors.priceRange
                    })
                }else{
                    this.setState({
                        tempProductPriceRangeError:'',
                    })
                }
                if(response.data.errors.description){
                    this.setState({
                        tempProductDescriptionError:response.data.errors.description
                    })
                }else{
                    this.setState({
                        tempProductDescriptionError:'',
                    })
                }
                // else{
                //     this.setState({
                //         tempProductTitleError:'',
                //         tempProductPriceRangeError:'',
                //         tempProductCategoryError:'',
                //         tempProductDescriptionError:'',
                //     })
                   
                // }
            }else{
                setTimeout(() => {
                    window.location.href = '/profile';
                    this.setState({
                        tempProductTitle:'',
                        tempProductPriceRange:'',
                        tempProductDescription:'',
                        tempProductCategory:'',
                        tempProductTitleError:'',
                        tempProductPriceRangeError:'',
                        tempProductCategoryError:'',
                        tempProductDescriptionError:'',
                    })
                }, 1000);
            }
        })
    }
   
    handleUploadProductImageSubmit(e){
        e.preventDefault();
        let productId = this.state.currentProductId;
        // let product = this.state.storeProducts.find(item => item.id === productId);

        const {imageSrc}  = this.state
        if (imageSrc) {   
            const imageData64 = this.state.croppedImageUrl;
            const {imgSrcExt} =  this.state
            // const imageData64 = canvasRef.toDataURL('image/' + imgSrcExt)
            const secondImageData64 = this.state.singleProductCroppedImageUrl;

      
            const myFilename = "previewFile." + imgSrcExt

            // file to be uploaded
            // const myNewCroppedFile = base64StringtoFile(imageData64, myFilename);
            const uploadInformation = {
                image:imageData64,
                title:this.state.tempProductTitle,
                priceRange:this.state.tempProductPriceRange,
                description:this.state.tempProductDescription,
                category:this.state.tempProductCategory,
                secondImage:secondImageData64

            }
            // const profileImageUpload = {profileImage:myNewCroppedFile}
            axios.post('/product-information/upload', uploadInformation).then(response => {
                    if(response.data.success){
                        setTimeout(() => {
                            window.location.href = '/profile';
                            this.setState({
                            uploadProductImageFormFilled:true,
                            tempProductTitle:'',
                            tempProductPriceRange:'',
                            tempProductDescription:'',
                            tempProductCategory:'',
                            uploadImageError:''
                          })
                        }, 1000);
                       
                    }
                    if(response.data.error){
                        this.setState({
                            uploadImageError:response.data.error
                        })
                    }
                  
                  
            });

            // console.log(myNewCroppedFile)
        
            // download file
            // downloadBase64File(imageData64, myFilename)
            // this.handleClearToDefault()
        }

    }

    storeSingleProductImage(){
        const croppedImageUrl = this.state.croppedImageUrl;
        
        if(croppedImageUrl !== null){
            this.setState({
                singleProductCroppedImageUrl:croppedImageUrl,
                finalView:true,
                crop:{
                    unit: '%',
                    width: 70,
                    height: 70,
    
                }
            })
        }
        
    }
 
    handleDeleteProductSubmit(e){
        e.preventDefault();
        const productId = this.state.currentProductId;
        const data = {
            productId:productId
        }
        axios.post('/my-product/'+ productId + '/delete', data).then(response =>{
            if(response.data.success){
                setTimeout(() => {
                    window.location.href = '/profile';
                }, 1000);
                
            }else{
                console.log(response.data.errors)
            }
        });
    }
  /* end of My Products functionality */

  /* start of Job Posting functionality */
    openJobPostingModal(){
        this.setState({
            jobPostingModal:true
        })
    }
    closeJobPostingModal(){
        this.setState({
            jobPostingModal:false
        })
    }
  /* end of Job Posting functionality */

   
    //get User Items from laravel controller
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
    getCreatedProducts(){
       return axios.get('/advertised-products');
    }
    getBidsReceived(){
        return axios.get('/bids-received');
    }
    getProfileSummary(){
        return axios.get('/profile-summary-content');
    }
  
    getUserItems(){
        axios.get('/profileUser').then(response => {
            this.setState({
                // profileUser:[response.data.user],
                userName:response.data.user.name,
                userEmail:response.data.user.email,
                tempUserName:response.data.user.name,
                tempUserEmail:response.data.user.email,
                userOccupation:response.data.user.occupation,
                userOtherOccupation:response.data.user.otherOccupation,
                userResidentStatus:response.data.user.resident_status,
                userEstate:response.data.user.estateName,
                userOtherEstate:response.data.user.otherEstateName,
                userAvatar:response.data.user.avatar,
                productCategories:response.data.productCategories,
                myProducts:response.data.products,
                profileSummary:response.data.user.profile_summary,
                bidsReceived:response.data.bidsReceived,
                bidsSent:response.data.bidsSent
            })
        })
        // axios.all([this.getCreatedProducts(),  this.getBidsReceived(), this.getProfile()]).then(axios.spread((createdProductResponse,  bidsReceivedResponse
        //     , profileUserResponse)=>{
        //         this.setState({
        //             profileUser:[profileUserResponse.data.users],
        //             profileSummary:profileUserResponse.data.users.profile_summary
        //         })
        // }));
    }
    componentDidMount(){
      
       this.getUserItems();
    }

    render(){
        return(
            <ProfileContext.Provider value={{
                ...this.state,
                getAuthenticatedUser:this.getAuthenticatedUser,
                openProfileImageModal:this.openProfileImageModal,
                closeProfileImageModal:this.closeProfileImageModal,
                onImageUploadChange:this.onImageUploadChange,
                handleOnDrop:this.handleOnDrop,
                handleOnCropChange:this.handleOnCropChange,
                handleImageLoaded:this.handleImageLoaded,
                handleOnCropComplete:this.handleOnCropComplete,
                handleImageUpload:this.handleImageUpload,
                handleClearToDefault:this.handleClearToDefault,
                openProfileSummaryModal:this.openProfileSummaryModal,
                closeProfileSummaryModal:this.closeProfileSummaryModal,
                handleProfileSummaryChange:this.handleProfileSummaryChange,
                handleProfileSummarySubmit:this.handleProfileSummarySubmit,
                handleProfileSummaryEditChange:this.handleProfileSummaryEditChange,
                handleProfileSummaryEditSubmit:this.handleProfileSummaryEditSubmit,
                openPersonalInfoModal:this.openPersonalInfoModal,
                closePersonalInfoModal:this.closePersonalInfoModal,
                openJobPostingModal:this.openJobPostingModal,
                closeJobPostingModal:this.closeJobPostingModal,
                openMyProductsModal:this.openMyProductsModal,
                closeMyProductsModal:this.closeMyProductsModal,
                openProfileMyProductsTab:this.openProfileMyProductsTab,
                openProfileMyJobsTab:this.openProfileMyJobsTab,
                openProfileMyBidsTab:this.openProfileMyBidsTab,
                handlePersonalInfoSubmit:this.handlePersonalInfoSubmit,
                handleUserNameChange:this.handleUserNameChange,
                handleUserEmailChange:this.handleUserEmailChange,
                handleUserEstateChange:this.handleUserEstateChange,
                handleUserOtherEstateChange:this.handleUserOtherEstateChange,
                handleUserResidentStatusChange:this.handleUserResidentStatusChange,
                handleUserOccupationChange:this.handleUserOccupationChange,
                handleUserOtherOccupationChange:this.handleUserOtherOccupationChange,
                openProductInformationTab:this.openProductInformationTab,
                openUploadProductImageTab:this.openUploadProductImageTab,
                handleProductInformationSubmit:this.handleProductInformationSubmit,
                handleProductTitleChange:this.handleProductTitleChange,
                handleProductPriceRangeChange:this.handleProductPriceRangeChange,
                handleProductDescriptionChange:this.handleProductDescriptionChange,
                handleProductCategoryChange:this.handleProductCategoryChange,
                handleUploadProductImageSubmit:this.handleUploadProductImageSubmit,
                handleProductImageUploadCheckSubmit:this.handleProductImageUploadCheckSubmit,
                showImageOnMouseEnter:this.showImageOnMouseEnter,
                showImageOnMouseLeave:this.showImageOnMouseLeave,
                openEditProductInformationModal:this.openEditProductInformationModal,
                closeEditProductInformationModal:this.closeEditProductInformationModal,
                handleEditProductInformationSubmit:this.handleEditProductInformationSubmit,
                openChangeProductImageModal:this.openChangeProductImageModal,
                closeChangeProductImageModal:this.closeChangeProductImageModal,
                openProductDetailModal:this.openProductDetailModal,
                closeProductDetailModal:this.closeProductDetailModal,
                handleDeleteProductSubmit:this.handleDeleteProductSubmit,
                openProductDeleteModal:this.openProductDeleteModal,
                closeProductDeleteModal:this.closeProductDeleteModal,
                handleLogOutSubmit:this.handleLogOutSubmit,
                toggleUserDropdown:this.toggleUserDropdown,
                handleProductPageClick:this.handleProductPageClick,
                openFinalView:this.openFinalView,
                closeFinalView:this.closeFinalView,
                storeSingleProductImage:this.storeSingleProductImage,
            }}> 
              {this.props.children}
            </ProfileContext.Provider>
        )
    }
}

const ProfileConsumer = ProfileContext.Consumer;
export {ProfileProvider, ProfileConsumer}