// console.log("hello")
// const myElement = document.getElementById("top-section");
// console.log(myElement)

/*HTML setup
Grab the dom elements (the input box and the button) in
Add an event listener to the button
Get access to user's input
Use the user's input to "do something".
Display the result to the user*/

const submitBtn = document.getElementById('submit-btn');
const inputField = document.getElementById('input-field');
const middleSection = document.getElementById('middle-section');
const topSection = document.getElementById('top-section');
const bottomSection = document.getElementById('bottom-section')

submitBtn.addEventListener('click', ()=>{
    console.log(inputField.value);
    console.log(middleSection.textContent);
    middleSection.textContent = inputField.value;
})
const colorField = document.getElementById("color-field");

submitBtn.addEventListener('click', ()=>{
    console.log(colorField.value);
    topSection.style.backgroundColor = colorField.value;
    bottomSection.style.backgroundColor = colorField.value;
    middleSection.textContent = inputField.value.toUpperCase() = heSheInput.value;
})

const pronounBtn = document.getElementById('add-pronoun')
const heSheInput = document.getElementById('pronoun')
const pronoun = document.getElementById('pronoun-output')
pronounBtn.addEventListener('click', ()=>{
    console.log(heSheInput.value);
    pronoun.textContent = heSheInput.value;

})

const fontInput = document.getElementById('font-input');
const fontButton = document.getElementById('change-font');
