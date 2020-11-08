# sort_js
## 概要
### ※ ソート  
- ボタンとリストに データ属性を設定することによりソート機能を適用  
- ボタンの設定 (クラスがあっていればタグは問わない)  

#### トリガー
`<li class="sort_btn" data-type="index" data-order="asc">元に戻す</li>`  
- data-type : ソートしたい項目 => index  
- data-order : ソートの順序 => asc (昇順) / desc (降順) | 未設定:昇順 | 以外の文字列:ソートしない  
- data-target : 同一ページ内に複数設置したい時、ソートしたいリスト(ul)のクラス | 未設定:"js-sort-main"  

#### ソート対象  
- `js-sort-main` か data-targetで設定したクラスを親要素に設定した子要素がソート対象  
- data-typeで設定したデータ要素("index"の場合data-index)の値でソートする  
