# プロジェクト概要

那由多のホームページ作成を行うリポジトリです。  
那由多ブランドを作り上げていく基盤となるホームページの開発。

## 開発メンバー

#### メイン
- 二ノ宮大翼
- Thomas

## 使用技術

| Name       | Description                                 |
| ---------- | ------------------------------------------- |
| React      | フロントエンドのコンポーネント生成          |
| Next.js    | 静的サイトジェネレータ(SSG 　 or ISR)       |
| TypeScript | 静的型付け                                  |
| React Query        | Hooks の簡易化 & グローバルな値の管理       |
| Vercel     | ホスティング環境 & サーバレス関数の実行環境 |
| Prettier   | コードフォーマット                          |
| ESLint     | コードの静的解析                            |

## タスク管理

- GitHub プロジェクトを使用
- 取り組むタスクにはアサインして「In progress」にカードを移動
- 完了したら PR を投げる（「Review in progress」にカードが移動）
- コードレビューが OK であれば「Review approved」にカードが移動
- デプロイしたら「Shipped」にカードを移動
- 「To Do」にカードを作成したい場合は Issue を立てる

## 開発の流れ

画面設計、URL 設計、基本設計  
コンポーネントの作成(organisms〜atoms)  
各ページの作成(pages)

## ブランチ運用ルール

1. develop からブランチを切り出す
2. ローカルの develop からブランチを切り出す前に、リモートの develop を pull する(`git pull origin develop`)
3. PR が完了したブランチは develop にマージされる
4. ブランチ名に issue 番号を付与する
5. 機能追加であれば`feature`のプレフィックスを付与する
6. 変更やバグ修正であれば`fix`のプレフィックスを付与する
7. ブランチの内容がわかるような命名にする

例 1）issue 番号 21「ブランチ運用規則の追加」であれば`feature#21-branch-rules`  
例 2）issue 番号 99「メニューアイコンが表示されないバグ」であれば`fix#99-menu-icon`

## コマンドについて

local サーバーの起動 `npm run dev`  
本番環境用ビルドコマンド`npm run build`  
src の public フォルダを本番環境用の public にコピー`npm run build-public`  

### Pull Request~meage までの流れ

1. ローカルに作成したブランチ上で変更が完了したら commit
2. commit の際 husky が走り、lint-staged が実行される。　※走らない場合は下記を参照
3. 上記でエラーがある場合は解消する。
4. リモートリポジトリのブランチに push
5. GitHub からプルリクエストの作成
6. Reviewers を指定
7. 一旦 create
8. create したら Linked issues に該当する issue を指定
9. reviewer からの指摘を修正
10. LGTM が出るまで 1~4 を行う
11. LGTM が出た場合、サンプルページに作成を行っている場合は下記のコードをコピペして貼り付け、初期化をする。(開発環境について参照)
12. 初期化が完了したら commit を行い、その旨を reviewer に伝える。
13. reviewer は確認の後 meage する。※作業者は meage しない。

## CSS の書き方

1. scss で記述する
2. [BEM 記法](https://qiita.com/Takuan_Oishii/items/0f0d2c5dc33a9b2d9cb1)を使って書く
3. `components`配下の構成と同じように`styles`に scss ファイルを作成する  
   例) `components/atoms/Button/PrimaryButton.tsx`に適用するスタイルは`styles/components/button.module.scss`に記述

### サンプルページについて

コンポーネントなどの動作確認を行うページとして`src/pages/sample.tsx`を追加しました。  
ローカルでの開発時やプルリクエスト時に使ってください。  
レビューが完了したら以下をコピペして元の状態に戻してください（マージする時にコンフリクト起こすので）

```src/pages/sample.tsx
import React from 'react'
import {NextPage} from 'next'
import { Layout } from 'components/layout'

const Sample: NextPage = () => {
  return (
    <Layout pageTitle={"サンプル"}></Layout>
  )
}

export default Sample;
```

### ディレクトリ構成

```
/public: /src/publicのファイルがコピーされる
/src
 + /components
    + /atoms コンポーネントの最小単位
      + /各用途に合わせてディレクトリを分ける。例えばtext関連のコンポーネントならばTextなど
    + /layout レイアウト用コンポーネント
    + /molecules 複数のatomsの組み合わせによるコンポーネント 例）検索フォーム(テキストフォーム + 検索ボタン)
      + /各用途に合わせてディレクトリを分ける。例えばtext関連のコンポーネントならばTextなど
    + /organisms 複数のatoms,moreculesの組み合わせによるコンポーネント　※4つ以上の組み合わせのコンポーネントはOrganismsになる
      + /各ページごとにディレクトリを作成。Homeに使うコンポーネントならばHomeとする。
    + /templates 各コンポーネントを呼び出す親となるコンポーネント。pageファイル毎に作成する
 + /firebase Firebase関連のファイル
 + /lib 関数用ファイル
 + /pages Next.jsのルーティングを決めるpageファイル
 + /public 画像などの静的ファイル置き場
 + /styles なるべくcomponentsの構成と合わせて作る
 + /types 型定義ファイル置き場
```

