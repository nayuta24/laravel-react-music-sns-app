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
    // ログインしてるユーザーの情報をjsonで返す
    Route::get('/me', MeController::class);
    
    // 投稿一覧を最新順に返す
    Route::get('/posts/recent', 'PostController@posts');

    // 投稿詳細情報をidごとに返す
    Route::get('/posts/{id}', 'PostController@detail');
});

// 新規ユーザー登録
Route::post('/register', 'RegisterUserController@register');

// ログインする
Route::post('/login', 'MeController@login');

// ログアウトする
Route::post('/logout', 'MeController@logout');

// Route::get('/users/me', 'UserController@show')->name('user');

