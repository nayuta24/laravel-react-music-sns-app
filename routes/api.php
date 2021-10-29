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
    // ログインしているユーザー自身の情報を返す
    Route::get('/me', MeController::class);
    
    // 最新の投稿一覧を返す
    Route::get('/posts/recent', 'PostController@posts');
    // 投稿詳細情報をIDによって返す
    Route::get('/posts/{id}', 'PostController@detail');
    // 楽曲情報をidに応じてSpotifyにリクエストしたものを返す
    Route::get('/track/{id}', 'PostController@track');
    // 新規投稿を行う
    Route::post('/create', 'PostController@create');
});

// 新規ユーザー登録、ログイン、ログアウト
Route::post('/register', 'RegisterUserController@register');
Route::post('/login', 'MeController@login');
Route::post('/logout', 'MeController@logout');

