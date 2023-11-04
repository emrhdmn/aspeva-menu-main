import { menu } from "./db.js";
import { calculatePrice } from "./helpers.js";
//* the place where we will send the interface in HTML
const outlet = document.getElementById("outlet");
/*
 *we created an example from the URLSearchParams class to manage the parameters in the URL.
 *while creating the example, we sent the parameters from our own URL.
 */
const searchParams = new URLSearchParams(window.location.search);
//*we accessed the parameter in the URL using the GET method.
const paramid = searchParams.get("id");



// *accessing an item in the menu by knowing its ID.
const product = menu.find((item) => item.id === Number(paramid));
console.log(product);

//* displaying the interface on the screen according to the found product.
outlet.innerHTML = ` 
    <div class="d-flex justify-content-between align-items-center">
    <a href="/">
      <i class="bi bi-house fs-1"></i>
    </a>
    <div>
        anasayfa / ${product.category} / ${product.title.toLowerCase()}
    </div>
    </div>
      <h1 class="text-center my-3 p-2 shadow rounded">${product.title}</h1>
      <div class="d-flex align-items-center justify-content-center">
        <img
          src="${product.img}"
          class="img-fluid rounded shadow"
          style="max-width: 500px"
        />
      </div>
      <div>
        <h3 class="my-5">
            Ürünün Kategorisi:<span class="text-success">${
              product.category
            }</span>
        </h3>
        <h3 class="my-5">Ürünün Fiyatı: <span class="text-success">${calculatePrice(
          product.price
        )}&#8378;</span></h3>
      </div>
      <p class="lead fs-3">
       ${product.desc}
      </p>

`;
