const k = 2;
var vett = [];
var i = 0;

for(i=0; i<k; i++){
    vett[i] = parseInt(prompt('inserisci il' + (i+1) + 'o numero: '));
}

i=0;

if(vett[i]>vett[i+1]){
    console.log('il maggiore è: ' + vett[i]);
} else if (vett[i]<vett[i+1]) {
    console.log('il maggiore è: ' + vett[i+1]);
} else {
    console.log('i due valori sono uguali.');
}
