# Géomédiation Website

Première base du site Géomédiation, construite comme un repo autonome pour travailler sur `geomediation.fr`.

## Intention

Le site présente Géomédiation comme une démarche de médiation territoriale et de coopération :

- clarifier les besoins et ressources d'un territoire;
- accompagner les collectifs, associations, collectivités et acteurs engagés ;
- proposer une première orientation locale avant un échange humain, sans collecte automatique ;
- présenter le réseau, les médiateurs, les territoires et la future plateforme de mise en relation.

## Sources de cadrage

- `geowebsite` - Google Drive, mis à jour le 16 juillet 2026.
- `GEOMEDIATION AI - V2.1 - Orchestration interopérable et autonomie` - Google Drive, 30 juin 2026.
- `MASTER PROMPT - GEOMEDIATION AI - V2.1 - Autonomie partenaire` - Google Drive, 30 juin 2026.
- `Note de pré-cadrage - Guilde KLE et architecture distribuée de passage à l'échelle` - Google Drive, 14 juillet 2026.

## Gouvernance

Géomédiation reste une initiative autonome. La KLE peut contribuer comme cadre méthodologique et Nexus comme infrastructure interopérable, uniquement dans un cadre partenarial explicite. Le repo du site ne modifie pas les fichiers Nexus OS, Drive ou GitHub existants.

## Structure

- `index.html` - page principale.
- `styles.css` - design system et responsive layout.
- `script.js` - orientation locale et préparation d'un courriel de contact.
- `assets/territory-hero.webp` - visuel héros optimisé pour le site.
- `docs/source-map.md` - trace courte des sources et hypothèses.

## Lancer localement

Le site est statique. Ouvrir `index.html` dans un navigateur suffit.

Avec Node installé :

```bash
npx serve .
```

ou avec Python:

```bash
python -m http.server 8080
```
