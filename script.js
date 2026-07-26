const form = document.querySelector("#intakeForm");
const output = document.querySelector("#intakeOutput");

const readings = {
  "Clarifier une situation": "Premiere lecture: commencer par separer les faits observes, les interpretations, les tensions et les decisions deja prises.",
  "Organiser un atelier": "Premiere lecture: un atelier utile doit avoir un objet simple, des roles explicites et une trace partageable apres la rencontre.",
  "Identifier des partenaires": "Premiere lecture: cartographier les besoins et ressources avant de chercher les acteurs evite les rapprochements artificiels.",
  "Structurer un projet": "Premiere lecture: formuler le territoire, les beneficiaires, les contraintes et les preuves disponibles donne une base solide.",
  "Apaiser une tension": "Premiere lecture: qualifier la tension comme une donnee du systeme aide a proteger les personnes et a rouvrir l'action."
};

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const context = data.get("context");
  const priority = data.get("priority");
  const message = String(data.get("message") || "").trim();
  const detail = message
    ? "La prochaine etape serait de relier ce recit a des acteurs, ressources, contraintes et preuves."
    : "Ajoutez ensuite quelques lignes de contexte pour transformer cette orientation en vrai pre-diagnostic.";

  output.innerHTML = `
    <strong>${readings[priority] || readings["Clarifier une situation"]}</strong>
    <span>Contexte selectionne: ${context}. ${detail}</span>
  `;
});
