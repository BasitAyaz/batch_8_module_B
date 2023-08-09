// ==== Default Types ====

// let a = "abc"

// // a = 123
// a = "xyz"

// let num = 123

// // num = "abc"
// num = 456

// let st = false
// st = 123

// let arr = [1,2,3,4,5,6]
// // // arr.push("a")
// arr.push(10)


// let arr = ["abc",1,2,3]

// arr.push("xyz")
// arr.push(456)
// arr.push(true) // error


// let abc;
// abc = "abc"
// abc = 123
// abc = true
// abc = []
// abc = {}


// let obj = {
//     id:1,
//     name:'ABC'
// }

// obj.age = 10 // error
// obj.name = 10 // error
// obj.name = 'xyz'


// ==== Types ====

// let a:string = "abc"

// a = 123 //  error
// a = "xyz" 

// let b:number = 123
// b = "abc" // error
// b = 654

// let a:boolean = true
// a = 123 // error
// a = false


// let a:[] = []

// let numsArray:number[] = [1,2,3,4,5,6]
// let numsArray:(number | string)[] = [1,2,3,4,5,6,"abc","xyz","jkl"]


// let objType:{
//     id:number,
//     name:string,
//     isAdmin:boolean    
// } 

// objType = {
//     id:1,
//     name:"abc",
//     isAdmin:true
// }


// let arrOfObj:{
//     id:number,
//     name:string
// }[] = [
//     {
//         id:1,
//         name:'abc'
//     },
//     {
//         id:2,
//         name:'xyz'
//     }
// ]


// let arrayInObj:{
//     id:number,
//     name:string,
//     items:(string|number|boolean)[]
// } = {
//     id:1,
//     name:'abc',
//     items:['abc',2]
// }


// type myObj = {
//     id:number,
//     name:string,
//     age:number,
//     isAdmin:boolean
// }

// let obj:myObj = {
//     id:1,
//     name:'abc',
//     age:18,
//     isAdmin:false
// }


// let arr:myObj[] = [
//     {
//     id:1,
//     name:'abc',
//     age:18,
//     isAdmin:false
//     },
//     {
//     id:1,
//     name:'abc',
//     age:18,
//     isAdmin:false
//     },
// ]


// type userArr = myObj[]

// let arr:userArr = [
//     {
//         id:1,
//         name:'abc',
//         age:18,
//         isAdmin:true
//     },
//     {
//         id:1,
//         name:'abc',
//         age:18,
//         isAdmin:true
//     },
//     {
//         id:1,
//         name:'abc',
//         age:18,
//         isAdmin:true
//     },
// ]

// type config = {
//     id:number,
//     name:string,
//     theme: "dark" | "light"
// } 

// let obj:config = {
//     id:1,
//     name:'abc',
//     theme:"light"
// }




// summary



// types = string, number, boolean, [], {}
// array types = string[] 
// array types = (string | number) []
// custom types objType = {id:number, name:string}
// array in Objects = objType[]





