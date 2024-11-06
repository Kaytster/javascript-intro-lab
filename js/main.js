//console.info("Katy");
//console.dir(document.getElementById("myHeading"));
document.getElementById("myHeading").innerHTML = "Katy";
document.querySelector("nav ul li").setAttribute("class", "currentPage");
document.querySelector("nav ul li a").setAttribute("href", "https://www.google.co.uk");

//Colour Buttons
/*  let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons);
for (let i = 0; i < colourButtons.length; i++) {
    colourButtons[i].addEventListener("click", chgColour)
}
let myButton = document.getElementById("myTestBtn");
myButton.addEventListener("click", function()
{
    console.info("hi");
}); 

 let redButton = document.querySelector(".red");
let greenButton = document.querySelector(".green");
let blueButton = document.querySelector(".blue");
let defaultButton = document.querySelector(".reset");  */

//Image Rotator
let imageAr = [
  "images/view1.jpg",
  "images/view2.jpg",
  "images/view3.jpg",
  "images/view4.jpg",
  "images/view5.jpg",
  "images/view6.jpg"
];

let imageCounter = 0;
let imageRotator = document.getElementById("myImages");
setInterval(changeImage, 4000);

function changeImage() 
{
imageRotator.setAttribute("src", imageAr[imageCounter]);
imageCounter++; 
if (imageCounter >= imageAr.length)
    {
    imageCounter = 0;
    }
}
changeImage();

document.getElementById("myImages").addEventListener("click", nextImage)
function nextImage()
{
    imageRotator.setAttribute("src", imageAr[imageCounter]);
    imageCounter++;
    if (imageCounter >= imageAr.length)
    {
    imageCounter = 0;
    }
}


/* let documentBody = document.querySelector("body");
redButton.addEventListener("click", function() {
    console.info("red clicked");
    documentBody.setAttribute("class", "redBack");
});
greenButton.addEventListener("click", function() {
    console.info("green clicked");
    documentBody.setAttribute("class", "greenBack");
});
blueButton.addEventListener("click", function() {
    console.info("blue clicked");
    documentBody.setAttribute("class", "blueBack");
});
defaultButton.addEventListener("click", function() {
    console.info("default clicked");
    documentBody.setAttribute("class", "defaultBack");
}); */
 



