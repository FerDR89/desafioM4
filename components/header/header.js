function addHeader(elemento) {
  const contentHeaderEl = document.createElement("div");
  contentHeaderEl.innerHTML = `
  <div class="header__content">
  <figure class="header__logo-content">
    <a href="./index.html">
      <img
        class="header__logo"
        src="./icon/logo-marca-blanco.svg"
        alt="Logo compañia"
      />
    </a>
  </figure>
  <div class="header__burguer-content header__burger--open">
    <div class="header__burguer-line header__burguer-line--margin-top"></div>
    <div class="header__burguer-line"></div>
    <div class="header__burguer-line"></div>
  </div>

  <div class="header__menu-content-mb">
    <div class="header__buguer-icon--position">
      <figure class="header__logo-content">
        <a href="./index.html">
          <img
            class="header__logo"
            src="./icon/logo-marca-blanco.svg"
            alt="Logo compañia"
          />
        </a>
      </figure>
      <div class="header__burguer--close">X</div>
    </div>
    <nav class="header__nav-menu">
      <ul class="header__nav-list">
        <li class="header__nav-item">
          <a href="./portfolio.html" class="header__nav-link"> Portfolio </a>
        </li>
        <li class="header__nav-item">
          <a href="./services.html" class="header__nav-link"> Servicios </a>
        </li>
        <li class="header__nav-item">
          <a href="./contact.html" class="header__nav-link"> Contacto </a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="header__menu-content-ds">
    <nav class="header__nav-menu-ds">
      <ul class="header__nav-list">
      <li class="header__nav-item">
      <a href="./portfolio.html" class="header__nav-link"> Portfolio </a>
    </li>
    <li class="header__nav-item">
      <a href="./services.html" class="header__nav-link"> Servicios </a>
    </li>
    <li class="header__nav-item">
      <a href="./contact.html" class="header__nav-link"> Contacto </a>
    </li>
      </ul>
    </nav>
  </div>
</div>
`;
  elemento.appendChild(contentHeaderEl);
}

function buguerButtom() {
  const openWindowEl = document.querySelector(".header__burger--open");
  const closeWindowEl = document.querySelector(".header__burguer--close");
  const windowEl = document.querySelector(".header__menu-content-mb");

  openWindowEl.addEventListener("click", function () {
    windowEl.style.display = "initial";
  });

  closeWindowEl.addEventListener("click", function () {
    windowEl.style.display = "none";
  });
}
