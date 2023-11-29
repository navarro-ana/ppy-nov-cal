
const CALCULAR = document.getElementById("calcular");
const ERROR = document.getElementById("error");
const FLUJO = document.getElementById("flujo");
const MANTENIMIENTO = document.getElementById("mantenimiento");
const INPUT = document.getElementById("peso")

CALCULAR.addEventListener("click", () => {
    const PESO = document.getElementById("peso").valueAsNumber;
    if (PESO > 0) {
        if (PESO <=30 ) {
         ERROR.style.display = "none";  
         let flujoH = Holliday(PESO);
         let mantenimiento = flujoH * 1.5;
         MANTENIMIENTO.innerHTML = "m + m/2: " + mantenimiento.toFixed (2) + " cc/h";
         MANTENIMIENTO.style.display = "block";
         FLUJO.innerHTML = flujoH + " cc/h";
         FLUJO.style.display = "block";
         console.log (flujoH);
        } else {
            ERROR.style.display = "none";
            let flujoSC = SuperficieCorporal (PESO);
            console.log(PESO)
            console.log (flujoSC)
            let resultado1 = flujoSC * 1500;
            let resultado2 = flujoSC * 2000;
            FLUJO.innerHTML = resultado1.toFixed (2)+ " cc/h";
            FLUJO.style.display = "block";

            MANTENIMIENTO.innerHTML = resultado2.toFixed(2) + "cc/h";
            MANTENIMIENTO.style.display = "block";
        }
    } else {
        ERROR.style.display = 'block';
        FLUJO.style.display = 'none';
        MANTENIMIENTO.style.display = 'none';
}

function SuperficieCorporal(peso) {
    
    return ( (peso * 4) + 7) / (peso + 90)
    
    
}

function Holliday (peso) {
    let flujoH = 0;
    if (peso > 20) {
        flujoH = 1500 + (peso - 20) * 20;
    } else if (peso > 20 && peso > 10) {
        flujoH = 1000 + (peso - 10) * 50;
    } else {
        flujoH = peso * 100;
    }
    return flujoH /24;
}    
})