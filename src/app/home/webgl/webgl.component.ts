import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as THREE from 'three';



@Component({
  selector: 'webgl-component',
  template: `

  <div #rendererContainer></div>
  `,
  styles: []
})
export class WebglComponent {


  @ViewChild('rendererContainer') rendererContainer: ElementRef;

  renderer = new THREE.WebGLRenderer();
  scene = null;
  camera = null;
  mesh = null;
  directionalLight = null;
  controls;

  constructor() {
      this.camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);
    
      this.scene = new THREE.Scene();
      
      this.camera.position.z = 1000;

      var ambientLight =new THREE.AmbientLight( 0xffffff, 1 );// soft white light
      
      ambientLight.position.z = 1;
      ambientLight.castShadow = true;


      
      this.scene.add(ambientLight);

      var geometry = new THREE.SphereGeometry( 100, 320,320 );

      var material = new THREE.MeshPhongMaterial({
           map: new THREE.TextureLoader().load('../../../assets/images/venus.jpg'), 
          });
      
      this.mesh = new THREE.Mesh(geometry, material );
      
      this.mesh.position.z = -100;

      this.scene.add(this.mesh);
  }

  ngAfterViewInit() {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    


      this.animate();
  }

  animate() {
      window.requestAnimationFrame(() => this.animate());
      this.mesh.rotation.x += 0.001;
      this.mesh.rotation.y += 0.002;
      this.mesh.rotation.z += 0.002;
      this.renderer.render(this.scene, this.camera);
  }

}
