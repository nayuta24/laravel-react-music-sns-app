<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserCreateRequest;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use \Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class RegisterUserController extends Controller
{
    // 新規ユーザー登録
    public function register(Request $request)
    {
        /** @var Illuminate\Validation\Validator $validator */
        $request->validate([
            'name' => 'required|max:10',
            'email' => 'required|email',
            'password' => 'required|min:6|max:10'
        ]);

        User::create([
            'name' =>  $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json('User registration completed', Response::HTTP_OK);
    }
}
