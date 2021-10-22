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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// ログインしているユーザーのみアクセスできる
// ログインしていない場合はエラーが吐かれてログインページにリダイレクトされる
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/me', MeController::class);
});

Route::post('/register', 'RegisterUserController@register');

Route::get('/posts/recent', 'PostController@posts');

Route::get('/posts/{id}', 'PostController@detail');

Route::post('/login', 'MeController@login');

Route::post('/logout', 'MeController@logout');

// Route::get('/users/me', 'UserController@show')->name('user');

