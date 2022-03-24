"use strict";



var Stats = function () {

	var mode = 0;

	var container = document.createElement( 'div' );
	container.style.cssText = 'position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000';
	// container.addEventListener( 'click', function ( event ) {

	// 	event.preventDefault();
	// 	showPanel( ++ mode % container.children.length );

	// }, false );

	//

	function addPanel( panel ) {

		container.appendChild( panel.dom );
		return panel;

	}

	function showPanel( id ) {

		for ( var i = 0; i < container.children.length; i ++ ) {

			container.children[ i ].style.display = i === id ? 'block' : 'none';

		}

		mode = id;

	}

	//

	var beginTime = ( performance || Date ).now(), prevTime = beginTime, frames = 0;

	var fpsPanel = addPanel( new Stats.Panel( 'FPS', '#0ff', '#002' ) );
	var msPanel = addPanel( new Stats.Panel( 'MS', '#0f0', '#020' ) );

	if ( self.performance && self.performance.memory ) {

		var memPanel = addPanel( new Stats.Panel( 'MB', '#f08', '#201' ) );

	}

	showPanel( 0 );

	return {

		REVISION: 16,

		dom: container,

		addPanel: addPanel,
		showPanel: showPanel,

		begin: function () {

			beginTime = ( performance || Date ).now();

		},

		end: function () {

			frames ++;

			var time = ( performance || Date ).now();

			msPanel.update( time - beginTime, 200 );

			if ( time >= prevTime + 1000 ) {

				fpsPanel.update( ( frames * 1000 ) / ( time - prevTime ), 100 );

				prevTime = time;
				frames = 0;

				if ( memPanel ) {

					var memory = performance.memory;
					memPanel.update( memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576 );

				}

			}

			return time;

		},

		update: function () {

			beginTime = this.end();

		},

		// Backwards Compatibility

		domElement: container,
		setMode: showPanel

	};

};

Stats.Panel = function ( name, fg, bg ) {

	var min = Infinity, max = 0, round = Math.round;
	var PR = round( window.devicePixelRatio || 1 );

	var WIDTH = 80 * PR, HEIGHT = 48 * PR,
			TEXT_X = 3 * PR, TEXT_Y = 2 * PR,
			GRAPH_X = 3 * PR, GRAPH_Y = 15 * PR,
			GRAPH_WIDTH = 74 * PR, GRAPH_HEIGHT = 30 * PR;

	var canvas = document.createElement( 'canvas' );
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	canvas.style.cssText = 'width:80px;height:48px';

	var context = canvas.getContext( '2d' );
	context.font = 'bold ' + ( 9 * PR ) + 'px Helvetica,Arial,sans-serif';
	context.textBaseline = 'top';

	context.fillStyle = bg;
	context.fillRect( 0, 0, WIDTH, HEIGHT );

	context.fillStyle = fg;
	context.fillText( name, TEXT_X, TEXT_Y );
	context.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );

	context.fillStyle = bg;
	context.globalAlpha = 0.9;
	context.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );

	return {

		dom: canvas,

		update: function ( value, maxValue ) {

			min = Math.min( min, value );
			max = Math.max( max, value );

			context.fillStyle = bg;
			context.globalAlpha = 1;
			context.fillRect( 0, 0, WIDTH, GRAPH_Y );
			context.fillStyle = fg;
			context.fillText( round( value ) + ' ' + name + ' (' + round( min ) + '-' + round( max ) + ')', TEXT_X, TEXT_Y );

			context.drawImage( canvas, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT );

			context.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT );

			context.fillStyle = bg;
			context.globalAlpha = 0.9;
			context.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round( ( 1 - ( value / maxValue ) ) * GRAPH_HEIGHT ) );

		}

	};

};


var arotate = 0;
let submClient = document.querySelector("subm[client]");
let option = {};
let rayon_system = 1;
let frame = 35;
let scale = 0.3;
let earthselectGeometry = new THREE.SphereGeometry( rayon_system, frame, frame );
let sectionClient = document.querySelectorAll("section[client] article output");

let st = Stats();
st.showPanel( 1 ); // 0: fps, 1: ms, 2: mb, 3+: custom

submClient.addEventListener('click',function(){
	option ={"rayon":sectionClient[0].textContent,"frame":sectionClient[1].textContent,"scale":sectionClient[2].textContent,};
	
	while(scene.children.length > 0){ 
    	scene.remove(scene.children[0]); 
	}
	
	if(option.rayon){
		rayon_system=option.rayon;
	}
	
	if(option.frame){
		frame=option.frame;
	}
	
	if(option.scale){
		scale=option.scale/10;
	}
	
	earthselectGeometry = new THREE.SphereGeometry( rayon_system, frame, frame );
	
	$.get("data/output.json", function(d){
		$('progress').attr("max",d.length);
		$('progress').attr("value","0");
		$('canvas').css("display","none");
		let i=0;
    	data=d;
    	data.forEach(function(a){
    		i++;
			let c = new THREE.MeshPhongMaterial({
				color: parseInt((a[3].toUpperCase()).replace("#","0x")),
				specular:parseInt((a[3].toUpperCase()).replace("#","0x")),
				emissive: parseInt((a[3].toUpperCase()).replace("#","0x")),
				transparent:true,
				opacity:1,
				shininess:100,
				reflectivity: 10
				
			});
		const b	= new THREE.Mesh(earthselectGeometry, c);
		b.position.set(a[0]*scale,a[1]*scale,a[2]*scale);
		scene.add(b);
		$('progress').attr("value",i-1);
	});
	setTimeout(function(){
		$('progress').attr("value",i);
	},1000);
	setTimeout(function(){$('canvas').show();},500);
	});
});


let data;

	
	



	//Initialisation//
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 10000, window.innerWidth/window.innerHeight, 1, 10000 );
    var renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    camera.position.set(0,0,15);
	
	var raycaster = new THREE.Raycaster();
	var mouse = new THREE.Vector2();
	

	


	setInterval(function(){renderer.setSize( window.innerWidth, window.innerHeight );
		camera.aspect=window.innerWidth/window.innerHeight;},10000)
	


	//Ambiante
    var lightAm = new THREE.AmbientLight( 0x888888);
    scene.add( lightAm );

    //Directionelle
    var lightDi = new THREE.DirectionalLight( 0xfdfcf0, 4 );
    lightDi.position.set(20,10,20);
    scene.add( lightDi );
    
    
    var earthselectMaterial = new THREE.MeshPhongMaterial({color: 0x7FFFD4,transparent:true,opacity:1});
    
    // var noyauGeometry = new THREE.SphereGeometry( data.galaxy[0].noyau["Rayon du noyau"], frame, frame );
    // var noyauMaterial = new THREE.MeshPhongMaterial({color: 0x7FFFD4,transparent:true,opacity:1});
    
    // var clusterGeometry = new THREE.SphereGeometry( data.galaxy[0].Clusers., frame, frame );
    // var clusterMaterial = new THREE.MeshPhongMaterial({color: 0x7FFFD4,transparent:true,opacity:1});



    //Etoile
    var starGeometry = new THREE.SphereGeometry(4000, 50, 100);
    var starGeometry2 = new THREE.SphereGeometry(5000, 50, 100);
    var starMaterial = new THREE.MeshPhongMaterial({
        color: 0x000000,
        side: THREE.DoubleSide,
        shininess: 0,
        opacity: 1
    });
    
     var starMaterial2 = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        shininess: 1,
        transparent:true,
        opacity: 1
    });
    

    var star = new THREE.Mesh(starGeometry, starMaterial);
    
    scene.add(star);
	 var star2 = new THREE.Mesh(starGeometry2, starMaterial2);
    scene.add(star2);
    
    const noyau = new THREE.HemisphereLight( 0xec6d00, 0xb6ad3b, 10 );
	scene.add( noyau );
	
	var noyaGe = new THREE.SphereGeometry(2, 50, 50);

   var noyaMa = new THREE.MeshPhongMaterial({
        color: 0xb6ad3b,
        side: THREE.DoubleSide,
        shininess: 0,
        opacity: 1
    });
    
    
	var noyau2 = new THREE.Mesh(noyaGe, noyaMa);
    scene.add(noyau2);

	var controls = new THREE.TrackballControls(camera); 
	controls.minDistance = 10;
	controls.maxDistance = 3000;
	var recommence=true;
	var valmax=0;
	var valmax=0;
	

    //Render loop
    var render = function() {
		st.begin();
    	controls.update();
        renderer.render(scene, camera);
        scene.rotateY(arotate);
        st.end();
        requestAnimationFrame(render);
    };
    document.body.appendChild( st.dom );
    render();



   renderer.domElement.addEventListener( 'click', raycast, false );
	
	
	function raycast ( e ) {
    mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
    raycaster.setFromCamera( mouse, camera );    
    var intersects = raycaster.intersectObjects( scene.children, true );
    mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
    raycaster.setFromCamera( mouse, camera );    
    // var intersects = raycaster.intersectObjects( scene.children );
    //     console.log( intersects[0].object.name ); 


    // if(intersects[0].object.name=="Terre"){
    	
    	
    // }
    // else{
    // }

	


	
}

while(scene.children.length > 0){ 
	scene.remove(scene.children[0]); 
}

scale=4/10;


earthselectGeometry = new THREE.SphereGeometry( 1, 10, 10 );

$.get("data/output.json", function(d){
	$('progress').attr("max",d.length);
	$('progress').attr("value","0");
	$('canvas').css("display","none");
	let i=0;
	data=d;
	data.forEach(function(a){
		i++;
		let c = new THREE.MeshPhongMaterial({
			color: parseInt((a[3].toUpperCase()).replace("#","0x")),
			specular:parseInt((a[3].toUpperCase()).replace("#","0x")),
			emissive: parseInt((a[3].toUpperCase()).replace("#","0x")),
			transparent:true,
			opacity:1,
			shininess:100,
			reflectivity: 10
			
		});
	const b	= new THREE.Mesh(earthselectGeometry, c);
	b.position.set(a[0]*scale,a[1]*scale,a[2]*scale);
	scene.add(b);
	$('progress').attr("value",i-1);
});
setTimeout(function(){
	$('progress').attr("value",i);
},1000);
setTimeout(function(){$('canvas').show();},500);
});
