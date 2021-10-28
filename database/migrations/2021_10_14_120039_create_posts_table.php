<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->text('body');
            $table->float('rate', 3, 1);
            $table->string('track_id')->nullable;
            $table->uuid('user_id');
            $table->timestamps();
            $table->dateTime('deleted_at', 0)->nullable();
            
            $table->foreign('user_id')->reference('id')->on('users')->onUpdate('CASCADE')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
