

const name1 = function(name){
let firstname = name.split(' ')[0]
console.log(firstname)
}

name1("Mike Smith")


let namearrow = (name)=>name.split(' ')[0]
console.log(namearrow("Mike Smith"))



const multiplier = {
    num:[2,4,6,8],
    multiply:10,
    multiplied(){
      return this.num.map((item)=>item * this.multiply)
}
}

console.log(multiplier.multiplied())