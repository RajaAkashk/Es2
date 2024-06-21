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


console.log("Exercise 1:");
const calculateAverage = (numArr) => {
  let avg;
  let totalSum = 0;
  for (let i = 0; i < numArr.length; i++) {
    totalSum = totalSum + numArr[i];
  }
  avg = totalSum / numArr.length;
  return avg;
};
console.log(calculateAverage([5, 10, 15]));

console.log("Exercise 2:");
const reverseString = (str) => {
  let reveredStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reveredStr = reveredStr + str[i];
  }
  return reveredStr;
};
console.log(reverseString("world"));

console.log("Exercise 3:");
const findLongestWord = (Arr) => {
  let bigWord = Arr[0];
  for (let i = 1; i < Arr.length; i++) {
    if (Arr[i].length > bigWord.length) {
      bigWord = Arr[i];
    }
  }
  return bigWord;
};
console.log(findLongestWord(["apple", "banana", "grapefruit"]));

console.log("Exercise 4:");
const calculateStringLength = (str) => str.length;
console.log(calculateStringLength("hello"));

const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 92 },
  { name: "Charlie", age: 19, grade: 88 },
];

console.log("Exercise 5.1:");
const avgGrade = () => {
  let averageGrade;
  let totalGrade = 0;
  for (let i = 0; i < students.length; i++) {
    totalGrade = totalGrade + students[i].grade;
  }
  averageGrade = totalGrade / students.length;
  return averageGrade;
};
console.log("Average grade of all Students:", avgGrade());

console.log("Exercise 5.2:");
const nameArr = (students) => {
  let newArr =[]
  for(let i=0; i<students.length; i++){
    newArr.push(students[i].name)
  }
  return newArr
}
console.log(nameArr(students))


console.log("Exercise 5.3:");
const calculateAverageAge = (students) =>{
  let totalAge=0;
  let avgAge;
  for(let i=0; i<students.length; i++){
    totalAge = totalAge + students[i].age
  }
  avgAge = totalAge / students.length;
  return avgAge
}
 console.log(calculateAverageAge(students))

console.log("Exercise 5.4:");
const highGrades = (students) =>{
  let highGradeStudent = students[0]
  for(let i=1; i<students.length; i++){
    if(students[i].grade > highGradeStudent.grade){
        highGradeStudent = students[i]
    }
  }
  return highGradeStudent
}
console.log(highGrades(students))

console.log("Exercise 5.5:");
const isAnyBelow18 = (students) =>{
  let studentBelow18 = false;
  for(let i=0; i<students.length; i++){
    if(students[i].age < 18){
      studentBelow18 = true;
    }
  }
  return studentBelow18
}
 console.log(isAnyBelow18(students))

console.log("Exercise 5.6:");
const findStudentByName = (students, name) =>{
  let studentInfo;
  for(let i=0; i<students.length; i++){
    if(name === students[i].name){
      studentInfo = students[i]
    }
  }
  return studentInfo;
}
console.log(findStudentByName(students, "Charlie"))

console.log("Exercise 5.7:");
const getHighScoreStudents = (students) =>{
  let highScoreStudent=[]
  for(let i=1; i<students.length; i++){
    if(students[i].grade > 85 ){
      highScoreStudent.push(students[i].name)
    }
  }
  return highScoreStudent
}
console.log(getHighScoreStudents(students))

