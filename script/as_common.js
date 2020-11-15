// ノードリストを配列に変換
function nodelist2array(params) {
  return Array.prototype.slice.call(params, 0);
}

// ソート用 昇順
function compare_func_asc(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

// ソート用 降順
function compare_func_desc(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

/*
連想配列でソート
arr        : ソートしたい連想配列
args_key   : ソート対象にしたいキー
args_order : "asc": 昇順 "desc": 降順 引数なし: 昇順 それ以外: ソートしない
*/
function sort_by_args(arr, args_key, args_order) {
  const order = args_order || "asc";
  const key = args_key || "key";
  arr.sort(function (a, b) {
    if (order == "asc") {
      // 昇順
      return compare_func_asc(a[key], b[key]);
    } else {
      if (order == "desc") {
        // 降順
        return compare_func_desc(a[key], b[key]);
      }
      return 0;
    }
  });
}
