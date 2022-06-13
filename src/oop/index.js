export class Customer{
    constructor(id,customerNumber){

    }

}

let customer = new Customer(1,"12345");
//burada Customer classı türünde bir customer değişkeni oluşturduk
// ve classın constructor parametlerini atadık
//console.log(customer.id)
// bu şekilde customer.id ye ulaşamayız
//class türünde oluşturan değişkenlerin constructor parametlerine ulaşamayız

customer.name = "Mahmut Gecekuşu"
console.log(customer.name)
//class türünde oluşturulan değişkene bambaşka bir özellik tanımlanabilir
// buna prototyping denir

Customer.ozlellik = "ozellik"
console.log(Customer.ozlellik)
// classlarada prototyping yaoılabilir

export class Customer1{
    constructor(id,customerNumber){
        this.id = id
        this.customerNumber = customerNumber
        //yukarıda customer.id yi okuyamamıştık bunu okumak için constructor içinde prototypiing yapmamız gerek
        // this.id = id dedğimizde constructor parametresi olan id yi  bizim class dışında oluşturduğumuz değişkenin id sine atar
        // böylelikler dış tarafta bu class türünde oluşturduğumuz değişkenin id sini artık okuyabilirz

    }

}
let customer1 = new Customer1(1,"12345");
console.log(customer1.id)


class InduvidualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName = firstName
    }

}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
    }
}

// classları inherit etmet için extends kodu kullanılır
// id ve customernumber tüm classlarda ortak olduğu için
// id ve customer number aynı zamanda  base classa göndermem lazım
// bunun için super kullanılır
// classların kendine özel olan özellikleri için constrauctor içinde bunları tanımlamak gerek


