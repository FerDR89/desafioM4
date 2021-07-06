function addFooter(elemento) {
  const footerEl = document.createElement("div");
  footerEl.innerHTML = `
    <div class="footer__content">
        <div class="footer__title-content">
          <h2 class="title__title footer__title">Fernando</h2>
          <p class="footer__parragraph-subtitle">© 2021 FDR89</p>
        </div>
        <div class="footer__social-media-cotent">
        <a href="https://www.linkedin.com/in/fernando-emmanuel-de-row-396482b0" target="_blank" class="footer__social-media-link">
        <img src="./icon/logotipo-de-linkedin.svg" alt="Logo Linkedin" class="footer__social-media-image--size">
        </a>
        <a href="https://github.com/FerDR89" target="_blank" class="footer__social-media-link">
        <img src="./icon/github.svg" alt="Logo GitHub" class="footer__social-media-image--size">
        </a>
        </div>
    </div>
      `;
  elemento.appendChild(footerEl);
}
