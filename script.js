const form = document.querySelector("#intakeForm");
const output = document.querySelector("#intakeOutput");

const readings = {
  "Clarifier une situation": "Première lecture : commencer par séparer les faits observés, les interprétations, les tensions et les décisions déjà prises.",
  "Organiser un atelier": "Première lecture : un atelier utile doit avoir un objet simple, des rôles explicites et une trace partageable après la rencontre.",
  "Identifier des partenaires": "Première lecture : cartographier les besoins et les ressources avant de chercher les acteurs évite les rapprochements artificiels.",
  "Structurer un projet": "Première lecture : formuler le territoire, les bénéficiaires, les contraintes et les preuves disponibles donne une base solide.",
  "Apaiser une tension": "Première lecture : qualifier la tension comme une donnée du système aide à protéger les personnes et à rouvrir l'action."
};

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const context = data.get("context");
  const priority = data.get("priority");
  const message = String(data.get("message") || "").trim();
  const detail = message
    ? "La prochaine étape serait de relier ce récit à des acteurs, des ressources, des contraintes et des preuves."
    : "Ajoutez ensuite quelques lignes de contexte pour transformer cette orientation en vrai pré-diagnostic.";

  output.innerHTML = `
    <strong>${readings[priority] || readings["Clarifier une situation"]}</strong>
    <span>Contexte sélectionné : ${context}. ${detail}</span>
  `;
});
