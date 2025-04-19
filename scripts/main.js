const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/AC_400x400.jpg") {
    myImage.setAttribute("src", "images/Valhalla_400x400.png");
  } else {
    myImage.setAttribute("src", "images/AC_400x400.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to Osiraces.com, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to Osiraces.com, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
