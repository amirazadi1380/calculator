const myDisplay = document.getElementById('display')
const buttons = Array.from(document.getElementsByClassName('buttons'))
const myEqual = document.getElementById('equal')

buttons.forEach(button => {  button.addEventListener('click', (e) => {

switch(e.target.innerText){

case 'C' :
    display : myDisplay.innerText = " "
    break;
case '=' :
    display : myDisplay.innerText = eval(myDisplay.innerText)
    break;


 
    default: myDisplay.innerText = myDisplay.innerText + e.target.innerText 
}



})
    
});