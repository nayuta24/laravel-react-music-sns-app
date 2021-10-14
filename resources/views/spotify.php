<?php

require 'vendor/autoload.php';

$session = new SpotifyWebAPI\Session(
    '1dc29bdb2b194d18b4203d08be997534', 
    '7716f81684ef46e59c0caf37736962b0', 
    'https://d18a9cfea91f4bd392a2cd4b83248086.vfs.cloud9.us-east-2.amazonaws.com/api/posts'
);
$api = new SpotifyWebAPI\SpotifyWebAPI();

if (isset($_GET['code'])) {
    $session->requestAccessToken($_GET['code']);
    $api->setAccessToken($session->getAccessToken());

} else {
    header('Location: ' . $session->getAuthorizeUrl(array(
        'scope' => array( 
          'playlist-read-private', 
          'playlist-modify-private', 
          'user-read-private',
          'playlist-modify'
        )
    )));
    die();
}
echo '<pre>';
    print_r($api->me()); //認証を受けたアカウントのプロフィールが表示される
echo '</pre>';