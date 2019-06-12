var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/newyork.jpg') {
      myImage.setAttribute ('src','images/street.jpg');
    } else {
      myImage.setAttribute ('src','images/newyork.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Zaha Hadid welcomes, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }