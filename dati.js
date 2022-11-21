const kmDaPercorrere = parseInt ( prompt ('Quanti Kilometri vuoi percorrere?') );

const etaDelPasseggero = parseInt ( prompt ('Qual è la tua età attuale?') );

let prezzo = kmDaPercorrere * 0.21;

let prezzoSconto20Percento = prezzo * 20 / 100;

let prezzoSconto40Percento = prezzo * 40 / 100;

let prezzoFinale;

if ( ( etaDelPasseggero > 18 ) && ( etaDelPasseggero < 65) ){
    prezzoFinale = prezzo;
}
else if ( etaDelPasseggero < 18){
    prezzoFinale = prezzo - prezzoSconto20Percento;
}
else{
    prezzoFinale = prezzo - prezzoSconto40Percento;
}

    document.getElementById('output').innerHTML = 'Il prezzo finale (IVA esclusa) è di: ' + prezzoFinale.toFixed(2) + '€';
    
    const iva = parseInt (prezzoFinale * 22 / 100);

    document.getElementById('iva').innerHTML = 'IVA: ' + iva + '€';

    let totaleDaPagare = ( prezzoFinale + iva);
    document.getElementById('totale').innerHTML = 'Totale da pagare: ' + totaleDaPagare + '€';

