function getDataCMSHome() {
  return fetch(
    "https://cdn.contentful.com/spaces/nfckvg6bxiqt/environments/master/entries?access_token=UlAA-NdKS06UgWd3isjDU58pLoyrlL1xDJJ6ZcnMRXE&content_type=desafioM4"
  )
    .then((res) => res.json())
    .then((json) => {
      const params = json.items.map((e) => {
        return {
          titleBienvenida: e.fields.titleBienvenida,
          subtitleBienvenida: e.fields.subtitleBienvenida,
          titleAboutMe: e.fields.titleAboutMe,
          pAboutMeFirst: e.fields.pAboutMeFirst,
          pAboutMeSecond: e.fields.pAboutMeSecond,
          pAboutMeThird: e.fields.pAboutMeThird,
        };
      });
      return params;
    });
}

function addContentCMSHome(params) {
  const welcomeTitleEl = document.querySelector(".welcome__title");
  welcomeTitleEl.textContent = params.titleBienvenida;

  const welcomeSubTitleEl = document.querySelector(".welcome__subtitle");
  welcomeSubTitleEl.textContent = params.subtitleBienvenida;

  const aboutMeTitleEl = document.querySelector(".about-me__title");
  aboutMeTitleEl.textContent = params.titleAboutMe;

  const aboutMePFirstEl = document.querySelector(".about-me__parragraph-first");
  aboutMePFirstEl.textContent = params.pAboutMeFirst;

  const aboutMePSecondEl = document.querySelector(
    ".about-me__parragraph-second"
  );
  aboutMePSecondEl.textContent = params.pAboutMeSecond;

  const aboutMePThirdEl = document.querySelector(".about-me__parragraph-third");
  aboutMePThirdEl.textContent = params.pAboutMeThird;
}

function resolvePromiseHome() {
  getDataCMSHome().then((params) => {
    for (const k of params) {
      addContentCMSHome(k);
    }
  });
}

function addContentCMSServices(params) {
  const container = document.querySelector(".services__template-content");
  const templateServices = document.querySelector("#services__template");
  const cardTitleEl = templateServices.content.querySelector(
    ".services__subtitle"
  );
  cardTitleEl.textContent = params.subtitle;

  const cardParragraphEl = templateServices.content.querySelector(
    ".services__parragraph"
  );
  cardParragraphEl.textContent = params.parragraph;

  const cardImgEl = templateServices.content.querySelector(".services__image");
  cardImgEl.src = params.image;
  const clone = document.importNode(templateServices.content, true);
  container.appendChild(clone);
}

function getDataCMSServices() {
  return fetch(
    "https://cdn.contentful.com/spaces/nfckvg6bxiqt/environments/master/entries?access_token=UlAA-NdKS06UgWd3isjDU58pLoyrlL1xDJJ6ZcnMRXE&content_type=desafioM4services"
  )
    .then((res) => res.json())
    .then((json) => {
      const params = json.items.map((e) => {
        return {
          subtitle: e.fields.title,
          parragraph: e.fields.parragraph,
          imgURL: e.fields.image.sys.id,
          includes: json.includes.Asset,
        };
      });
      params.forEach((x) => {
        let idEncontrado = buscarAssetServices(x.imgURL, x.includes);
        x.image = idEncontrado.fields.file.url;
      });
      return params;
    });
}

const buscarAssetServices = (assetID, includes) => {
  const coincidenciaID = includes.find((inc) => {
    return inc.sys.id == assetID;
  });
  return coincidenciaID;
};

function resolvePromiseServices() {
  getDataCMSServices().then((params) => {
    for (const k of params) {
      addContentCMSServices(k);
    }
  });
}

function addContentCMSPortfolio(params) {
  const container = document.querySelector(".portfolio__template-content");
  const templateServices = document.querySelector("#portfolio__template");
  const cardTitleEl = templateServices.content.querySelector(
    ".portfolio__subtitle"
  );
  cardTitleEl.textContent = params.subtitle;

  const cardParragraphEl = templateServices.content.querySelector(
    ".portfolio__parragraph"
  );
  cardParragraphEl.textContent = params.parragraph;

  const cardImgEl = templateServices.content.querySelector(".portfolio__image");
  cardImgEl.src = params.image;

  const cardUrlEl = templateServices.content.querySelector(".portfolio__link");
  cardUrlEl.href = params.url;

  const clone = document.importNode(templateServices.content, true);
  container.appendChild(clone);
}

function getDataCMSPortfolio() {
  return fetch(
    "https://cdn.contentful.com/spaces/nfckvg6bxiqt/environments/master/entries?access_token=UlAA-NdKS06UgWd3isjDU58pLoyrlL1xDJJ6ZcnMRXE&content_type=desafioM4portfolio"
  )
    .then((res) => res.json())
    .then((json) => {
      const params = json.items.map((e) => {
        return {
          subtitle: e.fields.title,
          parragraph: e.fields.parragraph,
          imgURL: e.fields.image.sys.id,
          url: e.fields.url,
          includes: json.includes.Asset,
        };
      });
      params.forEach((x) => {
        let idEncontrado = buscarAssetPortfolio(x.imgURL, x.includes);
        x.image = idEncontrado.fields.file.url;
      });
      return params;
    });
}

const buscarAssetPortfolio = (assetID, includes) => {
  const coincidenciaID = includes.find((inc) => {
    return inc.sys.id == assetID;
  });
  return coincidenciaID;
};

function resolvePromisePortfolio() {
  getDataCMSPortfolio().then((params) => {
    for (const k of params) {
      addContentCMSPortfolio(k);
    }
  });
}
