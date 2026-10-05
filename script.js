const translations = {
  en: {
    navHow: "How it works",
    navStructure: "Copy structure",
    navPrivacy: "Privacy",

    heroEyebrow: "Simple. Local. Yours.",
    heroTitle: "Put your files in order.",
    heroDescription:
      "A simple Windows file organizer that helps you scan, review, and organize folders locally.",

    downloadButton: "Download FileStru",
    viewGithub: "View on GitHub →",

    heroMetaFree: "Free",
    heroMetaAccount: "No account",
    heroMetaLocal: "Local-first",

    previewLabel: "Downloads",
    previewFiles: "24 files",
    previewReady: "Ready to organize",

    howEyebrow: "How it works",
    howTitle: "Organize without losing control.",
    howDescription:
      "FileStru keeps the process simple: see what is there, review what should change, and decide what actually happens.",

    stepScanTitle: "Scan",
    stepScanText:
      "Choose a folder and let FileStru understand the files inside it.",

    stepReviewTitle: "Review",
    stepReviewText:
      "See the proposed organization before anything is changed.",

    stepOrganizeTitle: "Organize",
    stepOrganizeText:
      "Confirm the plan and let FileStru perform the changes.",

    structureEyebrow: "Copy the structure",

    structureTitle:
      "See exactly how your folders are organized.",

    structureDescription:
      "Copy the complete folder structure to your clipboard, including folder names and hierarchy. Useful for documenting, reviewing, or sharing what's inside.",

    structureNote:
      "The result keeps the folder names and their hierarchy.",

    copyLabel: "Copy structure",

    privacyEyebrow: "Local-first",
    privacyTitle: "Your files stay on your computer.",
    privacyDescription:
      "FileStru is designed to organize files locally. There is no account required and the core organization process does not depend on a cloud service.",

    featuresEyebrow: "Built to stay simple",
    featuresTitle: "Useful without getting in your way.",

    featureOne: "Windows",
    featureTwo: "Local-first",
    featureThree: "Preview before changes",
    featureFour: "No account",
    featureFive: "Open development",

    ctaEyebrow: "Ready to start?",
    ctaTitle: "Put your files in order.",
    ctaDescription:
      "Start with a folder. Review the plan. Stay in control.",

    footerTagline: "Put your files in order.",
    footerGithub: "GitHub",
    footerReleases: "Releases",
  },

  "pt-BR": {
    navHow: "Como funciona",
    navStructure: "Copiar estrutura",
    navPrivacy: "Privacidade",

    heroEyebrow: "Simples. Local. Seu.",
    heroTitle: "Coloque seus arquivos em ordem.",
    heroDescription:
      "Um organizador de arquivos simples para Windows que ajuda você a analisar, revisar e organizar pastas localmente.",

    downloadButton: "Baixar FileStru",
    viewGithub: "Ver no GitHub →",

    heroMetaFree: "Grátis",
    heroMetaAccount: "Sem conta",
    heroMetaLocal: "Local-first",

    previewLabel: "Downloads",
    previewFiles: "24 arquivos",
    previewReady: "Pronto para organizar",

    howEyebrow: "Como funciona",
    howTitle: "Organize sem perder o controle.",
    howDescription:
      "O FileStru mantém o processo simples: veja o que existe, revise o que deve mudar e decida o que realmente será feito.",

    stepScanTitle: "Analisar",
    stepScanText:
      "Escolha uma pasta e deixe o FileStru entender os arquivos que estão dentro dela.",

    stepReviewTitle: "Revisar",
    stepReviewText:
      "Veja a organização proposta antes que qualquer coisa seja alterada.",

    stepOrganizeTitle: "Organizar",
    stepOrganizeText:
      "Confirme o plano e deixe o FileStru executar as alterações.",

    structureEyebrow: "Copie a estrutura",
    structureTitle: "Veja exatamente como suas pastas estão organizadas.",
    structureDescription:
      "Copie a estrutura completa de uma pasta para a área de transferência, incluindo os nomes e a hierarquia das pastas. Útil para documentar, revisar ou compartilhar o que existe dentro dela.",

    structureNote:
      "O resultado mantém os nomes das pastas e sua hierarquia.",

    copyLabel: "Copiar estrutura",

    privacyEyebrow: "Local-first",
    privacyTitle: "Seus arquivos permanecem no seu computador.",
    privacyDescription:
      "O FileStru foi desenvolvido para organizar arquivos localmente. Não é necessário criar uma conta e o processo principal de organização não depende de um serviço na nuvem.",

    featuresEyebrow: "Feito para continuar simples",
    featuresTitle: "Útil sem ficar no seu caminho.",

    featureOne: "Windows",
    featureTwo: "Local-first",
    featureThree: "Prévia antes das alterações",
    featureFour: "Sem conta",
    featureFive: "Desenvolvimento aberto",

    ctaEyebrow: "Pronto para começar?",
    ctaTitle: "Coloque seus arquivos em ordem.",
    ctaDescription:
      "Comece com uma pasta. Revise o plano. Continue no controle.",

    footerTagline: "Coloque seus arquivos em ordem.",
    footerGithub: "GitHub",
    footerReleases: "Releases",
  },
};


const LANGUAGE_KEY = "filestru_landing_language";


function detectLanguage() {
  const savedLanguage = localStorage.getItem(LANGUAGE_KEY);

  if (savedLanguage === "en" || savedLanguage === "pt-BR") {
    return savedLanguage;
  }

  const browserLanguage =
    navigator.language.toLowerCase();

  if (browserLanguage.startsWith("pt")) {
    return "pt-BR";
  }

  return "en";
}


let currentLanguage = detectLanguage();


function translatePage() {
  const dictionary = translations[currentLanguage];

  document.documentElement.lang =
    currentLanguage === "pt-BR"
      ? "pt-BR"
      : "en";

  document
    .querySelectorAll("[data-i18n]")
    .forEach((element) => {

      const key =
        element.dataset.i18n;

      if (!key) {
        return;
      }

      const value = dictionary[key];

      if (value !== undefined) {
        element.textContent = value;
      }
    });


  document
    .querySelectorAll("[data-language]")
    .forEach((button) => {

      const language =
        button.dataset.language;

      button.classList.toggle(
        "active",
        language === currentLanguage,
      );

      button.setAttribute(
        "aria-pressed",
        String(language === currentLanguage),
      );
    });
}


function setLanguage(language) {
  if (!translations[language]) {
    return;
  }

  currentLanguage = language;

  localStorage.setItem(
    LANGUAGE_KEY,
    language,
  );

  translatePage();
}


document
  .querySelectorAll("[data-language]")
  .forEach((button) => {

    button.addEventListener(
      "click",
      () => {
        setLanguage(button.dataset.language);
      },
    );
  });


/*
 * GA4 acquisition events.
 */

document
  .querySelectorAll("[data-download]")
  .forEach((link) => {
    link.addEventListener("click", () => {
      gtag("event", "download_click", {
        language: currentLanguage,
      });
    });
  });


document
  .querySelectorAll("[data-github]")
  .forEach((link) => {
    link.addEventListener("click", () => {
      gtag("event", "github_click", {
        language: currentLanguage,
      });
    });
  });


translatePage();