<?php
// データベースのユーザー名とパスワードを変数に保存する
require_once 'db_config.php';
try{
    //URLのIDを受け取る:$_GET['id']
    // もしIDの値が空ならエラーを表示する
    if (empty($_GET['id'])) throw new Exception('ID不正');
    // 得た値を数値に変換
    $id = (int) $_GET['id'];
    // $idの詳細を含めて表示
    var_dump($id);
    // データベースの接続
    $dbh = new PDO('mysql:host=localhost;dbname=db6;charset=utf8', $user, $pass);
    // PDO実行時のエラーモードを設定
    $dbh ->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $dbh ->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // プレースホルダーを設定してSQL文を入力
    $sql = "SELECT * FROM additions WHERE id = ?";
    // 設定したSQLをPDOで利用するように入力
    $stmt = $dbh->prepare($sql);
    // プレースホルダーの?に入る数字を設定する
    $stmt -> bindValue(1, $id, PDO::PARAM_INT);
    // セットしたSQLを実行して値を受けとる
    $stmt->execute();
    // SQL文の結果の取り出し(fetch:配列として取り出す、FETCH_ASSOC:カラム名をつける)
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    echo "レストラン名:" . htmlspecialchars($result['restaurant'],ENT_QUOTES, 'UTF-8') . "<br>\n"; 
    echo "画像:" . htmlspecialchars($result['syashin'],ENT_QUOTES, 'UTF-8') . "<br>\n"; 
    echo "特徴:" . htmlspecialchars($result['feature'],ENT_QUOTES, 'UTF-8') . "<br>\n"; 
    echo "コメント:" . htmlspecialchars($result['comment'],ENT_QUOTES, 'UTF-8') . "<br>\n"; 
    //  データベースとの接続を終了する
    $dbh = null;
    // 画面にメッセージを表示する
    echo "加盟店の登録が完了しました。<br>";
    echo "<a href='s1index.php'>トップページへ戻る</a>";
}
// 例外処理
// Exception→全てのエラーに対応できる
catch (Exception $e) {
    // htmlspecialchars→悪意のある値の入力を防ぐ
    echo "エラー発生：" . htmlspecialchars($e->getMessage(), ENT_QUOTES, 'UTF-8') . "<br>";
    // 命令を中止させる
    die();
}
?>