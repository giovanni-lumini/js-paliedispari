console.log("hello");

//ESERCIZO: Palindroma
//1-Chiedere all’utente di inserire una parola
//2-Creare una funzione per capire se la parola inserita è palindroma

/* let user_word=prompt("inserisicu una parola") */
let user_word=prompt("inserisicu una parola")
console.log(user_word);

function word_pal() {
    let user_word_array=user_word.split("")
    console.log(user_word_array);
    let user_word_reverse=user_word_array.reverse()
    console.log(user_word_reverse);
    let user_word_join=user_word_array.join("")
    return user_word_join
}
let user_word_join=word_pal()
console.log(user_word_join);

if (user_word==user_word_join){
    console.log(`${user_word} è una parola palindroma`); 
}else{
    console.log(`${user_word} non è una parola palindroma`);
}

