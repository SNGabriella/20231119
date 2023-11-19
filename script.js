// .feladat: VAN - E NEGATíV SZÁM EGY TÖMBBEN!!! 
function VanENegativ(szamok) {
    var i = 0;
    while (i < szamok.length && !(szamok[i] < 0)) {
        i++;
    }
    return i < szamok.length;
}
// 2.feladat: Kör kerületét és területét számítja ki paraméterként kapott sugárból, tupple-t alkalmazva??!!
function KorSzamitas(radius) {
    var kerulet = 2 * radius * radius;
    var terulet = Math.PI * radius * radius;
    return [kerulet, terulet];
}
console.log(VanENegativ([5, 12, 3, 6, 9]));
console.log(VanENegativ([5, 12, -3, 6, 9]));
console.log(KorSzamitas(5));
// 4.feladat: Alprogram, ami kiválasztja egy autó tömbből a legkisebb hengerűrtartalmút
function LegkisebbHenger(autok) {
    var minhenger = autok[0];
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].Hengerurtartalom < minhenger.Hengerurtartalom) {
            minhenger = autok[i];
        }
    }
    return minhenger;
}
// Autó tömbből megadja a benzinesek darabszámát
function Benzinesek(autok) {
    var benzinesDb = 0;
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].BenzinesE == true) {
            benzinesDb++;
        }
    }
    return benzinesDb;
}
// Tesztelése az autóknak
var A1 = {
    gyarto: "Opel",
    tipus: "Corsa",
    Hengerurtartalom: 1100,
    BenzinesE: true
};
var A2 = {
    gyarto: "Ford",
    tipus: "K",
    Hengerurtartalom: 1000,
    BenzinesE: false
};
var A3 = {
    gyarto: "Dacia",
    tipus: "Duster",
    Hengerurtartalom: 1600,
    BenzinesE: true
};
var autok = [A1, A2, A3];
console.log(Benzinesek(autok));
console.log(LegkisebbHenger(autok));
