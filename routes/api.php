<?php

use Illuminate\Http\Request;

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

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/me', MeController::class);
    
    Route::get('/posts/recent', 'PostController@posts');

    Route::get('/posts/{id}', 'PostController@detail');
    
    Route::get('/track/{id}', 'PostController@track');
    
    Route::post('/create', 'PostController@create');
});

Route::post('/register', 'RegisterUserController@register');
Route::post('/login', 'MeController@login');
Route::post('/logout', 'MeController@logout');

