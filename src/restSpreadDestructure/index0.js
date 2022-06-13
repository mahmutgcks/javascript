//REST
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
    
}

//js de değişkenlere fonksyon atanabilir. 
//bu yüzden değişkenlere fonksyon tanımlarken fonskyon ismi kullanılmasına gerek yok çünkü değişkeni çağırdığımızda fonksyon çalışacaktır
//bu değişkenin türü artık bir fonskyondur
// rest kullanılırken üç nokta ve parametre yazılır
//bu şu demektir fonskyon içerisinde id parametmesi var ve products parametresi var fakat products rest edildiği için
// geriye kalanların hepsi products .istediğimiz kadar products ekleyebilir bu fonksyona

showProducts()
// bu  durumda çıktı olarak undefined ve boş bi array elde ederiz
// çünkü id nin bi değeri yok ve . rest products aslında bi arraydir.

showProducts(21,"elma","armut","kelmahmut")
// bu kodun cıktısı idye atadığımız 21 sayısı
// rest products bir array olduğu için 3 elemanlı bir array cıktı olarak alırız

//ÖRNEK
let ürünBilgileri = function (id,name,lastname,...asıtarihleri) {

   console.log(id+" " +name+" " +lastname+" " +asıtarihleri)
   
}
ürünBilgileri(1,"Mahmut","Gecekusu","ekim","aralık","haziran","temmuz")
//burada ürünbilgileri adında bir değişkeniz var ve biz bunu fonskyon olarak tanımladık
//fonksyonda 3 parametre ve rest parametresi var
//bu fonskyonun sırasıyla ilk 3 parametresini tanımladık ve rest parametleri istediğimiz kadar girdik
// böylelikle bu fonksyonu yazdırdığımzda ilk 3 parametre ve array olan rest paremetleri sırasıyla cıktı olarak alınır

//ÖRNEK2
let kisiBilgileri = function (name,lastname,...hobiler) {
   for (let i = 0; i < hobiler.length; i++) {
       const element = hobiler[i];
       if (element == 1) {
           console.log(name+" "+lastname+" "+element+" Şartlar Sağlandı")
           
       } else {
           console.log(name+" "+lastname+" " +element +" Şart Geçersiz")
           
       }

       
   }
   
}
kisiBilgileri("mahmut","gecekusu",1,2,3)


//SPREAD
//spread ayrıştırmak demek
// bir arrayin elemenalarını ayıtmaya yarar hepsini farklı bir parametre gibi dağıtır.


let sayılar = [45,65,76,54]
console.log(Math.max(points))
// sayılar adında bi arrayimiz var ve bunun 4 tane elemanı var
// math.max aralarındaki en büyüğü demek
//ben bu arrayin math maxini almaya çalıştığımda NaN hatası verecek

let v1 = 1
let v2 = 2
let v3 = 3
console.log(v1,v2,v3)
console.log(Math.max(v1,v2,v3))

let points = [1,2,3,4,5,25]
console.log(...points)
// points arrayini rest şeklinde yazıdırırsam tüm elemanları spread etmiş olurum
//çünkü rest de önce parametreyi verip değişkenlerini sonra tanımlıyorduk
// ama burda hazırda bi array var zaten ben bunun başına üüç nokta koyarak yazdırırsam bunu spread etmiş olurum
// eğer yukardaki gibi ayrı 3 değişkeni consola yazdırırken yan yana olarak yazılmasını istiyorsam arrayi spread etmem lazım
// aksi takdirde array olduğu için hata verir
// konsolda çıktı olarak array değilde yan yana yazılmış şeklinde çıktı verir

console.log(Math.max(...points))
//points arrayıni spread edip math.maxini alırsam eğer
// bu arrayi spread ettiğim için bana aralarındaki en yüksek değerli olanı verir

console.log(Math.max(points[0],points[1],points[2],points[3],points[4],points[5]))
// aynı işlemi spread kullanmadan yapmak istersem bu şekilde tanımlamam lazım

console.log(..."abc","d",..."efg","h")
// burda string değerler birer char arrayi olduğu için 
// birden fazla char içeren değerleri spread kullanarak ayrıştırdık
// böylelikle çıktı olarak tüm karakterler ayrı bir değer gibi yan yana yazıldı

// örneğin bir bulmaca oyununda char arrayi spread ile ayırabiliriz*



// DESTRUCTİNG
// elinizdeki arrayin değerlerini değişkenlere atamak için kullanılır

let populations = [1000,2000,3000,[4000,5000]]
let [small,medium,high,[veryhigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryhigh)
console.log(maximum)

//burada populations isminde bi arrayimiz var ve 3 elemanı var
// let[] yaparak bir değişken arrayı tanımladık
// bu değişken arrayine 3 tane değişken tanımladık
// ve bu değişkenlerin değerini populations arrayi olarak tanımladık
//biz bunları destructing  ettik
// yani sırasıyla populatians arrayındeki elemanları yine sırasıyla small, medium ve higha tanımladı



function someEx([small1],number){
   console.log(small1)

}
// bu fonksyon da bi array tanımladık ve arrayin bir öğesinin adına small1 dedik
// bu şu demektir bu fonskyona bir array göndericez bu arrayin ilk değerini small1 değişkenine atıyacak
// böylelikle bu array parametresini boş geçemeyiz mutlaka bi array göndermek zorundayız
someEx(populations)
// populations arrayini yukardaki fonksyona gönderdim ve cıktı olarak 
// populations arrayinin ilk değerini aldı

let katagori = {id:1, name:kola}
console.log(katagori.id)
console.log(katagori["name"])

let {id,name} = katagori
console.log(id)
console.log(name)
// objeler bu şaekilde destructing edilir