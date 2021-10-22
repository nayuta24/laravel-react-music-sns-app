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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::group(['middleware' => ['auth:sanctum']], function () {
//     Route::get('/me', MeController::class);
// });

Route::post('/register', 'RegisterUserController@register');

Route::get('/posts/recent', 'PostController@posts');

Route::get('/posts/{id}', 'PostController@detail');

Route::post('/login', 'Auth\LoginController@authenticate');

Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

Route::get('/users/me', 'UserController@show')->name('user');

