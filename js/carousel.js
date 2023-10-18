const arrows = document.getElementsByClassName("arrow");
const projects = document.getElementsByClassName("portfolio-project");
let currentVisibleProjectIndex = 0;

for (let arrow of arrows) {
  // Adding a click event listener to each arrow

  arrow.addEventListener(
    "click",
    () => {
      // The event listener will call the scroll function with the direction to scroll
      // This direction depends on the data-direction attribute in the markup
      scroll(arrow.dataset.direction);
    },
    false
  );
}

function scroll(direction) {
  // You can only scroll left if the index of the currentProject >= 0
  if (direction === "left" && currentVisibleProjectIndex > 0) {
    currentVisibleProjectIndex -= 1;
  }
  // You can only scroll right if the index of the currentProject is less than
  // the index of the last project
  else if (
    direction === "right" &&
    currentVisibleProjectIndex < projects.length - 1
  ) {
    currentVisibleProjectIndex += 1;
  }

  projects[currentVisibleProjectIndex].scrollIntoView();
}
