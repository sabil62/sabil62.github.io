function handleNavigation(pageName, activeButton) {
  const navigationButtons = document.getElementsByClassName("nav-link");

  console.log(navigationButtons);

  Array.from(navigationButtons).forEach((element) => {
    element.classList.remove("nav-link-active");
  });
  console.log(activeButton);

  activeButton.classList.add("nav-link-active");

  const mainContainer = document.getElementById("main-container");
  mainContainer.src = `./components/${pageName}`;
}

function goToPage(pageName, activeButtonId) {
  const navigationButtons = document.getElementsByClassName("nav-link");

  console.log(navigationButtons);

  Array.from(navigationButtons).forEach((element) => {
    element.classList.remove("nav-link-active");
  });

  const activeButton = document.getElementById(activeButtonId);
  console.log(activeButton);

  activeButton.classList.add("nav-link-active");

  const mainContainer = document.getElementById("main-container");
  mainContainer.src = `./components/${pageName}`;
}
