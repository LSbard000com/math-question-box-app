<img src="https://img.shields.io/badge/-TypeScript-007ACC.svg?logo=typescript&style=flat"> <img src="https://img.shields.io/badge/-React-555.svg?logo=react&style=flat">

# みんなの数学質問箱
数学に関するわからない問題や質問したいことを投稿したり、回答を投稿することができるWebサイトです。  
算数から大学数学まで、気になることを気軽に投稿してみんなで解決していくサービスになります。

# 使用している技術
- React 18.3.1
- ReactRouter 6.26.2
- TypeScript 4.9.5
- Firebase 10.13.2
- Fuse.js 7.0.0

# サービス概要
### 1 認証機能
メールアドレスとパスワードでログインします。ログインが失敗するとエラーテキストが出るので再度ログインします。
アカウントが未登録の場合は、新規登録画面で新規登録を行います。パスワードが一致しない場合は登録ボタンが押せないようになっています。  
また、認証状態にないゲスト状態では、投稿作成、回答作成、マイページ閲覧ができません。

### 2 質問のCRUD機能
投稿はヘッダーの質問するボタンから作成します。  
編集、削除はマイページからできます。

### 3 回答のCRUD機能
投稿は質問の閲覧ページからできます。  
編集、削除はマイページからできます。

### 4 検索機能
カテゴリをのフィルタリングからの検索ができます。検索したいカテゴリをチェックすると、そのカテゴリをもつ質問を検索することができます。  
ヘッダーの検索バーからキーワード検索ができます。キーワードを含む質問を検索できます。
