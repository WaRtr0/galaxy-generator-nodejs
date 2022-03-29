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

<div id="uti1"></div>

# Utilization [1]

If you just want to use the generate (backend)

[Install](https://nodejs.dev/learn/how-to-install-nodejs) nodeJs, if not done

Install package:
```npm install fs```

Do a ``require`` function of the  ``generate.js``  file in the folder ``/server``;

Example : 

```js
const galaxy = require('./server/generate.js');
const arrayStars = galaxy();
```

The function ``galaxy()`` returns the default number of stars (12,000) if you want to change the number and other parameters do this:

```
const arrayStars = galaxy({branch:16000}); //return array of 16000 stars
```

Other parameters :

* nbrStar : Number of stars

* vWidth : Galaxy width variation

* vHeitght : Galaxy height variation

* vCore : Core variation (height and width)

# Utilization [2]

If you want to use everything you just have to transfer the contents of the repository to a folder on your pc.

[Install](https://nodejs.dev/learn/how-to-install-nodejs) nodeJs, if not done

And install packages
```
npm install fs express http
```

Look at <a href="#uti1">Utilization [1]</a> to be able to change galaxy function settings.
