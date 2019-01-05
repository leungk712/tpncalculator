var button = document.querySelector("#calculate").addEventListener("click", function(){
  tpn();
});

function tpn(){
  var total = dextrose() + protein() + lipids() + 150;
  fluidml.textContent = Math.ceil(total);
  fluidliters.textContent = (total / 1000).toFixed(2);
}

function dextrose(){
    var dextroseGrams = document.getElementById("dextroseInput").value;
    var dextroseCalc = Math.ceil((dextroseGrams * 100) / 70);
    return dextroseCalc
}
dextrose();

function protein(){
    var proteinGrams = document.getElementById("proteinInput").value;
    var proteinCalc = Math.ceil((proteinGrams * 100) / 10);
    return proteinCalc
}
protein();

function lipids(){
    var lipidsGrams = document.getElementById("lipidsInput").value;
    var lipidsCalc = Math.ceil((lipidsGrams * 100) / 20);
    return lipidsCalc
}
lipids();


// var dextroseGrams = document.getElementById("dextroseInput").value;
// var proteinGrams = document.getElementById("proteinInput").value;
// var lipidsGrams = document.getElementById("lipidsInput").value;
// var dextroseCalc = (dextroseGrams * 100) / 70;
// var proteinCalc = (proteinGrams * 100) / 10;
// var lipidsCalc = (lipidsGrams * 100) / 20;
// var fluidml = document.getElementById("fluidml");
// var fluidliters = document.getElementById("fluidliters");
// var total = dextroseCalc + proteinCalc + lipidsCalc + 150;


// THIS IS A LESSON LEARNED

// function tpn(){
//   let fluidml = document.getElementById("fluidml");
//   let fluidliters = document.getElementById("fluidliters");
//   total();
  
//   fluidml.textContent = total()
//   fluidliters.textContent = total() / 1000;
// }

// function dextrose(){
//     let dextroseGrams = document.getElementById("dextroseInput");
//     let dextroseCalc = (dextroseGrams * 100) / 70;
//     return dextroseCalc
// }

// function protein(){
//   let proteinGrams = document.getElementById("proteinInput");
//   let proteinCalc = (proteinGrams * 100) / 10;
//   return proteinCalc
// }

// function lipids(){
//   let lipidsGrams = document.getElementById("lipidsInput");
//   let lipidsCalc = (lipidsGrams * 100) / 20;
//   return lipidsCalc
// }

// function total(dextrose, protein, lipids){
//   var total = dextrose + protein + lipids + 150;
//   return total
// }


// THIS IS ANOTHER LESSON LEARNED


// function tpn(){
//   //Dextrose
//   let dextroseGrams = document.getElementById("dextroseInput").addEventListener("input", function(d){
//        let dex = parseFloat(d.target.value);
//    });
//   let dextroseCalc = (dextroseGrams * 100) / 70;
  
  
//   //Protein
//   let proteinGrams = document.getElementById("proteinInput").addEventListener("input", function(p){
//       let pro = parseFloat(p.target.value);
//   });
//   let proteinCalc = (proteinGrams * 100) / 10;
  
//   //Lipids
//   let lipidsGrams = document.getElementById("lipidsInput").addEventListener("input", function(l){
//       let lip = parseFloat(l.target.value);
//   });
//   let lipidsCalc = (lipidsGrams * 100) / 20;
  
//   let total = dextroseCalc + proteinCalc + lipidsCalc + 150;
  
//   let fluidml = parseFloat(document.getElementById("fluidml"));
//   let fluidliters = parseFloat(document.getElementById("fluidliters"));
  
//   let totalMilli = total;
//   fluidml.textContent = totalMilli;
  
//   let totalLiters = total / 1000;
//     fluidliters.textContent = totalLiters;
  
//   console.log("yay it works!");
//   alert("Awesome!");
//   console.log(totalMilli);
//   console.log(totalLiters);
//


// THIS IS ANOTHER LESSON LEARNED

// function tpn(){
//   dextrose();
//   protein();
//   lipid();
  
//   var macros = dextrose + protein + lipids;
  
//   var milliliters = document.querySelector("#fluidml").innerHTML = Math.floor((macros + 150)) + " milliliters needed for TPN to fit!";
  
//   var liters = document.querySelector("#fluidliters").innerHTML = Math.floor(((macros + 150) / 1000)) + " liters needed for TPN to fit!";
// }

// function dextrose() {
//   //querySelect value of dextrose input
//     var gramsDex = document.querySelector("#dextroseInput").value;
//   //calculate input * dextrose formula
//     var dextrose = Math.floor((gramsDex * 100) / 70);
// }

// function protein(){
//   var gramsPro = document.querySelector("#proteinInput").value;
//     var protein = Math.floor((gramsPro * 100) / 10);
// }

// function lipid(){
//   var gramsFat = document.querySelector("#lipidsInput").value;
//     var lipids = Math.floor((gramsFat * 100) / 20);
// }


// function tpn(){

// let d = document.querySelector("#dextroseInput").addEventListener("input", function(a){
//   let dextrose = a.target.value;
//   return (dextrose * 100) / 70;
// })

// let p = document.querySelector("#proteinInput").addEventListener("input", function(b){
//   let protein = b.target.value;
//   return (protein * 100) / 10;
// })

// let l = document.querySelector("#dextroseInput").addEventListener("input", function(c){
//   let lipids = a.target.value;
//   return (lipids * 100) / 20;
// })

// document.getElementById("fluidml").innerHTML = Math.floor((d + p + l + 150)) + " milliliters needed for TPN to fit!";

// document.getElementById("fluidliters").innerHTML = Math.floor(((d + p + l + 150) / 1000)) + " liters needed for TPN to fit!";
// }
