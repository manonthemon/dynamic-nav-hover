const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(() => {
    if (this.classList.contains("trigger-enter")) {
      this.classList.add("trigger-enter-active");
    }
  }, 150);
  background.classList.add("open");

  const dropdown = this.querySelector(".dropdown");
  const dropdownCords = dropdown.getBoundingClientRect(); //Get coordinates of the dropdown
  const navCords = nav.getBoundingClientRect(); //Gets coordinates of nav in case it's not on top of page

  const cords = {
    height: dropdownCords.height,
    width: dropdownCords.width,
    top: dropdownCords.top - navCords.top,
    left: dropdownCords.left - navCords.left,
  };

  background.style.setProperty("width", `${cords.width}px`); //Defines width and height of background of hovered over dropdown
  background.style.setProperty("height", `${cords.height}px`);
  background.style.setProperty(
    "transform",
    `translate(${cords.left}px, ${cords.top}px )`
  ); // Defines position of the hovered over dropdown
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
