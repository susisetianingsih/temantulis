<?php 
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$pesan = [];
$id = $data['id'];
$judul = $data['judul'];
$tanggal = $data['tanggal'];
$isi = $data['isi'];

$query = mysqli_query($con,"update note set judul='$judul',tanggal='$tanggal',isi='$isi' where id='$id'");

echo json_encode($pesan);
echo mysqli_error($con);


?>