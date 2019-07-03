import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as THREE from '../webgl/three.js';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {


  @ViewChild('append')
  private append: ElementRef;

  constructor( private renderer: THREE.WebGLRenderer, private renderer2: Renderer2 ) { }

  ngOnInit(){
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45 , window.innerWidth / window.innerHeight , 0.1, 1000);


    this.renderer.setSize(window.innerWidth, window.innerHeight);

    const planetGeometry = new THREE.SphereGeometry(4,20,20);

    //Load the planet textures
    const texture = THREE.ImageUtils.loadTexture("https://s3-us-west-2.amazonaws.com/s.cdpn.io/96252/planet-512.jpg");
    const normalmap = THREE.ImageUtils.loadTexture("https://s3-us-west-2.amazonaws.com/s.cdpn.io/96252/normal-map-512.jpg");
    const specmap = THREE.ImageUtils.loadTexture("https://s3-us-west-2.amazonaws.com/s.cdpn.io/96252/water-map-512.jpg");

    const planetMaterial = new THREE.MeshPhongMaterial();
    planetMaterial.map = texture;

    planetMaterial.specularMap = specmap;
    planetMaterial.specular = new THREE.Color( 0xff0000 );
    planetMaterial.shininess = 1;

    planetMaterial.normalMap = normalmap;
    planetMaterial.normalScale.set(-0.3,-0.3);

    const planet = new THREE.Mesh(planetGeometry, planetMaterial);

    //here we allow the texture/normal/specular maps to wrap
    planet.material.map.wrapS = THREE.RepeatWrapping;
    planet.material.map.wrapT = THREE.RepeatWrapping;
    planet.material.normalMap.wrapS = THREE.RepeatWrapping;
    planet.material.normalMap.wrapT = THREE.RepeatWrapping;
    planet.material.specularMap.wrapS = THREE.RepeatWrapping;
    planet.material.specularMap.wrapT = THREE.RepeatWrapping;

    //here we repeat the texture/normal/specular maps twice along X
    planet.material.map.repeat.set( 2, 1);
    planet.material.normalMap.repeat.set( 2, 1);
    planet.material.specularMap.repeat.set( 2, 1);

    planet.position.x = 0;
    planet.position.y = 0;
    planet.position.z = 0;

    scene.add(planet);

    //Space background is a large sphere
    const spacetex = THREE.ImageUtils.loadTexture("https://s3-us-west-2.amazonaws.com/s.cdpn.io/96252/space.jpg");
    const spacesphereGeo = new THREE.SphereGeometry(20,20,20);
    const spacesphereMat = new THREE.MeshPhongMaterial();
    spacesphereMat.map = spacetex;

    const spacesphere = new THREE.Mesh(spacesphereGeo,spacesphereMat);

    //spacesphere needs to be double sided as the camera is within the spacesphere
    spacesphere.material.side = THREE.DoubleSide;

    spacesphere.material.map.wrapS = THREE.RepeatWrapping;
    spacesphere.material.map.wrapT = THREE.RepeatWrapping;
    spacesphere.material.map.repeat.set( 5, 3);

    scene.add(spacesphere);

    //position camera
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = -15;
    camera.lookAt(scene.position);

    //create two spotlights to illuminate the scene
    const spotLight = new THREE.SpotLight( 0xffffff );
    spotLight.position.set( -40, 60, -10 );
    spotLight.intensity = 2;
    scene.add( spotLight );

    const spotLight2 = new THREE.SpotLight( 0x5192e9 );
    spotLight2.position.set( 40, -60, 30 );
    spotLight2.intensity = 1.5;
    scene.add( spotLight2 );


    this.renderer2.appendChild(this.append, this.renderer.domElement )

    //call render loop once
    render();

    //render loop
    function render() {
      requestAnimationFrame(render);
      //rotate planet and spacesphere
      planet.rotation.y += 0.002;
      spacesphere.rotation.y += 0.001;
      this.renderer.render(scene, camera);
    };

  }

}
