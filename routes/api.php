<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::get('/showUser', 'Api\ProfileController@showUser');
// Route::get('/loggedInUser', 'Api\AuthController@user')->middleware('auth:api');
// Route::get('/profile', 'Api\ProfileController@all');
// Route::post('/signUp', 'Api\AuthController@register');
// Route::post('/signIn', 'Api\AuthController@login');
// Route::post('/forgot-password', 'Api\ForgotPasswordController@forgotPassword');
// Route::post('/password-reset', 'Api\ForgotPasswordController@resetPassword');

//email verification
// Route::get('/verified-only', function(Request $request){

//     dd('your are verified', $request->user()->name);
// })->middleware('auth:api','verified:api');

// Route::get('/emails/resend', 'Api\VerificationController@resend')->name('verification.resend');
// Route::get('/emails/{id}/{hash}', 'Api\VerificationController@verify')->name('verification.verify');

// Route::post('/login', [AccessTokenController::class, 'issueToken'])->middleware(['api-login', 'throttle']);
