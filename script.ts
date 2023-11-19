// VAN - E NEGATíV SZÁM EGY TÖMBBEN!!! 

function VanENegativ(szamok : number []):boolean{
    var i:number = 0;

    while(i < szamok.length && !(szamok[i] < 0)){
        i++;
    }

    return i < szamok.length;
}


// Kör kerületét és területét számítja ki parameterül kapott sugarból, tupple-t alkamazva??!!


function KorSzamitas(radius : number): [number, number]{

   var kerulet = 2 * radius * radius;
   var terulet = Math.PI * radius * radius;

    return [kerulet, terulet];
}

console.log(VanENegativ([5,12,3,6,9]));
console.log(VanENegativ([5,12,-3,6,9]));
console.log(KorSzamitas(5));


// Interface Auto néven

interface Auto{
    gyarto : string;
    tipus : string;
    Hengerurtartalom: number;
    BenzinesE: boolean;
}


