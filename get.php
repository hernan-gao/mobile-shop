<?php
  $json_product = file_get_contents("main-product.json");
  // var_dump($json_product);
  // var_dump($json_product);
  $json_product = json_decode($json_product,true);
  var_dump($json_product);
?>