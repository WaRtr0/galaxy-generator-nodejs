<h1 align="center">Galaxy Generator NodeJS</h1>

<div align="center">
  <a href="https://github.com/WaRtrO89/galaxy-generator-nodejs/blob/main/README.md">
    <img src="https://user-images.githubusercontent.com/25512932/160092140-bee4eee1-e755-48b7-b220-1d94adf14e16.png" alt="en">
  </a>
  <a href="https://github.com/WaRtrO89/galaxy-generator-nodejs/blob/main/README_FR.md">
    <img src="https://user-images.githubusercontent.com/25512932/160092152-0ab75363-b38b-4a91-a745-e2aeb6741b4e.png" alt="fr">
  </a>
</div>

# About

Petit script [NodeJS](https://nodejs.org/) & [ThreeJS](https://threejs.org/) crée en une soirée.
Ayant comme but de retourner un tableau avec la position de plusieurs étoiles avec leurs couleurs aléatoirement. 

Le script récupère le tableau et affiche la galaxie côté client avec [ThreeJS](https://threejs.org/).

Visible [ici](https://wartro89.github.io/galaxy-generator-nodejs/public/)

![screen](https://user-images.githubusercontent.com/25512932/160088977-3e828c17-1a7d-49e6-a15c-67cdecd51c56.gif)


# Utilisation

Si vous souhaitez juste utiliser la génération (côté serveur)

Faites un ``require`` de la fonction à partir du fichier ``generate.js``  dans le dossier ``/server``;

Exemple : 

```js
const galaxy = require('./server/generate.js');
const arrayStars = galaxy();
```

La fonction ``galaxy()`` renvoie le nombre par défaut d'étoiles (12 000) si vous souhaitez modifier le nombre et d'autres paramètres faites ceci :

```
const arrayStars = galaxy({branch:16000}); //return array of 16000 stars
```

D'autres paramètres :

* nbrStar : Quantité d'étoiles

* vWidth : Variation largeur de la galaxy

* vHeitght : Variation hauteur de la galxy

* vCore : Variation du noyau (hauteur et largeur)
  
 *nbrStar:<stars quantity>
*vWidth:<galaxy variation width>
*vHeitght:<galaxy variation height>
*vCore:<core variation>

