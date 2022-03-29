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

Small [NodeJS](https://nodejs.org/) & [ThreeJS](https://threejs.org/) script created in one evening. 
Aiming to return an array with the position of several stars with their colors, this is generated randomly.

The script fetches the array and renders the galaxy on the client side with [ThreeJS](https://threejs.org/).

Viewable [here](https://wartro89.github.io/galaxy-generator-nodejs/public/)

![screen](https://user-images.githubusercontent.com/25512932/160088977-3e828c17-1a7d-49e6-a15c-67cdecd51c56.gif)

# Utilization [1]

If you just want to use the generate (backend)

[Install](https://nodejs.dev/learn/how-to-install-nodejs) nodeJs, if not done

Install packages:
```npm install fs```

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

* vWidth : Variation largeur de la galaxie

* vHeitght : Variation hauteur de la galaxie

* vCore : Variation du noyau (hauteur et largeur)

# Utilization [2]

Si vous souhaitez tout utiliser vous avez juste à transférer le continue du repository dans un dossier sur votre pc.

[Installer](https://nodejs.dev/learn/how-to-install-nodejs) nodeJs, si cela n'est pas fait

Et installer les packages :
```
npm install fs express http
```

Regarder <a href="#uti1">Utilization [1]</a> pour pouvoir modifier les paramètres de la fonction galaxy.
