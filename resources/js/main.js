// const signUpButton = document.querySelector('#signUp');
// const signInButton = document.querySelector('#signIn');
// const container = document.querySelector('#container');

// signUpButton.addEventListener('click', ()=>{
//     container.classList.add('right-panel-active');
// });
// signInButton.addEventListener('click', ()=>{
//     container.classList.remove('right-panel-active');
// });

// Dropzone.options.dropzone =
// {
//     maxFilesize: 10,
//     maxFiles:1,
//     renameFile: function (file) {
//         var dt = new Date();
//         var time = dt.getTime();
//         return time + file.name;
//     },
//     acceptedFiles: ".jpeg,.jpg,.png,.gif",
//     addRemoveLinks: true,
//     timeout: 60000,

//     success: function (file, response) {
//         console.log(response);
//     },
//     error: function (file, response) {
//         var $message = response.errors.file;
//         $('.profile-image-error').html('<strong>' +  $message + '</strong');
//         // return false;
//     }
// };

// const closeImageUploadModal = document.querySelector('.close-button');
// // const profileImageUploadForm = document.querySelector('.profile-image-modal-form');
// const openImageUploadModal = document.querySelector('.upload-image-button');
// const imageUploadModalContainer = document.querySelector('.upload-image-modal-container');

// // if(profileImageUploadForm){
// //     profileImageUploadForm.addEventListener('submit', (e)=>{
// //      e.preventDefault();
// //      imageUploadModalContainer.style.opacity=0;
// //      imageUploadModalContainer.style.visibility='hidden';
// // });
// // }

// if(closeImageUploadModal){
//     closeImageUploadModal.addEventListener('click', ()=>{
//         imageUploadModalContainer.style.opacity=0;
//         imageUploadModalContainer.style.visibility='hidden';
//             setTimeout(function(){
//                 window.location.href = "/profile";
//             },1000);   
//     });
// }


// if(openImageUploadModal){
//     openImageUploadModal.addEventListener('click', ()=>{
     
//         imageUploadModalContainer.style.opacity=1;
//         imageUploadModalContainer.style.visibility='visible';
// });
// }


// //bid modal
// // const bidForm = document.querySelector('.bid-form');
// const closeBidModal = document.querySelector('.close-bid-modal');
// const bidModalContainer = document.querySelector('.bid-modal-container');
// const openBidModal = document.querySelector('.open-bid-modal-button');

// // if(bidForm){
// //     bidForm.addEventListener('submit', (e)=>{
// //         e.preventDefault();
// //         bidModalContainer.style.opacity=0;
// //         bidModalContainer.style.visibility='hidden';
// //     });
// // }
// if(closeBidModal){
//     closeBidModal.addEventListener('click', (e)=>{
//         e.preventDefault();
//         bidModalContainer.style.opacity=0;
//         bidModalContainer.style.visibility='hidden';
//     });
// }

// if(openBidModal){
//     openBidModal.addEventListener('click', ()=>{
//         bidModalContainer.style.opacity=1;
//         bidModalContainer.style.visibility='visible';
//     });
    
// }
