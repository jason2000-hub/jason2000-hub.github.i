let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'C:/Users/Jason/OneDrive/Desktop/Messi-1.jpg') {
    myImage.setAttribute ('src','C:/Users/Jason/OneDrive/Desktop/fs.jpg');
  } else {
    myImage.setAttribute ('src','C:/Users/Jason/OneDrive/Desktop/messi.jpg');
  }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Man of breeze ---' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Man of breeze --- ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}