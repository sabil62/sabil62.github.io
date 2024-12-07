console.log("script file added");

// const mainCotainer = document.getElementById("main-container");
// mainCotainer.innerHTML.src = "./components/home.html";

// document.getElementById("new").innerHTML = "Hello JS ";

function handleNavigation(fileName, button) {
  const navigationButtons = document.getElementsByClassName("nav-link");
  console.log(navigationButtons);

  Array.from(navigationButtons).forEach((element) => {
    element.classList.remove("nav-link-active");
  });

  const mainCotainer = document.getElementById("main-container");
  mainCotainer.src = `./components/${fileName}`;

  button.classList.add("nav-link-active");
}
