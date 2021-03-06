<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserCreateRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use \Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

use App\Post;
use App\User;

class PostController extends Controller
{
    // 投稿一覧API
    public function posts(Post $post){
        
        $posts = Post::latest()->get();
        
        $posts_json = array();

        foreach($posts as $post){
            $user = User::find($post->user_id);
            $post_user = User::with('posts')->get();
            
            //Spotify APIを叩く関数を呼び出す
            $track_id = $post->track_id;
            $track = $this->getTrack($track_id);

            
            $post_data = [
                "id"=>$post->id,
                "created_at"=>$post->created_at,
                "updated_at"=>$post->updated_at,
                "user" => [
                    "id"=>$user->id,
                    "img"=>"",
                    "name"=>$user->name,
                    "job"=>"",
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
        $user = User::find($post_detail->user_id);
        
        $track_id = $post_detail->track_id;
        $track = $this->getTrack($track_id);
        
        return [
                "id"=>$post_detail->id,
                "created_at"=>$post_detail->created_at,
                "updated_at"=>$post_detail->updated_at,
                "user" => [
                    "id"=>$user->id,
                    "img"=>"",
                    "name"=>$user->name,
                    "job"=>"",
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
    
    // 楽曲情報取得api
    public function track($id){
        $track = $this->getTrack($id);
        
        return [
                "id"=>$id,
                "title"=>$track['title'],
                "album"=>$track['album'],
                "artist"=>$track['artist'],
                "release"=>$track['release']
            ];
    }
    
    // 新規投稿api  
    public function create(Request $request){
        $user = $request->user();
        
        $request->validate([
            'title' => 'required|max:30',
            'body' => 'required|max:500',
            'rate' => 'required',
            'trackId'=>'required|size:22'
        ]);
        
        Post::create([
            'title' =>  $request->title,
            'body' => $request->body,
            'rate' => $request->rate,
            'track_id'=>$request->trackId,
            'user_id' => $user->id
        ]);
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
