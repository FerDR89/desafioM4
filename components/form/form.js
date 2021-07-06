function formComponent(elemento) {
  const formComponentEl = document.createElement("div");
  formComponentEl.innerHTML = `
      <div class="form__content--size form__content--bg">
          <div class="form__content-title">
              <h2 class="form__title">Contacto</h2>
          </div>
          <form class="form__form form__form-content--size">
              <fieldset class="form__fieldset-input-name">
                <label for="input-name" class="form__label">Nombre</label>
                <input
                  type="text"
                  name="input-name"
                  id="input-name"
                  class="input form__input-name form__input-name--height"
                />
              </fieldset>
              <fieldset class="form__fieldset-input-email">
                <label for="input-email" class="form__label"> Email</label>
                <input
                  type="email"
                  name="input-email"
                  id="input-email"
                  class="input form__input-email form__input-email--height"
                />
              </fieldset>
              <fieldset class="form__fieldset-message">
                <label for="input-message" class="form__label"> Mensaje</label>
                <textarea
                  name="input-message"
                  id="input-message"
                  class="input form__input-message form__input-message--height"
                ></textarea>
              </fieldset>
              <div class="form__button-content--size">
                <button class="button form__button">Enviar</button>
              </div>
           </form>
      </div>
   `;
  elemento.appendChild(formComponentEl);
}

const handleEvent = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const objeto = Object.fromEntries(data.entries());
  sendData(objeto);
  let inputs = document.querySelectorAll(".input");
  inputs.forEach((i) => {
    i.value = "";
  });
};

function sendData(objeto) {
  const url = "https://apx-api.vercel.app/api/utils/dwf";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: "ferderow@gmail.com",
      message: objeto["input-message"],
    }),
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response));
}

const formListener = () => {
  const myForm = document.querySelector(".form__form");
  myForm.addEventListener("submit", handleEvent);
};
