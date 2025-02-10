let age = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

function ageCheck(){
    if (age<6){
        console.log('free')
    }else if(6<=age<=17){
        console.log('child discount')
    }else if(18<=age<=26){
        console.log('stu discount')
    }else if(27<=age<=66){
        console.log('fp')
    }else{
        console.log('senior sitizen discount')
    }
}