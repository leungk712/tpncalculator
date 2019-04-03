// FINAL CALCULATION 

const calculate = document.querySelector("#calculate").addEventListener("click", function(){
  tpn();
});

// RESTART BUTTON

const reset = document.querySelector("#reset").addEventListener("click", function(){
  location.reload();
});


// FUNCTION CALLS

dextrose();
protein();
lipids();
time();
buttonlb();
calories();

function tpn(){
  const gramsDex = document.getElementById("dextroseInput").value;
  const gir = document.getElementById("gir");
  const tpnHours = document.querySelector("#hoursInput").value;
  const caloriesText = document.querySelector("#calories");
  const caloriesKg = document.querySelector("#calories-kg");
  const caloriesPro = document.querySelector("#protein-kg");
  const proteinGrams = document.getElementById("proteinInput").value;
  const total = dextrose() + protein() + lipids() + 150;
  const lbValue = buttonlb() /  2.2;
  const girTotal = (gramsDex / lbValue / time()).toFixed(2);
  fluidml.textContent = total;
  fluidliters.textContent = (total / 1000).toFixed(2);
  hours.textContent = tpnHours;
  gir.textContent = girTotal;
  caloriesText.textContent = calories();
  caloriesKg.textContent = (calories() / lbValue).toFixed(1);
  caloriesPro.textContent = (proteinGrams / lbValue).toFixed(1);
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

// CALORIES

function calories(){
  const dexCal = document.getElementById("dextroseInput").value * 3.4;
  const proCal = document.getElementById("proteinInput").value * 4;
  const lipCal = document.getElementById("lipidsInput").value * 10;
  const macroTotals = dexCal + proCal + lipCal;
  return macroTotals
}
