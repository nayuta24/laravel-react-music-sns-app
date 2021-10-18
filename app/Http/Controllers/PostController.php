<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Post;
use App\User;

class PostController extends Controller
{

    
    public function posts(Post $post){
        
        $posts = Post::latest()->get();
        
        $posts_json = array();

        foreach($posts as $post){
            $post_user = User::find($post->user_id);
            // $post_user = User::with('posts')->get();

            
            $post = [
                "id"=>$post->id,
                "created_at"=>$post->created_at,
                "updated_at"=>$post->updated_at,
                "user" => [
                    "id"=>$post_user->id,
                    "img"=>$post_user->user_img,
                    "name"=>$post_user->name,
                    "job"=>$post_user->job,
                ],
                "track" => [
                    "id"=>"5ViZUsnQEwWw2bdFuW78y8",
                    "img"=>"https://i.scdn.co/image/ab67616d00001e029259361b006ad3108801a541",
                    "artist"=>"キリンジ",
                    "title"=>"時間がない",
                    "album"=>"愛があるだけ、すべて",
                    "release"=>"2019/10/18"
                ],
                "review" => [
                    "star"=>$post->rate,
                    "title"=>$post->title,
                    "body"=>$post->body
                ],
                "reaction" => [
                    "comment_val"=>0,
                    "like_val"=>11
                ]
            ];
            
            array_push($posts_json, $post);
        }
        
        return $posts_json;
    }
    
    public function detail(Post $post, $id){
        $post_detail = Post::find($id);
        $post_user = User::find($post_detail->user_id);
        
        return [
                "id"=>$post_detail->id,
                "created_at"=>$post_detail->created_at,
                "updated_at"=>$post_detail->updated_at,
                "user" => [
                    "id"=>$post_user->id,
                    "img"=>$post_user->user_img,
                    "name"=>$post_user->name,
                    "job"=>$post_user->job,
                ],
                "track" => [
                    "id"=>"5ViZUsnQEwWw2bdFuW78y8",
                    "img"=>"https://i.scdn.co/image/ab67616d00001e029259361b006ad3108801a541",
                    "artist"=>"キリンジ",
                    "title"=>"時間がない",
                    "album"=>"愛があるだけ、すべて",
                    "release"=>"2019/10/18"
                ],
                "review" => [
                    "star"=>$post_detail->rate,
                    "title"=>$post_detail->title,
                    "body"=>$post_detail->body
                ],
                "reaction" => [
                    "comment_val"=>0,
                    "like_val"=>11
                ]
            ];
    }
}
