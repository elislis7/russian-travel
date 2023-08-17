const images = document.querySelectorAll(".photo-grid__item, .place__image");
const popup = document.querySelector('.popup');
const popupCloseButton  = popup.querySelector('.popup__close-icon');
const popupImage = popup.querySelector('.popup__place-image');
const popupTitle = popup.querySelector('.popup__title-image');

function openPopup (image) {
  image.addEventListener('click', () => {
    const imageSrc = image.getAttribute('src');
    const imageAlt = image.getAttribute('alt');

    popupImage.setAttribute('src', imageSrc);
    popupImage.setAttribute('alt', imageAlt);
    popupTitle.textContent = imageAlt;

    popup.classList.add('popup_opened');
  })
};

popupCloseButton.addEventListener('click', () => { 
  popup.classList.remove('popup_opened');
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("popup_opened");
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && popup.classList.contains("popup_opened")) {
    popup.classList.remove("popup_opened");
  }
});

images.forEach((image) => {
  openPopup(image);
});