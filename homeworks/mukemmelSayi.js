function mukemmelSayi(){
    for (let i = 1; i < 1000; i++) {
        let count = 0;
        for (let j = 1; j < i; j++) {
            if (i%j == 0) {
                count = count + j;
            }
        }
            if (count==j) {
                console.log(i + " sayısı mükemmel sayıdır");
            }
            }
        }
mukemmelSayi()
