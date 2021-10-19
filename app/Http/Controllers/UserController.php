<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * 現在ログインしているユーザ情報取得
     *
     * @return \App\User|null
     */
    public function show()
    {
        return Auth::user();
    }
}
