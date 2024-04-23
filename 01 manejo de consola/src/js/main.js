// let userName= prompt("Enter your username"); //NO SE UTILIZA (var)
// let lastName="González";
// const age="30 años";
// const email="milena029427@gmail.com"
// let phone="3146396952"
// let address="las cometas envigado"

let userName= prompt("Enter your username") 
let lastName= prompt("Enter you lastname")
const age= Number(prompt("Enter your age"))
const email= prompt("Enter your email")
let phone= prompt("Enter your phone")
let address= prompt("Enter your address")

if (age!==Number){
    console.error("eso no es un numero")
    alert("eso no es un numero")
}

// console.log(userName)
// console.log(lastName)
// console.log(age)
// console.log(email)
// console.log(phone)
// console.log(address)
// console.log(`%c${address}`,"background-color:#D9CEFF; border-radius: 50px; color:black")

// console.info("Full name: " + userName + " " + lastName)
// console.info("Full name: ", userName, lastName)
// console.info(`Full name: ${userName} ${lastName}`)


// console.info("age: " + age + " ")
// console.info("age: ",age)
// console.info(`age: ${age}`)

// console.info("email: " + email + " ")
// console.info("email: ",email)
// console.info(`email: ${email}`)

// console.info("phone: " + phone + " ")
// console.info("phone: ",phone)
// console.info(`phone: ${phone}`)

// console.info("address: " + address + " ")
// console.info("address: ",address)
// console.info(`address: ${address}`)

// console.info("Full name: " + userName + " " + lastName, "email: " + email + " ", "phone: " + phone + " ", "address: " + address + " ")

// console.group("data basic")
//     console.info(userName)
//     console.info(lastName)
//     console.info(age)
// console.groupEnd()

// console.group("data contact")
//     console.info(email)
//     console.info(phone)
//     console.info(address)
// console.groupEnd()

// const coders=["lupe ortiz","mateo duarte","maria antonieta"]
// console.info(coders)
// console.table(coders)