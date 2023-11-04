import { menu, buttonsData } from "./db.js";
import { elements, calculatePrice } from "./helpers.js";

//! Event Observers
//* monitoring the page loading event
//the reason we define renderMenuItems within another function is that we need to pass parameters to renderMenuItems.
//if we directly pass parameters to 'todo,' it would execute when the page is loaded.
//* call the renderMenuItems function when the page is loaded.
document.addEventListener("DOMContentLoaded", () => {
  renderButtons("all");
  renderMenuItems(menu);
});

//* the buttons section monitors click events on the buttons.
elements.buttonsArea.addEventListener("click", searchCategory);

//! Functions

//* display menu items on the screen.
function renderMenuItems(menuItems) {
  // create an HTML element representing each item in the series.
  // transfer this HTML to an array.
  // translate to string

  let menuHTML = menuItems.map((item) => {
    return `
    <a href="/productDetail.html?id=${
      item.id
    }" class="text-decoration-none text-black d-flex flex-column flex-md-row gap-2" id="card">
        <img src=${item.img} class="rounded shadow"/>
        <div>
        <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success">${calculatePrice(item.price)} &#8378;</p>
        </div>

        <p class="lead">
            ${item.desc}
        </p>
        </div>
    </a>
    `
  })
  // convert array to string
  menuHTML = menuHTML.join('')

  elements.menuArea.innerHTML = menuHTML
}

//* List the products belonging to the category of that button according to the clicked button
function searchCategory(e) {
  const category = e.target.dataset.category
  // retrieve only the elements from the entire list where the category value matches the category value of the button.
  const filtredMenu = menu.filter((item) => item.category === category)
  // if all items are selected, it displays the entire menu on the screen.
  if (category === 'all') {
    renderMenuItems(menu)
  } else {
    // print the filtered elements to the screen.
    renderMenuItems(filtredMenu)
  }

  // update the buttons
  renderButtons(category)
}

//* Pressing the buttons on the screen
function renderButtons(active) {
  // cause the old buttons to disappear
  elements.buttonsArea.innerHTML = ''
  // creating new buttons
  buttonsData.forEach((btn) => {
    // creating an HTML button
    const buttonEle = document.createElement('button')
    // add the class names to the buttonEle
    buttonEle.className = 'btn btn-outline-dark filter-btn'
    // changing the text inside
    buttonEle.textContent = btn.text
    // adding which category information is to the button element
    buttonEle.dataset.category = btn.value

    // if the active category matches the button, give it a different class.
    if (btn.value === active) {
      buttonEle.classList.add('bg-dark', 'text-light')
    }
    // sending to HTML
    elements.buttonsArea.appendChild(buttonEle)
  })
}
