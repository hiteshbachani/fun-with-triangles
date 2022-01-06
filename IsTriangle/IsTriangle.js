const inputAngle = document.querySelectorAll(".input-angle");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output");



function isTriangle() {

    const sumOfAngles = calculatesSumOfAngles();
 }


function calculatesSumOfAngles(angle1, angle2, angle3) {

    const sumOfAngles =  Number(inputAngle[0].value) + Number(inputAngle[1].value) + Number(inputAngle[2].value)



    if(sumOfAngles===180) {
        output.innerText = ("Yay, this forms a triangle");
    }
    else {
        output.innerText = ("oh, oh, it isn't a triangle");
    }

}

checkButton.addEventListener('click', isTriangle);