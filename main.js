


// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
// Primo step: eliminare gli spazi e i segni di punteggiatura:
// Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "")

// Esempio:
// Input: “i topi non avevano nipoti”
// Output: true



function palindromaONonPalindroma(frase) {
    
    
    let step_1 = frase.replace(/\W/g, "");
    
    let clone_inverso = step_1.split('').reverse().join('');
    
    let check = step_1 == clone_inverso;
    
       
    
    // console.log(frase);
    
    // console.log(step_1);
    
    // console.log(clone_inverso);
    
    console.log(check);
    
    
}


palindromaONonPalindroma (`i topi non avevano nipoti`)

palindromaONonPalindroma (`i topi non avevano nipoti ciao`)

palindromaONonPalindroma (`anna`)

palindromaONonPalindroma (`panna`)

















