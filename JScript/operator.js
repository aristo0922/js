//1. String concatenation
console.log('my' + 'cat');
console.log('1'+2);
console.log(`string literals : 1+2 = ${1+2}`);

//2. Numeric operators
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(5%2);
console.log(1*1);
console.log(2**3); // exponentiation

//3. Incerement and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1; // 3 
//preIncrement = counter; //3
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);
const postIncrement = counter++;
//counter = counter; // 3 
//postIncrement = counter +1; //4
console.log(`postIncrement : ${postIncrement}, counter : ${counter}`);


//4. Assignment operators
let x = 3;
let y = 6;
x += y ; // xx = x+y;
x -= y ;
x *= y ;
x /= y ;

//5. Comparison operators
console.log(10<6); // true or false

//6. Logical operators : || or, && and, ! not
const value1 = true;
const value2 = false;

//or and 연산에서 heavy한 check는 최후의 최후에 호출되도록 배치.
//앞에서 하나라도 true 가 나온다면 check는 호출 x; 
console.log(`or: ${value1 || value2 || check() }`); 

function check(){
    for ( let i = 0 ; i < 10 ; i++){
        //wasting time
        console.log('.');
    }
    return true;
}

//7.Equality
const stringFive ='5';
const numberFive = 5;

// == loose equality, with type conversion 데이터 자체를
console.log(stringFive == numberFive);//true
console.log(stringFive != numberFive);

//===strict equality, no type conversion 데이터 타입도 비교
console.log(stringFive === numberFive);//flase
console.log(stringFive !== numberFive);