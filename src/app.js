console.log("merhaba esra...")

let dolarDun =9.20
let dolarBugun=9.30
{
    let dolarDun=9.10
}
console.log(dolarDun)

const euroDun=10.2
//euroDun=11 bunu yazamıyoruz çunku ustte atama yapıldı
console.log(euroDun)

let konutKredileri=["Konut kredisi", " Emlak kredisi", "Kamu konut kredileri"]
console.log("<ul>")
for(let i=0;i<3;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
/*<ul>
    <li>Konut kredileri</li>
    <li>emlak konut kredileri</li>
    <li>Kamu konut kredisi</li> 
</ul>*/
console.log(konutKredileri)