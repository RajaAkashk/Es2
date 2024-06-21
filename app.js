console.log('Exercise 1:')

const fullName = (name,surName) => ({firstName:name, lastName: surName})
console.log(fullName("Raja Akash","Kumar"))

console.log('Exercise 2:')

const stringToObj = (str) => ({length:str.length, uppercase: str.toUpperCase()})
console.log(stringToObj("hello"))

console.log('Exercise 3:')
const profile = (firstName,lastName,age,phoneNumber) => ({fullName:firstName + lastName, age:age, phoneNumber:phoneNumber})
console.log(profile("Raja Akash","Kumar",23,999944455))

console.log('Exercise 4:')
const concantenateStr =(firstWorld,secondWorld) => ({concatenation:firstWorld+" "+secondWorld, charCount:(firstWorld+secondWorld).length})
console.log(concantenateStr("Hello", "World"))

console.log('Exercise 5:')
const calculateCircleProperties =(radius) => ({circumference: 2*Math.PI*radius,area: Math.PI * radius**2})
console.log(calculateCircleProperties(5))

console.log('Exercise 6:')
const calculateDifferenceAndQuotient = (a,b) => ({difference: a-b, quotient: a / b})
console.log(calculateDifferenceAndQuotient(10,2))

console.log('Exercise 7:')
const analyzeSentence = (str) => ({wordCount: str.split(' ').length})
console.log(analyzeSentence("JavaScript is fun"))


console.log('Exercise 8:')
const calculateSquareAndCube = (num) => ({square: num**2,cube: num**3})
console.log(calculateSquareAndCube(4))

console.log('Exercise 9:')
const checkNumber = (num) => ({isPositive: num > 0, isNegative: num < 0})
console.log(checkNumber(11))
console.log(checkNumber(-7))
