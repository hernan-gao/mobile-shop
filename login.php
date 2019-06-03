<?php
//获得值
$user = $_POST['user'];
$pass = $_POST['pass'];
//连接数据库
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error){
	die("连接失败：".$conn->connect_error);
}
//查询值
$search_user = "SELECT username FROM count WHERE username = "."'$user'";
$result = $conn->query($search_user);
$result = $result->fetch_all();
//判断值
if(empty($result)){
	echo '账号不存在';
}
elseif ($result[0][0] == $pass) {
	echo '登录成功';
}
else{
	echo '密码错误';
}
//关闭数据库
$conn->close();

?>
