function findPrime(...sayi){
   let sayac=0;
       for(let i=0; i<sayi.length; i++){
        if (sayi[i]==1 || sayi[i]==0){
            console.log("geçersiz sayı girdiniz")}
            else{
        for(let j=2;j<sayi[i];j++){
          if(sayi[i]%j==0){
            sayac++ ;
          console.log(sayi[i]  +  " sayısı asal değildir!")
          break;
            }
            else{
                sayac=0
            }
        }
        if(sayac==0){
            console.log(sayi[i]  + " sayısı asaldır");
        } 
       
    }
  }
}

findPrime(5,1,103,30,7,5,320)



