function arkadasSayi(sayi1,sayi2) {
let toplam1=0;
let toplam2=0;
for(let i=0;i<sayi1;i++){
      if(sayi1%i==0){
      toplam1=toplam1 +i;
}
}
for(let j=0;j<sayi2;j++){
    if(sayi2%j==0){
    toplam2=toplam2 +j;
}
}
if(toplam1==sayi2 && toplam2==sayi1 ){
    console.log(sayi1 + " ve "+ sayi2 +" arkadas sayılardır");

} else{
    console.log(sayi1+ " ve "+ sayi2 +" arkadas sayı değildir");
}
}
arkadasSayi(220,284);

