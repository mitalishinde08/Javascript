// US telephone number validator

function telephoneCheck(str) {
    let reg = /^1? ?[1-9]\d{2}-\d{3}-\d{4}$|^1? ?[1-9]\d{2} \d{3} \d{4}$|^1? ?\([1-9]\d{2}\) ?\d{3}-\d{4}$|^1? ?[1-9]\d{9}$/
     return reg.test(str)
 }
 
console.log(telephoneCheck("-1 (757) 622-7382"))