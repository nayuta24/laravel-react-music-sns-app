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

            
            $post = array(
                "id"=>$post->id,
                "created_at"=>$post->created_at,
                "updated_at"=>$post->updated_at,
                "user" => array(
                    "id"=>$post_user->id,
                    "img"=>$post_user->user_img,
                    "name"=>$post_user->name,
                    "job"=>$post_user->job,
                ),
                "track" => array(
                    "id"=>"5ViZUsnQEwWw2bdFuW78y8",
                    "img"=>"https://i.scdn.co/image/ab67616d00001e029259361b006ad3108801a541",
                    "artist"=>"キリンジ",
                    "title"=>"時間がない",
                    "album"=>"愛があるだけ、すべて",
                    "release"=>"2019/10/18"
                ),
                "review" => array(
                    "star"=>$post->rate,
                    "title"=>$post->title,
                    "body"=>$post->body
                ),
                "reaction" => array(
                    "comment_val"=>0,
                    "like_val"=>11
                ),
            );
            
            array_push($posts_json, $post);
        }
        
        return $posts_json;
        // return spotify();
        
        // return [
        //   [
        //       'id' => '1',
        //       "created_at" => "2021/10/11", 
        //       "updated_at"=>"2021/10/11",
        //       "user"=>[
        //           "id"=>1,
        //           "img"=>"https://source.unsplash.com/brFsZ7qszSY",
        //           "name"=>"中村 優太",
        //           "job"=>"学生",
        //         ],
        //         "track"=>[
        //             "id"=>"5ViZUsnQEwWw2bdFuW78y8",
        //             "img"=>"https://i.scdn.co/image/ab67616d00001e029259361b006ad3108801a541",
        //             "artist"=>"キリンジ",
        //             "title"=>"時間がない",
        //             "album"=>"愛があるだけ、すべて",
        //             "release"=>"2019/10/18"
        //         ],
        //         "review"=>[
        //             "star"=>4,
        //             "title"=>"キリンジ最高！",
        //             "body"=>"「愛をあるだけ、すべて」の中でも一番好きな曲です！ 弓木さんのファンキーなカッティングと高樹さんのコーラスがたまりません！！ つい何度もリピートして聞いてしまいます。"
        //         ],
        //         "reaction"=>[
        //             "comment_val"=>0,
        //             "like_val"=>11
        //         ]
        //     ],
        // ];
    }
}
