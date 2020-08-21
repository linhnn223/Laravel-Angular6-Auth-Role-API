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
//Admin Action Controller
Route::get('list-users', 'AdminController@getAllUser');
Route::get('roles/', 'AdminController@getRoles');
Route::get('roles/{id}', 'AdminController@getUserRole');
Route::post('add-roles', 'AdminController@addRoles');
Route::get('user-detail/{id}', 'AdminController@getUserByID');
Route::post('create-new-user','AdminController@createNewUser');
Route::post('update-user','AdminController@updateUser');
Route::delete('delete-user/{id}','AdminController@deleteUser');

//Routing Controller
Route::get('routing/{id}','RoutingController@getRouting');

//auth Controller
Route::post('login', 'AuthController@login');
Route::get('profile', 'AuthController@getAuthenticatedUser');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
