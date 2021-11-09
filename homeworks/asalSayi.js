for(let i=1;i<1000;i++){
    let asalMi=true;
    for(let j=1;j<i;j++){
        if(i%j==0){
             asalMi=false;
        }
    } if(asalMi==true){
       console.log(i +" sayısı asaldır")
    }
        
    }

















for (let i = 2; i <= 1000; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i%j==0) {
            isPrime= false      
        }
        
    }
    if (isPrime==true) {
        console.log(i+ " asal sayıdır")
    }
    
}