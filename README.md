# 楽曲共有SNS「Bebop!」
「音楽が好きだけど、趣味が同じ友達が見つからない」、「コロナ禍で音楽仲間と集まる機会が減ってしまった」</br>
そのような悩みを持つ人々が、気軽に音楽に対する熱い想いを発信できるSNSを作りたいと考えました。
### デプロイ（heroku）
[楽曲共有SNS「Bebop!」](https://be-bop.herokuapp.com/home)</br>
</br>
テスト用ユーザー</br>
メールアドレス：test@mail.com</br>
パスワード：000000

</br>

## 開発環境
![icons](https://user-images.githubusercontent.com/62182265/139539545-584a6835-96e4-49ac-95ac-da546810860c.png)
### フロントエンド
* React(vesion: 17.0.2)</br>
* TypeScript(version: 4.1.2)</br>
* Chakra UI(version: 1.6.9)
### バックエンド
* Laravel(vesion: 6.20.35)
* PHP(vesion: 7.3.31)
* MySQL (version: 8.0.22)
### その他
* macOS Big Sur(vesion: 10.2.38)
* Spotify WEB API


</br>

## 「Spotify API」との連携
本アプリの大きな特徴として、「[Spotify API](https://developer.spotify.com/documentation/web-api/)」と連携しているという点があります。</br>
投稿時に取得した楽曲ID（詳しくは後述）を使用して、楽曲名、アルバム名、アーティスト名、リリース日、ジャケット画像などを表示します。</br>
また、Spotifyの埋め込みコードを利用することで、本アプリ内で楽曲の試聴をすることも可能としました。

</br>

## 機能
![artwork](https://user-images.githubusercontent.com/62182265/139536964-64eb9b86-8fdf-4a99-9c37-96827f317ef4.png)

### ユーザー認証
[Laravel Sanctum](https://laravel.com/docs/8.x/sanctum)を使用し、SPA認証機能を実装しました。</br>
新規登録の際は、ユーザー名、メールアドレス、パスワードの3つの入力が求められます。</br>
登録済みの場合は、メールアドレスとパスワードの2つを入力することでログインできます。</br>
SanctumはLaravel組み込みのセッション認証サービスを使用しており、同じデバイスであれば次回以降のログイン作業を省くことができます。

### 投稿閲覧
ログイン後にリダイレクトされるトップページでは、投稿一覧を最新順に見ることができます。</br>
各投稿をクリックすると詳細画面に移ります。ここでは、更に詳しく投稿の詳細やそれに対する他のユーザーのコメントを見ることができます。
また、このページではSpotifyの埋め込みコードによって楽曲の試聴をすることもできます。

### 新規投稿
投稿タイトル、本文、星（最大5つ）、Spotify楽曲シェア用URLの4つを入力して投稿します。</br>
Spotify楽曲シェア用URLは、正規表現によってSpotify独自の楽曲識別IDを取り出すために使用します。
このIDをもとに、楽曲情報を取得するAPIを叩いたり、Spotifyの埋め込みコードに利用したりすることができます。

### その他、今後実装予定の機能
* いいね機能
* コメント機能
* フォロー機能
* 楽曲検索機能（投稿時の楽曲選択をアプリ内で完結させる）
* 人気投稿ピックアップ
 
</br>

## テーブル定義
### users
| 列名 | データタイプ | 詳細 |
| :--- | :--- | --- |
| id | 文字列(uuid) | 主キー |
| name | 文字列 | ユーザー名 |
| email | 文字列 | メールアドレス |
| email_verified_at | 時刻 | メールアドレス確認時刻（未使用） |
| password | 文字列 | パスワード（ハッシュ化済み） |

### posts
| 列名 | データタイプ | 詳細 |
| :--- | :--- | --- |
| id | 文字列(uuid) | 主キー |
| user_id | 文字列(uuid) | usersテーブルと繋ぐ |
| title | 文字列 | 投稿タイトル |
| body | 文字列 | 投稿本文 |
| rate | 小数 | 評価（1~5） |
| track_id | 文字列 | Spotifyの楽曲ID |

### profiles
| 列名 | データタイプ | 詳細 |
| :--- | :--- | --- |
| id | 数値 | 主キー |
| user_id | 文字列(uuid) | usersテーブルと繋ぐ |
| job | 文字列 | 肩書、職業 |
| img | 文字列 | ユーザーアイコン |
| comment | 小数 | プロフィールコメント |

### comments
| 列名 | データタイプ | 詳細 |
| :--- | :--- | --- |
| id | 数値 | 主キー |
| user_id | 文字列(uuid) | usersテーブルと繋ぐ |
| post_id | 文字列(uuid) | postsテーブルと繋ぐ |
| body | 文字列 | コメント本文 |


### likes
| 列名 | データタイプ | 詳細 |
| :--- | :--- | --- |
| id | 数値 | 主キー |
| user_id | 文字列(uuid) | 「いいね」された投稿 |
| post_id | 文字列(uuid) | 「いいね」した人 |

### follows
| 列名 | データタイプ | 詳細 |
| :--- | :--- | --- |
| id | 数値 | 主キー |
| follower_id | 文字列(uuid) | フォローしたユーザーのid |
| followee_id | 文字列(uuid) | フォローされたユーザーのid |
