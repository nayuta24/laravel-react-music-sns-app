<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Post;
use App\User;

class PostController extends Controller
{

    // 投稿一覧API
    public function posts(Post $post){
        
        $posts = Post::latest()->get();
        
        $posts_json = array();

        foreach($posts as $post){
            // $user = User::find($post->user_id);
            // $post_user = User::with('posts')->get();
            
            //Spotify APIを叩く関数を呼び出す
            $track_id = $post->track_id;
            $track = $this->getTrack($track_id);

            
            $post_data = [
                "id"=>$post->id,
                "created_at"=>$post->created_at,
                "updated_at"=>$post->updated_at,
                "user" => [
                    // "id"=>$user->id,
                    // "img"=>$user->user_img,
                    // "name"=>$user->name,
                    // "job"=>$user->job,
                    
                    // 一旦ダミー
                    "id"=>"1",
                    "img"=>"https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
                    "name"=>"ダミー",
                    "job"=>"学生",
                ],
                "track" => [
                    "id"=>$track_id,
                    "img"=>$track['img'],
                    "artist"=>$track['artist'],
                    "title"=>$track['title'],
                    "album"=>$track['album'],
                    "release"=>$track['release']
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
            
            array_push($posts_json, $post_data);
        }
        
        return $posts_json;
    }
    
    // 各投稿詳細ページAPI
    public function detail(Post $post, $id){
        $post_detail = Post::find($id);
        // $user = User::find($post_detail->user_id);
        
        $track_id = $post_detail->track_id;
        $track = $this->getTrack($track_id);
        
        return [
                "id"=>$post_detail->id,
                "created_at"=>$post_detail->created_at,
                "updated_at"=>$post_detail->updated_at,
                "user" => [
                    // "id"=>$user->id,
                    // "img"=>$user->user_img,
                    // "name"=>$user->name,
                    // "job"=>$user->job,
                    
                    "id"=>"1",
                    "img"=>"https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
                    "name"=>"ダミー",
                    "job"=>"学生",
                ],
                "track" => [
                    "id"=>$track_id,
                    "img"=>$track['img'],
                    "artist"=>$track['artist'],
                    "title"=>$track['title'],
                    "album"=>$track['album'],
                    "release"=>$track['release']
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
    
    
    // Spotify API取得
    public function getToken(){
        $client = new \GuzzleHttp\Client();

        $response=$client->post('https://accounts.spotify.com/api/token',[
            'headers' => [
                'Content-Type'=>'application/x-www-form-urlencoded',
                'Authorization' => 'Basic MWRjMjliZGIyYjE5NGQxOGI0MjAzZDA4YmU5OTc1MzQ6NzcxNmY4MTY4NGVmNDZlNTljMGNhZjM3NzM2OTYyYjA=',
            ],
            'form_params' => [
                'grant_type'=>'client_credentials'
            ]
        ]);
        
        $responseBody = $response->getBody()->getContents();
        $encodedResponseBody=json_decode($responseBody, true);
        
        return $encodedResponseBody["access_token"];
    }
    
    public function getTrack($id){
        $client = new \GuzzleHttp\Client();
        
        $token = $this->getToken();
        $market = "JP";

        $response=$client->get("https://api.spotify.com/v1/tracks/{$id}?market={$market}",[
            'headers' => [
                'Content-Type'=>'application/json',
                'Accept'=>'application/json',
                'Authorization' => 'Bearer '. $token,
            ]
        ]);
        
        $responseBody = $response->getBody()->getContents();
        $encodedResponseBody=json_decode($responseBody, true);
        
        $img = $encodedResponseBody['album']['images'][1]['url'];
        $artist = $encodedResponseBody['artists'][0]['name'];
        $title = $encodedResponseBody['name'];
        $album = $encodedResponseBody['album']['name'];
        $release = $encodedResponseBody['album']['release_date'];
        
        
        $track_datas = array(
                            'img'=>$img,
                            'artist'=>$artist,
                            'title'=>$title,
                            'album'=>$album, 
                            'release'=>$release
                        );
        
        return $track_datas;
    }
}
