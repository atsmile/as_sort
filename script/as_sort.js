/*
※ ソート
ボタンとリストに データ属性を設定することによりソート機能を適用

・ボタンの設定 (クラスがあっていればタグは問わない)
<li class="sort_btn" data-type="index" data-order="asc">元に戻す</li>
data-type : ソートしたい項目 => index
data-order : ソートの順序 => asc (昇順) / desc (降順) | 未設定:昇順 | 以外の文字列:ソートしない
data-target : 同一ページ内に複数設置したい時、ソートしたいリスト(ul)のクラス | 未設定:"js-sort-main"

・リスト
data-targetで設定したクラスか、sort_mainをulに設定したリスト
data-typeで設定したデータ要素("index"の場合data-index)の値でソートする
*/
function as_sort(classname) {
  const btn_class = classname == null ? ".js-sort-btn" : "." + classname;
  const sort_btn = nodelist2array(document.querySelectorAll(btn_class));
  sort_btn.forEach(function (e) {
    e.addEventListener("click", function () {
      const target = e.getAttribute("data-target") || "js-sort-main";
      const tmp_parent = document.getElementsByClassName(target);
      const dom_parent = tmp_parent[0];
      const sort_type = "data-" + e.getAttribute("data-type");
      const arr_children = nodelist2array(dom_parent.children);

      // 該当する data の番号をキーに連想配列にしてから配列に格納
      var arr_sort_item = new Array();
      arr_children.forEach(function (child) {
        dom_parent.removeChild(child); // DOMの削除
        arr_sort_item.push({
          key: parseInt(child.getAttribute(sort_type), 10),
          value: child,
        });
      });

      // ソート
      sort_by_args(arr_sort_item, e.dataset.order);

      arr_sort_item.forEach(function (elem) {
        dom_parent.appendChild(elem.value);
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", as_sort(), false);
