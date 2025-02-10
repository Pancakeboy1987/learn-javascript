let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&


function fr(){
    if ((dayOfMonth===13)&&(weekday=="Friday")){
        return "omg"
    }else{
        return "meh"
    }
}

console.log(fr())