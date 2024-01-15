//Задание №1

function myfunc(myObj){
  for (let key in myObj){
    if (myObj.hasOwnProperty(key)) {
        console.log(key);
        console.log(myObj[key]);
    }
  }
}

const person = {

 city: "Moscow",
 age: 18

}

myfunc(person)
