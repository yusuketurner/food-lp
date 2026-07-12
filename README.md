# 7月の新メニューLP — 納品メモ

## フォルダ構成
```
lp/
├─ index.html
├─ css/style.css   … FLOCSS構成(Foundation/Layout/Component/Project/Utility)
├─ js/main.js      … 軽量JS(ライブラリ依存なし)
└─ img/            … メニュー写真3点
```

## 公開前チェックリスト(★の差し替え)
| 箇所 | 内容 | 場所 |
|---|---|---|
| 店名ロゴ | `TEPPAN & BAL(店名)` を実店名に | index.html ヘッダー / フッター / 店舗情報 / title・OGP |
| LINE予約URL | `https://lin.ee/xxxxxxx`(4箇所) | ヘッダー / ヒーロー / クロージング / 追従バー |
| 電話番号 | `tel:0000000000`(3箇所) | クロージング / 店舗情報 / 追従バー |
| Instagram | アカウントURLとハッシュタグ `#味来ごはん` | シェアセクション |
| 店舗情報 | 住所・営業時間・定休日 | p-access セクション |
| ヒーロー動画 | 下記参照 | index.html `<video>` |

## ヒーロー動画について(フリー素材)
- 現在は Pexels の動画を直接参照しています(商用利用可・クレジット表記不要)
  - 出典: https://www.pexels.com/video/meat-sizzling-in-hot-oil-4702555/
- **公開時は動画ファイルをダウンロードして自サーバーに置いてください**(表示速度と安定性のため)
  1. 上記URLから「Free download」でmp4を取得
  2. `video/hero.mp4` として配置し、`<source src="video/hero.mp4">` に変更
  3. 可能なら HandBrake 等で 1280px幅 / 2〜3Mbps 程度に圧縮(スマホ回線対策)
- 差し替え候補(同じくPexels・無料):
  - 鉄板で肉を焼くシズル: https://www.pexels.com/video/meat-sizzling-in-hot-oil-4702562/
  - えびのオイル煮(アヒージョ風): https://www.pexels.com/video/a-pan-filled-with-shrimp-and-sauce-27675568/
  - 野菜を炒める調理シーン: https://www.pexels.com/video/cooking-meat-in-a-pan-854216/

## 画像の軽量化(推奨)
- 現在のPNGは1枚2.4〜2.8MBあります。公開前にWebP変換を推奨(品質80で約200〜400KBに)
  - 例: [squoosh.app](https://squoosh.app/) でドラッグ&ドロップ変換
  - 変換後は `img/menu-butamaki.webp` 等に差し替え

## 設計メモ
- カラー: ウォームブラック基調+差し色は「味来ゴールド(#e8a13a)」1色のみ。LINEグリーンは予約CTA専用(ブランド認知でタップ率を高めるため)
- CTA戦略: スマホはファーストビュー+スクロール後の追従バーで常時予約導線を確保。PCはヘッダー右上に固定
- アクセシビリティ: alt属性記述済 / タップ領域48px / prefers-reduced-motion 対応 / フォーカスリング表示
- ブラウザ互換: backdrop-filter は -webkit- プレフィックス付与済(iOS Safari対応)。100svh を使用しているため iOS のアドレスバー伸縮でも崩れません
