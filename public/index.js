S( function( m ) {
		var ua = navigator.userAgent.toUpperCase();
		var isMobile = ua.indexOf('IPHONE') != -1 || (ua.indexOf('ANDROID') != -1 && ua.indexOf('MOBILE') != -1);
		var isLandscape = false;

	var App = {
		controller: function() {

			return {
				geo: {
					type: "Sphere",
					value: [ 300, 64, 64 ]
				},
				mtl: {
					type: "MeshBasic",
					value: {
						map: {
							type: "image",
							src: "./IMG_1445.JPG"
						}
					}
				},
				camStyle: { posZ: .1 },
				meshStyle: { scaleX: -1 },
				boxGeo: {
					type: "Box",
					value: [ 3, 3, 3 ]
				},
				boxMtl: {
					type: "MeshPhong",
					value: { specular: "#999", color: "#00f" }
				},
				N: { length: 1 }
			};
		},
		view: function( ctrl ) {
			return <scene>
				<mesh id="photosphere" geo={ ctrl.geo } mtl={ ctrl.mtl } style={ ctrl.meshStyle }/>
				<mesh geo={ ctrl.boxGeo } mtl={ ctrl.boxMtl } style={{ color: ctrl.boxMtl.value.color }} />
				<JyroSync enabled={ isMobile }>
						<cam id="cam" style={ ctrl.camStyle }/>
				</JyroSync>
			</scene>;
		}
	};
	
	var Head = {
			controller: function() {
					return {
							resize: function() {
									isLandscape = window.innerHeight < window.innerWidth;
							}
					};
			},
			view: function( ctrl ) {
					return <rdr init={{ frame: "#solufa", antialias: true, preserveDrawingBuffer: true }} onresize={ ctrl.resize.bind( ctrl ) }>
						{ isMobile ? <StereoVp enabled={ isLandscape } cam="#cam"/> : <OrbitVp cam="#cam" reverse={ true }/> }
					</rdr>;
			}
	};


	m.mount( S.document.body, App );
	m.mount( S.document.head, Head );
});


window.addEventListener("keydown", onKeyDown, false);

function onKeyDown(event){
  var obj = document.getElementById("photosphere");
  var keyCode = event.keyCode;
  switch(keyCode){
    case 68:  //d
		S.update( function( delta, elapsed ) {
			
		});
        keyD = true;
    break;
    case 83:  //s
        keyS = true;
    break;
    case 63:  //a
        keyA = true;
    break;
  }
}
