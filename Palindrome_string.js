
function palindrome(str) {

    str = str.replace(/[^\w\d]|_/g,"").toLowerCase()
    for (let i=0;i<Math.floor(str.length/2);i++) {
        if (str[i]===str[str.length-i-1]) {
            continue
        }
        else{
            return false
        }
    }
    return true
}

console.log(palindrome('eyes'))