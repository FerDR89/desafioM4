function headerElement() {
  const headerEl = document.querySelector(".header");
  addHeader(headerEl);
}

function insertFormComponent() {
  const containerForm = document.querySelector(".form__section");
  formComponent(containerForm);
  const addSubtitleClass = containerForm.querySelector(".form__title");
  addSubtitleClass.classList.add("title__subtitle");
}

function footerElement() {
  footerEl = document.querySelector(".footer");
  addFooter(footerEl);
}
