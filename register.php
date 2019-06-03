<?php
//获得值
$user = $_POST['user'];
$pass1 = $_POST['pass1'];
$pass2 = $_POST['pass2'];
//连接数据库
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error){
	die("连接失败：".$conn->connect_error);
}
//查询数据库
$search_user = "SELECT username FROM count WHERE username = "."'$user'";
$result = $conn->query($search_user);
$result = $result->fetch_all();
if(empty($result)){
	$add_user ="INSERT INTO count (username,password) VALUES ('$user','$pass1')";
	$conn->query($add_user);
	echo "注册成功";
}
else{
	echo "用户名已存在";
}
//关闭数据库
$conn->close();

?>
