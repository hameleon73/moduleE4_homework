//Задание №5 

class Device {
  constructor(type, brand) {
    this.type = type;
    this.brand = brand
  }
  
  on(){
    return this.type  + ' ' + this.brand +' включен';
  }

  off(){
    return this.type + ' ' + this.brand +' выключен';
  }
}



//--
class Iron extends Device{
  constructor(type, brand, color){
    super(type, brand);
    this.color = color
  }
  on(){
    return super.on()
  }
    off(){
    return super.off()
  }
}

class PC extends Device{
  constructor(brand, type, monitorSize){
    super(type, brand);
    this.monitorSize = monitorSize
  }
  on(){
    return super.on()
  }
  off(){
    return super.off()
  }
}

//--

const brown = new Iron('утюг','BROWN', 'зеленый');
const macPC = new PC('MAC','компьютер', '21');

console.log(brown.on())
console.log(macPC.off())
console.log(brown.off())
