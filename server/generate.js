/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

const data = require('./data.js');
const fs = require('fs');

function alea(dt) {
  const index = Math.floor(Math.random() * dt.length);
  return dt[index];
}

module.exports = function generate(branch, nbrStar, vWidth, vHeitght, vCore) {
  if (branch == undefined) { // default
    branch = 5; // Galaxy branch quantity
    nbrStar = 12000; // (approximate) Total number of stars return
    vWidth = 0.4; // Galaxy variation width
    vHeitght = 0.4; // Galaxy variation height
    vCore=0.2; // core variation width & height
  }

  const special = 70;
  const special2 = 69;

  const starPerBranch = Math.floor(nbrStar/((branch*2)+1));
  let norm = 0;
  const star = [];


  // branch generation
  let z = 1;
  for (let j=(360/(branch+0.5)); j<360; j=j+(360/(branch+0.5))) {
    z--;
    let xx = 0;
    let coef;
    for (let i = 0; i < starPerBranch; i++) {
    	for (let r=0; r<9; r++) {
	  		if (i<=(starPerBranch/r)) {
	  			coef = ((30/9)*r)+1;
	  		}
	  	}
	  	norm = i / (starPerBranch+j);
	  	const Variation = Math.random() * (vWidth - (-vWidth)) + (-vWidth);
	  	const theta = (norm *5* Math.PI + Variation)+j;
	  	const phi = Math.random() * (vHeitght - (-vHeitght)) + (-vHeitght);
	  	const distance = norm * starPerBranch;
	  	x = distance * Math.sin(theta) * Math.cos(phi);
	  	y= distance * Math.sin(theta) * Math.sin(phi);
	  	z =distance * Math.cos(theta);
	  	if (xx>=special) {
	  		xx=special-special2;
	  	} else {
		   xx=xx+5;
	  	}
	  	star.push([x, y, z, alea(data.speccolor[0])]);
    	}

    xx = 0;
    coef;
    for (let i = 0; i < starPerBranch; i++) {
	  for (let r=0; r<9; r++) {
	  	if (i<=(starPerBranch/r)) {
	  		coef = ((30/9)*r)+1;
	  	}
	  }

	  norm = i / (starPerBranch+j);


	  const Variation = Math.random() * ((vWidth/3) - (-(vWidth/3))) + (-(vWidth/3));
	  const theta = (norm*coef * Math.PI + Variation)+j;
	  const phi = Math.random() * ((vHeitght/3) - (-(vHeitght/3))) + (-(vHeitght/3));
	  const distance = norm * starPerBranch;
	   x = distance * (Math.sin(theta) * (Math.cos(phi)));
	   y= distance * (Math.sin(theta) * (Math.sin(phi)));
	   z =distance * Math.cos(theta);
	   if (xx>=special) {
	   		xx=special-special2;
	   } else {
		   xx=xx+5;
	   }
	   star.push([x, y, z, alea(data.speccolor[1])]);
    }
  }

  // core level 1

  for (let i = 0; i < (starPerBranch/5*2); i++) {
    const Varia = starPerBranch*vCore;
    const Variation = Math.random() * (Varia - (-Varia)) + (-Varia);
    const theta = ((Math.random() * 360) * Math.PI + Variation);
    const x=Math.cos(theta*Math.PI/180)*Variation;
    const y=Math.sin(theta*Math.PI/180)*Variation;
    const z=Math.random()*Variation;
    star.push([x, y, z, alea(data.speccolor[2])]);
  }


  // core level 2

  for (let i = 0; i < starPerBranch/5; i++) {
    const Varia = starPerBranch*0.7;
    const Variation = Math.random() * (Varia - (-Varia)) + (-Varia);
    const theta = ((Math.random() * 360) * Math.PI + Variation);
    const x=Math.cos(theta*Math.PI/180)*Variation;
    const y=Math.sin(theta*Math.PI/180)*Variation;
    const z=Math.random()*Variation;
    star.push([x, y, z, alea(data.speccolor[3])]);
  }

  // core level 3

  for (let i = 0; i < starPerBranch/5; i++) {
    const Varia = starPerBranch*1;
    const Variation = Math.random() * (Varia - (-Varia)) + (-Varia);
    const theta = ((Math.random() * 360) * Math.PI + Variation);
    const x=Math.cos(theta*Math.PI/180)*Variation;
    const y=Math.sin(theta*Math.PI/180)*Variation;
    const z=Math.random()*Variation;
    star.push([x, y, z, alea(data.speccolor[4])]);
  }

  return star;
// fs.writeFileSync('output.json', JSON.stringify(star, null, 2));
};
