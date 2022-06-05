console.log("amk bozuk bu")
// console.log  cıktı almak için kullanılır

let dolarDun = 2
// değişkenler let olarak tanımlanır.

{
    let dolarDun =3
}
console.log(dolarDun)


//---------------------------------------------------------------------------------------------------------
const euroDun = 11.2 // sabit değiştirilemeyen değişken const la tanımlanır
console.log(euroDun)

//euroDun = 11
// cons ile bir değişken tanımlandığında daha sonradan bu değişkenin değerini değiştiremezsin 

//console.log(euroDun) bu kod hata verecektir çünki const değişkeninin değeri değiştirilemez
//----------------------------------------------------------------------------------------------------------------


let konutKredileri = ["konut kredisi","emlak konut kredisi","kamu konut kredis"] // array içine veriler direk yazılabilir yada değişkenler yazılabilir. her öğenin arasına virgül konur
// birden fazla veriyi aynı değişkende tutmak için arraylardan yararlanılır
// arrayın ilk elemanı sıfırıncı dğer diye sırayla gider
// döngü elindeki veriyi dolaşmaya yarar
//mesela bi arrayı ekrana yazdırmak için döngü kulllanmak gerek 

console.log("<ul>")
for(let i = 0;i<3;i++){
    console.log("<li>"+i+"</li>")

    // bu döngü şunu ifade eder i diye bir değişken var  ve bunun değeri 0
    // şartlar her sağlandığında sonsole.log komutu çalışacak
    // i ++ yani 1 er artırarak dolaş
    // mantık şöyle  i ilk değerini yani 0 ı aldı ve tüm sartları sağladı
    //i yi bir arttırdık .  i nin yeeni değeri 1 oldu .i üçten küçükmü evet  ozman i 1 değerini alabilir
    //i nin son değeri 1 di. şimdi i yi tekrar artırdık i 2 oldu ve üçten küçük. ozaman i 2 değerini alabilir.
    //i nin son değeri 2 di. şimdi i yi tekrar artırırsak i 3 değerini alır. ama i 3 ten küçük olmak zorunda
    // bu yüzden i 3 olamaz. bu döngü bize inin değerlerini 0,1,2 olarak verir

    // for içindeki console log komutunda bir html etiketi ve arasında i var diyoruz
    // bu for döngüsü çalıştı ve i sıfır değerini aldı şartlar sanğlandı. o zman console.log komutu çalışacak
    // <li>0</li> çıktısı verecek
    // döngü tekrar çalıştı i 1 değerini aldı ve şartlar sağlandaı o zaman console.log komutu tekrar çalışacak
    //<li>1</li> çıktısı verecek
    // döngü tekrar çalıştı ve i 2 değerini aldı yine şartlar sağlandı. ozman console log komutu tekrar çalıştırılacak
    //<li>2</li> çıktısı verecek
    // döngü tekrar çalıştı ve i 3 değerini aldı. ancak i nin 3 olması şartları sağlamadığı için döngü burda sona erecek. console.log komutu çalışmayacak
    
}
console.log("</ul>")




console.log("<ul>")
for(let i = 0;i<3;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
    //bu döngüde mesela i 0 değerini aldığında
    // consolo.log komutu konutkredileri değişkenin i'nin ci elemanını yazdıracak
    // yani konut kredileri değişkeninin 0'ncı elemanını yazdıracak

}

console.log("</ul>")


console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
    // for içine yazdığım konutkredileri.length şu anlama gelir
    // konutkredileri değişkeninin lenght yani uzunluğu bu şu anlama gelir
    // arrayin içindeki değişkenlerin eleman sayısı yani 3. toplam 3 tane elemanı olduğu için
    //0 ıncı elemanı konut kredisi, 1 inci elemanı emlak kredisi, 2inci elemanı kamu konut kredisi.
    // yani toplam 3 elemanı var bu arrayin
}
console.log("</ul>")








console.log(konutKredileri)


let a = "mahmutgecekusu"
let b = "mahmut"
let c = "gecekusu"

let array = [a,b,c]


for (let i = 0; i < array.length; i++) {
    const d = array[i];
    console.log(d)
    
}

let ogrenci = {id: 1, name: "Mahmut", lastName: "Gecekusu"}
console.log(ogrenci)
// burada ogrenci değişkenine id parametmesi atadık ve değerini 1 yaptık. name parametresi atadık ve değeri gecekusu
// istediğimiz kadar parametre atayabilirz. her parametre isminin sonunda iki nokto üst üste konur ve parametre değeri girilir
// parametreli değişkenleri yazıdırınca sırasıyla parametre ve değerleri cıktı alınır.



function save() {
    console.log("Saved")
}
save()
// function fonksyon demek (matematiksel işlem gibi)
// func. dan sonra fonskyon ismi yazılır. parantez içerisine fonksyon elemanları yaızlır
// süslü parantezle fonnksyon yazlır
// fonksyoni çağırmak için fonksyon ismi ve parantezler yapılır. bu fonkssyonu çalıştırır

function Saved(k,l,m) {
    const n = k+l+m
    console.log(n)
}
Saved(2,10,5)
//fonksyon parametresi olarak 3 değişken tanımlı
// ffonksyon içerisinde bunlar toplanarak elde edilen n değişkeni var 
//n değişkeni çıktı olarak alınıyor
//Saved(2,10,5) yaptığımda 2=k ,l=10, m=5 değerini alır ve n değişeknin değeri 17 olur




function sSaved(k=3,l,m) {
    const n = k+l+m
    console.log(n)
}
sSaved(undefined,10,5)
// 3 tane fonksyon parametresi mevcut ve k nın değeri sıfır
// k nın değeri 3 ( farklı bir değerde olabilir, stringde olabilir)
//fonksyon parametresine k nın değerini formüldeki değer olmasını yani 3 olarak gelmesini istiyorsam
// undefined yazlır yani basic değerini korur 



function lSaved(k=0,l=2,m=3) {
    const n = k+l+m
    console.log(n)
}
lSaved(3,10,5)
// bu fonksyonda formül iç.erisinde üç değişkenede değer ataması yapılmıs
//istersem atalı değerli kullanmak istediğim parametreyi undefined olarak tanımlayabilirim
// yada sırasıyla değerleri kendim vererek . basic değerlerin yerine atayabilirim






function personelKayıt(personel) {
    const personelBilgileri = personel.id+" sicil numaralı "  +personel.name+ " " +personel.lastName+ " isimli personel kaydedilmiştir. "
    console.log(personelBilgileri)
    
}
let abPersonel = {id:1,name:"merve",lastName:"uzun"}
personelKayıt(abPersonel)
//personelkayıt adında bir fonksyonumuz var ve bu fonksyonun personel parametresi var
//fonksyon içerisinde personelbilgileri diye bir değişkenimiz var ,
// bu değişken personel parametresinin id name ve last name in den olusuyor ,
// abPersonel diye bir değişken var bu değişkenin id si name si ve last namesi var
//biz bu değişkeni personelkayıt fonksyonundaki personel parametresi olarak yazıyoruz
// çünkü parametrenin gibi değişkenide id name ve lastname si var
// bu durumda fonksyon çalışınca abPersonel değişkenin özellikleri ile çalışır



let abMemur = ["M.Gecekuşu","K.Güzel","G.Çevik"]
console.log(abMemur)
// array olarak tanımlanan değişke

let abMemur2 = [abMemur,{id:2, name:"Süleyman", lastName:"Akgül"}, "Elazığ T Tipi Kapalı Ceza ve İnfaz Kurumu", {city:"Elazığ"}]
console.log(abMemur2)
//array içerisinde array tanımlanabilirç
//array içerisinde paramete tanımlanadblir
//array içerisine string tanımlanabilir


console.log(abMemur2["3"])
//bu şekilde array içerisindeki değişken seçilebilir
// örneğin arrayin 3. öğesi bir parametre

