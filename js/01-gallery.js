import { galleryItems } from "./gallery-items.js";
import * as basicLightbox from "../node_modules/basiclightbox/src/scripts/main.js";

const gallery = document.querySelector(`.gallery`);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    const instance = basicLightbox.create(`
    <img src="${event.target.getAttribute(
      "data-source"
    )}" width="800" height="600">`);
    instance.show();
  }
});

function createGallery(images) {
  return images
    .map((item) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"/>
    </a>
  </div>`;
    })
    .join("");
}

gallery.insertAdjacentHTML("beforeend", createGallery(galleryItems));
console.log(galleryItems);
