const form = document.querySelector("#intakeForm");
const output = document.querySelector("#intakeOutput");

const orientations = {
  "Clarifier une situation": {
    title: "Commencer par une première lecture.",
    detail: "Séparez les faits observés, les interprétations, les tensions et les décisions déjà prises avant de choisir un format d'intervention."
  },
  "Organiser un atelier": {
    title: "Cadrer l'atelier avant d'inviter.",
    detail: "Précisez l'objet, les personnes concernées, l'autorité de décision et la trace attendue après la rencontre."
  },
  "Identifier des partenaires": {
    title: "Qualifier les compétences nécessaires.",
    detail: "Cartographiez le besoin, les ressources déjà présentes et les manques avant de rechercher des partenaires."
  },
  "Structurer un projet": {
    title: "Rendre le projet lisible à plusieurs échelles.",
    detail: "Formulez le territoire, les bénéficiaires, les contraintes, les responsabilités et les preuves disponibles."
  },
  "Apaiser une tension": {
    title: "Protéger les personnes et rouvrir le travail.",
    detail: "Identifiez ce qui relève des faits, des rôles, des interprétations et des désaccords persistants avant de chercher un accord."
  }
};

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.reportValidity()) {
    return;
  }

  const data = new FormData(form);
  const context = String(data.get("context") || "");
  const priority = String(data.get("priority") || "");
  const message = String(data.get("message") || "").trim();
  const orientation = orientations[priority] || orientations["Clarifier une situation"];

  const title = document.createElement("strong");
  title.textContent = orientation.title;

  const detail = document.createElement("p");
  detail.textContent = orientation.detail;

  const contextLine = document.createElement("p");
  contextLine.textContent = `Contexte retenu : ${context}. Cette orientation reste sur votre appareil.`;

  const email = document.createElement("a");
  email.className = "button output-action";
  email.textContent = "Préparer un courriel";

  const subject = `Première prise de contact - ${priority}`;
  const body = [
    "Bonjour Géomédiation,",
    "",
    `Contexte : ${context}`,
    `Priorité : ${priority}`,
    `Éléments complémentaires : ${message || "À préciser lors de l'échange."}`,
    "",
    "Je souhaite échanger sur cette situation."
  ].join("\n");

  email.href = `mailto:contact@geomediation.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  output.replaceChildren(title, detail, contextLine, email);
  output.hidden = false;
  output.focus();
});
