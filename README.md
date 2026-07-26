# Geomediation Website

Premiere base du site Geomediation, construite comme un repo autonome pour travailler sur `geomediation.fr`.

## Intention

Le site presente Geomediation comme une demarche de mediation territoriale et de cooperation:

- clarifier les besoins et ressources d'un territoire;
- accompagner les collectifs, associations, collectivites et acteurs engages;
- ouvrir un tunnel d'onboarding vers les activites de sensibilisation et d'accompagnement;
- presenter le reseau, les mediateurs, les territoires et la future plateforme de mise en relation.

## Sources de cadrage

- `geowebsite` - Google Drive, mis a jour le 16 juillet 2026.
- `GEOMEDIATION AI - V2.1 - Orchestration interoperable et autonomie` - Google Drive, 30 juin 2026.
- `MASTER PROMPT - GEOMEDIATION AI - V2.1 - Autonomie partenaire` - Google Drive, 30 juin 2026.
- `Note de pre-cadrage - Guilde KLE et architecture distribuee de passage a l'echelle` - Google Drive, 14 juillet 2026.

## Gouvernance

Geomediation reste une initiative autonome. La KLE peut contribuer comme cadre methodologique et Nexus comme infrastructure interoperable, uniquement dans un cadre partenarial explicite. Le repo du site ne modifie pas les fichiers Nexus OS, Drive ou GitHub existants.

## Structure

- `index.html` - page principale.
- `styles.css` - design system et responsive layout.
- `script.js` - interactions legeres pour l'onboarding et les formulaires.
- `assets/territory-hero.png` - visuel hero genere pour le site.
- `docs/source-map.md` - trace courte des sources et hypotheses.

## Lancer localement

Le site est statique. Ouvrir `index.html` dans un navigateur suffit.

Avec Node installe:

```bash
npx serve .
```

ou avec Python:

```bash
python -m http.server 8080
```
