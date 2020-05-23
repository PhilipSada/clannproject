<?php

use Illuminate\Support\Facades\Route;
use App\Events\AwaitingProductReviewEvent;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/awaiting-product-approval-event', function () {
    event(new AwaitingProductReviewEvent("product"));
});

Auth::routes();

Route::get('/','LandingPageController@show');
Route::get('/sign-in','LandingPageController@signIn');
Route::get('/sign-up','LandingPageController@signUp');
Route::get('/login/google', 'Auth\LoginController@redirectToProvider');
Route::get('/login/google/callback', 'Auth\LoginController@handleProviderCallback');
Route::get('/products', 'LandingPageController@approvedProducts');

//user profile page
Route::get('/profile', 'ProfileController@show');
Route::post('/profile-image', 'ProfileController@uploadImage');
Route::get('/profile/edit', 'ProfileController@edit');
Route::post('/profile/info/update', 'ProfileController@updateProfileInfo');

//user products
Route::get('/advertised-products', 'UserProductController@advertisedProducts');
Route::get('/advertise-product', 'UserProductController@advertiseProduct');
Route::post('/advertise-product/create', 'UserProductController@createProduct');

//admin
//admin profile page
Route::get('/admin/profile', 'Admin\ProfileController@show')->middleware('is.admin');
Route::post('/admin/profile-image', 'Admin\ProfileController@uploadImage')->middleware('is.admin');
Route::get('/admin/profile/edit', 'Admin\ProfileController@edit')->middleware('is.admin');
Route::post('/admin/profile/info/update', 'Admin\ProfileController@updateProfileInfo')->middleware('is.admin');
//admin product management
Route::get('/admin/advertised-products', 'Admin\ProductController@advertisedProducts')->middleware('is.admin');
Route::get('/admin/advertise-product', 'Admin\ProductController@advertiseProduct')->middleware('is.admin');
Route::post('/admin/advertise-product/create', 'Admin\ProductController@createProduct')->middleware('is.admin');
Route::get('/admin/advertised-product/{id}/edit', 'Admin\ProductController@editProduct')->middleware('is.admin');
Route::put('/admin/advertised-product/{id}/approve', 'Admin\ProductController@approveProduct')->middleware('is.admin');

//mails
Route::get('/awaiting-product-approval-mail', 'MailController@awaitingProductApproval');
Route::get('/product-approval-mail', 'MailController@productApproved');
//events
Route::get('/notifications', 'EventController@notifications');
