function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var currentLevel = 1;
var E;  //exit
var B = 'B'; //block
var S = 'S'; //speed
var level1 = [
             [
             [0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,6,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,2,0,0,0,8,0,0,0],  // 1
             [0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,4,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,E],
             ], 
             [
             [0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0],
             [0,0,8,0,8,0,8,0,8,0,0],  // 2
             [6,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,E],
             ],
             [
             [0,0,0,0,0,0,0,0,0,0,2],
             [0,0,0,0,0,0,0,0,0,0,0],
             [0,0,6,0,0,0,0,0,6,0,0],
             [0,0,0,0,0,0,0,0,0,0,0],
             [0,0,4,0,0,0,0,0,4,0,0],
             [0,0,0,0,0,0,0,0,0,0,0],  // 3
             [0,0,6,0,0,0,0,0,6,0,0],
             [0,0,0,0,0,0,0,0,0,0,0],
             [0,0,4,0,0,0,0,0,4,0,0],
             [0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,6,0,4,0,0,0,0,E],
             ],
             [
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0,44, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0,22, 0,88, 0, 0, 0,22],  // 4
             [ 0, 0, 0, 0, 0,66, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0,44, 0, 0, 0, 0, E],
             ],
             [
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 4, B, 6, 0, 2, 0, 0, B, 6, 0],  // 5
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, B, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, E],
             ],
             [
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 6, 0, 0, 0, B, 0,66, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0],
             [ 0, 0, 0,66, 0, 0, B, 0, 0, 0, 0],  // 6
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0],
             [ 0, 0, 6, 0, 0, B, B, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0,22, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ S, 0, 6, B, 0, 0,88, 0, 0, 0, E],
             ],
             [
             [ 0, 0, 2, 0, 2, 0, 2, 0, 0, 0,22],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // 7
             [ 0, 8, 0, 0, 0, 8, 0, 0, 0, 0, 0],
             [ B, B, 0, B, 0, B, 0, B, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, E],
             ],
             [
             [ 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0],
             [ 0, 8, 0, 8, 0, 8, 0, 2, 0, 0, 0],  // 8
             [ B, B, B, B, B, B, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, B, 0, B, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, S, 0, 0, 0, 0, 0, 8, 0, 0, 0],
             [ 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, E],
             ],
             [
             [ 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0,88, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, B, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0,88, 0, 0, 0],
             [ 0, 0, 0, 8, 0, 8, S, 0, 0, 0, 0],  // 9
             [ 0, B, 6, B, B, B, 6, B, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0,22, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, E],
             ],
]

$('.lev2').text(' '+ level1.length);
var cc = 0;

var startBlock, startBlock2;

var camera, scene, renderer, light, light0, lamp, ambient, text;
var floor, player, enemy, block, exit, endWall, groupEndWall, endWallBtn, speedBlock;
var start = 0;
var theEndTemp = 0;
var theEndBlock;
var startLightTemp = 0;
var textOutTemp = 0;
var speedBlockn = 0.5;
var raycaster, mouse;
var stats;
var cam = 1;
var xIntersect, yIntersect, zIntersect, isIntersect;
var damage = 0;
var masStar = [];
var masStarSpeed = [];
var starSpeed = 0.5;
var masEnemy = [];
var masEnemyTemp = [];
var masEnemyArrowX = [];
var masEnemyArrowY = [];
var masBlock = [];
var masSpeed = [];
var playerBlockR = 0;
var playerBlockL = 0;
var playerBlockU = 0;
var playerBlockD = 0;

var floorWidth = 110;
var floorHeight = 110;
var playerWidth = 8;
var playerHeight = 8;
var playerDepth = 8;
var playerPosX = -floorWidth/2 + playerWidth/2;
var playerPosY = floorHeight/2 - playerHeight/2;
var playerPosZ = playerDepth/2;
var playerSpeed = 1;
var playerFly = 0;
var playerFlyExit = 0;
var playerExitBtn = 0;
var playerAlive = 1;
var playerBlock = 0;
var jump = 0;
var endLevel = 0;
var nextLev = 0;

var enemyWidth = 6;
var enemyHeight = 6;
var enemyDepth = 6;
var enemyPosX = 0
var enemyPosY = 0
var enemyPosZ = enemyDepth/2;
var enemySpeed = 1;

var blockWidth = 10;
var blockHeight = 10;
var onefield = 10;

var exitFieldTemp = 0;

var tempColorLamp = 1;
var clock = new THREE.Clock();
var keyboard = new THREEx.KeyboardState();

function addEnemy(x, y, arrowX, arrowY) {
  var geometryEnemy = new THREE.BoxGeometry( enemyWidth, enemyHeight, enemyDepth );
  var materialEnemy = new THREE.MeshPhongMaterial( {  color: 0x87332D, dithering: true} );
  enemy = new THREE.Mesh( geometryEnemy, materialEnemy );
  enemy.position.z = enemyPosZ;
  masEnemy.push(enemy);
  masEnemyArrowX.push(arrowX);
  masEnemyArrowY.push(arrowY);
  enemy.castShadow = true;
  enemy.position.x = x;
  enemy.position.y = y;
  scene.add( enemy );
}
function addBlock(x,y) {
  var geometryBlock = new THREE.BoxGeometry( blockWidth, blockHeight, enemyDepth );
  var materialBlock = new THREE.MeshPhongMaterial( {  color: 0x22672E, dithering: true} );
  block = new THREE.Mesh( geometryBlock, materialBlock );
  block.position.z = enemyPosZ;
  masBlock.push(block);
  block.castShadow = true;
  block.position.x = x;
  block.position.y = y;
  scene.add( block );
}

function addSpeedBlock(x,y) {

   var materialSpeed = new THREE.MeshPhongMaterial( {  color: 0xb57612} );
  var geometrySpeed = new THREE.SphereGeometry( 2,15,15 )

      speedBlock = new THREE.Mesh( geometrySpeed, materialSpeed );
      speedBlock.position.z = enemyPosZ;
      speedBlock.castShadow = true;
      speedBlock.position.x = x;
      speedBlock.position.y = y;
      masSpeed.push( speedBlock );
      
      scene.add( speedBlock );

}

function initMap() {
  for (var i = 0; i<level1[currentLevel-1].length; i++) {
    for (var j = 0; j<level1[currentLevel-1][i].length; j++) {
      if (level1[currentLevel-1][i][j] == 4) {
        addEnemy(playerPosX + onefield*j+1, playerPosY-onefield*i-1, -1.7,0);
      }
      else if (level1[currentLevel-1][i][j] == 6) {
        addEnemy(playerPosX + onefield*j+1, playerPosY-onefield*i-1, 1.7,0);
      }
      else if (level1[currentLevel-1][i][j] == 8) {
        addEnemy(playerPosX + onefield*j + 1, playerPosY-onefield*i-1, 0,1.7);
      }
      else if (level1[currentLevel-1][i][j] == 2) {
        addEnemy(playerPosX + onefield*j+1, playerPosY-onefield*i-1, 0,-1.7);
      }
      ////////////////////////////////////////////////////////////////////
      else if (level1[currentLevel-1][i][j] == 44) {
        addEnemy(playerPosX + onefield*j+1, playerPosY-onefield*i-1, -2.5,0);
      }
      else if (level1[currentLevel-1][i][j] == 66) {
        addEnemy(playerPosX + onefield*j+1, playerPosY-onefield*i-1, 2.5,0);
      }
      else if (level1[currentLevel-1][i][j] == 88) {
        addEnemy(playerPosX + onefield*j+1, playerPosY-onefield*i-1, 0,2.5);
      }
      else if (level1[currentLevel-1][i][j] == 22) {
        addEnemy(playerPosX + onefield*j+1, playerPosY-onefield*i-1, 0,-2.5);
      }
      ////////////////////////////////////////////////////////////////////
      else if (level1[currentLevel-1][i][j] == 'B') {
        addBlock(playerPosX + onefield*j +1, playerPosY-onefield*i-1);
      }
      else if (level1[currentLevel-1][i][j] == 'S') {
        addSpeedBlock(playerPosX + onefield*j +1, playerPosY-onefield*i-1);
      }
    }
  }
}


init();
animate();

function init() {
  camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 2000 );
  camera.position.set(0,-2172,90);
  camera.lookAt(0,0,0);
  scene = new THREE.Scene();
  light = new THREE.PointLight( 0xffffff, 2, 50 );
  light.position.set(-floorWidth/2, floorHeight/2, 5)
  scene.add( light );
  ambient = new THREE.AmbientLight( 0xffffff, 0.2 );
  scene.add( ambient );
  spotLight = new THREE.SpotLight( 0xffffff, 1.7 );
  spotLight.position.set( 50, -50, 100 );
  spotLight.penumbra = 0.05;
  spotLight.decay = 0.5;
  spotLight.power = 10;
  spotLight.distance = 220;
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 2500;
  spotLight.shadow.mapSize.height = 2500;
  spotLight.shadow.camera.near = 10;
  spotLight.shadow.camera.far = 200;
  scene.add( spotLight );
  

  /*var controls = new THREE.OrbitControls( camera );
  controls.update();*/
  /*controls = new THREE.FirstPersonControls( camera );
				controls.movementSpeed = 1000;
				controls.lookSpeed = 0.1;*/
  
  
  var loaderStart = new THREE.FontLoader();
    loaderStart.load( 'assets/fonts/droid_serif_regular.typeface.json', function ( font ) {
      var geometryTextStart = new THREE.TextGeometry( 'ESCAPE 3D', {
        font: font,
        size: 50,
        height: 2.5,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.05,
        bevelSegments: 3
      } );
      geometryTextStart.center();
      var materialTextStart = new THREE.MeshPhongMaterial({ color: 0x71B37D});
      startBlock = new THREE.Mesh( geometryTextStart, materialTextStart );
      startBlock.position.set(0,-1900,90);
      startBlock.rotation.x = 1.5;
      startBlock.castShadow = true;
      scene.add( startBlock );
      
      var geometryTextStart2 = new THREE.TextGeometry( 'click to start', {
        font: font,
        size: 15,
        height: 2.5,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.05,
        bevelSegments: 3
      } );
      geometryTextStart2.center();
      var materialTextStart2 = new THREE.MeshBasicMaterial({ color: 0xcccccc });
      startBlock2 = new THREE.Mesh( geometryTextStart2, materialTextStart2 );
      startBlock2.position.set(0,-1900,0);
      startBlock2.rotation.x = 1.5;
      startBlock2.castShadow = true;
      scene.add( startBlock2 );
      
      var geometryTextEnd = new THREE.TextGeometry( 'THE END', {
        font: font,
        size: 50,
        height: 2.5,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.05,
        bevelSegments: 3
      } );
      geometryTextEnd.center();
      var materialTextEnd = new THREE.MeshBasicMaterial({ color: 0xffffff });
      theEndBlock = new THREE.Mesh( geometryTextEnd, materialTextEnd );
      theEndBlock.position.set(282,-72,-700);
      theEndBlock.rotation.x = 0.8;
      theEndBlock.castShadow = true;
      
      
      
  } );
  light0 = new THREE.PointLight( 0xffffff, 1, 100 );
  light0.position.set(-300,-1950,90)
  scene.add( light0 );
  
  
  
  
  var floorGeometry = new THREE.BoxGeometry(floorWidth,floorHeight,5);
  var floorMaterial = new THREE.MeshPhongMaterial( { color: 0x808080, dithering: true } );
  floor = new THREE.Mesh( floorGeometry, floorMaterial );
  floor.position.z = -2.5;
  floor.receiveShadow = true;
  scene.add( floor )
  
  var gridHelper = new THREE.GridHelper( 110, 11, 0x0000ff, 0x777777 );
  gridHelper.position.x = 0;
  gridHelper.position.y = 0;
  gridHelper.position.z = 0.01;
  gridHelper.rotateX(1.5708);
  gridHelper.receiveShadow = false;
  scene.add( gridHelper );
 
  var geometryPlayer = new THREE.BoxGeometry( playerWidth, playerHeight, playerDepth );
  var materialPlayer = new THREE.MeshPhongMaterial( {  color: 0x1D4C53, dithering: true} );
  player = new THREE.Mesh( geometryPlayer, materialPlayer );
  player.position.x = playerPosX;
  player.position.y = playerPosY;
  player.position.z = playerPosZ;
  player.castShadow = true;
  scene.add( player );
  
  var geometryExit = new THREE.BoxGeometry( playerWidth, playerHeight, 1 );
  var materialExit = new THREE.MeshPhongMaterial( {  color: 0x88592E, dithering: true} );
  exit = new THREE.Mesh( geometryExit, materialExit );
  exit.position.x = floorWidth/2-playerWidth/2;
  exit.position.y = -floorHeight/2+playerHeight/2;
  exit.position.z = 0;
  exit.castShadow = true;
  scene.add( exit );
  
  initMap();
  var endWallGeometry = new THREE.BoxBufferGeometry(100,100,2);
  var endWallMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff } );
  endWall = new THREE.Mesh( endWallGeometry, endWallMaterial );
  //endWall.rotation.x = camera.rotation.x;
  endWall.receiveShadow = true;
  
  var endWallBtnGeometry = new THREE.BoxBufferGeometry(20,15,4);
  var endWallBtnMaterial = new THREE.MeshPhongMaterial( { color: 0x000000 } );
  endWallBtn = new THREE.Mesh( endWallBtnGeometry, endWallBtnMaterial );
  endWallBtn.position.y = endWall.position.y - 10;
  endWallBtn.position.z = endWall.position.z + 10;
  //endWallBtn.rotation.x = camera.rotation.x;
  endWallBtn.castShadow = true;
  endWallBtn.receiveShadow = true;
  
  var loader = new THREE.FontLoader();
    loader.load( 'assets/fonts/helvetiker_regular.typeface.json', function ( font ) {
      var geometryText = new THREE.TextGeometry( 'NEXT', {
        font: font,
        size: 5,
        height: 7.5,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.05,
        bevelSegments: 3
      } );
      geometryText.center();
      var materialText = new THREE.MeshPhongMaterial({ color: 0xffffff });
      text = new THREE.Mesh( geometryText, materialText );
      text.position.x = endWallBtn.position.x;
      text.position.y = endWallBtn.position.y;
      text.position.z = endWallBtn.position.z;
      text.castShadow = true;
      groupEndWall = new THREE.Group();
      groupEndWall.add( endWall );
      groupEndWall.add( endWallBtn );
      groupEndWall.add( text );
      groupEndWall.position.z = -3000;
      scene.add( groupEndWall );
      
 } );
 // console.log(text)
  
  
  

  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  
  
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( window.innerWidth/1.002, window.innerHeight/1.1 );
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.gammaInput = true;
  document.querySelector('.field').appendChild( renderer.domElement );
  addStar();
  document.addEventListener( 'mousedown', onDocumentMouseDown, false );
  
  var aaa = document.querySelector('.field canvas').offsetWidth;
  document.querySelector('.panel').style.width = aaa-3 + 'px'
  
  stats = new Stats();
  document.querySelector('.field').appendChild( stats.dom );
  
  //////////////////////////////////////////////////////////
}

function theEnd() {
  if (camera.position.z > -500) {
  camera.position.z -=10;
  scene.add( theEndBlock );
  }
  camera.lookAt(282,-72,-600)
}

function moveLight0() {
  if (light0.position.x < 300 && startLightTemp == 0) {
    light0.position.x +=10;
  }
  else {
    startLightTemp = 1;
    light0.position.set(0,-2000,90);
    if (light0.distance < 250) light0.distance += 3;
  }
}

function textOut() {
  startBlock.position.z += 1.5;
  startBlock2.position.z -= 1.5;
}

function onDocumentMouseDown( event ) {
  mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;
  raycaster.setFromCamera( mouse, camera );
  var intersects = raycaster.intersectObject( groupEndWall.children[1] );
  if ( intersects.length > 0 && currentLevel < level1.length) {
    //intersects[ 0 ].object.material.color.setHex( Math.random() * 0xffffff );
    cc = 1;
  }
  else if (currentLevel >= level1.length && start == 1 && nextLev == 1) {
    
    theEndTemp = 1;
  }
    
    textOutTemp = 1;
    
    setTimeout(function() {
      start = 1;
    }, 2000)

  
}

$('.camChooseBtn').click(function() {
  if (playerFlyExit == 0) {
    if (cam < 3 && start == 1) cam++;
    else cam = 1
  }
  
  $('.camChooseBtn').text(cam)
})
  
function choosCamFoo() {
  if (playerFlyExit == 0) {
    if (cam == 1) {
      //camera.position.set(0,-72,90);
      if (camera.position.y < -72) camera.position.y += 10;
      if (camera.position.z < 90) camera.position.z += 10;
      camera.lookAt(0,0,0)
    }
    else if (cam == 2) {
      //camera.position.set(0,0,115);
      if (camera.position.y < 0) camera.position.y += 1;
      if (camera.position.z < 115) camera.position.z += 1;
      camera.lookAt(0,0,0);
    }
    else if (cam == 3) {
      //camera.position.set(0,-102,30);
      if (camera.position.y > -102) camera.position.y -= 1;
      if (camera.position.z > 25) camera.position.z -= 1;
     
      camera.lookAt(0,0,0);
    }
  }
}

function addStar() {
  for (var i = 0; i < 500; i++) {
    var starGeometry = new THREE.BoxBufferGeometry( getRandomInRange(1,2), getRandomInRange(1,2), getRandomInRange(1,2) );
    var starMaterial = new THREE.MeshBasicMaterial( {  color: 0xffffff, wireframe: false} );
    var star = new THREE.Mesh(starGeometry, starMaterial);
    star.position.x = getRandomInRange(-1000,1000);
    star.position.y = getRandomInRange(-1000,1000);
    star.position.z = getRandomInRange(-2000,1000);
    masStar.push(star);
    masStarSpeed.push(getRandomInRange(1,2));
    scene.add(star);
  }
}
function flyStar() {
  for (var i = 0; i < masStar.length; i++) {
    masStar[i].position.z +=masStarSpeed[i]*starSpeed;
    //masStar[i].position.y +=
    if (masStar[i].position.z > 1000) {
      masStar[i].position.z = -1000;
    }
  }
}

function move(obj) {
  if ((keyboard.pressed("A") || keyboard.pressed("left")) && playerFly == 0 && playerExitBtn == 0 && playerBlockL == 0) obj.position.x -= playerSpeed/2;
  if ((keyboard.pressed("D") || keyboard.pressed("right")) && playerFly == 0 && playerExitBtn == 0 && playerBlockR == 0) obj.position.x += playerSpeed/2;
  if ((keyboard.pressed("W") || keyboard.pressed("up")) && playerFly == 0 && playerExitBtn == 0 && playerBlockD == 0) obj.position.y += playerSpeed/2;
  if ((keyboard.pressed("S") || keyboard.pressed("down")) && playerFly == 0 && playerExitBtn == 0 && playerBlockU == 0) obj.position.y -= playerSpeed/2;
  

  if (player.position.x-playerWidth/2 > -floorWidth/1.78 && player.position.x+playerWidth/2 < floorWidth/1.8 && player.position.y+playerHeight/2 < floorHeight/1.8 && player.position.y-playerHeight/2 > -floorHeight/1.8 && player.position.z > playerPosZ-1) {
    player.position.z = playerPosZ;
    playerFly = 0;
    player.rotation.x = 0;
    player.rotation.y = 0;
  }
  else {
    playerFly = 1;
  }
  
}

function PlayerFall() {
  if (player.position.x-playerWidth/2 < -floorWidth/1.8 && playerFly == 1 && playerExitBtn == 0) {
    player.rotation.y -= 0.2;
    player.position.x -= 1;
    player.position.z -= 1;
    playerFly = 1;
    if (player.position.z < -100) {
      refresh();  
    }
  }
  else if (player.position.x+playerWidth/2 > floorWidth/1.8 && playerFly == 1 && playerExitBtn == 0) {
    player.rotation.y += 0.2;
    player.position.x += 1;
    player.position.z -= 1;
    playerFly = 1;
    if (player.position.z < -100) {
      refresh();  
    }
  }
  else if (player.position.y+playerHeight/2 > floorHeight/1.8 && playerFly == 1 && playerExitBtn == 0) {
    player.rotation.x -= 0.2;
    player.position.y += 1;
    player.position.z -= 1;
    playerFly = 1;
    if (player.position.z < -100) {
      refresh();  
    }
  }
  else if (player.position.y-playerHeight/2 < -floorHeight/1.8 && playerFly == 1 && playerExitBtn == 0) {
    player.rotation.x += 0.2;
    player.position.y -= 1;
    player.position.z -= 1;
    playerFly = 1;
    if (player.position.z < -100) {
      refresh();  
    }
  }
  
}

function moveEnemy() {
  for (var i = 0; i < masEnemy.length; i++) {
    masEnemy[i].position.x += masEnemyArrowX[i];
    masEnemy[i].position.y += masEnemyArrowY[i];
    
    if (masEnemy[i].position.x-enemyWidth/2 < -floorWidth/2 || masEnemy[i].position.x+enemyWidth/2 > floorWidth/2) {
      masEnemyArrowX[i] = -masEnemyArrowX[i];
    }
    if (masEnemy[i].position.y-enemyWidth/2 < -floorWidth/2 || masEnemy[i].position.y+enemyWidth/2 > floorWidth/2) {
      masEnemyArrowY[i] = -masEnemyArrowY[i];
    }
  }
}
//console.log(speedBlock)
function moveSpeedBlock() {
  for (var i = 0; i<masSpeed.length; i++) {
    masSpeed[i].position.z += speedBlockn;
    if (masSpeed[i].position.z > 10 || masSpeed[i].position.z < 2) {
      speedBlockn = -speedBlockn;
    }
  }
}

function detectCollisionCubes(object1, object2){
  object1.geometry.computeBoundingBox();
  object2.geometry.computeBoundingBox();
  object1.updateMatrixWorld();
  object2.updateMatrixWorld();
  
  var box1 = object1.geometry.boundingBox.clone();
  box1.applyMatrix4(object1.matrixWorld);

  var box2 = object2.geometry.boundingBox.clone();
  box2.applyMatrix4(object2.matrixWorld);
  
  if (box1.intersectsBox(box2)) isIntersect = 1;
  
  return box1.intersectsBox(box2);
}

function CollisionEnemyBlock(object1, object2){
  object1.geometry.computeBoundingBox();
  object2.geometry.computeBoundingBox();
  object1.updateMatrixWorld();
  object2.updateMatrixWorld();
  
  var box1 = object1.geometry.boundingBox.clone();
  box1.applyMatrix4(object1.matrixWorld);

  var box2 = object2.geometry.boundingBox.clone();
  box2.applyMatrix4(object2.matrixWorld);
  
  if (box1.intersectsBox(box2)) EnemyBlock = 1;
  return box1.intersectsBox(box2);
}

function CollisionPlayerSpeed(object1, object2){
  object1.geometry.computeBoundingBox();
  object2.geometry.computeBoundingBox();
  object1.updateMatrixWorld();
  object2.updateMatrixWorld();
  
  var box1 = object1.geometry.boundingBox.clone();
  box1.applyMatrix4(object1.matrixWorld);

  var box2 = object2.geometry.boundingBox.clone();
  box2.applyMatrix4(object2.matrixWorld);
  
  return box1.intersectsBox(box2);
}

function CollisionPlayerBlock(object1, object2){
  object1.geometry.computeBoundingBox();
  object2.geometry.computeBoundingBox();
  object1.updateMatrixWorld();
  object2.updateMatrixWorld();
  
  var box1 = object1.geometry.boundingBox.clone();
  box1.applyMatrix4(object1.matrixWorld);

  var box2 = object2.geometry.boundingBox.clone();
  box2.applyMatrix4(object2.matrixWorld);
  
  if (box1.max.x > box2.min.x-1 && box1.min.x < box2.min.x && box1.intersectsBox(box2)){
    playerBlockR = 1;
    object1.position.x -= 0.5;
  }
  else playerBlockR = 0;
  if (box1.min.x < box2.max.x+1 && box1.max.x > box2.max.x && box1.intersectsBox(box2)) {
    playerBlockL = 1;
    object1.position.x += 0.5;
  }
  else playerBlockL = 0;
  if (box1.min.y < box2.max.y+1 && box1.max.y > box2.max.y && box1.intersectsBox(box2)) {
    playerBlockU = 1;
    object1.position.y += 0.5;
  }
  else playerBlockU = 0;
  if (box1.max.y > box2.min.y-1 && box1.min.y < box2.min.y && box1.intersectsBox(box2)) {
    playerBlockD = 1;
    object1.position.y -= 0.5;
  }
  else playerBlockD = 0;
  
  //console.log(playerBlockR)
  //if (box1.intersectsBox(box2)) playerBlock = 1;
  return box1.intersectsBox(box2);
}

function playerExit() {
  
  if (player.position.x+playerWidth/2 > exit.position.x && player.position.y-playerHeight/2 < exit.position.y) {
    playerExitBtn = 1;
    playerFlyExit = 1;
    nextLev = 1;
  }
  
  if (playerExitBtn == 1) {
    scene.remove( speedBlock );
    nextLev = 1;
    playerFly = 0;
    player.position.x +=1;
    player.position.z +=1;
    player.rotation.y +=0.01;
    player.rotation.z +=0.01;
    camera.position.x +=1.2;
    camera.position.z +=1;

    spotLight.position.x = player.position.x;
    spotLight.position.y = player.position.y;
    spotLight.position.z = player.position.z+50;
  }
  if (playerExitBtn == 1 && playerExitBtn == 1 && camera.position.x>player.position.x) {
    playerExitBtn = 0;
    endLevel = 1;
  }
  if (endLevel == 1) {
    scene.remove(player);
    for(var i = 0; i < masEnemy.length; i++) {
      scene.remove(masEnemy[i]);
    }
    
    playerExitBtn = 0;
    camera.position.x -=1.2;
    camera.position.y -=0;
    camera.position.z -=1;
    
    groupEndWall.position.x = camera.position.x;
    groupEndWall.position.y = camera.position.y;
    //groupEndWall.position.z = camera.position.z-200
    
    //groupEndWall.rotation.x = camera.rotation.x;
    
    
    spotLight.position.x = groupEndWall.position.x;
    spotLight.position.y = groupEndWall.position.y;
    spotLight.position.z = groupEndWall.position.z+150;

    if (groupEndWall.position.z < camera.position.z-200) {
      groupEndWall.position.z += 50;
      camera.lookAt(groupEndWall.position)
    }
  }
  
  if (cc == 1) refresh();
}

function refresh() {
  camera.lookAt(0,0,0)
  $('.lev1').text(currentLevel + ' ');
  endLevel = 0;

  if (playerFly == 0 && isIntersect == 0 && nextLev == 1 && currentLevel < level1.length) {
    currentLevel++;
    for (var i = 0; i < masEnemy.length; i++) {
      scene.remove(masEnemy[i]);
    }
    for (var i = 0; i < masBlock.length; i++) {
      scene.remove(masBlock[i]);
    }
    for (var i = 0; i < masSpeed.length; i++) {
      scene.remove(masSpeed[i]);
    }
    masSpeed = [];
    masEnemy = [];
    masBlock = [];
    masEnemyArrowX = [];
    masEnemyArrowY = [];
    initMap();
    nextLev = 0;
  }
  
  isIntersect = 0;
  playerSpeed = 1;
  
  playerFly = 0;
  //
  if (camera.position.x > 0) {
    camera.position.x -=2;
    camera.position.z -=1.7;
  }
  else {
    cc = 0;
    camera.position.x = 0;
    playerFlyExit = 0;
  }
  //camera.position.set(0,-82,90);
  //camera.lookAt(0,0,0);
  //
  light.position.set(-floorWidth/2, floorHeight/2, 5)
  //
  spotLight.position.set( 50, -50, 100 );
  //
  scene.add( player )
  player.position.x = playerPosX;
  player.position.y = playerPosY;
  player.position.z = playerPosZ;
  player.rotation.x = 0;
  player.rotation.y = 0;
  player.rotation.z = 0;
  //
  if (groupEndWall.position.z > -3000 && playerFly == 0) {
    groupEndWall.position.z = -3000;
  }
  //
  
  
}

function animate() {
  flyStar();
  //$('.info').text(start)
  if (start == 0) {
    moveLight0();
    if (textOutTemp == 1) {
      textOut();
    }
  }
  
  
  if (start == 1) {
    
    
    
    if (theEndTemp == 1) {
      theEnd();
    }
    else playerExit();
    
    move(player);
    moveSpeedBlock();
    PlayerFall();
    if (playerExitBtn == 0) {
      moveEnemy();
    }

    
    choosCamFoo();
    stats.update();

    for (var i = 0; i < masSpeed.length; i++) {
      if (CollisionPlayerSpeed(player, masSpeed[i])) {
        playerSpeed = 2;
      }
    }
    for (var i = 0; i < masEnemy.length; i++) {
      if (detectCollisionCubes(player, masEnemy[i])) refresh();
    }
    for (var i = 0; i < masBlock.length; i++) {
      for (var j = 0; j < masEnemy.length; j++) {
        if (CollisionEnemyBlock(masBlock[i], masEnemy[j])) {
          masEnemyArrowY[j] = -masEnemyArrowY[j];
          masEnemyArrowX[j] = -masEnemyArrowX[j];
        }
      }
    }  
    for (var q = 0; q < masBlock.length; q++) {
   if (CollisionPlayerBlock(player, masBlock[q])) playerBlock = 1;
  }
  }
  //$('.info').text(camera.position.x + '-----' +camera.position.y + '-----' +camera.position.z);
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
}













