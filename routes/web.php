<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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


Auth::routes(['verify' => true]);

Route::get('/', 'HomeController@index')->name('home');
Route::get('/login', 'HomeController@index')->name('login');
Route::get('/register', 'HomeController@index')->name('register');
//Route::post('/getuserdata', 'Auth\RegisterController@getUser')->name('getUser');
//Route::get('/password/reset', 'HomeController@index')->name('password.request');

//Route::get('/profile', 'ProfileController@index')->name('profile')->middleware('verified','auth');

Route::group(['as'=>'admin.','prefix'=>'admin','namespace'=>'admin','middleware'=>['auth','verified']], function(){
	Route::get('dashboard','DashboardController@index')->name('dashboard');
});

Route::group(['as'=>'editor.','prefix'=>'editor','namespace'=>'admin','middleware'=>['auth']], function(){
	Route::get('dashboard','DashboardController@index')->name('dashboard');
});
//Master Route
Route::get('/{all?}', 'HomeController@index')->where(['all' => '.*']);