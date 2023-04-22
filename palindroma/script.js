const word = prompt('inserisci una parola')

if (isPalindroma(word)){
    console.log('palindroma')
}else {
    console.log('non palinìdroma')
}



function isPalindroma (word){
    let reversWord = '';
    for (let i = word.length -1; i >= 0; i--) {
        reversWord += word[i]
    }
    if (word == reversWord){
        return true
    } 
    return false

}

