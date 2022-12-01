<?php 
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];
$judul = trim($data['judul']);
$isi = trim($data['isi']);

if ($judul != '' and $isi != '') {
	$query = mysqli_query($con,"insert into bookmark(judul,isi) values('$judul','$isi')");

}else{
	$query = mysqli_query($con,"delete from bookmark where no='$id'");
}


echo json_encode($pesan);
echo mysqli_error($con);

?>