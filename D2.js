/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let n1 = x
// let n2 = y
// let bigger 

// if (n1<n2) {
//   bigger = n2
// }
// else if (n1>n2) {
//   bigger = n1
// }
// else {
//   "they're even"
// }
// console.log('showbigger',bigger)

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let number1 = x
// if (number1!==5){
//   console.log("not equal")
// }

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let number = 10

// if (number % 5 === 0){
//   console.log('Divisibile per 5')
// }

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let number1 = 10
// let number2 = 2

// if (number1 === 8){
//   console.log('number1 è uguale a', number1)
// } 
// else if (number2 === 8) {
//   console.log('number2 è uguale a', number2)
// }
// else if (number1 - number2 === 8) {
//   console.log('la sottrazione è pari a 8')
// }
// else if (number2 - number1 === 8) {
//   console.log('la sottrazione è pari a 8')
// }
// else if (number1 + number2 === 8) {console.log ("l'addizione è pari a 8")
// }


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let totalShoppingCart = x
// const shippingFee = 10
// let total

// if (totalShoppingCart >= 50) {
//   console.log("Free shipping granted!")
// }

// else if (totalShoppingCart < 50) {
//   (total = totalShoppingCart + shippingFee)
//   console.log ( "Your total + Shipping fee (10€)", total)
// }


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let totalShoppingCart = x
// const shippingFee = 10
// let blackFriday = totalShoppingCart*0.2
// let total

// if (totalShoppingCart - blackFriday >= 50) { 
//   (total = totalShoppingCart - blackFriday)
//   console.log("Free shipping granted!", total)
// }

// else if (totalShoppingCart - blackFriday < 50) {
//   (total = (totalShoppingCart - blackFriday) + shippingFee)
//   console.log ( "Your total + Shipping fee (10€)", total)
// }


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let first = x
// let second = y
// let third = z

// if (first < second) {
//   if (first < third) {
//   primo = first;
//   if (second < third) {
//   secondo = second;
//   terzo = third;
//   } else {
//   secondo = third;
//   terzo = second;
//   }
//   } else {
//   primo = third;
//   secondo = first;
//   terzo = second;
//   }
//   } else {
//   if (second < third) {
//   primo = second;
//   if (first < third) {
//   second = first;
//   terzo = third;
//   } else {
//   second = third;
//   terzo = first;
//   }
//   } else {
//   primo = third;
//   secondo = second;
//   terzo = first;
//   }
//   } 
//   console.log(`Numeri ordinati in modo crescente: ${primo}, ${secondo},
//  ${terzo}`);
 
 
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let valore = 'x'

// if(typeof valore === 'number'){
// 	console.log(valore + " is a number");
//  }
//  else console.log(valore + " is not a number");

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let number = x

// let result = (number % 2)

// if (result > 0) {
//   console.log('Numero dispari!')
// }
// else console.log('Numero pari!')

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//  let val = 7
//  if (val < 5) {
//    console.log("Meno di 5");
//  }
//     if else (val < 10) {
//       console.log("Meno di 10");
//   } else {
//     console.log("Uguale a 10 o maggiore");
//   }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

// me.city = 'Toronto'

// console.log(me)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// delete me.lastName

// console.log(me)


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// me.skills.pop()
// console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// const numbers = []
// numbers.unshift (1,2,3,4,5,6,7,8,9,10)
// console.log (numbers)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// numbers.pop()
// numbers.push(100)
// console.log (numbers)
// numbers.splice(9, 1, 100)

