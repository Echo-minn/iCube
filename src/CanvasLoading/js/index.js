var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var App = function () {function App() {_classCallCheck(this, App);}_createClass(App, [{ key: 'init', value: function init()
    {var _this = this;
      this.backgroundColor = '#6a2bff';
      this.spotLightColor = 0xffffff;
      this.angle = 0;
      this.spheres = [];
      this.holes = [];
      this.gui = new dat.GUI();

      this.velocity = .08;
      this.amplitude = 5;
      this.waveLength = 20;

      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
      this.camera.position.set(15, 15, -15);

      this.addRenderer();

      this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);

      this.addAmbientLight();

      this.addSpotLight();

      var backgroundGUI = this.gui.addFolder('Background');
      backgroundGUI.addColor(this, 'backgroundColor').onChange(function (color) {
        document.body.style.backgroundColor = color;
      });

      var obj = {
        color: '#ffffff',
        emissive: '#e07cff',
        reflectivity: 1,
        metalness: .2,
        roughness: 0 };


      var material = new THREE.MeshPhysicalMaterial(obj);
      var geometry = new THREE.SphereGeometry(.5, 32, 32);

      var tileTop = { color: '#fa3fce' };
      var tileTopMaterial = new THREE.MeshBasicMaterial(tileTop);

      var tileInside = { color: '#671c87' };
      var tileInsideMaterial = new THREE.MeshBasicMaterial(tileInside);

      var materials = [tileTopMaterial, tileInsideMaterial];
      var props = {
        steps: 1,
        depth: 1,
        bevelEnabled: false };


      var guiWave = this.gui.addFolder('Wave');
      guiWave.add(this, 'waveLength', 0, 20).onChange(function (waveLength) {
        _this.waveLength = waveLength;
      });

      guiWave.add(this, 'amplitude', 3, 10).onChange(function (amplitude) {
        _this.amplitude = amplitude;
      });

      guiWave.add(this, 'velocity', 0, .2).onChange(function (velocity) {
        _this.velocity = velocity;
      });


      this.createSet(1, 1, geometry, material, props, materials);

      this.createSet(4, 1, geometry, material, props, materials);

      this.createSet(7, 1, geometry, material, props, materials);

      this.createSet(10, 1, geometry, material, props, materials);

      this.createSet(-2, 1, geometry, material, props, materials);

      this.createSet(-5, 1, geometry, material, props, materials);

      this.createSet(-8, 1, geometry, material, props, materials);

      this.createSet(-11, 1, geometry, material, props, materials);

      this.addFloorShadow();

      this.animate();

      window.addEventListener('resize', this.onResize.bind(this));
    } }, { key: 'radians', value: function radians(

    degrees) {
      return degrees * Math.PI / 180;
    } }, { key: 'createSet', value: function createSet(
        x, z, geometry, material, props, materials) {
      this.floorShape = this.createShape();

      this.createRingOfHoles(this.floorShape, 1, 0);

      var geometryTile = new THREE.ExtrudeGeometry(this.floorShape, props);

      this.createGround(this.floorShape, x, z, geometryTile, materials);

      this.addSphere(x, z, geometry, material);
    } }, { key: 'createRingOfHoles', value: function createRingOfHoles(

    shape, count, radius) {
      var l = 360 / count;
      var distance = radius * 2;

      for (var index = 0; index < count; index++) {
        var pos = this.radians(l * index);
        var sin = Math.sin(pos) * distance;
        var cos = Math.cos(pos) * distance;

        this.createHoles(shape, sin, cos);
      }
    } }, { key: 'createShape', value: function createShape()

    {
      var size = 1;
      var vectors = [
      new THREE.Vector2(-size, size),
      new THREE.Vector2(-size, -size),
      new THREE.Vector2(size, -size),
      new THREE.Vector2(size, size)];


      var shape = new THREE.Shape(vectors);

      shape.autoClose = true;

      return shape;
    } }, { key: 'createHoles', value: function createHoles(

    shape, x, z) {
      var radius = .5;
      var holePath = new THREE.Path();

      holePath.moveTo(x, z);
      holePath.ellipse(x, z, radius, radius, 0, Math.PI * 2);

      holePath.autoClose = true;

      shape.holes.push(holePath);

      this.holes.push({
        x: x,
        z: z });

    } }, { key: 'addFloorShadow', value: function addFloorShadow()

    {
      var planeGeometry = new THREE.PlaneGeometry(50, 50);
      var planeMaterial = new THREE.ShadowMaterial({ opacity: .08 });

      this.floor = new THREE.Mesh(planeGeometry, planeMaterial);

      planeGeometry.rotateX(-Math.PI / 2);

      this.floor.position.y = -10;
      this.floor.receiveShadow = true;

      this.scene.add(this.floor);
    } }, { key: 'createGround', value: function createGround(

    shape, x, z, geometry, materials) {
      var mesh = new THREE.Mesh(geometry, materials);

      mesh.needsUpdate = true;

      mesh.rotation.set(Math.PI * 0.5, 0, 0);

      mesh.position.set(x, 0, z);

      this.scene.add(mesh);
    } }, { key: 'hexToRgbTreeJs', value: function hexToRgbTreeJs(

    hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

      return result ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255 } :
      null;
    } }, { key: 'addAmbientLight', value: function addAmbientLight()

    {
      this.ambientLight = new THREE.AmbientLight(0x6e6e6e, 1);
      this.scene.add(this.ambientLight);
    } }, { key: 'addSpotLight', value: function addSpotLight()

    {
      this.spotLight = new THREE.SpotLight(0xffffff);
      this.spotLight.position.set(0, 30, 0);
      this.spotLight.castShadow = true;

      this.scene.add(this.spotLight);
    } }, { key: 'addRenderer', value: function addRenderer()

    {
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      this.renderer.setSize(window.innerWidth, window.innerHeight);

      document.body.appendChild(this.renderer.domElement);
    } }, { key: 'addSphere', value: function addSphere(

    x, z, geometry, material) {
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, 2, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      this.spheres.push(mesh);

      this.scene.add(mesh);
    } }, { key: 'distance', value: function distance(

    x1, y1, x2, y2) {
      return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    } }, { key: 'map', value: function map(

    value, start1, stop1, start2, stop2) {
      return (value - start1) / (stop1 - start1) * (stop2 - start2) + start2;
    } }, { key: 'drawWave', value: function drawWave()

    {
      var total = this.spheres.length;

      for (var i = 0; i < total; i++) {
        var distance = this.distance(this.spheres[i].position.z, this.spheres[i].position.x, 100, 100);

        var offset = this.map(distance, 0, 100, this.waveLength, -this.waveLength);

        var angle = this.angle + offset;

        var y = this.map(Math.sin(angle), -1, 1, -3, this.amplitude);

        this.spheres[i].position.y = y;
      }

      this.angle += this.velocity;
    } }, { key: 'animate', value: function animate()

    {
      this.drawWave();

      this.controls.update();

      this.renderer.render(this.scene, this.camera);

      requestAnimationFrame(this.animate.bind(this));
    } }, { key: 'onResize', value: function onResize()

    {
      var ww = window.innerWidth;
      var wh = window.innerHeight;

      this.camera.aspect = ww / wh;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(ww, wh);
    } }]);return App;}();


new App().init();
