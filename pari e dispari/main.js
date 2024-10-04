console.log("hello");

//ESERCIZO: Pari e dispari
//1-L’utente sceglie pari o dispari e inserisce un numero da 1 a 5
//2-Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
//3-Sommiamo i due numeri 
//4-Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
//5-Dichiariamo chi ha vinto.

//option 1
/* let user_choice=prompt("pari o dispari?")
console.log(user_choice);

let user_number=Number(prompt("digita un numero da 1 a 5"))
console.log(`numero generato dall'utente ${user_number}`);

function random_number(){
    let random_n = Math.floor((Math.random() * 5) + 1);
    return random_n
}
let random_n=random_number()
console.log(`numero generato dal computer ${random_n}`);

let sum=user_number+random_n
console.log(`somma dei due numeri ${sum}`);

function even_verify(){
    if ((user_number+random_n)%2==0) {
        console.log("se hai scelto pari HAI VINTO");
    }else{
        console.log("se hai scelto dispari HAI PERSO");
    }
}
even_verify() */


//option 2
let user_choice=Number(prompt("SCEGLI PARI o DISPARI. Scrivi un numero pari per scegliere pari o un numero dispari per scegliere dispari"))
if(user_choice%2==0){
    alert("l'utente ha scelto pari");
    console.log("l'utente ha scelto pari");
}else{
    alert("l'utente ha scelto dispari");
    console.log("l'utente ha scelto dispari");
}

let user_number=Number(prompt("ora digita un numero da 1 a 5"))
console.log(`numero generato dall'utente ${user_number}`);

function random_number(){
    let random_n = Math.floor((Math.random() * 5) + 1);
    return random_n
}
let random_n=random_number()
console.log(`numero generato dal computer ${random_n}`);

let sum=user_number+random_n
console.log(`somma dei due numeri ${sum}`);

function even_verify(){
    if ((user_number+random_n)%2==0 && user_number%2==0) {
        alert("HAI VINTO");
        console.log("HAI VINTO");
    }else if((user_number+random_n)%2!==0 && user_number%2!==0){
        alert("HAI VINTO");
        console.log("HAI VINTO");
    }else{
        alert("HAI PERSO");
        console.log("HAI PERSO");
    }
}
even_verify()




