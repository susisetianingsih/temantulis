<?php 
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];
$tanggal = trim($data['tanggal']);
$isi = trim($data['isi']);

if ($tanggal != '' and $isi != '') {
	$query = mysqli_query($con,"insert into diary(tanggal,isi) values('$tanggal','$isi')");

}else{
	$query = mysqli_query($con,"delete from diary where no='$id'");
}


echo json_encode($pesan);
echo mysqli_error($con);

?>