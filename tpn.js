// FINAL CALCULATION 

const calculate = document.querySelector("#calculate").addEventListener("click", function(){
  tpn();
});

// RESTART BUTTON

const restart = document.querySelector("#restart").addEventListener("click", function(){
  console.log("you have restarted!!!!");
});

// FUNCTION CALLS

dextrose();
protein();
lipids();
time();
buttonlb();
restart();

function tpn(){
  const total = dextrose() + protein() + lipids() + 150;
  const gramsDex = document.getElementById("dextroseInput").value;
  const tpnHours = document.querySelector("#hoursInput").value;
  const lbValue = buttonlb() /  2.2;
  const gir = document.getElementById("gir");
  const girTotal = (gramsDex / lbValue / time()).toFixed(2);
  fluidml.textContent = total;
  fluidliters.textContent = total / 1000;
  hours.textContent = tpnHours;
  gir.textContent = girTotal;
}

// DEXTROSE

function dextrose(){
    const dextroseGrams = document.getElementById("dextroseInput").value;
    const dextroseCalc = Math.ceil((dextroseGrams * 100) / 70);
    return dextroseCalc
}

// PROTEIN

function protein(){
    const proteinGrams = document.getElementById("proteinInput").value;
    const proteinCalc = Math.ceil((proteinGrams * 100) / 10);
    return proteinCalc
}

// LIPIDS

function lipids(){
    const lipidsGrams = document.getElementById("lipidsInput").value;
    const lipidsCalc = Math.ceil((lipidsGrams * 100) / 20);
    return lipidsCalc
}

// TIME

function time(){
  const tpnHours = document.querySelector("#hoursInput").value;
  const minutes = (tpnHours  * 60) / 1000;
  return minutes
}

// BUTTON POUNDS

function buttonlb() {
   const lbValue = document.querySelector("#weight").value;
   return lbValue
}
