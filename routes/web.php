<?php

use Illuminate\Support\Facades\Route;
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

Route::get('/', 'HomeController@index')->name('home');

Auth::routes();
Route::get('/login', 'HomeController@index')->name('login');
Route::get('/register', 'HomeController@index')->name('register');



Route::group(['middleware' => 'web'], function () {
Route::group(['as'=>'admin.','prefix'=>'admin','namespace'=>'admin','middleware'=>['auth','admin']], function(){
	Route::get('dashboard','DashboardController@index')->name('dashboard');
});

Route::group(['as'=>'editor.','prefix'=>'editor','namespace'=>'admin','middleware'=>['auth','editor']], function(){
	Route::get('dashboard','DashboardController@index')->name('dashboard');
});
});
//Master Route
Route::get('/{all?}', 'HomeController@index')->where(['all' => '.*']);
