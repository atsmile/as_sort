/*
ソート
ボタンとリスト(ul)に データ属性を設定することによりソート機能を適用
2020/11/04 Ver 0.0.1 作成
*/
document.querySelectorAll(".sort_btn").forEach((e) => {
  e.addEventListener("click", () => {
    // data-target の設定で複数設置可能
    const target = e.getAttribute("data-target") || "sort_main";
    const tmp_parent = document.getElementsByClassName(target);
    const dom_parent = tmp_parent[0];
    const sort_type = "data-" + e.getAttribute("data-type");
    const children = dom_parent.children;

    // 該当する data の番号をキーに連想配列にしてから配列に格納
    var tmp_sort = new Array();
    for (const li_item of Array.from(children)) {
      dom_parent.removeChild(li_item); // 削除
      var dom_data = {
        key: parseInt(li_item.getAttribute(sort_type),10),
        value: li_item,
      };

      var data = Array();
      const li_attr = li_item.attributes;
      for (const data_name of Array.from(li_attr)) {
        data[data_name.name] = data_name.value;
      }
      dom_data["data"] = data;
      tmp_sort.push(dom_data);
    }

    // ソート
    func_sort(tmp_sort, e.dataset.order);

    // ソートされた配列を親要素にアペンド
    tmp_sort.forEach((elem) => {
      var new_elem = document.createElement("li");
      elem_data = elem.data; // data 属性をすべて格納
      Object.keys(elem_data).forEach((type) => {
        new_elem.setAttribute([type], elem_data[type]);
      });
      new_elem.innerHTML = elem.value.innerHTML;
      dom_parent.appendChild(new_elem);
    });
  });
});

// ソート デフォルトで昇順
function func_sort(arr, args_order) {
  const order = args_order || "asc";
  arr.sort(function (a, b) {
    if (order == "asc") {
      // 昇順
      if (a.key < b.key) return -1;
      if (a.key > b.key) return 1;
      return 0;
    } else {
      // 降順
      if (order == "desc") {
        if (a.key > b.key) return -1;
        if (a.key < b.key) return 1;
      }
      return 0;
    }
  });
}
