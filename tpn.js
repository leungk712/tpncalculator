// FINAL CALCULATION 

const calculate = document.querySelector("#calculate").addEventListener("click", () => {
  let lbValue = document.querySelector("#weight").value;
  if(lbValue === '' || lbValue === 0 || lbValue < 0) {
   alert('Please type in a weight in pounds');
  } else{
    tpn();
  }
});

// RESTART BUTTON

const reset = document.querySelector("#reset").addEventListener("click", () => location.reload());

// FUNCTION CALLS

dextrose();
protein();
lipids();
time();
pounds();
calories();

// TPN

const tpn = () => {
  const gramsDex = document.getElementById("dextroseInput").value;
  const gir = document.getElementById("gir");
  const tpnHours = document.querySelector("#hoursInput").value;
  const caloriesText = document.querySelector("#calories");
  const caloriesKg = document.querySelector("#calories-kg");
  const caloriesPro = document.querySelector("#protein-kg");
  const proteinGrams = document.getElementById("proteinInput").value;
  const total = dextrose() + protein() + lipids() + 150;
  const lbValue = pounds() /  2.2;
  const girTotal = (gramsDex / lbValue / time()).toFixed(2);
  fluidml.textContent = total;
  fluidliters.textContent = (total / 1000).toFixed(2);
  hours.textContent = tpnHours;
  gir.textContent = girTotal;
  caloriesText.textContent = calories();
  caloriesKg.textContent = (calories() / lbValue).toFixed(1);
  caloriesPro.textContent = (proteinGrams / lbValue).toFixed(1);
};

// DEXTROSE

const dextrose = () => {
    const dextroseGrams = document.getElementById("dextroseInput").value;
    const dextroseCalc = Math.ceil((dextroseGrams * 100) / 70);
    return dextroseCalc
};

// PROTEIN

const protein = () => {
    const proteinGrams = document.getElementById("proteinInput").value;
    const proteinCalc = Math.ceil((proteinGrams * 100) / 10);
    return proteinCalc
};

// LIPIDS

const lipids = () => {
    const lipidsGrams = document.getElementById("lipidsInput").value;
    const lipidsCalc = Math.ceil((lipidsGrams * 100) / 20);
    return lipidsCalc
};

// TIME

const time = () => {
  const tpnHours = document.querySelector("#hoursInput").value;
  const minutes = (tpnHours  * 60) / 1000;
  return minutes
};

// POUNDS

const pounds = () => {
   const lbValue = document.querySelector("#weight").value;
   return lbValue
}; 

// CALORIES

const calories = () => {
  const dexCal = document.getElementById("dextroseInput").value * 3.4;
  const proCal = document.getElementById("proteinInput").value * 4;
  const lipCal = document.getElementById("lipidsInput").value * 10;
  const macroTotals = dexCal + proCal + lipCal;
  return macroTotals
};
