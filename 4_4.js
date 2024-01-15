//Задание №4 

function Device(brand, type){
  this.brand = brand,
  this.type = type
}
//--
Device.prototype.on = function(){
  console.log(`${this.type} ${this.brand} включен`)

}

Device.prototype.off = function(){
  console.log(`${this.type} ${this.brand} выключен`)
}

//--
function Iron(brand, type, color){
  this.brand = brand,
  this.type = type,
  this.color = color
}

function PC(brand, type, monitorSize){
  this.brand = brand,
  this.type = type,
  this.monitorSize = monitorSize
}
//--

Iron.prototype = new Device()

PC.prototype = new Device()

//--

const brown = new Iron('BROWN', 'утюг', 'green');
const macPC = new PC('MAC','компьютер', '21');

brown.on() //утюг BROWN включен
macPC.off() компьютер MAC выключен
brown.off() //утюг BROWN выключен
