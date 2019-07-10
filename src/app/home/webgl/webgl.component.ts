import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';

@Component({
  selector: 'webgl-component',
  template: `

  <div #rendererContainer></div>
  `,
})
export class WebglComponent {


  @ViewChild('rendererContainer') rendererContainer: ElementRef;

  renderer = new THREE.WebGLRenderer();
  scene = null;
  camera = null;
  mesh = null;
  directionalLight = null;
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  effect = null;
  mouseX = 0;
  mouseY = 0;

  constructor(private elementRef:ElementRef) {

    this.elementRef.nativeElement.addEventListener( 'mousemove', this.onDocumentMouseMove, false )
    this.camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 1000 );
    this.camera.position.z = 500;

    const controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.scene = new THREE.Scene();
    var background = new THREE.TextureLoader().load('../../../assets/images/stars.jpg');
    this.scene.background = background;
    var ambientLight = new THREE.AmbientLight( 0xffffff, 1 );// soft white light
    ambientLight.position.z = 1;
    this.scene.add(ambientLight);
    var geometry = new THREE.SphereGeometry( 100, 320,320 );
    var material = new THREE.MeshPhongMaterial({
         map: new THREE.TextureLoader().load('../../../assets/images/venus.jpg'),
        });
    this.mesh = new THREE.Mesh(geometry, material );
    this.mesh.position.z = 0;
    this.scene.add(this.mesh);
    this.scene.add(controls)
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


  @HostListener('window:resize')
  onResize() {
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.effect.setSize( window.innerWidth, window.innerHeight );
}


  onDocumentMouseMove( event ) {
    this.mouseX = ( event.clientX - this.windowHalfX ) * 10;
    this.mouseY = ( event.clientY - this.windowHalfY ) * 10;
  }


}
