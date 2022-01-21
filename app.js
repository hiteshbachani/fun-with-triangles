const sides = document.querySelectorAll(".sides");
const calculateBtn = document.querySelector("#calculate-btn");
const output = document.querySelector("#output");



function calculateHypotenuse() {

   const calculation = calculateSides()

  
 
}

function calculateSides() {

    const hypotenuse =  Math.sqrt(Number(sides[0].value)*Number(sides[0].value) + Number(sides[1].value)*Number(sides[1].value));

    output.innerText = `The length of hypotenuse is ${hypotenuse}`


}




calculateBtn.addEventListener("click", calculateHypotenuse)