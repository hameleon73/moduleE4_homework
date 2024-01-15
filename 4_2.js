//Задание №2

function myfunc(myStr, myObj){
  result = false;
  for (let key in myObj) {
    if (myObj.hasOwnProperty(key)) {
      if (key == myStr){
        result = true
      }
    }   
  }
  return result;
}

const student = {
  "age": 13,
  "city": "Moscow"  
}

console.log(myfunc("age", student))
