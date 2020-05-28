<?php

use Illuminate\Support\Facades\Route;
use App\Events\AwaitingProductReviewEvent;
use Illuminate\Support\Facades\Auth;

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

// Auth::routes(['verify'=>true]);
Auth::routes(['verify' => true]);
Route::get('/home', 'HomeController@index')->name('home');


Route::get('/','LandingPageController@show');
Route::get('/sign-in','LandingPageController@signIn');
Route::get('/sign-up','LandingPageController@signUp');
Route::get('login/google', 'Auth\LoginController@redirectToProvider');
Route::get('login/google/callback', 'Auth\LoginController@handleProviderCallback');
Route::get('/main-products', 'LandingPageController@approvedProducts');

//explore
Route::get('/explore', 'ExploreController@show');

//user profile page
Route::get('/profile', 'ProfileController@show');
Route::post('/profile-image', 'ProfileController@uploadImage');
Route::get('/profile/edit', 'ProfileController@edit');
Route::post('/profile/info/update', 'ProfileController@updateProfileInfo');

//user products
Route::get('/advertised-products', 'UserProductController@advertisedProducts');
Route::get('/advertise-product', 'UserProductController@advertiseProduct');
Route::post('/advertise-product/create', 'UserProductController@createProduct');
Route::get('/products', 'UserProductController@approvedProducts');
Route::get('/products/{slug}', 'UserProductController@approvedSingleProduct');
Route::post('/products/{slug}/bid', 'UserProductController@bidProduct');
Route::post('/contact', 'ContactController@contactSeller');

//bids
Route::get('/bids', 'UserProductController@showBids');
Route::get('/products/{id}/sell', 'UserProductController@sellProduct');
Route::get('/products/{id}/delete', 'UserProductController@deleteBid');


//admin
//admin profile page
Route::get('/admin/profile', 'Admin\ProfileController@show');
Route::post('/admin/profile-image', 'Admin\ProfileController@uploadImage');
Route::get('/admin/profile/edit', 'Admin\ProfileController@edit');
Route::post('/admin/profile/info/update', 'Admin\ProfileController@updateProfileInfo');
//admin product management
Route::get('/admin/advertised-products', 'Admin\ProductController@advertisedProducts');
Route::get('/admin/advertise-product', 'Admin\ProductController@advertiseProduct');
Route::post('/admin/advertise-product/create', 'Admin\ProductController@createProduct');
Route::get('/admin/advertised-product/{id}/edit', 'Admin\ProductController@editProduct');
Route::put('/admin/advertised-product/{id}/approve', 'Admin\ProductController@approveProduct');

//mails
Route::get('/awaiting-product-approval-mail', 'MailController@awaitingProductApproval');
Route::get('/product-approval-mail', 'MailController@productApproved');
//events
Route::get('/notifications', 'EventController@notifications');
