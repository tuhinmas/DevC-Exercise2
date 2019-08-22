function hitungTambah(){
    var input1 =document.querySelector('#angka1').value;
    var input2 =document.querySelector('#angka2').value;
    var hasil=Number(input1)+Number(input2);
    document.querySelector('#h2').innerHTML=hasil;
    console.log(hasil);
}
function hitungKurang(){
    var input1 =document.querySelector('#angka1').value;
    var input2 =document.querySelector('#angka2').value;
    var hasil=Number(input1)-Number(input2);
    document.querySelector('#h2').innerHTML=hasil;
}
function hitungKali(){
    var input1 =document.querySelector('#angka1').value;
    var input2 =document.querySelector('#angka2').value;
    var hasil=Number(input1)*Number(input2);
    document.querySelector('#h2').innerHTML=hasil;
    console.log(hasil);
}
function hitungBagi(){
    var input1 =document.querySelector('#angka1').value;
    var input2 =document.querySelector('#angka2').value;
    var hasil=Number(input1)/Number(input2);
    document.querySelector('#h2').innerHTML=hasil;
    console.log(hasil);
}
function hitungMod(){
    var input1 =document.querySelector('#angka1').value;
    var input2 =document.querySelector('#angka2').value;
    var hasil=Number(input1)%Number(input2);
    document.querySelector('#h2').innerHTML=hasil;
}
