<?php

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

Route::get('/api/posts/follow', 'PostController@posts');

Route::get('/api/spo', function() {
    return view('spotify');
});

Route::get('/{any}', function() {
    return view('index');
})->where('any', '.*');
