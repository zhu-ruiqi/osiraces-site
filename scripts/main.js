const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/AC_400x400.jpg") {
    myImage.setAttribute("src", "images/Valhalla_400x400.png");
  } else {
    myImage.setAttribute("src", "images/AC_400x400.jpg");
  }
});
