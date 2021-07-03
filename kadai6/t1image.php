<?php
$dsn = "mysql:host=localhost; dbname=db6; charset=utf8";
require_once 'db_config.php';

$id = rand(1, 5);
try {
    $dbh = new PDO($dsn, $user, $pass);
} catch (PDOException $e) {
    echo $e->getMessage();
}

    $sql = "SELECT * FROM tabeta WHERE id = :id";
    $stmt = $dbh->prepare($sql);
    $stmt->bindValue(':id', $id);
    $stmt->execute();
    $image = $stmt->fetch();
?>

<h1>画像表示</h1>
<img src="images/<?php echo $image['tabephoto']; ?>" width="300" height="300">
<a href="t1upload.php">画像アップロード</a>