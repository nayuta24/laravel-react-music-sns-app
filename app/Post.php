<?php

namespace App;

use GoldSpecDigital\LaravelEloquentUUID\Database\Eloquent\Model;

class Post extends Model
{
    public function user() {
        return $this->belongTo(User::class);
    }
}