<?php 
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];
$judul = trim($data['judul']);
$tanggal = trim($data['tanggal']);
$isi = trim($data['isi']);

if ($tanggal != '' and $isi != '') {
	$query = mysqli_query($con,"insert into note(judul,tanggal,isi) values('$judul','$tanggal','$isi')");

}else{
	$query = mysqli_query($con,"delete from note where no='$id'");
}


echo json_encode($pesan);
echo mysqli_error($con);

?>