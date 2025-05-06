const myButton = document.getElementById('myButton');
myButton.addEventListener('click', () => {
  alert('Button Clicked!');
});

const menuButton = document.getElementById('menuButton');
const myMenu = document.getElementById('myMenu');
menuButton.addEventListener('click', () => {
  myMenu.classList.toggle('hidden');
});

const mySlider = document.getElementById('mySlider');
const sliderValue = document.getElementById('sliderValue');

mySlider.addEventListener('input', () => {
  const sliderValueInt = parseInt(mySlider.value, 10);
  sliderValue.textContent = sliderValueInt; 

  const colors = [
    "red",        
    "orange",     
    "yellow",     
    "green",      
    "blue",       
    "violet"      
  ];

  let backgroundColor;
  if (sliderValueInt <= 20) {
    backgroundColor = colors[0]; 
  } else if (sliderValueInt <= 40) {
    backgroundColor = colors[1]; 
  } else if (sliderValueInt <= 60) {
    backgroundColor = colors[2]; 
  } else if (sliderValueInt <= 80) {
    backgroundColor = colors[3]; 
  } else {
    backgroundColor = colors[4]; 
  }

  document.body.style.backgroundColor = backgroundColor;
});