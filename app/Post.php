<?php

namespace App;

use GoldSpecDigital\LaravelEloquentUUID\Database\Eloquent\Model;

class Post extends Model
{
    public $incrementing = false;
    protected $keyType = 'string';
    
    public function user() {
        return $this->belongTo(User::class);
    }
}