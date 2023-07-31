const myArray = [1,2,3]
let result = 0
  myArray.reduce((sum, value) => {
   return result = sum + value 
  }, 0)

console.log(result);